import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  COLOR_APP_BLACK,
  COLOR_APP_BUTTON,
  COLOR_APP_WHITE,
  FONT_FAMILY_APP,
  COLOR_APP_RED,
} from "../../res/style/AppStyle";
import Text from "./Text";
import { sizeFont, sizeWidth } from "../util/Size";
import PropTypes from "prop-types";
import Fontello from "./Fontello";
import Icons from "./Icon";

export default class Button extends Component<Props> {
  static propTypes = {
    text: PropTypes.string,
    textStyle: PropTypes.any,
    onPress: PropTypes.func,
    iconRight: PropTypes.any,
    iconLeft: PropTypes.any,
    iconLeftStyle: PropTypes.any,
    style: PropTypes.any,
    disabled: PropTypes.bool,
    configLeft: PropTypes.any,
    configRight: PropTypes.any,
    displayEllipse: PropTypes.bool,
  };

  static defaultProps = {
    configLeft: {
      color: COLOR_APP_BLACK,
      size: sizeWidth(4),
      style: {
        marginRight: sizeWidth(3),
      },
    },
    configRight: {
      color: COLOR_APP_BLACK,
      size: sizeWidth(4),
      style: {
        marginLeft: sizeWidth(3),
      },
    },
  };

  render() {
    const {
      style,
      configLeft,
      configRight,
      textStyle,
      onPress,
      disabled,
      text,
      iconRight,
      iconLeft,
      iconLeftStyle,
      displayEllipse,
    } = this.props;

    return (
      <TouchableOpacity
        style={[styles.view_button, style]}
        onPress={onPress}
        disabled={disabled}
      >
        {displayEllipse ? (
          <Icons
            style={styles.icon}
            source={require("../../res/images/ic_ellipse.png")}
          />
        ) : null}
        <View style={styles.button}>
          {iconLeft && (
            <Icons
              style={[
                {
                  width: sizeWidth(4),
                  height: sizeWidth(4),
                  marginRight: sizeWidth(3),
                },
                iconLeftStyle,
              ]}
              source={iconLeft}
            />
          )}
          {this.props.children || (
            <Text style={[styles.TextInside, textStyle]}>{text}</Text>
          )}
          {iconRight && (
            <Icons
              style={{
                width: sizeWidth(4),
                height: sizeWidth(4),
                marginLeft: sizeWidth(3),
              }}
              source={iconRight}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  view_button: {
    backgroundColor: COLOR_APP_BUTTON,
    borderRadius: sizeWidth(10),
    elevation: 1,
    shadowOffset: { width: 0, height: sizeWidth(0.1) },
    shadowOpacity: 0.1,
  },
  button: {
    padding: sizeWidth(1),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    left: sizeWidth(1),
  },
  TextInside: {
    textAlign: "center",
    fontFamily: FONT_FAMILY_APP,
    color: COLOR_APP_WHITE,
    fontSize: sizeFont(5.3),
  },
});
