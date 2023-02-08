import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import registerNNPushToken from 'native-notify';

import Home from './src/screens/Home';
import ChosenOffer from './src/screens/ChosenOffer';
import Login from './src/screens/Welcome';
import Register from './src/screens/Register';
const Stack = createNativeStackNavigator();

export default function App() {
  // push notifications
  registerNNPushToken(6264, 'IkKaKrB0lA0eXC0i8G0khD');
    // get App ID and App Token from NativeNotify.com

  // globalstate management
  const [allOffers, setAllOffers] = useState([{
    offerId: 1,
    offerTitle: 'Tekkis probleem matemaatikaga?',
    offerText: 'Tere, olen Mari ja oskan aidata teid matemaatikaga',
    subject: 'math',
    author: {
      id: 1,
      offerAuthor: 'Mari',
      email: 'mari@tptlive.ee',
      age: 25,
      availableWhen: 'Wednesdays',
      bio: 'Tere, minu nimi on Mari ja mulle meeldib aidata teisi.',
    },
  },
  {
    offerId: 2,
    offerTitle: 'Looduse õpetaja saab aidata teid',
    offerText: 'Tere, olen Mark ja oskan aidata teid loodusega',
    subject: 'science',
    author: {
      id: 2,
      offerAuthor: 'Mark',
      email: 'mark@tptlive.ee',
      age: 30,
      availableWhen: 'Tuesdays',
      bio: 'Tere, minu nimi on Mark ja mulle meeldib aidata teisi.',
    },
  },
  {
    offerId: 3,
    offerTitle: 'Kas on raskusi kirjandusega?',
    offerText: 'Tere, olen Markus ja oskan aidata teid kirjandusega',
    subject: 'literature',
    author: {
      id: 3,
      offerAuthor: 'Markus',
      email: 'markus@tptlive.ee',
      age: 35,
      availableWhen: 'Mondays',
      bio: 'Tere, minu nimi on Markus ja mulle meeldib aidata teisi.',
    },
  },
  {
    offerId: 4,
    offerTitle: 'Trigonomeetria võib ka lihtne olla!',
    offerText: 'Tere, olen John ja oskan aidata teid trigonomeetriaga',
    subject: 'trigonometry',
    author: {
      id: 4,
      offerAuthor: 'John',
      email: 'john@tptlive.ee',
      age: 40,
      availableWhen: 'Saturdays',
      bio: 'Tere, minu nimi on Mari ja mulle meeldib aidata teisi.',
    },
  },
  {
    offerId: 5,
    offerTitle: 'Marcc aitab inglisega',
    offerText: 'Tere, olen Marcc ja oskan aidata teid inglise keelega',
    subject: 'english',
    author: {
      id: 5,
      offerAuthor: 'Marcc',
      email: 'marcc@tptlive.ee',
      age: 45,
      availableWhen: 'Thursdays',
      bio: 'Tere, minu nimi on Marcc ja mulle meeldib aidata teisi.',
    },
  },
]);;
  const [offer, setOffer] = useState('');
  const [chosenOffer, setChosenOffer] = useState('');
  const [offerAuthor, setOfferAuthor] = useState('');
  const [offerTitle, setOfferTitle] = useState('');
  const [offerText, setOfferText] = useState('');
  const GlobalState = {
    allOffers, setAllOffers,
    offer, setOffer,
    chosenOffer, setChosenOffer,
    offerAuthor, setOfferAuthor,
    offerTitle, setOfferTitle,
    offerText, setOfferText
  }

  // navigation
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" options={{ headerShown: false }}>
          {props => <Register {...props} GlobalState={GlobalState} />}
        </Stack.Screen>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {props => <Login {...props} GlobalState={GlobalState} />}
        </Stack.Screen>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {props => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="ChosenOffer" options={{ headerShown: false }}>
          {props => <ChosenOffer {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
