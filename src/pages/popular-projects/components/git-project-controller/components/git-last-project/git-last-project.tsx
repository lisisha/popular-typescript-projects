import { FC, memo, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

import { GitProjectRow } from "../git-project-row";
import { TGitProject } from "../git-project/git-project-types";

export const LastGitProject: FC<TGitProject> = memo(({
  name,
  order,
  starsCount,
  url,
  setLastInView,
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setLastInView(inView)
  }, [inView, setLastInView]);

  return (
    <li
      className='git-project'
      ref={ref}
    >
      <GitProjectRow
        name={name}
        order={order}
        starsCount={starsCount}
        url={url}
      />
    </li>
  )
});