import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({ titulo, preco, descricao, imagem }) {
    return <>
        <View>
            <Image source={imagem} style={estilos.imagem} />
            <Texto style={estilos.nome}>{titulo}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
            <Texto style={estilos.descricao}>{descricao}</Texto>


        </View>
    </>

    {/*
        <TouchableOpacity style={estilos.botao} onPress={() => { }}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>       
    */}

}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    imagem: {
        width: "100%",
        height: 206,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
});