import React, { FC, PropsWithChildren, memo } from 'react';

interface IProps extends PropsWithChildren {
  className?: string;
}

const Flex: FC<IProps> = ({ className = 'gap-3', children }) => {
  return <div className={'flex flex-wrap ' + className}>{children}</div>;
};

export default memo(Flex);
