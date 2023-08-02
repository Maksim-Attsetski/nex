import React, { FC, memo } from 'react';
import { Layout } from '@/shared';
import Image from 'next/image';

const About: FC = () => {
  return (
    <Layout>
      <br />
      <br />
      <section className='container flex flex-wrap justify-between gap-5'>
        <Image
          src='/my-avatar.jpg'
          alt='avatar'
          width={300}
          height={300}
          priority
          className='rounded-3xl object-fill aspect-square mix-blend-color-burn'
        />
        <div className='w-full sm:w-1/2'>
          <div className='mb-3 font-bold text-2xl'>Something about me</div>
          <div>
            I always try to do my best to show the best result. That&apos;s why
            i&apos;m not afraid to learn something new every day. I can also
            work with both in a team of independently. Have good time management
            skills.
          </div>
          <div className='mb-3 font-bold text-2xl mt-5'>My hobbies</div>
          <div>
            Usually, i like to cook something tasty and do usefull exercises.
            Also, before bed, i love to play games or watch movies (fantasy,
            actions, anime and etc...)
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default memo(About);
