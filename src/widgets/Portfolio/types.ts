export interface IRepoOwner {
  avatar_url: string;
  id: number;
  login: string;
}

export interface IRepo {
  id: number;
  name: string;
  default_branch: string;
  description: string | null;
  svn_url: string;
  language: string;
  visibility: 'public' | 'private';
  stargazers_count: number;
  updated_at: string;
  pushed_at: string;
  owner: IRepoOwner;
}
