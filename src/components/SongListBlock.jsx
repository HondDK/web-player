import React from "react";
import PlaylistRecommended from "./UI/PlaylistRecommended/PlaylisRecommended";

const songListBlock = (props) => {
	return (
		<article>
			<h1>{props.children}</h1>
			<div className="song-list">
				<PlaylistRecommended></PlaylistRecommended>
				<PlaylistRecommended></PlaylistRecommended>
				<PlaylistRecommended></PlaylistRecommended>
				<PlaylistRecommended></PlaylistRecommended>
				<PlaylistRecommended></PlaylistRecommended>
				<PlaylistRecommended></PlaylistRecommended>
			</div>
		</article>
	);
};

export default songListBlock;
