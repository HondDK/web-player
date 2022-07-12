import React, { useState, useEffect } from "react";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import PlaylistRecommended from "./UI/PlaylistRecommended/PlaylisRecommended";
import { getPageCount } from "../utils/pages";

const SongListBlock = (props) => {
	const [playlists, setPlaylists] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(7);
	const [page, setPage] = useState(1);

	const [fectchPlaylists] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPlaylists([...playlists, ...response.data]);
		const totalCount = response.headers["x-total-count"];
		setTotalPages([getPageCount(totalPages, limit)]);
		console.log(response.data);
	});

	useEffect(() => {
		fectchPlaylists();
		changePage(Math.random() * 100);
	}, []);

	const listPlaylists = playlists.map((playlist) => (
		<PlaylistRecommended
			onChange={(p) => changePage(p)}
			key={playlist.id}
			url={playlist.url}
			thumbnailUrl={playlist.thumbnailUrl}
		/>
	));

	const changePage = (page) => {
		setPage(page);
		fectchPlaylists(limit, page);
	};

	return (
		<article>
			<h1>{props.children}</h1>
			{playlists.length !== 0 ? (
				<div className="song-list"> {listPlaylists} </div>
			) : (
				<h1>Loading...</h1>
			)}
		</article>
	);
};

export default SongListBlock;
