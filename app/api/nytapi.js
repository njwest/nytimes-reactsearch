const apiKey = "d0f30db80c6447228b32a51912a8a19d";
const axios = require('axios');


const api = {

	search: function(term, start, end){
		let term = term.trim();
		let start = start.trim() + "0101";
		let end = end.trim() + "1231";

		return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
			params: {
			    'api-key': apiKey,
			    'q': term,
			    'begin_date': start,
			    'end_date': end
			}
		})
		.then(function(results){
			return results.data.response;
		});

	},
	getSaved: function(){
		return axios.get('/api/saved')
			.then(function(results){
				return results;
			})
	},

	postSaved: function(title, date, url){
		let newArticle = {title: title, date: date, url: url};
		return axios.post('/api/saved', newArticle)
			.then(function(results){
				return results._id;
			})

	},

	deleteSaved: function(title, data, url){
		return axios.delete('/api/saved', {
			params: {
			    'title': title,
			    'data': data,
			    'url': url,
			}
		})
		.then(function(results){
			return results;
		})
	}
}
module.exports = API;
