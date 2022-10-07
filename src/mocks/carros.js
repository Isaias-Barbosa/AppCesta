import logo from '../../assets/logo.png';

import cronos from '../../assets/frutas/cronos.jpg';
import onix from '../../assets/frutas/onix.jpg';
import etios from '../../assets/frutas/etios.jpg';
import hb20 from '../../assets/frutas/hb20.jpg';
import voyage from '../../assets/frutas/voyage.jpg';

const cesta = {
    topo: {
        titulo: "Olá, Isaias",
        descricao: "Bem-Vindo a tela administrativa, escolha um produto para ver ou cadastre um novo",
    },
    itens: {
        titulo: "Cadastro de Carros",
        botao: "Cadastrar Carro",
        bt: "Ver carro",
        lista: [
            {
                nome: "Fiat Cronos Drive 1.3 ",
                preco: "R$ 60,000",
                imagem: cronos,

            },
            {
                nome: "Chevrolet Onix Plus LT 1.0",
                preco: "R$ 57.445",
                imagem: onix,
            },
            {
                nome: "Toyota Etios X Sedan 1.5 ",
                preco: "R$ 56.829",
                imagem: etios,
            },
            {
                nome: "Hyundai HB20S Vision 1.0",
                preco: "R$ 54.954",
                imagem: hb20,
            },
            {
                nome: "VW – Volkswagen VOYAGE 1.0",
                preco: "R$ 52.956",
                imagem: voyage,
            }
        ],
    },
}

export default cesta;