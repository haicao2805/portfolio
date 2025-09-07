'use client';

import React from 'react';

import { BiCollapseVertical, BiExpandVertical } from 'react-icons/bi';

import { AccordionContext } from '@/components/core/accordion';

const ToggleBtnComponent: React.FC = () => {
  // --------------------------------------------------
  const { isExpanded } = React.useContext(AccordionContext);

  return (
    <button className="icon__button" title={isExpanded ? 'Collapse' : 'Expand'}>
      {isExpanded ? <BiCollapseVertical /> : <BiExpandVertical />}
    </button>
  );
};

export const ToggleBtn = React.memo(ToggleBtnComponent);
