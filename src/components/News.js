import React from 'react';
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
	let [articles, setArticles] = useState([]);
	let [page, setPage] = useState(1);
	let [loading, setLoading] = useState(true);
	let [totalResults, setTotalResults] = useState(0);

	const updateNews = async () => {
		props.setProgress(10);
		let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
		setLoading(true);
		let data = await fetch(url);
		let parsedData = await data.json();
		props.setProgress(100);
		setArticles(parsedData.articles);
		setTotalResults(parsedData.totalResults);
		setLoading(false);
		setArticles(parsedData.articles);
	};

	useEffect(() => {
		updateNews();
		document.title = `${
			props.category.charAt(0).toUpperCase() + props.category.slice(1)
		} - NewsKoala`;
	}, []);

	const fetchMoreData = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
			props.category
		}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
		setPage(page + 1);
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(articles.concat(parsedData.articles));
		setTotalResults(parsedData.totalResults);
	};

	return (
		<>
			<h1 className='text-center' style={{ marginTop: '75px' }}>
				NewsKoala - Latest{' '}
				{props.category.charAt(0).toUpperCase() + props.category.slice(1)}{' '}
				Headlines
			</h1>
			{loading && <Loader />}
			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length !== totalResults}
				loader={<Loader />}
			>
				<div className='container'>
					<div className='row'>
						{articles.map((item, index) => {
							return (
								<div className='col-md-4' key={index}>
									<NewsItem
										style={{ cursor: 'pointer' }}
										title={item.title}
										description={item.description}
										newUrl={item.url}
										imageUrl={item.urlToImage}
										author={item.author}
										date={item.publishedAt}
										source={item.source.name}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</InfiniteScroll>
		</>
	);
};

News.defaultTypes = {
	category: 'general',
	country: 'in',
	pageSize: '10'
};
News.propTypes = {
	category: PropTypes.string,
	country: PropTypes.string,
	pageSize: PropTypes.number
};

export default News;
