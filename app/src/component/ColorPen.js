import React, {
    Component
} from 'react';

import { StyleSheet, View, Image, TouchableHighlight} from "react-native";
import { sizeFont, sizeWidth, sizeHeight } from "../util/Size";


import {inject, observer} from "mobx-react";
@inject('paintStore')
@observer

export default class ColorPen extends Component{
  constructor () {
    super();
  }

  _onShowUnderlay()
  {
    this.props.paintStore.setColorPen(this.props.id)                  
  }
  
  render(){
    const {source, isPen, id, onPress, styleTouch, styleImg} = this.props;
    let isShow = this.props.paintStore.getColorPen(id).isColor;
    
    return <TouchableHighlight activeOpacity={1}  onShowUnderlay={this._onShowUnderlay.bind(this)} underlayColor="white"  onPress={onPress} 
            style={[{flex: 1, alignItems: "center", justifyContent: "center"}, isShow ? styles.containerShowColor : styles.containerHideColor, styleTouch]}>
              <Image source={source} style={styleImg}/>
            </TouchableHighlight >
    
  }
}

const styles = StyleSheet.create({
  containerHideColor: {
    marginHorizontal: sizeWidth(1),
  },
  containerShowColor: {
    marginTop: sizeWidth(-4),
    marginHorizontal: sizeWidth(1),
  }
  });
