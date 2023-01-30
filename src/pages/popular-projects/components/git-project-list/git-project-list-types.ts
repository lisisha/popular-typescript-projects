import { APIProjectType } from '../../popular-projects-types';

export type TProps = {
  errorMessage: string;
  isLoading: boolean;
  projects: APIProjectType[];
  handleSetLastInView: (inView: boolean) => void;
};
