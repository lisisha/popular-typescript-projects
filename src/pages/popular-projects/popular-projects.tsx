import { useEffect, useRef, useState } from 'react';

import axios from 'axios';
import { ProgressBar } from 'react-loader-spinner';

import { ProjectType } from './popular-projects-types';
import { GitProject } from './components/git-project';

import './popular-projects.scss';

export const PopularProjects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLastInView, setLastInView] = useState(false);
  const pageRef = useRef<number>(1);

  const handleSetLastInView = (inView: boolean) => {
    setLastInView(inView);
  }

  const getProjects = async (pageNumber: number) => {
    setIsLoading(true);
    console.log(pageNumber);

    await axios.get(
      'https://api.github.com/search/repositories',
      {
        params: {
          q: 'language:typescript',
          sort: 'stars',
          page: pageNumber,
          per_page: '50',
        }
      }
    ).then(
      ({data}: any) => {
        setProjects(
          [
            ...projects,
            ...data.items,
          ]
        );
        setIsLoading(false);
      },
      ({error}: any) => {
        console.log(error);
      }
    );
  }

  useEffect(() => {
    getProjects(pageRef.current);
  }, []);
  
  useEffect(() => {
    if (isLastInView) {
      pageRef.current = pageRef.current + 1;
      getProjects(pageRef.current);
    }
  }, [isLastInView]);

  return (
    <div className='container'>
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
            isLoading && (
              <li className='progress-bar-container'>
                <ProgressBar
                  height="80"
                  width="80"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor = '#F4442E'
                  barColor = '#51E5FF'
                />
              </li>
            )
          }
        </>
      </ul>
    </div>
  )
}
