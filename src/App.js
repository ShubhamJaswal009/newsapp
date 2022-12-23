import './App.css';
import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar.js';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const apiKey = process.env.REACT_APP_API_KEY;
	const [progress, setProgress] = useState(0);
	const [pageSize, setPageSize] = useState();
	return (
		<div>
			<Router>
				<LoadingBar color='#f11946' progress={progress} />
				<Navbar />
				<Routes>
					<Route
						exact
						path='/'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='general'
								pageSize={pageSize}
								category='general'
							/>
						}
					/>
					<Route
						exact
						path='/health'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='health'
								pageSize={pageSize}
								category='health'
							/>
						}
					/>
					<Route
						exact
						path='/sports'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='sports'
								pageSize={pageSize}
								category='sports'
							/>
						}
					/>
					<Route
						exact
						path='/science'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='science'
								pageSize={pageSize}
								category='science'
							/>
						}
					/>
					<Route
						exact
						path='/technology'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='technology'
								pageSize={pageSize}
								category='technology'
							/>
						}
					/>
					<Route
						exact
						path='/entertainment'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='entertainment'
								pageSize={pageSize}
								category='entertainment'
							/>
						}
					/>
					<Route
						exact
						path='/business'
						element={
							<News
								setProgress={setProgress}
								apiKey={apiKey}
								key='business'
								pageSize={pageSize}
								category='business'
							/>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
