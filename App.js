import React, {useState} from 'react';
import {Text, Image, View, TouchableOpacity, StyleSheet} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(DiceOne);
  const [uri2, setUri2] = useState(DiceFive);

  const playButtonTapped = () => {
    let randomNumber = Math.trunc(Math.random() * 6 + 1);
    let randomNumber2 = Math.trunc(Math.random() * 6 + 1);

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
        break;
      case 2:
        setUri(DiceTwo);
        break;
      case 3:
        setUri(DiceThree);
        break;
      case 4:
        setUri(DiceFour);
        break;
      case 5:
        setUri(DiceFive);
        break;
      case 6:
        setUri(DiceSix);
        break;

      default:
        setUri(DiceOne);
        break;
    }

    switch (randomNumber2) {
      case 1:
        setUri2(DiceOne);
        break;
      case 2:
        setUri2(DiceTwo);
        break;
      case 3:
        setUri2(DiceThree);
        break;
      case 4:
        setUri2(DiceFour);
        break;
      case 5:
        setUri2(DiceFive);
        break;
      case 6:
        setUri2(DiceSix);
        break;

      default:
        setUri2(DiceFive);
        break;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={uri2} />
        <Image style={styles.image} source={uri} />
        <TouchableOpacity onPress={playButtonTapped}>
          <Text style={styles.playButton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222831',
  },
  image: {
    width: 200,
    height: 200,
  },
  playButton: {
    fontSize: 20,
    marginTop: 30,
    color: '#F2A365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
});
