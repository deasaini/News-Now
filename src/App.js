import NavBar from './components/NavBar';
import React from 'react';
import './App.css';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Routes>
					<Route
						exact
						path="/"
						element={<News key="general" category="general" />}
					/>
					<Route
						exact
						path="business"
						element={<News key="business" category="business" />}
					/>
					<Route
						exact
						path="/entertainment"
						element={<News key="entertainment" category="entertainment" />}
					/>
					<Route
						exact
						path="/health"
						element={<News key="health" category="health" />}
					/>
					<Route
						exact
						path="/sports"
						element={<News key="sports" category="sports" />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
