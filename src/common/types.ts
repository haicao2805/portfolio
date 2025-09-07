import z from 'zod';
import { contactFormSchema } from './schema';

// --------------------------------------------------
export type IdType = string | number;

// --------------------------------------------------
export type TExperience = {
  id: string;
  company: TExperienceCompany;
  positions: TExperiencePosition[];
};

// --------------------------------------------------
export type TExperienceCompany = {
  name: string;
  url?: string;
  logo?: string;
  location?: string;

  isCurrentEmployer?: boolean;
  periodFrom?: string;
  periodTo?: string;
};

// --------------------------------------------------
export type TExperiencePosition = {
  id: string;
  title: string;
  periodFrom: string;
  periodTo?: string;
  type?: string;
  descriptions?: string[];
  skills?: string[];
  isExpanded?: boolean;
};

// --------------------------------------------------
export type TContactFormValue = z.infer<typeof contactFormSchema>;

// --------------------------------------------------
export interface ICarouselSlide {
  id: IdType;
  src: string;
  alt: string;
}

// --------------------------------------------------
export interface IProject {
  id: string;
  title: string;
  periodFrom: string;
  periodTo?: string;
  description?: string;
  role?: string;
  responsibilities?: string[];
  skills?: string[];
  logo?: string;
  url?: string;
  images?: ICarouselSlide[];
  isExpanded?: boolean;
}
