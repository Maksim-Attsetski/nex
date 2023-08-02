import { motion } from 'framer-motion';
import { memo } from 'react';
import { Gap } from '@/UI';
import { padTop } from '../constants';

const Layout = ({ children }) => (
  <motion.div
    initial={{ x: '-50vw', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: '100vw', opacity: 0 }}
  >
    <Gap y={padTop} />
    {children}
  </motion.div>
);
export default memo(Layout);
