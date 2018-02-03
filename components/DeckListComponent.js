import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getData } from '../utils/api';

export default class DeckListComponent extends React.Component {
    render() {
        const decks= getData()
      return (
        <View>
            {Object.keys(decks).map((deck) => {
                const { title, questions } = decks[deck]   
                return(
                    <View key={deck}>
                        <Text>{title}</Text>
                        <Text>{questions.length}</Text>
                    </View>
                ) 
            })}
         </View>
      );
    }
  }
  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });