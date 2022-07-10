import React from "react";
import cl from "./Player.module.css";
import play from "./btnPlay.png";
import back from "./btnBack.png";
import next from "./btnNext.png";

const Player = () => {
	return (
		<div className="player">
			<button className={cl.btnPlayer}>
				<img src={back} />
			</button>
			<button className={cl.btnPlayer}>
				<img src={play} />
			</button>
			<button className={cl.btnPlayer}>
				<img src={next} />
			</button>
		</div>
	);
};

export default Player;
