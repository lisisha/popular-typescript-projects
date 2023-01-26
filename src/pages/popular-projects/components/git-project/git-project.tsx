import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { TProps } from './git-project-types';

import './git-project.scss';

export const LastGitProject = ({
  url,
  name,
  starsCount,
  order,
  isLast,
  setLastInView,
}: TProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setLastInView(inView)
  }, [inView, setLastInView])

  return (
    <li
      ref={ref}
      className='git-project last'
    >
      <div>
        {order}
      </div>
      <a
        className='git-link'
        href={url}
        target='_blank'
        rel="noreferrer">
          {name}
      </a>
      <div className='stars-count'>
        stars: {starsCount}
      </div>
    </li>
  )
};

export const GitProject = (
  {
    url,
    name,
    starsCount,
    order,
    isLast,
    setLastInView,
  }: TProps
) => {
  if (isLast) {
    return (
      <LastGitProject
        url={url}
        name={name}
        starsCount={starsCount}
        order={order}
        isLast={isLast}
        setLastInView={setLastInView}
      />
    )
  }

  return (
    <li
      className='git-project'
    >
      <div>
        {order}
      </div>
      <a
        className='git-link'
        href={url}
        target='_blank'
        rel="noreferrer">
          {name}
      </a>
      <div className='stars-count'>
        stars: {starsCount}
      </div>
    </li>
  );
}
