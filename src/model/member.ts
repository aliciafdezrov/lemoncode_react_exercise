export interface MemberEntity {
    id: number;
    login: string;
    avatar_url: string;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    bio?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
    created_at?: string;
}

export const createDefaultMemberEntity = () => ({
    id: -1,
    login: '',
    avatar_url: '',
    name: '',
    company: '',
    blog: '',
    location: '',
    email: '',
    bio: '',
    public_repos: -1,
    followers: -1,
    following: -1,
    created_at: ''
});
