import { useEffect, useState } from 'react';
import NewsItem from './NewsItems';
import './News.css';

export default function News(props) {
	const [articles, setArticles] = useState([]);
	//const [loading, setLoading] = useState(true);
	//const [page, setPage] = useState(1);

	const updateNews = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
		//setLoading(true);
		let data = await fetch(url);
		let parsedData = await data.json();
		setArticles(parsedData.articles);
		//setLoading(false);
	};

	useEffect(() => {
		updateNews();
	}, []);

	return (
		<div className="container">
			<div className="heading">
				<h1>News-now Top Headlines</h1>
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
		</div>
	);
}
