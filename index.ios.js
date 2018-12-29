/**
 * Copyright (c) 2017-present, dudongge
 * All rights reserved.
 *
 * https://github.com/dudongge/DDGMeiTuan
 * copyright by dudodongge
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import RootScene from './src/RootScene';

export default class MeiTuan extends Component {
    render() {
        return (
            <RootScene />
        );
    }
}

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
