import { useCallback, useEffect, useState } from 'react';

import { GitProjectList } from './components/git-project-list/git-project-list';
import { useGetProjects } from './hooks/useGitProjects';

import './popular-projects.scss';

export const PopularProjects = () => {
  const {projects, errorMessage, isLoading, getProjects} = useGetProjects();
  const [isLastInView, setLastInView] = useState(false);

  const handleSetLastInView = useCallback((inView: boolean) => {
    setLastInView(inView);
  }, [setLastInView]);
  
  useEffect(() => {
    if (isLastInView) {
      getProjects();
    }
    // eslint-disable-next-line
  }, [isLastInView]);

  return (
    <div className='container'>
      <GitProjectList
        errorMessage={errorMessage}
        isLoading={isLoading}
        projects={projects}
        handleSetLastInView={handleSetLastInView}
      />
    </div>
  );
};

