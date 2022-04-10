import React, { Component } from "react";

import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { sizeFont, sizeWidth, sizeHeight } from "../util/Size";
import { TouchableOpacity } from "react-native";

import { inject, observer } from "mobx-react";
@inject("paintStore")
@observer
export default class ColorPen extends Component {
  constructor() {
    super();
  }

  render() {
    const { source, isPen, id, onPress, styleTouch, styleImg } = this.props;
    let isShow = this.props.paintStore.getSelectPen(id).isSelect;

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[
          { flex: 1, alignItems: "center", justifyContent: "center" },
          isShow ? styles.containerShowPen : styles.containerHidePen,
          styleTouch,
        ]}
      >
        <Image source={source} style={styleImg} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerHidePen: {
    borderRadius: sizeWidth(20),
    paddingHorizontal: sizeWidth(2),
  },
  containerShowPen: {
    borderRadius: sizeWidth(20),
    backgroundColor: "white",
    paddingHorizontal: sizeWidth(2),
  },
});
