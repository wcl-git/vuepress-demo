module.exports = {
  title: '组件文档',
  head: [
    ['link', {
      rel: 'icon',
      href: 'https://www.icontuku.com/png/squareplex/word.png'
    }]
  ],
  description: '组件文档',
  dest: 'doc',
  base: '/doc/',
  themeConfig: {
    nav: [{
      text: '指南',
      link: '/guide'
    }],
    sidebar: [
      ['/guide', '开始'],
      {
        title: '开发组件',
        collapsable: true,
        children: [
          ['/develop/start', '怎么开发一个组件']
        ]
      },
      {
        title: '公共方法',
        collapsable: true,
        children: [
          ['/utils/request', 'request(数据请求)'],
        ]
      },
      {
        title: '功能组件',
        collapsable: true,
        children: [
          ['/API/bread', 'Bread(面包屑)'],
        ]
      },
      {
        title: '业务组件',
        collapsable: true,
        children: [
          ['/business/refundTable', 'RefundTable()'],
        ]
      },
      ['/deployProject', '部署'],
    ]
  }
}
