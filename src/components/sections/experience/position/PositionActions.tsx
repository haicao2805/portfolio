'use client';

import React from 'react';

import { AccordionContext } from '@/components/core/accordion';
import { BiCollapseVertical, BiExpandVertical } from 'react-icons/bi';

const PositionActionsComponent: React.FC = () => {
  // --------------------------------------------------
  const { isExpanded } = React.useContext(AccordionContext);

  return (
    <button className="icon__button" title={isExpanded ? 'Collapse' : 'Expand'}>
      {isExpanded ? <BiCollapseVertical /> : <BiExpandVertical />}
    </button>
  );
};

export const PositionActions = React.memo(PositionActionsComponent);
