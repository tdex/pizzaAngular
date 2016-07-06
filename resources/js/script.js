/**
 * Created by tarcisio on 04/07/16.
 */
(function () {
    var app = angular.module('store', []);

    app.controller('EstoqueController', function () {
        this.products = pizzas;

        this.comprarPizza = function (pizza) {
            for (var p in pizzas) {
                if (pizza.nome === p.nome) {
                    if (p.disponivel && p.qtd > 0) {
                        p.qtd -= 1;
                        if (p.qtd === 0) {
                            p.disponivel = false;
                        }
                    }
                }
            }
        };
    });

    var pizzas = [
        {
            nome: 'Frango e Bacon',
            preco: 19.90,
            descricao: 'pizza de frango e bacon a moda delícia',
            disponivel: true,
            qtd: 4,
            img: 'resources/img/frangobacon.jpg',
            reviews: [
                {
                    estrelas: 5,
                    descricao: 'Muito bom, recomendo',
                    autor: 'Tarcísio'
                },
                {
                    estrelas: 2,
                    descricao: 'Prefiro a de camarão',
                    autor: 'Mayra'
                }
            ]
        },
        {
            nome: 'Calabresa',
            preco: 17.50,
            descricao: 'Queijo, molho de tomate e calabresa',
            disponivel: true,
            qtd: 2,
            img: 'resources/img/calabresa.jpg',
            reviews: [
                {
                    estrelas: 5,
                    descricao: 'Muito bom, recomendo',
                    autor: 'Renata'
                },
                {
                    estrelas: 2,
                    descricao: 'Bem exótica',
                    autor: 'Mayra'
                }
            ]
        },
        {
            nome: 'Portuguesa',
            preco: 22.50,
            descricao: 'Queijo, presunto, bacon, ovo e tomate',
            disponivel: false,
            qtd: 0,
            img: 'resources/img/portuguesa.jpg',
            reviews: [
                {
                    estrelas: 5,
                    descricao: 'Muito bom, recomendo',
                    autor: 'Tarcísio'
                }
            ]
        },
        {
            nome: 'Quatro Queijos',
            preco: 20.00,
            descricao: 'Queijo prato, mussarela, coalho, catupiri',
            disponivel: true,
            qtd: 1,
            img: 'resources/img/quatroqueijos.jpg',
            reviews: [
                {
                    estrelas: 2,
                    descricao: 'Prefiro a de camarão',
                    autor: 'Mayra'
                }
            ]
        }
    ];

    app.controller('ReviewController', function () {
        this.avaliacao = {};

        this.addReview = function (pizza) {
            pizza.reviews.push(this.avaliacao);
            this.avaliacao = {};
        };
    });

    app.controller('PanelController', function () {
        this.tab = 0;

        this.selecionaPainel = function (item) {
            this.tab = item;
        };

        this.painelSelecionado = function (item) {
            return this.tab == item;
        }
    });


})();
