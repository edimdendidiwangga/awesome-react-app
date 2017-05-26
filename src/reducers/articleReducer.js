// const initialState = {
// 	data : []
// }

const fetchArticles = (state, data) => {
	// let newState = {...state, data}
	return data
}

const addArticle = (state, data) => {
  let newState = {
	 	...state,
		data: [...state.data, data]
  }
	return newState
}

const getById = (state, data) => {
	let newData = state.data.filter(item => {
		return item.id === data.id ? data : item
	})
	return newState
}

const editArticle = (state, data) => {
	let newData = state.data.filter(item => {
		return item.id === data.id ? data : item
	})
	let newState = {
	 	...state,
		data: newData
  }
	return newState
}

const deleteArticle = (state, id) => {
	let newData = state.data.filter(data => data.id != id)
	let newState = {
	 	...state,
		data: newData
  }
	return newState
}

const displayLoading = (state, bool) => {
	let newState = {
	 	...state,
		loading: bool
  }
	return newState
}

const articleReducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'FETCH_ARTICLES': return fetchArticles(state, payload)
		case 'FETCH_ARTICLES_SUCCESS': return fetchArticles(state, payload)
		case 'ADD_ARTICLE': return addArticle(state, payload)
		case 'EDIT_ARTICLE': return editArticle(state, payload)
		case 'GET_BY_ID': return getById(state, payload)
		case 'DELETE_ARTICLE': return deleteArticle(state, payload)
		case 'DISPLAY_ARTICLE' : return displayLoading(state, payload)
			break;
		default: return state
	}
	return {
		data: []
	}

}

export default articleReducer
