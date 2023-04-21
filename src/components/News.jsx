import { useEffect, useState } from 'react';
import NewsItem from './NewsItems';
import './News.css';

export default function News(props) {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	//const [page, setPage] = useState(1);
	const [totalResults, settotalResults] = useState(0);

	console.log(props);
	const updateNews = async () => {
		let url =
			'https://newsapi.org/v2/top-headlines?country=us&apiKey=24d02b2a070c4e8e9f964ac33153b814';
		setLoading(true);
		let data = await fetch(url);

		let parsedData = await data.json();

		setArticles(parsedData.articles);
		settotalResults(parsedData.totalResults);
		setLoading(false);
	};

	useEffect(() => {
		updateNews();
	}, []);

	// const handlePrevClick = async () => {
	// 	set;
	// };

	return (
		<div className="container">
			<div className="heading">
				<h1>News-now Top Headlines</h1>
			</div>
			<br />
			<div className="row">
				{articles.map((element) => {
					return (
						<div className="col-md-4" key={element.url}>
							<NewsItem
								title={element.title ? element.title.slice(0, 45) : ''}
								description={
									element.title ? element.description.slice(0, 88) : ''
								}
								imageUrl={element.urlToImage}
								newsUrl={element.url}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
