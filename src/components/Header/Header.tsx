import React from 'react';
import { Loader } from '../Loader';
import './Header.scss';

type User = {
  name: string | undefined;
  avatar_url: string | undefined;
  html_url: string | undefined;
  followers: number | undefined;
};

interface IUserProps {
  user: User;
  isLoading: boolean;
}

export const Header: React.FC<IUserProps> = ({ user, isLoading }) => (
  <header className='header'>
    {isLoading && <Loader />}

    {!isLoading && (
      <>
        <a
          href={user?.html_url}
          target='_blank'
          className='header__link'
          rel='noreferrer'
        >
          Github profile:
          {user?.name}
        </a>
        <img className='header__image' src={`${user?.avatar_url}`} />
        <span>Number of my subscribers: {user?.followers}</span>
      </>
    )}
  </header>
);
