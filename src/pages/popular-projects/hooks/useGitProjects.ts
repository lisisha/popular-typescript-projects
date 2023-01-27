import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

import { APIProjectType } from '../popular-projects-types';
import { PER_PAGE, SEARCH_LANGUAGE } from '../popular-projects-constants';

export const useGetProjects = () => {
  const [projects, setProjects] = useState<APIProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const pageRef = useRef<number>(0);

  const getProjects = useCallback(async () => {
    setIsLoading(true);
    pageRef.current = pageRef.current + 1;

    await axios.get(
      'https://api.github.com/search/repositories',
      {
        params: {
          q: `language:${SEARCH_LANGUAGE}`,
          sort: 'stars',
          page: pageRef.current,
          per_page: PER_PAGE,
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
    getProjects()
  }, []);
  
  return { projects, getProjects, errorMessage, isLoading };
};
