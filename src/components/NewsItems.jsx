import React from 'react';

export default function NewsItem(props) {
	let { title, description, imageUrl, newsUrl, author, source } = props;
	return (
		<div>
			<div className="newsCard">
				<div className="card">
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							position: 'absolute',
							right: '0'
						}}
					>
						<span className="round-edge-box"> {source} </span>
					</div>
					<img
						src={
							!imageUrl
								? 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
								: imageUrl
						}
						className="card-img"
						alt=""
						style={{
							width: '500px',
							height: '500px'
						}}
					/>
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{description}</p>
						<p>
							<small>By {!author ? 'Unknown' : author}</small>
						</p>
						<a id="read-more" href={newsUrl}>
							Read more..
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
