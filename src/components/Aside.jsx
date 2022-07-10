import React from "react";
import Player from "./UI/Player/Player";
import SongImg from "./UI/songImg/SongImg";
import MyButton from "./UI/MyButton/MyButton";
import { MyInput } from "./UI/MyInput/MyInput/MyInput";

const Aside = () => {
	return (
		<aside>
			<div className="sticky">
				<MyInput></MyInput>
				<MyButton>Любимые треки</MyButton>
				<MyButton>Плейлисты</MyButton>
				<MyButton>Любимые артисты</MyButton>
				<SongImg></SongImg>
				<Player></Player>
			</div>
		</aside>
	);
};

export default Aside;
