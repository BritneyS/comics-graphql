# comics-graphql
GraphQL middleware to serve comic super hero data. For educational purposes only.

## :rocket: Start-up instructions
1. Clone project with `git clone git@github.com:BritneyS/comics-graphql.git`(SSH - recommended) or `git clone https://github.com/BritneyS/comics-graphql.git` (HTTPS - usually available without any git configuation)
2. Run `npm start`

## 🦸🏾‍♀️🦹🏽‍♂️ Hero/Villain GraphQL API

- `characters` - Get all character objects
- `character(id:_)` - Get a character object by ID

:microscope: Try out the queries on `http://localhost:8000/graphql`

Example:
```graphql
query{
  character(id: 1){
    id
    name
    placeOfBirth
    race
  }
}
```
Result:
```graphql
{
  "data": {
    "character": {
      "id": 1,
      "name": "A-Bomb",
      "placeOfBirth": "Scarsdale, Arizona",
      "race": "Human"
    }
  }
}
```
#### :link: See all properties with the hosted endpoint: https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json
