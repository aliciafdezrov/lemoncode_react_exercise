import {Character} from "./character-detail.api-model";

export const getCharacterDetail = async (id: string): Promise<Character> => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

        if (response.ok) {
            return await response.json();
        }
        throw response;

    } catch (ex) {
        console.log(ex);
    }
};
