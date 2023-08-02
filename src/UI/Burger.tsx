import React, { FC, memo } from 'react';
import { motion } from 'framer-motion';

interface IProps {
  className?: string;
  onClick: () => void;
  isOpen?: boolean;
}
const lines = ['firstLine', 'secondLine', 'thirdLine'];
const Burger: FC<IProps> = ({ onClick, className = '', isOpen = false }) => {
  return (
    <motion.div
      className={[className, 'burger-container', isOpen ? 'active' : ''].join(
        ' '
      )}
      onClick={onClick}
    >
      {lines.map((el) => (
        <motion.div
          className={el}
          key={el}
          animate={
            isOpen ? { backgroundColor: '#333' } : { backgroundColor: '#fff' }
          }
          initial={false}
        />
      ))}
    </motion.div>
  );
};

export default memo(Burger);
