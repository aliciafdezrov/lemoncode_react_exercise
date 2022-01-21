import { Member } from './member-list.api-model';

export const getMemberList = async (queryParam: string): Promise<Member[]> => {
    let memberList: Member[] = [];
    try {
        const response = await fetch(`https://api.github.com/orgs/${queryParam}/members`);

        if (response?.ok) {
            memberList = await response.json();
        }
        return memberList;

    } catch (ex) {
        console.log(ex);
    }
};
