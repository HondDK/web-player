import React from "react";
import cl from "./MyInput.module.css";

export const MyInput = () => {
	return (
		<div className="search">
			<input className={cl.MyInput} value="Поиск"></input>
		</div>
	);
};
