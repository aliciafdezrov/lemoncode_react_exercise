import {generatePath, Omit} from "react-router";

interface SwitchRoutes {
    root: string;
    membersCollection: string;
    memberInfo: string;
}
export const switchRoutes: SwitchRoutes = {
    root: "/",
    membersCollection: "/members-collection",
    memberInfo: "/member-info/:id"
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, "memberInfo"> {
    memberInfo: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
    ...switchRoutes,
    memberInfo: id => generatePath(switchRoutes.memberInfo, { id })
};