import React, { FC, Key, memo, useCallback, useMemo } from 'react';
import Flex from './Flex';

interface IProps {
  data: any[];
  renderItem: (item: any, index: number) => JSX.Element;
  renderKey?: (item: any, index: number) => Key;
  emptyElement?: JSX.Element;
  containerClassname?: string;
  itemClassname?: string;
  emptyClassname?: string;
  loading?: boolean;
}

const List: FC<IProps> = ({
  data,
  renderItem,
  emptyElement = <div>Пусто</div>,
  renderKey,
  containerClassname = 'gap-3',
  itemClassname = '',
  emptyClassname = '',
  loading = false,
}) => {
  const onRenderKey = useCallback(
    (el: any, inx: number) => (renderKey ? renderKey(el, inx) : inx),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const emptyComponent = useMemo(
    () => <div className={emptyClassname}>{emptyElement}</div>,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Flex className={containerClassname}>
      {loading ? (
        <div>Loading...</div>
      ) : !!data.length ? (
        data.map((el, inx) => (
          <div className={itemClassname} key={onRenderKey(el, inx)}>
            {renderItem(el, inx)}
          </div>
        ))
      ) : (
        emptyComponent
      )}
    </Flex>
  );
};

export default memo(List);
