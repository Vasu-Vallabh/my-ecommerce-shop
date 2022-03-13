import React from 'react';
import MenuItemComponent from "../../../components/menu-item/menu-item.component";
import './directory.styles.scss';

function DirectoryMenuComponent() {
    const menuItems = [
        {
            'id': 1,
            'name': 'Hats',
            'img': 'https://i.ibb.co/cvpntL1/hats.png',
        },
        {
            'id': 2,
            'name': 'Jackets',
            'img': 'https://i.ibb.co/px2tCc3/jackets.png',
        },
        {
            'id': 3,
            'name': 'Sneakers',
            'img': 'https://i.ibb.co/0jqHpnp/sneakers.png',
        },
        {
            'id': 4,
            'name': 'Women',
            'img': 'https://i.ibb.co/GCCdy8t/womens.png',
            'size': 'large'
        },
        {
            'id': 5,
            'name': 'Men',
            'img': 'https://i.ibb.co/R70vBrQ/men.png',
            'size': 'large'
        },
    ];
    return (
        <div className='directory-menu'>
            {
                menuItems.map((menu) =>  <MenuItemComponent key={menu.id} menuItem={menu}/>)
            }
        </div>
    );
}

export default DirectoryMenuComponent;
