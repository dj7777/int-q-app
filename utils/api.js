import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'flashcards: decks'


const initialData = {
  HTML: {
    title: 'HTML',
    questions: [
      {
        question: 'What is HTML?',
        answer: 'HTML is an acronym which stands for Hyper Text Markup Language. Lets see what is Hyper Text and what is Markup Language? Hyper Text: Hyper Text simply means "Text within Text". A text has a link within it, is a hypertext. Every time when you click on a word which brings you to a new webpage, you have clicked on a hypertext.',
        correctAnswer: 'true'
      },
      {
        question: 'What are Tags?',
        answer: 'HTML tags are composed of three things: opening tag, content and ending tag. Some tags are unclosed tags.',
        correctAnswer: 'true'
      }
    ] 
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
        correctAnswer: 'true'
      },
      {
        question: 'What is varibale',
        answer: 'Something that stores information.',
        correctAnswer: 'true'
      },
      {
        question: 'What is a XYZ?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
        correctAnswer: 'true'
      },
      {
        question: 'What is ABC',
        answer: 'Something that stores information.',
        correctAnswer: 'true'
      }
    ]
  }
}

export const getData = () => {
  return initialData
}


 export function getDecks (deck) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
      if(results === null) {
        AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData))
        return initialData
      }else {
        return JSON.parse(results)
      }
    })
  }


export function saveDeckTitle(title){
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
      [title]: {
        title: title,
        questions: []
      }
    }))
  }

export function addCardToDeck(name, card){
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
  .then(results => JSON.parse(results))
  .then(results => {
    results[name].questions.push(card)
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(results))
      return results
  })
}










