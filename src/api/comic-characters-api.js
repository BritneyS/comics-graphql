import { data } from '../data.js';
import fetch from 'node-fetch';
import { find } from 'lodash';

const allCharactersEndpoint = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json";

export function getAllCharacters() {
    return fetch(allCharactersEndpoint)
    .then(res => {
        if (res.status >= 200 && res.status < 300) {
            return res.json();
        } else {
            return data;
        }
    });
}

export function getCharacterById(id) {
    return fetch(allCharactersEndpoint)
    .then(res => {
        if (res.status >= 200 && res.status < 300) {
            return res.json();
        } else {
            return data;
        }
    })
    .then(characters => find(characters, { "id": id }));
}