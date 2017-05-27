import React from 'react'
import { connect } from 'react-redux'
import { editArticle, getById } from '../actions/articleAction'

class ArticleEdit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
			form : {
				id: '',
				title : '',
				author : '',
				description : '',
				imageUrl : ''
			}
  }
}

	componentWillReceiveProps(nextProps){
		console.log("nextProps", nextProps.articles.data[0])
		let newState = {
			form : nextProps.articles.data[0]
		}
		this.setState(newState)
	}

	componentDidMount(){
		this.props.getById(this.props.match.params.id)
	}

  handleEditChange(e){
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

  render() {
		console.log('form', this.state.form)
    return (
      <div>
        <form>
          <label>
            Title
          </label>
          <input
	          name="title"
	          type="text"
						value={this.state.form.title}
	          onChange={this.handleEditChange.bind(this)}
					/>
          <br />
					<label>
            Author
          </label>
          <input
          name="author"
          type="text"
					value={this.state.form.author}
          onChange={this.handleEditChange.bind(this)} />
          <br />
          <label>
            Description
          </label>
          <input
          name="description"
          type="text"
					value={this.state.form.description}
          onChange={this.handleEditChange.bind(this)} />
          <br />
					<label>
            imageUrl
          </label>
          <input
	          name="imageUrl"
	          type="text"
	          value={this.state.form.imageUrl}
	          onChange={this.handleEditChange.bind(this)}
					/>
          <br />
          <button
          type='button'
          onClick={()=>{
            this.props.editArticle(this.state.form)
          }}>
            Update
          </button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
	articles: state
})

const mapDispatchToProps = dispatch => ({
  editArticle : data => dispatch(editArticle(data)),
	getById: id => dispatch(getById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit)
