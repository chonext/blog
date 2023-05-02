type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
  banner?: string;
  isBlog?: boolean;
};

export function openGraph({
  siteName,
  templateTitle,
  description,
  logo = 'https://help-assets.codehub.cn/enterprise/guanwang/favicon.ico',
  banner,
  isBlog = false,
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  if (isBlog) {
    const ogBanner = banner ? encodeURIComponent(banner.trim()) : undefined;

    return `https://og.yangchaoyi.vip/api/blog?templateTitle=${ogTemplateTitle}&banner=${ogBanner}`;
  }

  return `https://og.yangchaoyi.vip/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}

/**
 * Remove `en-` prefix
 */
export const cleanBlogPrefix = (slug: string) => {
  if (slug.slice(0, 3) === 'en-') {
    return slug.slice(3);
  } else {
    return slug;
  }
};

/**
 * Check `en-` prefix
 */
export const checkBlogPrefix = (slug: string) => {
  if (slug.slice(0, 3) === 'en-') {
    return true;
  } else {
    return false;
  }
};

/**
 * Access session storage on browser
 */
export function getFromSessionStorage(key: string) {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

export function getFromLocalStorage(key: string) {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
}
