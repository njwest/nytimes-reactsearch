const React = require('react');
const API = require('../api/nytapi.js');
const Router = require('react-router');

const Search = React.createClass({
	getInitialState: function(){
		return {
        searchTerm: "",
        startYear: "",
        endYear: "",
        results: {}
		}
	},

  componentDidUpdate: function(prevProps, prevState){
		console.log(this.state);
    if (this.state.searchTerm != "" && (prevState.searchTerm != this.state.searchTerm || prevState.startYear != this.state.startYear)){
			API.search(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function(data){
				if(data != this.state.results){
					this.setState({
						results: data
					})
				}
			}.bind(this))
		}

  },

	setSearch: function(newSearch, newStart, newEnd){
	this.setState({
		searchTerm: newSearch,
		startYear: newStart,
		endYear: newEnd
	})
},


	render: function(){

		return(
			<div className="main-container">
				<Search updateSearch={this.setSearch} />
				<Results results={this.state.results} />
			</div>

		)
	}
});

module.exports = Search;
