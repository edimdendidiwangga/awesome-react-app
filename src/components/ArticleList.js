import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchArticles, deleteArticle } from '../actions/articleAction'
import ArticleEdit from '../components/ArticleEdit'

class ArticleList extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			form : {
				id: 0,
				title : '',
				author : '',
				description : '',
				imageUrl : ''
			}
		}
	}

	componentWillMount() {
		this.props.fetchArticles()
	}

	handleChange(e) {
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

	renderTBody() {
		return (
			<tbody>
				{ this.props.articles.map(item => (
					<tr key={item.id}>
						<td>
							{item.id}
						</td>
						<td>
							<img src={item.imageUrl} />
						</td>
						<td>
							{item.title}
						</td>
						<td>
							{item.author}
						</td>
						<td>
							{item.description}
						</td>
						<td>
							<Link to={`/edit/${item.id}`} ><button type="button">Edit</button></Link> |
							<button type="button" onClick={() => this.props.deleteArticle(item.id) }>Delete</button>
						</td>
					</tr>
				))}
			</tbody>
		)
	}

	render() {

	return (
		<div>
		<Link to="/add" ><button >Create Article</button></Link>
			<table>
				<thead>
					<tr>
						<th>
							ID
						</th>
						<th>
							IMAGE
						</th>
						<th>
							TITLE
						</th>
						<th>
							AUTHOR
						</th>
						<th>
							DESCRIPTION
						</th>
						<th>
							Action
						</th>
					</tr>
				</thead>
				{ this.renderTBody() }
			</table>
		</div>
	)
	}
}

const mapStateToProps = state => ({
	articles: state.data
})
const mapDispatchToProps = dispatch => ({
	fetchArticles: () => dispatch(fetchArticles()),
	deleteArticle: (id) => dispatch(deleteArticle(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
