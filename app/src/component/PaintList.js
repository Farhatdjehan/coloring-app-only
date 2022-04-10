import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { sizeFont, sizeWidth, sizeHeight } from "../util/Size";
import Shape from "./Shape";
import Shape2 from "./Shape2";
import ShapeKai from "./ShapeKai";
import ShapePainted from "./ShapePainted";
import { TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import Svg from "react-native-svg";
import { NUMBER_PATH, NUMBER_SACLE } from "../../Constant";

import { inject, observer } from "mobx-react";
@inject("paintStore")
@observer
export default class PaintList extends Component {
  constructor() {
    super();
  }

  _onShowUnderlay() {
    //this.props.paintStore.setSelectPen(this.props.item.id);
  }

  render() {
    const { item, onPress, styleColor } = this.props;
    numberScale =
      (this.props.paintStore.pNumber / 3) * this.props.paintStore.numberScale;
    numberPath =
      (this.props.paintStore.pNumber / 3) * this.props.paintStore.numberPath;
    return (
      <TouchableHighlight
        underlayColor="none"
        onShowUnderlay={this._onShowUnderlay.bind(this)}
        onPress={onPress}
        style={[
          false ? styles.containerShow : styles.containerHide,
          styleColor,
        ]}
      >
        <Svg
          width={item?.size.width * numberScale}
          height={item?.size.height * numberScale}
        >
          {item &&
            item.data.map((itemData, index) => (
              <ShapePainted
                numberScale={numberScale}
                numberPath={numberPath}
                paint={item.paint}
                data={itemData}
                idPath={itemData.number - 1}
                id={item.id}
                name={item.name}
                mau={""}
                isPaint={false}
                key={index}
              />
            ))}
        </Svg>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  containerHide: {
    flex: 1,
    resizeMode: "center",
    height: sizeHeight(17.5),
    width: sizeHeight(16.5),
    borderRadius: sizeWidth(3),
    alignItems: "center",
    justifyContent: "center",
  },
  containerShow: {
    flex: 1,
    resizeMode: "center",
    height: sizeHeight(17.5),
    width: sizeHeight(16.5),
    borderRadius: sizeWidth(3),
    alignItems: "center",
    justifyContent: "center",
  },
});
