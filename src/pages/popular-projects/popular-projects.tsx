import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

import { GitProjectList } from './components/git-project-list/git-project-list';
import { APIProjectType } from './popular-projects-types';

import './popular-projects.scss';

export const PopularProjects = () => {
  const [projects, setProjects] = useState<APIProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLastInView, setLastInView] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const pageRef = useRef<number>(1);

  const handleSetLastInView = useCallback((inView: boolean) => {
    setLastInView(inView);
  }, [setLastInView]);

  const getProjects = useCallback(async (pageNumber: number) => {
    setIsLoading(true);

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
      (error: any) => {
        setErrorMessage(error.message);
      }
    );
  }, [projects]);

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
      <GitProjectList
        errorMessage={errorMessage}
        handleSetLastInView={handleSetLastInView}
        isLoading={isLoading}
        projects={projects}
      />
    </div>
  );
};
