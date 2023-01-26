import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { TGitProject, TLastGitProject } from './git-project-types';

import './git-project.scss';

const LastGitProject = ({
  url,
  name,
  starsCount,
  order,
  setLastInView,
}: TLastGitProject) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setLastInView(inView)
  }, [inView, setLastInView]);

  return (
    <li
      ref={ref}
      className='git-project'
    >
      <span className='git-project-num'>
        {order}
      </span>
      <a
        className='git-link'
        href={url}
        target='_blank'
        rel='noreferrer'>
          {name}
      </a>
      <div className='stars-count'>
        &#9733; {starsCount}
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
  }: TGitProject
) => {
  if (isLast) {
    return (
      <LastGitProject
        name={name}
        order={order}
        setLastInView={setLastInView}
        starsCount={starsCount}
        url={url}
      />
    )
  }

  return (
    <li
      className='git-project'
    >
      <span className='git-project-num'>
        {order}
      </span>
      <a
        className='git-link'
        href={url}
        target='_blank'
        rel='noreferrer'>
          {name}
      </a>
      <div className='stars-count'>
        &#9733; {starsCount}
      </div>
    </li>
  );
};
