import {MemberEntity, createDefaultMemberEntity } from '../model/member';

class MemberAPI {
  // Just return a copy of the mock data
  getAllMembers(organizationName : string) : Promise<MemberEntity[]> {
    const gitHubMembersUrl : string = `https://api.github.com/orgs/${organizationName}/members`;

    return fetch(gitHubMembersUrl)
    .then((response) => this.checkStatus(response))
    .then((response) => this.parseJSON(response))
    .then((data) => this.resolveMembers(data))
    }

  getMembersPaging(organizationName : string, page: number, rowsPerPage: number) : Promise<MemberEntity[]> {
    const gitHubMembersUrl : string = `https://api.github.com/orgs/${organizationName}/members?per_page=${rowsPerPage}&page=${page}`;

    return fetch(gitHubMembersUrl)
        .then((response) => this.checkStatus(response))
        .then((response) => this.parseJSON(response))
        .then((data) => this.resolveMembers(data))
  }

  getSingleMemberByLogin(login : string) : Promise<MemberEntity> {
    const gitHubSingleMemberUrl : string = `https://api.github.com/users/${login}`;

    return fetch(gitHubSingleMemberUrl)
        .then((response) => this.checkStatus(response))
        .then((response) => this.parseJSON(response))
        .then((data) => this.resolveSingleMember(data));
  }

  private checkStatus(response : Response) : Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON(response : Response) : any {
    return response.json();
  }

  private resolveMembers (data : any) : Promise<MemberEntity[]> {

    const members = data.map((gitHubMember) => {
      var member : MemberEntity = createDefaultMemberEntity();

      member.id = gitHubMember.id;
      member.login = gitHubMember.login;
      member.avatar_url = gitHubMember.avatar_url;

      return member;
    });


    return Promise.resolve(members);
  }


  private resolveSingleMember (gitHubMember : any) : Promise<MemberEntity> {
      let member : MemberEntity = createDefaultMemberEntity();
      member.id = gitHubMember.id;
      member.login = gitHubMember.login;
      member.avatar_url = gitHubMember.avatar_url;
      member.bio = gitHubMember.bio;
      member.blog = gitHubMember.blog;
      member.company = gitHubMember.company;
      member.created_at = gitHubMember.created_at;
      member.email = gitHubMember.email;
      member.followers = gitHubMember.followers;
      member.following = gitHubMember.following;
      member.location = gitHubMember.location;
      member.public_repos = gitHubMember.public_repos;
      member.name = gitHubMember.name;
    return Promise.resolve(member);
  }
}

export const memberAPI = new MemberAPI();
