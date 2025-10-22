import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '组织',
    items: [
      // {
      //   icon: '',
      //   title: '',
      //   desc: '',
      //   link: '',
      // },
      {
        icon: '/logo.png',
        title: 'EnderChannel',
        desc: '我们的 Github 组织',
        link: 'https://github.com/EnderChannel',
      },
    ],
  },
  {
    title: '我们的项目',
    items: [
      // {
      //   icon: '',
      //   title: '',
      //   desc: '',
      //   link: '',
      // },
      {
        icon: '',
        title: 'OpenList-Mobile',
        desc: 'OpenList-Mobile 小修小改',
        link: 'https://github.com/EnderChannel/OpenList-Mobile',
      },
      {
        icon: '',
        title: 'Meteor Client 汉化插件',
        desc: 'meteor-ZH_CN-addon | Meteor Client 汉化插件',
        link: 'https://github.com/EnderChannel/meteor-zh-cn-addon',
      },
      {
        icon: '',
        title: '呱兄 刷线机数据包',
        desc: 'ReStringing | 呱兄 刷线机数据包',
        link: 'https://github.com/EnderChannel/ReStringing',
      },
      {
        icon: '',
        title: '刷线机数据包 Github 存档',
        desc: 'ReStringing-Archive | 刷线机数据包存档',
        link: 'https://github.com/EnderChannel/ReStringing-Archive',
      },
    ],
  },
  // {
  //   title: 'MC模组',
  //   items: [
  //     // {
  //     //   icon: '/icons/project/ServerListSync.png',
  //     //   title: 'ServerListSync',
  //     //   desc: '在线同步游戏内多人游戏服务器列表的模组',
  //     //   link: 'https://modrinth.com/mod/serverlistsync',
  //     // },
      
  //   ],
  // },
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
