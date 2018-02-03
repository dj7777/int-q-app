import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import DeckList from './components/DeckList'
import { TabNavigator, StackNavigator } from 'react-navigation'
//import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { purple, white } from './utils/colors'
//import { Constants } from 'expo'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStore } from 'redux'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import ViewQuestionAnswers from './components/ViewQuestionsAnswers'
//import { setLocalNotification } from './utils/helpers'



function MyStatusBar ({backgroundColor, ...props}) {
  return (
      <View style={{ backgroundColor}}>
          <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
      </View>
    )
}

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: 'Interview'
    }
  },
    AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: 'Interview'
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: purple,
    style: {
      height: 56,
      backgroundColor: white,

    }
  }
})

const MainNavigator = StackNavigator({
    Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: 'Deck Info!',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  AddCard: {
    screen: AddCard,
      navigationOptions: {
        title: 'Add Card',
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple
        }
      }
    },
    Quiz: {
      screen: Quiz,
        navigationOptions: {
          title: 'Quiz',
          headerTintColor: white,
          headerStyle: {
            backgroundColor: purple
          }
        }
    },
    ViewQuestionAnswers: {
      screen: ViewQuestionAnswers,
        navigationOptions: {
          title: 'Start Learning',
          headerTintColor: white,
          headerStyle: {
            backgroundColor: purple
          }
        }
    }
})


export default class App extends React.Component {
/* 
  componentDidMount(){
    setLocalNotification()
  } */

  render() {
    return (
      <Provider store={createStore(reducer)}>
          <View style={{flex: 1}}>
            <MyStatusBar backgroundColor={purple} barStyle='light-content'/>
            <MainNavigator/>
         </View>
       </Provider>
    );
  }
}





