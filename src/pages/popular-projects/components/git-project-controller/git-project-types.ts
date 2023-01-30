export type TProjectController = {
  isLast: boolean;
  name: string;
  order: number;
  starsCount: number;
  url: string;
  setLastInView: (inView: boolean) => void;
};
