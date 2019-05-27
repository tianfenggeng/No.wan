module.exports = {
    title: "建大安徽老乡会",
    base: '/No.wan-doc/',
    description: '记载着一群人的小美好 ',
    port: '9088',
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/logo.jpg'
        }],

    ],
    themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: '关于', link: '/about/' },
        ],

        sidebar: [
            {
                title: '2013级',
                // collapsable: false,
                children: [
                    ['/2013/', '故事的开始'],
                    ['/2013/article/fengge', '峰哥——何处安放的灵魂']
                ]
            },
            {
                title: '2014级',
                // collapsable: false,
                children: [
                    ['/2014/', '开疆扩土'],
                    ['/2014/article/taoge', '涛哥']
                ]
            },
            {
                title: '2015级',
                // collapsable: false,
                children: [
                    ['/2015/', '云飞的一切']
                ]
            },
            {
                title: '2016级',
                // collapsable: false,
                children: [
                    ['/2016/', '曾经的小宝贝儿']
                ]
            },
            {
                title: '2017级',
                // collapsable: false,
                children: [
                    ['/2017/welcomeVidio', '致萌新'],
                ]
            }
        ]
    },
}