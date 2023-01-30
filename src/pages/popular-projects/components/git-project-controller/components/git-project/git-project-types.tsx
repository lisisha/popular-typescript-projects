export type TGitProject = {
  name: string;
  order: number;
  starsCount: number;
  url: string;
  setLastInView: (inView: boolean) => void;
};
