import { useEffect, useState } from 'react';

import axios from 'axios';

import { ProjectType } from './popular-projects-types';
import { GitProject } from './components/git-project';

import './popular-projects.scss';

export const PopularProjects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProjects = async () => {
    setIsLoading(true);

    await axios.get(
      'https://api.github.com/search/repositories?',
      {
        params: {
          q: 'language:typescript',
          sort: 'stars',
          order: 'desc&page=1',
        }
      }
    ).then(
      ({data}: any) => {
        setProjects(data.items);
        console.log(data);
        setIsLoading(false);
      },
      ({error}: any) => {
        console.log(error);
      }
    );
  }

  useEffect(() => {
    getProjects();
  }, [])

  return isLoading
    ? <p>loading</p>
    : 
      <div className='container'>
        <div className='project-list'>
          {
            projects.map((project) => (
              <GitProject
                key={project.svn_url}
                url={project.svn_url}
                name={project.name}
                starsCount={project.stargazers_count}
              />
            ))
          }
        </div>
      </div>
};
