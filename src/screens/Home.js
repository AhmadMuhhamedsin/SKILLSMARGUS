import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Home({ navigation, GlobalState }) {
    const {
      allOffers,
      setAllOffers,
      offer,
      offerAuthor,
      setOfferAuthor,
      setOffer,
      setOfferText,
      setOfferTitle,
      offerTitle,
      offerText,
      setChosenOffer,
      chosenOffer
    } = GlobalState;
  
    const [loadedOffers, setLoadedOffers] = useState([]);
  
    useEffect(() => {
      const loadOffers = async () => {
        try {
          const storedOffers = await AsyncStorage.getItem('allOffers');
          if (storedOffers) {
            setLoadedOffers(JSON.parse(storedOffers));
          }
        } catch (error) {
          console.error('Error loading offers', error);
        }
      };
  
      loadOffers();
    }, []);
  
    useEffect(() => {
      setAllOffers(prevState => [...prevState, { offerId: 2, offer: 'go to bed' }]);
    }, []);
  
    useEffect(() => {
      AsyncStorage.setItem('allOffers', JSON.stringify(allOffers));
    }, [allOffers]);
  
    const renderItem = ({ item }) => {
      return (
        <View style={styles.offerContainer}>
            <TouchableOpacity style={styles.offer} onPress={() => handleChooseOffer(item)}>
                <Text style={styles.offerTitle}>{item.offerTitle}</Text>
                <Text style={styles.offerText}>{item.offerText}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => handleDeleteOffer(item)}
            >
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
      );
    };

    const handleDeleteOffer = item => {
        setAllOffers(prevState => prevState.filter(offer => offer.offerId !== item.offerId));
      };

    const handleSaveOffer = () => {
      const index = allOffers.length + 1;
  
      setAllOffers(prevState => [
        ...prevState,
        { offerId: index, offer: offer, offerAuthor: offerAuthor, offerTitle: offerTitle, offerText:offerText }
      ]);
  
      setOffer('');
      setOfferAuthor('');
      setOfferTitle('');
      setOfferText('');
    };
  
    const handleChooseOffer = item => {
      setChosenOffer(item);
      navigation.navigate('ChosenOffer');
    };

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    onChangeText={setOfferAuthor}
                    value={offerAuthor}
                    placeholder="Add Name..."
                    />
                <TextInput
                    style={styles.input}
                    onChangeText={setOfferTitle}
                    value={offerTitle}
                    placeholder="Add offer title..."
                    />
                <TextInput
                    style={styles.input}
                    onChangeText={setOfferText}
                    value={offerText}
                    placeholder="Add offer..."
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handleSaveOffer()}
                >
                    <Text style={styles.buttonText} >Submit</Text>
                </TouchableOpacity>
                <FlatList 
                    data={allOffers}
                    renderItem={renderItem}
                    keyExtractor={item => item.offerId}
                />
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
        backgroundColor: '#14141410'
    },
    offer: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    offerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
      },
    input: {
        backgroundColor: 'white',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginTop: 30,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#141414',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginBottom: 30,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontWeight: '900'
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        alignSelf: 'flex-end',
      },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    offerTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
      },
      offerText: {
        fontSize: 12,
      },
})