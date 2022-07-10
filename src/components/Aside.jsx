import React from "react";
import Player from "./UI/MyInput/Player/Player";
import SongImg from "./UI/MyInput/songImg/SongImg";
import MyButton from "./UI/MyInput/MyButton/MyButton";
import { MyInput } from "./UI/MyInput/MyInput/MyInput";

const Aside = () => {
	return (
		<aside>
			<MyInput></MyInput>
			<MyButton>Любимые треки</MyButton>
			<MyButton>Плейлисты</MyButton>
			<MyButton>Любимые артисты</MyButton>
			<SongImg></SongImg>
			<Player></Player>
		</aside>
	);
};

export default Aside;
