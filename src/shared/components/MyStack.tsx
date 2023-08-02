import { useInView, motion } from 'framer-motion';
import React, { FC, memo, useRef } from 'react';

const stack = ['React, ', 'React Native, ', 'Nextjs, ', 'Vue3'];

const container = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const item = {
  initial: { x: -40 },
  animate: { x: 0 },
};

const MyStack: FC = () => {
  const stackRef = useRef();
  const inView = useInView(stackRef);

  return (
    <>
      <div className='text-4xl text-white mb-4 font-semibold'>My stack</div>

      <motion.div
        ref={stackRef}
        animate={container[inView ? 'animate' : 'initial']}
        initial={false}
        className='flex flex-wrap gap-4'
      >
        {stack.map((el, inx) => (
          <motion.div
            animate={item[inView ? 'animate' : 'initial']}
            initial={false}
            transition={{ delay: 0.3 * inx, type: 'spring', stiffness: 70 }}
            key={el}
            className='font-semibold'
          >
            {el}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default memo(MyStack);
