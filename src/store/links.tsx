import { atom } from 'recoil';

export interface ILinkProps {
  name: string;
  url: string;
  desc: string;
  avatar: string;
  banner?: string;
  tags: string;
}

export const linksAtom = atom({
  key: 'LINKS_ATOM',
  default: [
    {
      name: 'HCLonely',
      url: 'https://blog.hclonely.com/',
      desc: '一个懒人的博客',
      avatar: 'HCLonely-avatar_bk1lfi',
      banner: 'HCLonely-bg_hxsa8y',
      tags: 'js 萌新,自学 js',
    },
    {
      name: '小康博客',
      url: 'https://www.antmoe.com/',
      desc: '一个收藏回忆与分享技术的地方！',
      avatar: 'antmoe-avatar_iy82nm',
      banner: 'antmoe-bg_pt2tps',
      tags: '前端',
    },
    {
      name: 'itsNekoDeng',
      url: 'https://dyfa.top/',
      desc: '十万伏特皮卡丘，梦想是世界和平，想要发光发热',
      avatar: 'dyfa-avatar_lfmw2v',
      banner: 'itsNekoDeng-bg_kjmjww',
      tags: '坚持打卡',
    },
    {
      name: '今今今生',
      url: 'https://blog.noheart.cn/',
      desc: '医不自医，人不渡己',
      avatar: 'xbetsy_ncveid',
      banner: 'noheart-bg_pznpzj',
      tags: '二次元',
    },
    {
      name: `Wayne's Blog`,
      url: 'https://wrans.top/',
      desc: '以梦为马，不负韶华',
      avatar: 'Wayne-avatar_tqncbh',
      banner: 'Wayne-bg_f9dguq',
      tags: '',
    },
    {
      name: '满心Hrn',
      url: 'https://blog.lovelu.top/',
      desc: '追求让人充实，分享让人快乐',
      avatar: 'lovelu-logo_tpgcf5',
      banner: 'lovelu-bg_o3aayx',
      tags: '独立开发者,项目经理,美食爱好者',
    },
  ] as ILinkProps[],
});
