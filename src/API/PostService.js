import axios from "axios";

export default class PostService {
	static async getAll(limit = 10, page = 1) {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/photos", //а че разве ссылку на гет запрос, который хочешь совершить не лучше хранить в каком нибудь кфг файле?)
			{
				params: {
					_limit: 10,
					_page: page,
				},
			}
		);
		return response;
	}
	static async getById(id) {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/photos/" + id
		);
		return response;
	}
}
