module.exports = {
    title: "建大安徽老乡会",
    base: '/No.wan-doc/',
    description: '记录了一群人的小美好，直达内心的故事',
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
                    // ['/2013/', '故事的开始'],
                    ['/2013/partingVidio', '致我们逝去的青春']
                ]
            },
            // {
            //     title: '2014级',
            //     // collapsable: false,
            //     children: [
            //         ['/2014/', '开疆扩土'],
            //         ['/2014/article/taoge', '涛哥']
            //     ]
            // },
            {
                title: '2015级',
                // collapsable: false,
                children: [
                    ['/2015/article/liuyunfei', '云飞'],
                    // ['/2015/article/gengtianfeng', '天丰'],
                ]
            },
            // {
            //     title: '2016级',
            //     // collapsable: false,
            //     children: [
            //         ['/2016/', '曾经的小宝贝儿']
            //     ]
            // },
            {
                title: '2017级',
                // collapsable: false,
                children: [
                    ['/2017/welcomeVidio', '致萌新'],
                ]
            }
        ],
        lastUpdated: '最后更新',
    },
}