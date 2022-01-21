import React from "react";
import {MemberListComponent} from "./member-list.component";
import {Member} from "./member-list.vm";
import {useSearch, useSearchQueryParams} from "./member-list.hooks";

export const MemberListContainer: React.FC = () => {
    const [members, setMembers] = React.useState<Member[]>([]);
    const {getQueryParam} = useSearchQueryParams();
    const {onSearch} = useSearch({
        onLoadMemberList: (vmMemberList) => setMembers(vmMemberList),
    });

    React.useEffect(() => {
        let searchQuery = getQueryParam("search");
        onSearch(searchQuery);
    }, []);

    return (
        <MemberListComponent members={members} onSearch={onSearch} searchParam={getQueryParam("search")}/>
    );
};
