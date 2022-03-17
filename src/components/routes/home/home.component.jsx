import DirectoryMenuComponent from "../../directory-menu/directory-menu.component";

const Home = () =>  {
    const categories =  [
        {
            'id': 1,
            'name': 'hats',
            'img': 'https://i.ibb.co/cvpntL1/hats.png',
            'url': '/hats',
        },
        {
            'id': 2,
            'name': 'jackets',
            'img': 'https://i.ibb.co/px2tCc3/jackets.png',
            'url': '/jackets',
        },
        {
            'id': 3,
            'name': 'sneakers',
            'img': 'https://i.ibb.co/0jqHpnp/sneakers.png',
            'url': '/sneakers',
        },
        {
            'id': 4,
            'name': 'women',
            'img': 'https://i.ibb.co/GCCdy8t/womens.png',
            'url': '/women',
            'size': 'large'
        },
        {
            'id': 5,
            'name': 'Men',
            'img': 'https://i.ibb.co/R70vBrQ/men.png',
            'url': '/men',
            'size': 'large'
        },
    ]
    return <>
        <DirectoryMenuComponent categories={categories}/>
    </>;
}

export default Home;
