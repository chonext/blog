import { ReadTimeResults } from 'reading-time';

export type BlogFrontmatter = {
  wordCount: number;
  readingTime: ReadTimeResults;
  slug: string;
  zhAndEn?: boolean;
  title: string;
  description: string;
  banner: string;
  publishedAt: string;
  lastUpdated?: string;
  tags: string;
  repost?: string;
};

export type ContentType = 'blog' | 'library' | 'projects';

export type PickFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : T extends 'library'
  ? LibraryFrontmatter
  : ProjectFrontmatter;

export type InjectedMeta = { views?: number; likes?: number };

export type BlogType = {
  code: string;
  frontmatter: BlogFrontmatter;
};

export type LibraryFrontmatter = {
  slug: string;
  title: string;
  readingTime: ReadTimeResults;
  description: string;
  tags: string;
};

export type LibraryType = {
  code: string;
  frontmatter: LibraryFrontmatter;
};

export type ProjectFrontmatter = {
  slug: string;
  title: string;
  publishedAt: string;
  lastUpdated?: string;
  description: string;
  category?: string;
  techs: string;
  banner: string;
  link?: string;
  github?: string;
  youtube?: string;
};

export type projectItemType = {
  title: string;
  description: string;
  link: string;
  // eslint-disable-next-line
  icon: React.ReactComponentElement<any>;
};

export type ProjectsType = {
  category: string;
  child: Array<projectItemType>;
};

export type collectionItemType = {
  title: string;
  description: string;
  link: string;
  techs: string;
};

export type CollectionsType = {
  category: string;
  child: Array<collectionItemType>;
};

export type ProjectType = {
  code: string;
  frontmatter: ProjectFrontmatter;
};

export type FrontmatterWithTags = BlogFrontmatter | LibraryFrontmatter;
export type FrontmatterWithDate = BlogFrontmatter | ProjectFrontmatter;
export type Frontmatter =
  | ProjectFrontmatter
  | BlogFrontmatter
  | LibraryFrontmatter;
