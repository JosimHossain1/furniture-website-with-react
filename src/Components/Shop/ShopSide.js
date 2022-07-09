import React from 'react';
import Category from './Category';
import Color from './Color';
import SideHW from './SideHW';

const ShopSide = () => {
    return (
        <div>
            <Category />
            <Color />
            <SideHW size="Height" />
            <SideHW size="Width" />
        </div>
    );
};

export default ShopSide;