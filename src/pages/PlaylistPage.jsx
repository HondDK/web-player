import Aside from "../components/Aside";
import PlaylistBlock from "../components/PlaylistBlock";

function PlaylistPage() {
	return (
		<div className="App">
			<main>
				<h1>Плейлисты</h1>
				<PlaylistBlock></PlaylistBlock>
			</main>
			<Aside></Aside>
		</div>
	);
}

export default PlaylistPage;
