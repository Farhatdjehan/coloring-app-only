import React, { Component } from "react";

import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { sizeFont, sizeWidth, sizeHeight } from "../util/Size";

import { inject, observer } from "mobx-react";
import { TouchableOpacity } from "react-native";
@inject("paintStore")
@observer
export default class ColorPen extends Component {
  constructor() {
    super();
  }

  render() {
    const { source, isPen, id, onPress, styleTouch, styleImg } = this.props;
    let isShow = this.props.paintStore.getColorPen(id).isColor;

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[
          { flex: 1, alignItems: "center", justifyContent: "center" },
          isShow ? styles.containerShowColor : styles.containerHideColor,
          styleTouch,
        ]}
      >
        <Image source={source} style={[styles.img, styleImg]} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerHideColor: {
    marginHorizontal: sizeWidth(1),
  },
  containerShowColor: {
    marginTop: sizeWidth(-8),
    marginHorizontal: sizeWidth(1),
  },
  img: {
    resizeMode: "center",
    width: sizeWidth(5.5),
  },
});
