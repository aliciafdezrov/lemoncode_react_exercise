import {Character} from "./character-list.api-model";

export const getCharacterList = async (): Promise<Character[]> => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character`);

        if (response.ok) {
            const json = await response.json();
            return json.results;
        }
        throw response;

    } catch (ex) {
        console.log(ex);
    }
};
