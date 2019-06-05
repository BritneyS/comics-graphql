import { RESTDataSource } from 'apollo-datasource-rest';

class ComicCharactersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json";
    }
}

module.exports = ComicCharactersAPI;