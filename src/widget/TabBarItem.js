/**
 * Copyright (c) 2017-present, dudongge
 * All rights reserved.
 *
 * https://github.com/dudongge/DDGMeiTuan
 * copyright by dudodongge
 */

import React, { Component } from 'react';
import { Image } from 'react-native';

// create a component
class TabBarItem extends Component {
    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (
            <Image
                source={this.props.focused
                    ? selectedImage
                    : this.props.normalImage}
                style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
            />
        );
    }
}

//make this component available to the app
export default TabBarItem;
