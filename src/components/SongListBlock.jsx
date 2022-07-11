import React, { useState, useEffect } from "react";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import PlaylistRecommended from "./UI/PlaylistRecommended/PlaylisRecommended";
import axios from "axios";

const SongListBlock = (props) => {
	const URL = "https://jsonplaceholder.typicode.com/photos?_limit=7";

	const [playlists, setPlaylists] = useState([]);

	const [fectchPlaylists] = useFetching(async () => {
		const response = await axios.get(URL);
		setPlaylists([...playlists, ...response.data]);
		console.log(response.data);
	});

	useEffect(() => {
		fectchPlaylists();
	}, []);

	const listPlaylists = playlists.map((playlist) => (
		<PlaylistRecommended
			url={playlist.url}
			thumbnailUrl={playlist.thumbnailUrl}
		/>
	));
	return (
		<article>
			<h1>{props.children}</h1>
			<div className="song-list">{listPlaylists}</div>
		</article>
	);
};

export default SongListBlock;
