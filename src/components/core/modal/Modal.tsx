'use client';

import React from 'react';

export interface IModalProps {
  children: React.ReactNode;

  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const { children, isOpen, onClose } = props;

  // --------------------------------------------------
  const modalRef = React.useRef<HTMLDivElement>(null);

  // --------------------------------------------------
  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }

      event.stopPropagation();
      onClose?.();
    },
    [onClose],
  );

  // --------------------------------------------------
  React.useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
      document.body.classList.add('overflow-hidden');
      return;
    }

    document.body.classList.remove('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  // --------------------------------------------------
  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={modalRef}
      role="presentation"
      className="fixed inset-0 z-[1300]"
      onKeyDown={onKeyDown}
      tabIndex={-1}>
      <div aria-hidden className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div tabIndex={-1}>{children}</div>
    </div>
  );
};
