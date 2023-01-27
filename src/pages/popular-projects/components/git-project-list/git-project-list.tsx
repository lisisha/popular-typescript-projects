import { ProgressBar } from 'react-loader-spinner';

import { GitProject } from '../git-project';
import { TProps } from './git-project-list-types';

import './git-project-list-styles.scss';

export const GitProjectList = ({
  errorMessage,
  handleSetLastInView,
  isLoading,
  projects,
}: TProps) => {
  return (
    <ul
        className='project-list'
      >
        <>
          {
            projects.map((project, index) => (
              <GitProject
                key={project.svn_url + index}
                url={project.svn_url}
                name={project.name}
                starsCount={project.stargazers_count}
                order={index + 1}
                isLast={projects.length - 1 === index}
                setLastInView={handleSetLastInView}
              />
            ))
          }
          {
            !errorMessage && isLoading && (
              <li className='progress-bar-container'>
                <ProgressBar
                  ariaLabel='progress-bar-loading'
                  barColor='#51E5FF'
                  borderColor='#F4442E'
                  height='80'
                  width='80'
                  wrapperClass='progress-bar-wrapper'
                  wrapperStyle={{}}
                />
              </li>
            )
          }
          {
            errorMessage && (
              <li className="error">{errorMessage}</li>
            )
          }
        </>
      </ul>
  )
}