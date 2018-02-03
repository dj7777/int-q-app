import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { getData } from '../utils/api' 
import { connect } from 'react-redux'
import { purple, white, red, orange } from '../utils/colors'
import ActionButton from './ActionButton'
import { getCardsLength } from '../utils/helpers'

class ViewQuestionAnswers extends React.Component {
	state={
		showQuestion: false,
	}


	render(){
		const decks = this.props.decks
		const deck = this.props.navigation.state.params.entryId

	/* 	const deck = this.props.navigation.state.params.entryId
		const { decks } = this.props
		const questions = decks[deck].questions
 */
		return(
			<View style={styles.container}>
				
				<ScrollView style={styles.card}>
				
				<View style={styles.quesContainer}>
				{Object.keys(decks[deck].questions).map((q) => {
					const { question, answer } = decks[deck].questions[q]
					return (
						<View key={deck} style={styles.card}>
							
							<Text style={styles.mainText}>{"Q: "+ question}</Text>
							<Text style={styles.mainText}>{"Ans: "+answer}</Text>
						</View>
					)
				})}
				</View>
				
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: white,
			padding: 10
	},
	iosBtn: {
		padding: 10,
		borderRadius: 7,
		height: 45,
		margin: 5,
		width: 170
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	},
		card: {
		flex: 1,
		padding: 10,
		backgroundColor: orange,
		alignSelf: 'stretch',
		borderRadius: 10,
		shadowColor: 'rgba(0,0,0,0.34)',
        shadowOffset: {
        width: 0,
        height: 3
      },
        shadowRadius: 4,
        shadowOpacity: 1
	},
	mainText: {
		fontSize: 24,
		color: white
	},
	subText: {
		fontSize: 30,
		color: white,
		marginBottom: 160
	},
	quesContainer: {
		borderColor: white
	}
})

function mapStateToProps(decks){
	return {
		decks
	}
}

export default connect(mapStateToProps)(ViewQuestionAnswers)