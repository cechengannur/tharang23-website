const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
        // namesub: [
        //     {
        //         id: 1,
        //         sub: 'Home',
        //         links: '/'
        //     },
        //     {
        //         id: 2,
        //         sub: 'Home 02',
        //         links: '/home-v2'
        //     },
        //     {
        //         id: 3,
        //         sub: 'Home 03',
        //         links: '/home-v3'
        //     },
        // ]
    },
    {
        id: 2,
        name: 'About',
        links: '#',
        namesub: [
            // {
            //     id: 1,
            //     sub: 'About 01',
            //     links: '/about-v1'
            // },
            {
                id: 1,
                sub: 'About',
                links: '/about-v2'
            },
            {
                id: 2,
                sub: 'Coming Soon',
                links: '/coming-soon'
            },
            {
                id: 3,
                sub: 'Community',
                links: '/community'
            },
            {
                id: 4,
                sub: 'Team Details',
                links: '/team-details'
            },
            {
                id: 5,
                sub: 'FAQ',
                links: '/faq'
            },
            {
                id: 6,
                sub: '404',
                links: '/404'
            },

        ]
    },
    {
        id: 3,
        name: 'Timeline',
        links: '/road-map-v2',
        // namesub: [
        //     // {
        //     //     id: 1,
        //     //     sub: 'Road Map 01',
        //     //     links: '/road-map-v1'
        //     // },
        //     // {
        //     //     id: 1,
        //     //     sub: 'Timeline',
        //     //     links: '/road-map-v2'
        //     // },
        // ]
    },
    {
        id: 4,
        name: 'Nft',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Nft Item',
                links: '/nft-item'
            },
            {
                id: 2,
                sub: 'Nft Item Details',
                links: '/nft-item-details'
            },
        ],
    },
    {
        id: 5,
        name: 'Blog',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Our Blog',
                links: '/blog'
            },
            {
                id: 2,
                sub: 'Blog Details',
                links: '/blog-details'
            },
        ],
    },
    {
        id: 6,
        name: 'Contact',
        links: '/contact'
    },
    
]

export default menus;