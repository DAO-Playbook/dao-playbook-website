import React, { HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { document } from 'browser-monads';

export interface PortalProps extends HTMLAttributes<any> {
  portalId: string;
}

const Portal: React.FC<PortalProps> = ({
  className,
  onClick,
  children,
  portalId,
}) => {
  const portalRef = React.useRef<HTMLDivElement>(document.createElement('div'));
  const portalRootRef = React.useRef<HTMLDivElement>(
    document.createElement('div'),
  );

  React.useEffect(() => {
    portalRootRef.current.setAttribute('id', 'portal-root');
    portalRootRef.current.addEventListener('click', (e: any) => {
      if (portalRef.current.childNodes[0]?.contains(e.target)) return;
      if (onClick) return onClick(e);
    });
    document.body.appendChild(portalRootRef.current);

    return () => {
      document.body.removeChild(portalRootRef.current);
    };
  }, []);

  React.useEffect(() => {
    portalRef.current.setAttribute('id', portalId);
    portalRef.current.setAttribute('class', `${className}`);
    portalRootRef.current.appendChild(portalRef.current);

    return () => {
      window.requestAnimationFrame(() => {
        if (portalRef.current.childNodes.length === 0) {
          portalRootRef.current.removeChild(portalRef.current);
        }
      });
    };
  }, []);

  return createPortal(children, portalRef.current);
};

Portal.defaultProps = {
  className: '',
  onClick: () => null,
};

export default Portal;
