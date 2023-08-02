import React, { FC, memo, useCallback, useMemo, useRef } from 'react';
import { IRepo } from '../types';
import { getRandomColor, headerHeight } from '@/shared';
import { Gap } from '@/UI';
import {
  AnimatePresence,
  Variants,
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import RepoTitle from './RepoTitle';

interface IProps {
  repo: IRepo;
}

const getFadeUp = (
  y: number = 70,
  opacity: number = 0.4,
  delay: number = 0.2
) => ({
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay },
  },
  hidden: { y, opacity },
});

const descriptionFadeUp = getFadeUp();
const languageFadeUp = getFadeUp(90, 0.3, 0.4);
const buttonFadeUp = getFadeUp(110, 0.2, 0.6);

const Repository: FC<IProps> = ({ repo }) => {
  const ref = useRef();
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      style={{ paddingTop: headerHeight }}
      className='snap-center h-screen container flex justify-center items-center flex-col'
    >
      <RepoTitle>{repo.name}</RepoTitle>
      <Gap y={10} />
      {repo.description && (
        <motion.div
          animate={descriptionFadeUp[inView ? 'visible' : 'hidden']}
          initial={false}
        >
          <p className='text-sub-title text-center' style={{ maxWidth: 500 }}>
            {repo.description}
          </p>
          <Gap y={10} />
        </motion.div>
      )}
      <motion.p
        animate={languageFadeUp[inView ? 'visible' : 'hidden']}
        initial={false}
        className='text-lg font-semibold'
      >
        language – <strong>{repo.language}</strong>
      </motion.p>
      <Gap y={5} />
      <motion.div
        className='border-white border-2 border-solid my-4 text-lg cursor-pointer'
        animate={buttonFadeUp[inView ? 'visible' : 'hidden']}
        initial={false}
      >
        <motion.a
          className='px-8 py-3 block'
          href={repo.svn_url}
          target='_blank'
        >
          Open repo
        </motion.a>
      </motion.div>
    </div>
  );
};

export default memo(Repository);
