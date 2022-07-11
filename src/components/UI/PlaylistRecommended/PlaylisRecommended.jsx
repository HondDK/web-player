import React, { useState } from "react";

const PlaylistRecommended = (playlist) => {
	return (
		<img
			className="playlist-recommended"
			src={playlist.thumbnailUrl}
			id={playlist.key}
			alt=""
		></img>
	);
};

export default PlaylistRecommended;
