import { APIProjectType } from '../../popular-projects-types';

export type TProps = {
  projects: APIProjectType[];
  handleSetLastInView: (inView: boolean) => void;
  isLoading: boolean;
  errorMessage: string;
};
