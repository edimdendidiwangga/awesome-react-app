import axios from 'axios'

export const addArticle = data => {
	return dispatch =>
	axios.post('http://localhost:4000/articles', data)
		.then(response =>{
			return dispatch({ // next
				type : 'ADD_ARTICLE',
				payload : data
			})
		})
		.catch(error => {
			console.log(error)
		})

}

export const fetchArticles = () => {
	return dispatch =>
		axios.get(`http://localhost:4000/articles/`)
		.then(response => {
			return dispatch({ // next
				type: 'FETCH_ARTICLES',
				payload: response.data
			})
		})
		.catch(error => {
			console.log(error)
		})
}

export const getById = id => {
	return dispatch =>
		axios.get(`http://localhost:4000/articles/${id}`)
		.then(response => {
			return dispatch({ // next
				type: 'GET_BY_ID',
				payload: response.data
			})
		})
		.catch(error => {
			console.log(error)
		})
}

export const deleteArticle = id => {
	return dispatch =>
		axios.delete(`http://localhost:4000/articles/${id}`)
		.then(response =>{
			return dispatch({ // next
				type: 'DELETE_ARTICLE',
				payload: id
			})
		})
		.catch(error => {
			console.log(error)
		})
}

export const editArticle = data => {
	return dispatch =>
		axios.put(`http://localhost:4000/articles/${data.id}`)
		.then(response =>{
			return dispatch({ // next
				type: 'EDIT_ARTICLE',
				payload: data
			})
		})
		.catch(error => {
			console.log(error)
		})
}
