import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { sizeHeight, sizeWidth } from "../util/Size";
import Text from "./Text";
import BackIcon from "./BackIcon";
import styleApp from "../../res/style/style";

export default class ToolBar extends Component {
  static propTypes = {
    left: PropTypes.object,
    center: PropTypes.object,
    right: PropTypes.object,
    left_right: PropTypes.object,
    title: PropTypes.string,
    target: PropTypes.string,
  };

  render() {
    const { left, center, right, left_right, title, target } = this.props;
    if (title) {
      return (
        <View>
          <View style={styles.StatusBar} />
          <View style={styles.Default}>
            <Text numberOfLines={1} style={styleApp.ToolBarText}>
              {title}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View style={right ? styles.ContainerRight : styles.Container}>
            <View style={styles.Left}>
              {left || <BackIcon target={target} />}
            </View>
            <View style={styles.Center}>{center}</View>
            {left_right && this.renderLeftRight(left_right)}
            {this.renderRight(right)}
          </View>
        </View>
      );
    }
  }

  renderLeftRight = (left_right) => {
    return <View style={styles.LeftRight}>{left_right}</View>;
  };

  renderRight = (right) => {
    return <View style={styles.Right}>{right}</View>;
  };
}

const styles = StyleSheet.create({
  Container: {
    height: sizeHeight(8.9),
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    alignItems: "center",
  },
  ContainerRight: {
    height: sizeHeight(8.9),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
  },
  Default: {
    height: sizeHeight(6.9),
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  Left: {
    width: "12%",
    justifyContent: "center",
    alignItems: "center",
  },
  Right: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  LeftRight: {
    position: "absolute",
    right: 40,
  },
  Center: {
    justifyContent: "flex-start",
    marginLeft: sizeWidth(1),
    alignItems: "center",
  },
});
