import { Octokit } from 'octokit';
import { IRepo } from './types';

class PortfolioService {
  async getRepositories() {
    try {
      const res: { data: IRepo[] } = await new Octokit().request(
        'GET /users/{user}/repos',
        {
          user: 'Maksim-Attsetski',
          sort: 'updated',
          direction: 'des',
        }
      );

      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export const portfolioService = new PortfolioService();
