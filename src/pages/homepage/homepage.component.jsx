import React from 'react';
import './homepage.styles.scss';
import DirectoryMenuComponent from "./directory-menu/directory-menu.component";

const HomepageComponent = () => (
    <div className='homepage'>
        <DirectoryMenuComponent/>
    </div>
)

export default HomepageComponent;
