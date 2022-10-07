import React from "react";
import { View, ScrollView, StyleSheet } from 'react-native';

import Detalhes from '../Carro/componentes/Detalhes';

export default function Carro({ carro1 }) {
    return <ScrollView>
        <View style={estilos.cesta}>
            {/*
                <Carros {...mock} />
            */}
            <Detalhes {...carro1} />
        </View>
    </ScrollView>
}




const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});