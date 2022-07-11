import React, { useState } from "react";
import SongListBlock from "../../SongListBlock";

const PlaylistRecommended = (props) => {
	// const addNewPlaylist = (e) => {
	// 	e.preventDefault();
	// 	const newPlaylits = {
	// 		...playlist,
	// 		id: Date.now(),
	// 	};
	// 	create(newPlaylits);
	// 	setPlaylist({ thumbnailUrl: " ", url: " " });
	// };

	return (
		<img className="playlist-recommended" src={props.thumbnailUrl} alt=""></img>
	);
};

export default PlaylistRecommended;
