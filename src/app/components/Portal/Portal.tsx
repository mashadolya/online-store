import { FC, memo, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from 'src/app/components/Portal/Portal.types';

const Portal: FC<PortalProps> = ({ id, children }) => {
  const { current } = useRef(document.getElementById(id) || document.createElement('div'));
  const { parentElement } = current;
  const [dynamic] = useState(!parentElement);
  useEffect(() => {
    if (dynamic) {
      current.id = id;
      document.body.appendChild(current);
    }
    return () => {
      if (dynamic && parentElement) {
        parentElement.removeChild(current);
      }
    };
  }, [id]);
  return createPortal(children, current);
};
export default memo(Portal);
