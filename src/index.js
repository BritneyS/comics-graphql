import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { getAllCharacters, getCharacterById } from './api/comic-characters-api';

const app = express();
const ENV_PORT = process.env.ENV_PORT;

app.use(cors());

const schema = gql`
    type Character {
        id: Int
        name: String
        fullName: String
        placeOfBirth: String
        race: String
        alignment: String
        publisher: String
        firstAppearance: String
        images: ImageSet
    }

    type ImageSet {
        xs: String
        md: String
    }

    type Query {
        characters: [Character]
        character(id: Int!): Character
    }
`;

const resolvers = {
    Query: {
        characters: async () => {
            return getAllCharacters();
        },
        character: async (_, { id }) => {
            return getCharacterById(id);
        }
    },
    Character: {
        race: (character) => {
            return character.appearance.race;
        },
        fullName: (character) => {
            return character.biography.fullName;
        },
        placeOfBirth: (character) => {
            return character.biography.placeOfBirth;
        },
        firstAppearance: (character) => {
            return character.biography.firstAppearance;
        },
        publisher: (character) => {
            return character.biography.publisher;
        },
        alignment: (character) => {
            return character.biography.alignment;
        },
        images: (character) => {
            return character.images;
        }
    }
};

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: ENV_PORT }, () => {
    console.log(`Apollo Server listening on http://localhost:${ENV_PORT}/graphql`);
});