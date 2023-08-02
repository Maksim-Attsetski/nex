import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <motion.div className='h-screen w-screen flex justify-center items-center text-9xl text-white animate-pulse'>
      Loading...
    </motion.div>
  );
}
