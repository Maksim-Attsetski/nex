import React, { FC, memo } from 'react';
import { Layout } from '@/shared';

const email = 'maks2001maks2001@gmail.com';
const phone = '+375336644491';

const Contacts: FC = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='text-5xl'>Contacts</div>
        <br />
        <div className='text-2xl mt-4 mb-1'>Email</div>
        <a
          href={`mailto:${email}`}
          className='transition-all hover:text-white w-max cursor-pointer'
        >
          {email}
        </a>
        <div className='text-2xl mt-4 mb-1'>Phone</div>
        <a
          href={`tel:${phone}`}
          className='transition-all hover:text-white w-max cursor-pointer'
        >
          {phone}
        </a>
        <br />
      </div>
    </Layout>
  );
};

export default memo(Contacts);
