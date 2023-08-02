import { useScroll, useTransform, motion } from 'framer-motion';
import { FC, PropsWithChildren, memo, useRef } from 'react';

interface IProps extends PropsWithChildren {
  dir?: 'x' | 'y';
  styles?: {
    direction: {
      input: number[];
      output: number[];
    };
    opacity: {
      input: number[];
      output: number[];
    };
  };
}
const defaultStyles = {
  direction: {
    input: [0, 0.4, 1],
    output: [-100, 0, 100],
  },
  opacity: {
    input: [0, 0.4, 1],
    output: [0, 1, 0],
  },
};

const RepoTitle: FC<IProps> = ({
  children,
  dir = 'x',
  styles = defaultStyles,
}) => {
  const target = useRef();
  const { scrollYProgress } = useScroll({ target });

  const direction = useTransform(
    scrollYProgress,
    styles.direction.input,
    styles.direction.output
  );
  const opacity = useTransform(
    scrollYProgress,
    styles.opacity.input,
    styles.opacity.output
  );

  return (
    <motion.div
      ref={target}
      className='text-title capitalize text-white'
      style={{ [dir]: direction, opacity }}
    >
      <strong>{children}</strong>
    </motion.div>
  );
};

export default memo(RepoTitle);
