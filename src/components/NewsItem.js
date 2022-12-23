import React from 'react';

const NewsItem = (props) => {
	let { title, description, imageUrl, newUrl, author, date, source } = props;
	return (
		<div className='my-3'>
			<div className='card'>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						position: 'absolute',
						right: '0'
					}}
				>
					<span className='badge rounded-pill bg-danger'>{source}</span>
				</div>
				<img
					src={
						imageUrl === null
							? 'https://imgs.search.brave.com/LLtXfaUECcv4PKsIROJQURbTYymadkgUapq3DzL-Q2E/rs:fit:1200:960:1/g:ce/aHR0cHM6Ly9jb250/ZW50LnRocml2ZWds/b2JhbC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDgv/YnJlYWtpbmctbmV3/cy5qcGc'
							: imageUrl
					}
					className='card-img-top'
					alt=''
				/>
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<p className='card-text'> {description}</p>
					<p className='card-text'>
						<small className='text-muted'>
							By {!author ? 'Unknown' : author} on{' '}
							{new Date(date).toGMTString()}
						</small>
					</p>
					<a href={newUrl} target='_blank' className='link'>
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
