// Mappe des clés simples vers des icônes React afin de garder la data sérialisable
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

import { SiAdobephotoshop, SiAdobexd, SiFramer, SiNextdotjs } from "react-icons/si";

export const NAV_ICONS = {
  home: HiHome,
  about: HiUser,
  work: HiViewColumns,
  services: HiRectangleGroup,
  testimonials: HiChatBubbleBottomCenterText,
  contact: HiEnvelope,
};

export const SOCIAL_ICONS = {
  youtube: RiYoutubeLine,
  instagram: RiInstagramLine,
  facebook: RiFacebookLine,
  dribbble: RiDribbbleLine,
  github: RiGithubLine,
  pinterest: RiPinterestLine,
};

export const SERVICE_ICONS = {
  crop: RxCrop,
  pencil2: RxPencil2,
  desktop: RxDesktop,
  reader: RxReader,
  rocket: RxRocket,
};

export const TECH_ICONS = {
  html: FaHtml5,
  css: FaCss3,
  js: FaJs,
  react: FaReact,
  next: SiNextdotjs,
  framer: SiFramer,
  wordpress: FaWordpress,
  figma: FaFigma,
  xd: SiAdobexd,
  photoshop: SiAdobephotoshop,
};