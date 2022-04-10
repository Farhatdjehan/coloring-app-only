import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { sizeWidth } from "../util/Size";
import NavigationActions from "../router/NavigationActions";
import PropTypes from "prop-types";
import IconCircleButton from "./IconCircleButton";
import { COLOR_APP_BLUE } from "../../res/style/AppStyle";

export default class BackIcon extends Component {
  static propTypes = {
    text: PropTypes.string,
    style: PropTypes.any,
    target: PropTypes.string,
  };

  render() {
    const { style, text } = this.props;
    return (
      <IconCircleButton
        onPress={this.onPress}
        styleButton={{ marginLeft: sizeWidth(5), marginRight: sizeWidth(2) }}
        source={require("../../res/images_paint/buttons/arrow_back.png")}
      />
    );
  }

  onPress = () => {
    const { target } = this.props;
    if (target) {
      NavigationActions.navigate(target);
    } else {
      NavigationActions.goBack();
    }
  };
}

const styles = StyleSheet.create({
  Container: {
    padding: sizeWidth(1),
    flexDirection: "row",
    alignItems: "center",
  },
});
