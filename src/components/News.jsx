import { useEffect, useState } from 'react';
import NewsItem from './NewsItems';
import './News.css';

export default function News(props) {
	const [articles, setArticles] = useState([]);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);
	const [hasMoreData, setHasMoreData] = useState(true);

	const updateNews = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}`;
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(parsedData.articles);
		setTotalResults(parsedData.totalResults);
		//setHasMoreData(false);
	};

	useEffect(() => {
		updateNews();
	}, []);

	const handleNextClick = async () => {
		setPage(page + 1);
		updateNews();
		//setArticles(articles.concat(parsedData.articles));

		console.log(
			`Total articles are ${articles.length} & total results are ${totalResults}`
		);

		if (articles.length === totalResults) {
			setHasMoreData(false);
			console.log(`More data? ${hasMoreData}`);
		}
		//fetchMoreData();
	};

	// const handlePreviousClick = () => {
	// 	setPage(page - 1);
	// 	//updateNews();
	// 	fetchMoreData();
	// };

	// const fetchMoreData = async () => {
	// 	const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}`;
	// 	let data = await fetch(url);
	// 	let parsedData = await data.json();
	// 	setArticles(articles.concat(parsedData.articles));
	// 	console.log(
	// 		`Total articles are ${articles.length} & total results are ${totalResults}`
	// 	);
	// 	//setTotalResults(parsedData.totalResults);
	// 	setPage(page + 1);
	// 	if (articles.length === totalResults) {
	// 		setHasMoreData(false);
	// 		console.log(`More data? ${hasMoreData}`);
	// 	}
	// };

	return (
		<div className="container">
			<div className="heading">
				<h1>News-Now</h1>
			</div>
			<br />

			<div className="row">
				{articles.map((element) => {
					return (
						<div className="newsItems" key={element.url}>
							<NewsItem
								title={element.title ? element.title : ''}
								description={element.title ? element.description : ''}
								imageUrl={element.urlToImage}
								newsUrl={element.url}
								author={element.author}
							/>
						</div>
					);
				})}
			</div>
			<div className="container-btn">
				<button
					className="next-btn"
					disabled={!hasMoreData}
					onClick={handleNextClick}
				>
					Load more
				</button>
			</div>
		</div>
	);
}
