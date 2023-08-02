import React, { FC, memo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { routes } from '../types';
import { Burger, Flex } from '@/UI';
import { useRouter } from 'next/router';

const links = [
  { to: routes.portfolio, text: 'My works' },
  { to: routes.contacts, text: 'Contacts' },
  { to: routes.about, text: 'About me' },
];

const Header: FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className={['headerWrapper', isOpen ? 'active' : ''].join(' ')}>
      <header className={'header'}>
        <Flex className={'header__body' + ' container'}>
          <Flex>
            <Link className={'link'} href={routes.home}>
              Maksim Attsetski
            </Link>
          </Flex>
          <Flex className={'links'}>
            {links.map(({ text, to }) => (
              <Link
                className={[
                  'link',
                  router.pathname === to ? 'active' : '',
                ].join(' ')}
                href={to}
                key={to}
              >
                {text}
                <span />
              </Link>
            ))}
          </Flex>
        </Flex>
      </header>
      <Burger
        onClick={() => setIsOpen((prev) => !prev)}
        className={'headerWrapper__burger'}
        isOpen={isOpen}
      />
    </motion.div>
  );
};

export default memo(Header);
