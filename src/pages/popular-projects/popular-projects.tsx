import { useCallback, useEffect, useState } from 'react';

import { useGetProjects } from './hooks/useGitProjects';
import { GitProjectList } from './components/git-project-list/git-project-list';

import './popular-projects.scss';

export const PopularProjects = () => {
  const { projects, getProjects, errorMessage, isLoading} = useGetProjects();
  const [isLastInView, setLastInView] = useState(false);

  const handleSetLastInView = useCallback((inView: boolean) => {
    setLastInView(inView);
  }, [setLastInView]);
  
  useEffect(() => {
    if (isLastInView) {
      getProjects();
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

