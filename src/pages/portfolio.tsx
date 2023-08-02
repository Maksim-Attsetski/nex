import React, { FC, memo, useEffect, useState } from 'react';

import {
  IRepo,
  RepoOwner,
  RepoTitle,
  Repository,
  portfolioService,
} from '@/widgets/Portfolio';
import { Flex, List } from '@/UI';

const scrollDownStyles = {
  direction: { input: [0, 0.5, 1], output: [150, 0, -150] },
  opacity: { input: [0, 0.5, 1], output: [0.4, 1, 0.4] },
};

const Portfolio: FC = () => {
  const [repos, setRepos] = useState<IRepo[]>([]);

  useEffect(() => {
    (async () => {
      // i do it because next doesn't want to deploy
      const response = await portfolioService.getRepositories();
      setRepos(response);
    })();
    const htmlEl = document.querySelector('html');
    htmlEl?.classList.add('scrollable');

    return () => {
      htmlEl?.classList.remove('scrollable');
    };
  }, []);

  return (
    <div>
      <div className='snap-center h-screen'>
        <br />
        <br />
        <br />
        {repos[0]?.owner && (
          <RepoOwner
            owner={repos[0].owner}
            title={`My public repositories (${repos.length})`}
          />
        )}
        <Flex className='justify-center my-11 text-center'>
          <RepoTitle styles={scrollDownStyles} dir='y'>
            <pre>
              Scroll{'\n'}Down{'\n'}⬇
            </pre>
          </RepoTitle>
        </Flex>
      </div>
      <List
        containerClassname='flex-col gap-4'
        data={repos}
        renderItem={(el) => <Repository repo={el} />}
        renderKey={(el) => el.id}
      />
    </div>
  );
};

export default memo(Portfolio);
