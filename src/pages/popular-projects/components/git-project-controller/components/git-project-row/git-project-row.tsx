import { FC, memo } from 'react';

import { TGitProjectRow } from './git-project-row-types';

export const GitProjectRow: FC<TGitProjectRow> = memo((
  {
    name,
    order,
    starsCount,
    url,
  }
) => (
  <>
    <span className='git-project-num'>
      {order}
    </span>
    <a
      className='git-link'
      href={url}
      rel='noreferrer'
      target='_blank'
    >
      {name}
    </a>
    <div className='stars-count'>
      &#9733; {starsCount}
    </div>
  </>
));
