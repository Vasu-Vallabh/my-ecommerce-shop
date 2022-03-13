import React from "react";
import './menu.styles.scss';

function MenuItemComponent({menuItem:{name, img, size}}) {
    return (
        <div className={` ${size} menu-item `} >
            <div className="background-image" style={{ backgroundImage: `url(${img})` }}/>
            <div className="content">
                <h1 className="title">{name.toUpperCase()}</h1>
                <span className="subtitle">SHOW NOW</span>
            </div>
        </div>
    )
}

export default MenuItemComponent;
