'use client';

import React from 'react';

import { BiImages } from 'react-icons/bi';

import { IProject } from '@/common';
import { Modal } from '@/components/core/modal';
import { ProjectCarousel } from './ProjectCarousel';

interface IProps extends IProject {}

const ProjectImagesComponent: React.FC<IProps> = (props) => {
  const { images } = props;

  // --------------------------------------------------
  const [isOpen, setIsOpen] = React.useState(false);

  // --------------------------------------------------
  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  // --------------------------------------------------
  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  // --------------------------------------------------
  if (!images?.length) {
    return null;
  }

  return (
    <div
      className="flex-center"
      onClick={(e) => {
        e.stopPropagation();
      }}>
      <button className="icon__button" onClick={handleOpen}>
        <BiImages />
      </button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className="absolute-center w-screen md:w-[80%]">
          <ProjectCarousel slides={images} />
        </div>
      </Modal>
    </div>
  );
};

export const ProjectImages = React.memo(ProjectImagesComponent);
