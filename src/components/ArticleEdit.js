import React from 'react'
import {connect} from 'react-redux'
import {editArticle} from '../actions/articleAction'

class ArticleEdit extends React.Component {
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

  componentDidMount(){
    this.props.
  }

  handleEditChange(field, e){
    // let newState = {
		//
    //     ...this.state
    //
    // }
    // newState.form[field] = e.target.value
    // this.setState(newState)
		const post = Object.assign({}, this.state.form, {[field]: e.target.value});
    this.setState(Object.assign({}, this.state, {post}));
  }

  render() {
    return (
      <div>
			<p>{this.props.match.params.id}</p>
        <form>

          <label>
            Title
          </label>
          <input
	          name="title"
	          type="text"
	          value={this.props.title}
	          onChange={this.handleEditChange.bind(this, 'title')}
					/>
          <br />
					<label>
            Author
          </label>
          <input
          name="author"
          type="text"
          value={this.props.author}
          onChange={this.handleEditChange.bind(this, 'author')} />
          <br />
          <label>
            Description
          </label>
          <input
          name="description"
          type="text"
          value={this.props.description}
          onChange={this.handleEditChange.bind(this, 'description')} />
          <br />
					<label>
            imageUrl
          </label>
          <input
	          name="imageUrl"
	          type="text"
	          value={this.props.imageUrl}
	          onChange={this.handleEditChange.bind(this, 'imageUrl')}
					/>
          <br />
          <button
          type='button'
          onClick={()=>{
            let {id, title, author, description, imageUrl } =this.props
            this.props.editArticle({
              id, title, author, description, imageUrl
            })
          }}>
            Update
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editArticle : data => dispatch(editArticle(data)),
	
})

export default connect(null, mapDispatchToProps)(ArticleEdit)
