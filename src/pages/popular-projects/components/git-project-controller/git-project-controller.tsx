import { FC, memo } from 'react';

import { GitProject } from './components/git-project';
import { LastGitProject } from './components/git-last-project';

import { TProjectController } from './git-project-types';

import './git-project.scss';

export const GitProjectController: FC<TProjectController> = memo(
(
  {
    isLast,
    name,
    order,
    starsCount,
    url,
    setLastInView,
  }
) => isLast
  ? (
    <LastGitProject
      name={name}
      order={order}
      starsCount={starsCount}
      url={url}
      setLastInView={setLastInView}
    />
  ) : (
    <GitProject 
      name={name}
      order={order}
      starsCount={starsCount}
      url={url}
      setLastInView={setLastInView}
    />
  )
);
