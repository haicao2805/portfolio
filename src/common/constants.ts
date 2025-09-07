import { SnackbarOrigin } from 'notistack';
import { BsLinkedin } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';
import { SiGithub } from 'react-icons/si';
import { TContactFormValue } from './types';
import { MdEmail } from 'react-icons/md';

// --------------------------------------------------
export class AppConst {
  static readonly MAX_NUMBER = Number.MAX_SAFE_INTEGER;
  static readonly MIN_NUMBER = Number.MIN_SAFE_INTEGER;

  static readonly DEFAULT_DEBOUNCE_TIME = 500; // 500ms

  static readonly TIME_ZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;

  static readonly NOTISTACK_MAX_SNACKBAR = 3;
  static readonly NOTISTACK_ANCHOR_ORIGIN: SnackbarOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  };
  static readonly NOTISTACK_AUTO_HIDE_DURATION = 5000; // 5s

  static readonly DOMAIN = `caochihai.id.vn`;
  static readonly WEBSITE = `https://${this.DOMAIN}`;
}

// --------------------------------------------------
export class AppRoutes {
  static readonly HOME = '/';
  static readonly EXPERIENCE = '/experience';
  static readonly PROJECT = '/project';
  static readonly CONTACT = '/contact';

  static readonly websitePath = {
    main: `${AppConst.WEBSITE}${this.HOME}`,
    experience: `${AppConst.WEBSITE}${this.EXPERIENCE}`,
    project: `${AppConst.WEBSITE}${this.PROJECT}`,
    contact: `${AppConst.WEBSITE}${this.CONTACT}`,
  };
}

// --------------------------------------------------
export class Menu {
  static readonly HOME = 'home';
  static readonly EXPERIENCE = 'experience';
  static readonly PROJECT = 'project';
  static readonly CONTACT = 'contact';
  static readonly SKILL = 'skill';

  static readonly translate: Record<string, string> = {
    [this.HOME]: 'Home',
    [this.EXPERIENCE]: 'Experience',
    [this.PROJECT]: 'Project',
    [this.CONTACT]: 'Contact',
    [this.SKILL]: 'Skill',
  };

  static readonly options: { id: string; title: string; route: string }[] = [
    { id: this.HOME, title: this.translate[this.HOME], route: AppRoutes.HOME },
    { id: this.EXPERIENCE, title: this.translate[this.EXPERIENCE], route: AppRoutes.EXPERIENCE },
    { id: this.PROJECT, title: this.translate[this.PROJECT], route: AppRoutes.PROJECT },
    { id: this.CONTACT, title: this.translate[this.CONTACT], route: AppRoutes.CONTACT },
  ];
}

// --------------------------------------------------
export class Socials {
  static readonly LINKEDIN = 'LINKEDIN';
  static readonly GITHUB = 'GITHUB';
  static readonly EMAIL = 'EMAIL';
  static readonly MAIL_TO = 'MAIL_TO';

  static readonly translate: Record<string, string> = {
    [this.LINKEDIN]: 'LinkedIn',
    [this.GITHUB]: 'GitHub',
    [this.MAIL_TO]: 'Email Me',
  };

  static readonly urls: Record<string, string> = {
    [this.LINKEDIN]: 'https://www.linkedin.com/in/cao-chi-hai/',
    [this.GITHUB]: 'https://github.com/haicao2805',
    [this.EMAIL]: 'haicao2805@gmail.com',
    [this.MAIL_TO]: 'mailto:haicao2805@gmail',
  };

  static readonly icons: Record<string, IconType> = {
    [this.LINKEDIN]: BsLinkedin,
    [this.GITHUB]: SiGithub,
    [this.MAIL_TO]: MdEmail,
  };

  static readonly options: {
    id: string;
    title: string;
    url: string;
    icon: IconType;
  }[] = [
    {
      id: this.LINKEDIN,
      title: this.translate[this.LINKEDIN],
      url: this.urls[this.LINKEDIN],
      icon: this.icons[this.LINKEDIN],
    },
    {
      id: this.GITHUB,
      title: this.translate[this.GITHUB],
      url: this.urls[this.GITHUB],
      icon: this.icons[this.GITHUB],
    },
    {
      id: this.MAIL_TO,
      title: this.translate[this.MAIL_TO],
      url: this.urls[this.MAIL_TO],
      icon: this.icons[this.MAIL_TO],
    },
  ];
}

// --------------------------------------------------
export const defaultContactFormValue: TContactFormValue = {
  name: '',
  email: '',
  subject: '',
  message: '',
};
