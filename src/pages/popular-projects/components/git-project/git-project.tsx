import { TProps } from './git-project-types';

import './git-project.scss';

export const GitProject = (
  {
    url,
    name,
    starsCount,
  }: TProps
) => {
  return (
    <div className='git-project'>
      <div className='stars-count'>
        {starsCount}
      </div>
      <a
        className='git-link'
        href={url}
        target='_blank'
        rel="noreferrer">{name}
      </a>
    </div>
  )
};
