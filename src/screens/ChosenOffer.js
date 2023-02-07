import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function ChosenOffer({ navigation, GlobalState }) {
    const { chosenOffer } = GlobalState;

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <Text>{chosenOffer.offerTitle}</Text>
                <Text>{chosenOffer.offerAuthor}</Text>  
                <Text>{chosenOffer.offerText}</Text>
                <Text></Text>
            </View>
            <Footer navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 8,
        width: '100%',
        backgroundColor: '#14141410',
        alignItems: 'center',
        justifyContent: 'center'
    }
})