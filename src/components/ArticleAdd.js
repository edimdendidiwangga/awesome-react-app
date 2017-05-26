import React from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../actions/articleAction'

class ArticleAdd extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			form : {
				title : '',
				author : '',
				description : '',
				imageUrl : ''
			}
		}
	}

	handleInputChange(e) {
		let { name, value } = e.target
		let { form } = this.state
		let newState = {
			form: {
				...form
			}
		}
		newState.form[name] = value
		this.setState(newState)
	}

	postArticle() {
		let { form } = this.state
		let { articles } = this.props
		let newArticle = {
			id: Number(new Date()),
			...form
		}
		 this.props.addArticle(newArticle)
	}

	render() {
	return (
		<div>
			<form>
				<label>
					Title
				</label>
				<input
					name="title"
					type="text"
					onChange={ this.handleInputChange.bind(this) }/>
					<br />
				<label>
					Author
				</label>
				<input
					name="author"
					type="text"
					onChange={ this.handleInputChange.bind(this) }/>
					<br />
					<label>
						Description
					</label>
					<input
						name="description"
						type="text"
						onChange={ this.handleInputChange.bind(this) }/>
						<br />
				<label>
					imageUrl
				</label>
				<input name="imageUrl" type="text" onChange={ this.handleInputChange.bind(this) }/><br />
				<button type="button" onClick={() => this.postArticle() }>Save</button>
			</form>
		</div>
	)
}
}

const mapStateToProps = state => ({
	articles: state
})
const mapDispatchToProps = dispatch => ({
	addArticle: data => dispatch(addArticle(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAdd)
