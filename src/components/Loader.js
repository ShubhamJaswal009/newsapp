import React from 'react';

const Loader = () => {
	return (
		<div>
			<div className='d-flex justify-content-center my-3'>
				<div className='spinner-grow text-secondary my-3' role='status' />
				<div className='spinner-grow text-success my-3' role='status' />
				<div className='spinner-grow text-danger my-3' role='status' />
				<div className='spinner-grow text-warning my-3' role='status' />
				<div className='spinner-grow text-info my-3' role='status' />
			</div>
		</div>
	);
};

export default Loader;
