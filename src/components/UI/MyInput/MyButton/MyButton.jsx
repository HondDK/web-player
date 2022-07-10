import React from "react";
import cl from "./MyButton.module.css";
const MyButton = () => {
	return (
		<div className="button">
			<button className={cl.MyButton}>"Кнопка"</button>
		</div>
	);
};

export default MyButton;
