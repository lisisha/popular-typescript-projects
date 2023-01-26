export type TGitProject = {
  isLast: boolean;
  name: string;
  order: number;
  setLastInView: (inView: boolean) => void;
  starsCount: number;
  url: string;
};

export type TLastGitProject = {
  name: string;
  order: number;
  setLastInView: (inView: boolean) => void;
  starsCount: number;
  url: string;
};
