'use client';

import React from 'react';

import { cn } from '@/utils/tailwind.util';

interface IProps {
  isExpanded?: boolean;
  slots: {
    heading: React.ReactNode;
    collapse: React.ReactNode;
  };
  slotProps?: {
    wrapper?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
  };
}

export const AccordionContext = React.createContext<{ isExpanded?: boolean }>({});

export const Accordion: React.FC<IProps> = (props) => {
  const { slots, isExpanded: isInitExpanded, slotProps } = props;
  const { heading, collapse } = slots;
  const { wrapper } = slotProps || {};
  const { className, ...restWrapperProps } = wrapper || {};

  // --------------------------------------------------
  const frame = React.useRef(0);
  const contentRef = React.useRef<HTMLDivElement>(null);

  // --------------------------------------------------
  const [isExpanded, setIsExpanded] = React.useState(isInitExpanded);
  const [contentHeight, setContentHeight] = React.useState(isExpanded ? 'auto' : '0px');

  // --------------------------------------------------
  const updateContentHeight = React.useCallback(() => {
    if (!contentRef.current) {
      return;
    }

    setContentHeight('auto');

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (!contentRef.current) {
        return;
      }
      const scrollHeight = contentRef.current.scrollHeight;
      setContentHeight(`${scrollHeight}px`);
    });
  }, []);

  // --------------------------------------------------
  React.useEffect(() => {
    if (isExpanded) {
      updateContentHeight();
      return;
    }

    setContentHeight('0px');

    return () => {};
  }, [isExpanded, updateContentHeight]);

  // --------------------------------------------------
  React.useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const handleResize = () => {
      updateContentHeight();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isExpanded, updateContentHeight]);

  // --------------------------------------------------
  React.useEffect(() => {
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <AccordionContext value={{ isExpanded }}>
      <div {...restWrapperProps} className={cn('flex flex-col', className)}>
        <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          {heading}
        </div>

        <div
          ref={contentRef}
          style={{ height: contentHeight }}
          className={cn(
            'transition-all duration-300 ease-in-out',
            isExpanded ? 'opacity-100' : 'overflow-hidden opacity-0',
          )}>
          {collapse}
        </div>
      </div>
    </AccordionContext>
  );
};
