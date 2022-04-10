import React, { Component } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { sizeFont, sizeHeight, sizeWidth } from "../util/Size";
import AppText from "./Text";
import IconCircleButton from "./IconCircleButton";
import Icon from "./Icon";
import PropTypes from "prop-types";

export default class CardView extends Component {
  static propTypes = {
    title: PropTypes.string,
    total: PropTypes.string,
    image: PropTypes.any,
    onPress: PropTypes.func,
    style: PropTypes.any,
    backgroundColor: PropTypes.any,
    colorButton: PropTypes.any,
    disabled: PropTypes.bool,
    buttonSource: PropTypes.any,
  };

  render() {
    const {
      title,
      styleTitle,
      styleButton,
      total,
      backgroundColor,
      colorButton,
      image,
      onPress,
      style,
      disabled,
      styleImg,
      buttonSource,
    } = this.props;
    const defaultButtonSrc = require("../../res/images_paint/buttons/button_paint.png");
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.view_learn,
          { backgroundColor, marginVertical: sizeWidth(2) },
          style,
        ]}
      >
        <Image source={image} style={[styles.image, styleImg]} />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            marginRight: sizeWidth(1),
          }}
        >
          <View style={{ marginLeft: sizeWidth(5), flex: 1 }}>
            <AppText style={[styles.title, styleTitle]}>{title}</AppText>
          </View>
          <Image
            style={[styles.buttonPaint, styleButton]}
            source={buttonSource ? buttonSource : defaultButtonSrc}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view_learn: {
    width: sizeWidth(70),
    height: sizeWidth(70),
    borderRadius: sizeWidth(5),
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: sizeFont(4.5),
    color: "black",
  },
  total: {
    fontWeight: "600",
    fontSize: sizeFont(3.5),
  },
  image: {
    resizeMode: "center",
    width: sizeWidth(65),
  },
  buttonPaint: {
    resizeMode: "center",
    height: sizeWidth(10),
    width: sizeWidth(10),
    marginBottom: sizeWidth(5),
  },
});
