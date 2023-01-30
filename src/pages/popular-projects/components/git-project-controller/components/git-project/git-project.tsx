import { FC, memo } from 'react';

import { GitProjectRow } from '../git-project-row';
import { TGitProject } from './git-project-types';

export const GitProject: FC<TGitProject> = memo((
  {
    name,
    order,
    starsCount,
    url,
  }
) => (
  <li className='git-project'>
    <GitProjectRow
      name={name}
      order={order}
      starsCount={starsCount}
      url={url}
    />
  </li>
));