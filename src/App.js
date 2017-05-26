import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import { fetchArticles } from './actions/articleAction'
import ArticleAdd from './components/ArticleAdd'
import ArticleList from './components/ArticleList'
import ArticleEdit from './components/ArticleEdit'

class App extends React.Component {

  render() {
    return (
      <div className="App">
			<BrowserRouter>
				<div>
					<Route exact path="/" component={ArticleList} />
					<Route path="/add" component={ArticleAdd}  />
					<Route path="/edit/:id" component={ArticleEdit} />
				</div>
			</BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	articles : state
})

const mapDispatchToProps = dispatch => ({
	fetchArticles: () => dispatch(fetchArticles())
})

export default App;
