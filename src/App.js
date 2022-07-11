import "./styles/App.css";

import Aside from "./components/Aside";
import SongListBlock from "./components/SongListBlock";

function App() {
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

export default App;
