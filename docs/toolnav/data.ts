import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '实用工具',
    items: [
      // {
      //   icon: '/icons/project/casdoor.png',
      //   title: 'MCJPG通行证',
      //   desc: 'MCJPG统一的账户系统',
      //   link: 'https://sso.mcjpg.org/login/mcjpgorg/',
      // },
      {
        title: 'HTOOL在线端口扫描',
        desc: 'HTOOL在线端口扫描',
        link: 'https://www.htool.com/dev/portscan.html',
      },
      {
        title: 'base64 编解码在线工具',
        desc: '锤子在线工具 | base64 编解码在线工具',
        link: 'https://www.toolhelper.cn/EncodeDecode/Base64',
      },
      {
        title: '微软商店生成项目v1.2.3',
        desc: 'Microsoft商店生成项目v1.2.3, 抓取商店内应用并提供下载',
        link: 'https://store.rg-adguard.net/',
      },
      {
        title: '微软常用运行库合集',
        desc: '微软常用运行库合集 | 网盘密码 9527',
        link: 'https://wwa.lanzout.com/b0b8rs19a',
      },
    ],
  },
  {
    title: 'MC模组',
    items: [
      // icon可选
      // {
      //   icon: '',
      //   title: '',
      //   desc: '',
      //   link: '',
      // },
      {
        title: '投影打印机宅咸鱼二改版',
        desc: '投影打印机宅咸鱼二改版，拥有更多功能 | 网盘密码 dm0r',
        link: 'https://wwt.lanzoul.com/b030vd70f',
      },
      {
        title: 'Meteor Client',
        desc: 'Meteor Client 官网',
        link: 'https://www.meteorclient.com/',
      },
      {
        title: 'Meteor Client 汉化插件',
        desc: 'Meteor Client 汉化插件',
        link: 'https://github.com/EnderChannel/meteor-zh-cn-addon',
      },
      {
        title: 'Baritone',
        desc: 'google maps for block game | baritone 下载',
        link: 'https://github.com/cabaletta/baritone',
      },
    ],
  },
  {
    title: '开源镜像站',
    items: [
      {
        title: '阿里开源镜像站',
        desc: '阿里开源镜像站',
        link: 'https://developer.aliyun.com/mirror/',
      },
      {
        title: '清华大学开源镜像站',
        desc: '清华大学开源镜像站',
        link: 'https://mirrors6.tuna.tsinghua.edu.cn/',
      },
      {
        title: '腾讯软件源',
        desc: '腾讯软件源',
        link: 'https://mirrors.tencent.com/',
      },
      {
        title: '华为开源镜像站',
        desc: '华为开源镜像站',
        link: 'https://mirrors.huaweicloud.com/home',
      },
      {
        title: '网易开源镜像站',
        desc: '网易开源镜像站',
        link: 'https://mirrors.163.com/',
      },
      {
        title: '北京大学开源镜像站',
        desc: '北京大学开源镜像站',
        link: 'https://mirrors.pku.edu.cn/Mirrors',
      },
      {
        title: '华中科技大学开源镜像站',
        desc: '华中科技大学开源镜像站',
        link: 'https://mirrors.hust.edu.cn/',
      },
      {
        title: '中科大开源镜像站',
        desc: '中国科学技术大学开源镜像站',
        link: 'https://chinanet.mirrors.ustc.edu.cn/',
      },
    ]
  },
  // {
  //   title: '服务器插件',
  //   items: [
  //     // {
  //     //   icon: '/icons/project/webhook.jpg',
  //     //   title: 'Minecraft Webhook',
  //     //   desc: '实现事件监听及Webhook发送',
  //     //   link: 'https://github.com/MineJPGcraft/Minecraft-Webhook',
  //     // },
  //   ],
  // },
  // {
  //   title: '机器人插件',
  //   items: [
  //     // {
  //     //   icon: '/icons/project/bot.jpg',
  //     //   title: 'MCTool',
  //     //   desc: '实现群服互通（账号绑定、死亡记录查询）',
  //     //   link: 'https://github.com/MineJPGcraft/koishi-plugin-mctool',
  //     // },
  //   ],
  // },
  // {
  //   title: '状态监测',
  //   items: [
  //     // {
  //     //   icon: '/icons/project/uptime.svg',
  //     //   title: '状态监测',
  //     //   desc: '实时监测各项目和成员服在线情况',
  //     //   link: 'https://status.mcjpg.org/',
  //     // },
  //   ],
  // },
]
