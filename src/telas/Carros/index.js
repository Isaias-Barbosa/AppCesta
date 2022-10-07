import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

import Topo from './componentes/Topo';
import Detalhes from "../Carro/componentes/Detalhes";
import Itens from './componentes/itens';

export default function Carros({ topo, detalhes, itens, navigation }) {
    return <ScrollView>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            {/*
                <Carros {...mock} />
            */}
            <Itens
                {...itens}
                navigation={navigation}
            />
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
