import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchArticles } from '../actions';

class Articles extends Component {

	componentWillMount() {
		this.props.fetchArticles();
	}

	render() {

			return(
					<div className="row articles-container mt-3">
						{this.props.articles.map(article => article.docs
							.map(ar =>  
								<div className="article-holder col-sm-6">
									<a href={ar.url} target="#" >
										<div className="article-card">
											<div className="text-container">
												<h3 className="title" >{ar.title}</h3>
												<p className="">{ar.published_date.substring(0, 10)}</p>
												<p className="news-site">{ar.news_site_long}</p>	
											</div>
											<img src={ar.featured_image}  className="article-image" />
										</div>
									</a>
								</div>
							)
						)}
					</div>
			);
	
	}
} 

function mapDispatchToProps(dispatch) {

	return bindActionCreators(
		{fetchArticles},
		dispatch
	)
}

function mapStateToProps(state) {

	return {
		articles: state.articles
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);