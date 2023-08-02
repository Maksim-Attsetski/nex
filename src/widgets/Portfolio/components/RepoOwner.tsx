import React, { FC, memo, useMemo } from 'react';
import { IRepoOwner } from '../types';
import Image from 'next/image';
import { Flex } from '@/UI';

interface IProps {
  owner: IRepoOwner;
  title?: string;
}

const RepoOwner: FC<IProps> = ({ owner, title }) => {
  const username = useMemo(() => owner.login.replace('-', ' '), [owner.login]);

  return (
    <Flex className='gap-4 justify-center items-center'>
      <Image
        src={owner.avatar_url}
        alt={owner.login}
        width={100}
        height={100}
        className='rounded-full'
        priority
      />
      <div>
        <p className='font-bold text-2xl'>{username}</p>
        <p className='text-lg'>{title}</p>
      </div>
    </Flex>
  );
};

export default memo(RepoOwner);
