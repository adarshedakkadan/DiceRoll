import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      urlDice1: require("./src/assets/dice1.png"),
      urlDice2: require("./src/assets/dice4.png")
    };

  }
  getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  }
  dice = () => {
    let randomOne = this.getRandomNumber()
    let randomTwo = this.getRandomNumber()
  
    this.setState({ urlDice1:this.getDiceImage(randomOne),
                    urlDice2:this.getDiceImage(randomTwo)
                  })
  }
  getDiceImage = (diceRandom) => {
    switch (diceRandom) {
      case 1:
        return require("./src/assets/dice1.png")
        break;
      case 2:
        return require("./src/assets/dice2.png")
        break;   
      case 3:
        return require("./src/assets/dice3.png")
        break;
      case 4:
        return require("./src/assets/dice4.png")
        break;
      case 5:
        return require("./src/assets/dice5.png")
        break;
      case 6:
        return require("./src/assets/dice6.png")
        break
      default:
        return require("./src/assets/dice1.png")
        break;
    }
  }
  render() {
    return (
    <View style={styles.container}>
      <View >
       <Image  
         source = { this.state.urlDice1 }
       />
       <Image  
         source = { this.state.urlDice2 }
       />
      </View>
      
      <TouchableOpacity
      onPress= { this.dice }>
       <Text style = {styles.buttonType }>Press Me!</Text>
       </TouchableOpacity>
    </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonType: {
    backgroundColor: "#c1c1c1",
    color: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: '#fff',
    marginTop: 20
  },
  viewStyle: {
    backgroundColor: "red",
    alignItems: "center",
    flexDirection: "row"
  }
});
