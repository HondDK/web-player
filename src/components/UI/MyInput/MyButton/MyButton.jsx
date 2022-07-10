import React from "react";
import cl from "./MyButton.module.css";
const MyButton = (props) => {
	return (
		<div className="button">
			<button className={cl.MyButton}>{props.children}</button>
		</div>
	);
};

export default MyButton;
