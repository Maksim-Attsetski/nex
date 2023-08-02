import React from 'react';
import { memo, useEffect, useState } from 'react';
import { motion, useAnimation, transform } from 'framer-motion';

const maxLength = 20;
const halfLength = Math.round(maxLength / 2);
const mapRemainingToColor = transform(
  [Math.ceil(maxLength / 10), halfLength],
  ['#ff008c', '#ccc']
);
const mapRemainingToSpringVelocity = transform([0, 5], [50, 0]);

const Input = () => {
  const [value, setValue] = useState('');
  const charactersRemaining = maxLength - value.length;
  const controls = useAnimation();

  useEffect(() => {
    if (charactersRemaining > halfLength) return;

    controls.start({
      scale: 1,
      transition: {
        type: 'spring',
        velocity: mapRemainingToSpringVelocity(charactersRemaining),
        stiffness: 700,
        damping: 80,
      },
    });
  }, [value.length, charactersRemaining, controls]);

  return (
    <div className={'input-container-1'}>
      <input
        maxLength={maxLength}
        className={'input'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={'number'}>
        <motion.span
          className={'span'}
          animate={controls}
          style={{ color: mapRemainingToColor(charactersRemaining) }}
        >
          {charactersRemaining}
        </motion.span>
      </div>
    </div>
  );
};

export default memo(Input);
