import Image from 'next/legacy/image';

import GithubCard from '@/components/content/card/GithubCard';
import CustomCode, { Pre } from '@/components/content/CustomCode';
import SplitImage, { Split } from '@/components/content/SplitImage';
import CustomLink from '@/components/links/CustomLink';
import TechIcons from '@/components/TechIcons';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  code: CustomCode,
  SplitImage,
  Split,
  TechIcons,
  GithubCard,
};

export default MDXComponents;
