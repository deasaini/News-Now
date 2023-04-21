import React from 'react';

export default function NewsItem(props) {
	let { title, description, imageUrl, newsUrl, author, date, source } = props;
	return (
		<div>
			<div className="my-3">
				<div className="card">
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							position: 'absolute',
							right: '0'
						}}
					>
						<span className="badge rounded-pill"> {source}" </span>
					</div>
					<img
						src={!imageUrl ? 'default url' : imageUrl}
						className="card-img-top"
						alt=""
						style={{
							width: '500px',
							height: '500px'
						}}
					/>
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{description}</p>
						<p className="card-tetx">
							<small className="text-muted">
								By {!author ? 'unknown' : author} on{' '}
								{new Date(date).toGMTString()}
							</small>
						</p>
						<a
							rel="noreferrer"
							href={newsUrl}
							target="_blank"
							className="btn btn-primary"
						>
							Read more..
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
