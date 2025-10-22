---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: EnderChannel
  text: 小蔡服务器文档
  tagline: 你可以在这里看到关于小蔡的服务器的所有可访问网页
  image:
    src: /logo.png
    alt: EnderChannel
  actions:
    - text: EnderChannel
      link: http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=SqUZTKn_xJm9k_umqo9-vkMqAIdakXAL&authKey=5ttQyqcZyGjVr2xlhiNPNf7TIJz%2FOBU86SabFOC9QiJNJanJXO3VXfxsO3EcjB%2Bn&noverify=0&group_code=953287345
    - theme: sponsor
      text: MC导航
      link: /nav/
    # - theme: sponsor
    #   text: 测试页
    #   link: /test


---
<ServerList />

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
<confetti />
