export type TProps = {
  url: string;
  name: string;
  starsCount: number;
  order: number;
  isLast: boolean;
  setLastInView: (inView: boolean) => void;
};
