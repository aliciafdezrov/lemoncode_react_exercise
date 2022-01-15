import { Member } from './member-list.api-model';

export const getMemberList = async (queryParam: string): Promise<Member[]> => {
    try {
        const response = await fetch(`https://api.github.com/orgs/${queryParam}/members`);

        if (response.ok) {
            return await response.json();
        }
        throw response;

    } catch (ex) {
        console.log(ex);
    }
};
