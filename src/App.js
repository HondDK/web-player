import SongImg from "./components/UI/MyInput/songImg/SongImg";
import MyButton from "./components/UI/MyInput/MyButton/MyButton";
import { MyInput } from "./components/UI/MyInput/MyInput/MyInput";
import "./styles/App.css";
import Player from "./components/UI/MyInput/Player/Player";

function App() {
	return (
		<div className="App">
			<aside>
				<MyInput></MyInput>
				<MyButton></MyButton>
				<MyButton></MyButton>
				<MyButton></MyButton>
				<SongImg></SongImg>
				<Player></Player>
			</aside>
		</div>
	);
}

export default App;
