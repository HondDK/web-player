import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import PlaylistPage from "./pages/PlaylistPage";
import "./styles/App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/playlistPage" element={<PlaylistPage />} />
		</Routes>
	);
}

export default App;
