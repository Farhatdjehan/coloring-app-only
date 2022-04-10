import React, { Component } from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import { APP_TEXT_APP, APP_TEXT_APP_2 } from "../../../res/style/AppStyle";
import { sizeFont, sizeHeight, sizeWidth } from "../../util/Size";
import PropTypes from "prop-types";
import WrapText from "../../component/WrapText";
import Button from "../../component/Button";
import { TouchableOpacity } from "react-native";
import NavigationActions from "../../router/NavigationActions";
import IconCircleButton from "../../component/IconCircleButton";

const { width, height } = Dimensions.get("window");

export default class ItemTutorial extends Component {
  static propTypes = {
    data: PropTypes.any,
    onPressNext: PropTypes.func,
    onPressPrev: PropTypes.func,
  };

  componentDidMount = () => {
    const { onPressNext } = this.props;
    setTimeout(
      function () {
        onPressNext();
      }.bind(this),
      3000
    );
  };

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={data.background_image} />
      </View>
    );
  }

  renderLine = () => {
    const { data } = this.props;
    return (
      <View style={styles.view_line}>
        <Image
          style={{ resizeMode: "center", width: sizeWidth(300) }}
          source={require("../../../res/images_paint/onB/line_4x_1.png")}
        />
      </View>
    );
  };

  renderImage = () => {
    const { data } = this.props;
    return (
      <View style={styles.view_header}>
        <View
          style={[styles.view_img, { backgroundColor: data.backgroundColor }]}
        >
          <Image style={styles.image} source={data.image} />
        </View>
      </View>
    );
  };

  renderBottom = () => {
    const { data } = this.props;
    return (
      <View style={styles.view_bottom}>
        <WrapText style={styles.text_title}>{data.title}</WrapText>
        <WrapText style={styles.text_content}>{data.content}</WrapText>
      </View>
    );
  };

  renderButton = () => {
    const { data, onPressNext, onPressPrev } = this.props;
    let button =
      data.id == 0 || data.id == 3 ? (
        <Button
          onPress={onPressNext}
          style={styles.button_one}
          text={data.button}
        />
      ) : (
        <View style={styles.button_two}>
          <IconCircleButton
            onPress={onPressPrev}
            style={styles.button_prev}
            backgroundColor={"#8871FF"}
            source={require("../../../res/images_paint/buttons/arrow_back.png")}
          />
          <Image
            style={{ resizeMode: "center", width: sizeWidth(25) }}
            source={data.dot}
          />
          <Button
            onPress={onPressNext}
            style={styles.button_next}
            textStyle={{ fontSize: sizeFont(4.5) }}
            text={data.button}
          />
        </View>
      );
    return <View style={styles.view_button}>{button}</View>;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: height,
    width: width,
  },
  view_header: {
    marginTop: sizeWidth(20),
    flex: 1.2,
    justifyContent: "center",
  },
  view_img: {
    width: sizeWidth(80),
    height: sizeWidth(80),
    borderRadius: sizeWidth(30),
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "center",
    width: sizeWidth(75),
    height: sizeWidth(75),
    justifyContent: "center",
    alignItems: "center",
  },
  view_bottom: {
    flex: 1.8,
    width: "100%",
    paddingHorizontal: sizeWidth(12),
    alignItems: "center",
  },
  text_title: {
    fontSize: sizeFont(6),
    textAlign: "center",
    paddingTop: sizeWidth(5),
    color: APP_TEXT_APP,
    fontWeight: "bold",
    marginBottom: sizeHeight(3),
  },
  text_content: {
    fontSize: sizeFont(4.2),
    color: APP_TEXT_APP,
    textAlign: "center",
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  button_two: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button_one: {
    width: sizeWidth(60),
    padding: sizeWidth(1),
  },
  button_next: {
    width: sizeWidth(20),
    padding: sizeWidth(1),
  },
  button_prev: {
    width: sizeWidth(20),
    padding: sizeWidth(1),
  },
  view_button: {
    flex: 0.5,
    width: "100%",
    paddingHorizontal: sizeWidth(12),
    alignItems: "center",
  },
});
