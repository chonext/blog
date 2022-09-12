import Image from 'next/image';

import GithubCard from '@/components/content/card/GithubCard';
import CustomCode, { Pre } from '@/components/content/CustomCode';
import SplitImage, { Split } from '@/components/content/SplitImage';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import CustomLink from '@/components/links/CustomLink';
import TechIcons from '@/components/TechIcons';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  code: CustomCode,
  CloudinaryImg,
  SplitImage,
  Split,
  TechIcons,
  GithubCard,
};

export default MDXComponents;
