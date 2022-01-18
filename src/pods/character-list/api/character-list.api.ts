import {Character} from "./character-list.api-model";

export const getCharacterList = async (searchTerm: any): Promise<Character[]> => {
    try {
        let baseUrl= `https://rickandmortyapi.com/api/character`;

        if(Object.keys(searchTerm).some(term => term)) {
            baseUrl = `${baseUrl}?`;

            for (const [key, value] of Object.entries(searchTerm)) {
                if(value) {
                    baseUrl = `${baseUrl}${key}=${value}&`
                }
            }

        }

        const response = await fetch(baseUrl);

        if (response.ok) {
            const json = await response.json();
            return json.results;
        }
        throw response;

    } catch (ex) {
        console.log(ex);
    }
};
