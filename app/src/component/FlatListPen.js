import React, {
    Component
} from 'react';

import { StyleSheet, View, FlatList} from "react-native";
import { sizeFont, sizeWidth, sizeHeight } from "../util/Size";


import {inject, observer} from "mobx-react";
@inject('paintStore')
@observer

export default class FlatListPen extends Component{
  constructor () {
    super();
    this.state={
        isUpdate: true
      }
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  _update(isUpdate)
  {
    this.setState({isUpdate: isUpdate});
  }
  
  render(){
    const {data, renderItem} = this.props; 
    return <FlatList
                data={data}
                style={{
                margin: sizeWidth(0),
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />  
  }
}
