import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

import { GIT_API_URL, GIT_SORT, PER_PAGE, SEARCH_LANGUAGE } from '../popular-projects-constants';
import { APIProjectType } from '../popular-projects-types';

export const useGetProjects = () => {
  const [projects, setProjects] = useState<APIProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const pageRef = useRef(0);

  const getProjects = useCallback(async () => {
    setIsLoading(true);
    
    if (errorMessage) {
      setErrorMessage('');
    } else {
      pageRef.current = pageRef.current + 1;
    }

    await axios.get(
      GIT_API_URL,
      {
        params: {
          q: `language:${SEARCH_LANGUAGE}`,
          sort: GIT_SORT,
          page: pageRef.current,
          per_page: PER_PAGE,
        }
      }
    ).then(
      ({data}: any) => {
        setProjects([...projects, ...data.items]);
      },
      (error: Error) => {
        setErrorMessage(error.message);
      }
    ).finally(() => setIsLoading(false));
  }, [projects, errorMessage]);

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);
  
  return {projects, errorMessage, isLoading, getProjects};
};
