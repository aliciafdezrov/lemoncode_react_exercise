import { Member } from './member-list.api-model';

export const getMemberList = async (): Promise<Member[]> => {
    try {
        const response = await fetch(`https://api.github.com/orgs/lemoncode/members`);

        if (response.ok) {
            return await response.json();
        }
        throw response;

    } catch (ex) {
        console.log(ex);
    }
};
