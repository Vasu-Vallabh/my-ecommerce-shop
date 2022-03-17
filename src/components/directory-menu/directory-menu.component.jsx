import {Component} from 'react';
import MenuItemComponent from "../menu-item/menu-item.component";
import './directory.styles.scss';

class DirectoryMenuComponent extends Component {
    render() {
        const categories = this.props.categories
        return (
            <div className='directory-menu'>
                {
                    categories.map(({id, ...otherSectionProps}) =>  {
                        return <MenuItemComponent key={id} {...otherSectionProps}/>
                    })
                }
            </div>
        );
    }
}

export default DirectoryMenuComponent;
