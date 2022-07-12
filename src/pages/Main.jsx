import React from "react";
import SongListBlock from "../components/SongListBlock";
import Aside from "../components/Aside";

function Main() {
	return (
		<div className="App">
			<main>
				<SongListBlock>Чарты</SongListBlock>
				<SongListBlock>Послушайте сегодня</SongListBlock>
				<SongListBlock>Популярные плейлисты</SongListBlock>
				<SongListBlock>Послушай сегодня</SongListBlock>
				<SongListBlock>Популярные плейлисты</SongListBlock>
				<SongListBlock>Послушай сегодня</SongListBlock>
			</main>
			<Aside></Aside>
		</div>
	);
}

export default Main;
