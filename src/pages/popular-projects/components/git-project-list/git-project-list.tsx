import { FC, memo } from 'react';
import { ProgressBar } from 'react-loader-spinner';

import { GitProjectController } from '../git-project-controller';
import { TProps } from './git-project-list-types';

import './git-project-list-styles.scss';

export const GitProjectList: FC<TProps> = memo(({
  errorMessage,
  isLoading,
  projects,
  handleSetLastInView,
}) => (
  <ul className='project-list'>
    {
      projects.map((project, index) => (
        <GitProjectController
          key={project.svn_url + index}
          isLast={projects.length - 1 === index}
          name={project.name}
          order={index + 1}
          starsCount={project.stargazers_count}
          url={project.svn_url}
          setLastInView={handleSetLastInView}
        />
      ))
    }
    {
      isLoading && (
        <li className='progress-bar-container'>
          <ProgressBar
            ariaLabel='progress-bar-loading'
            barColor='#51E5FF'
            borderColor='#F4442E'
            height='80'
            width='80'
            wrapperClass='progress-bar-wrapper'
          />
        </li>
      )
    }
    {
      errorMessage && (
        <li className="error">{errorMessage}</li>
      )
    }
  </ul>
));
