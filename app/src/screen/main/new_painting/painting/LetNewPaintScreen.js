import React, { Component } from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import ToolBar from "../../../../component/ToolBar";
import AppText from "../../../../component/Text";
import styleApp from "../../../../../res/style/style";
import { strings } from "../../../../config/i18n/i18n";
import { sizeFont, sizeWidth, sizeHeight } from "../../../../util/Size";
import IconCircleButton from "../../../../component/IconCircleButton";
import Swiper from "react-native-swiper";
import Button from "../../../../component/Button";
import Icons from "../../../../component/Icon";
import NavigationActions from "../../../../router/NavigationActions";
import { AsyncStorage } from "react-native";
import { saveLearnedData } from "../../../../util/Store";
import {
  COLOR_APP_BLUE,
  COLOR_APP_RED,
} from "../../../../../res/style/AppStyle";
import { ANIMALS_DATA, OBJECTS_DATA } from "../../../../../Constant";
export default class LetNewPaintScreen extends Component {
  state = {
    page: 0,
    isTouchNext: false,
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const currentIndex = navigation.getParam("currentIndex");
    this.state = {
      page: currentIndex,
      isTouchNext: false,
    };
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const paint = navigation.getParam("paint");
    const char = navigation.getParam("char");
    const page = this.state.page;
    const Img = item.imageColor;
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require("../../../../../res/images_paint/background/mainscreen.png")}
        />
        {this.renderToolbar()}
        <View
          style={{
            marginTop: sizeHeight(-8.9),
            height: sizeHeight(100),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: sizeWidth(6),
            }}
          >
            <View style={styles.contentImage}>
              {/* <Img
                height={sizeHeight(55)}
                width={sizeWidth(75)}
                borderRadius={sizeWidth(6)}
              /> */}
              <View style={styles.imgWrapper}>
                <Image
                  source={Img}
                  style={styles.imgStyle}
                  width={sizeWidth(75)}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: sizeHeight(3),
                  // marginVertical: sizeHeight(-5),
                }}
              >
                <Button
                  onPress={() => this.onPressPainting(item, paint, char)}
                  style={styles.button_painting}
                  text={strings("common.painting")}
                  textStyle={styles.textStyle}
                  iconRight={require("../../../../../res/images_paint/buttons/edit.png")}
                />
                <Button
                  onPress={() => this.onPressNext(item, paint, char)}
                  style={styles.button_replay}
                  text={strings("common.next")}
                  textStyle={styles.textStyle}
                  iconRight={require("../../../../../res/images_paint/buttons/next.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  onPressNext = (item, paint, char) => {
    // console.log("char", char);
    let DATA = paint === "Animals" ? ANIMALS_DATA : OBJECTS_DATA;
    let nextItem;
    let currentIndex;
    if (char === "fireman") {
      currentIndex = DATA.findIndex((letter) => letter.id == item.id);
      if (currentIndex === 5) {
        nextItem = DATA[0];
      } else {
        nextItem = DATA[currentIndex + 1];
      }
    } else if (char === "constructorman") {
      currentIndex = DATA.findIndex((letter) => letter.id == item.id);
      if (currentIndex === 12) {
        nextItem = DATA[6];
      } else {
        nextItem = DATA[currentIndex + 1];
      }
    } else {
      currentIndex = DATA.findIndex((letter) => letter.id == item.id);
      if (currentIndex === DATA.length - 1) {
        nextItem = DATA[0];
      } else {
        nextItem = DATA[currentIndex + 1];
      }
    }
    NavigationActions.navigate("LetNewPaint", {
      paint: nextItem.paint,
      item: nextItem,
      currentIndex: currentIndex,
      needIndexFromNavigation: true,
      isNumber: false,
      studiedAlphabet: [],
      studiedNumber: [],
    });
  };

  onPressPainting = (item, paint, char) => {
    const { navigation } = this.props;
    const studiedAlphabets = navigation.getParam("studiedAlphabet");
    const studiedNumber = navigation.getParam("studiedNumber");

    NavigationActions.navigate("LetPaint", {
      paint: paint,
      item: item,
      char: char,
      needIndexFromNavigation: true,
      isNumber: false,
      studiedAlphabet: studiedAlphabets,
      studiedNumber: studiedNumber,
    });
  };

  renderToolbar = () => {
    return (
      <ToolBar
        style={{ zIndex: 10 }}
        right={this.renderToolbarRight()}
        center={<AppText style={styleApp.ToolBarText}></AppText>}
      />
    );
  };

  renderToolbarRight = () => {
    return (
      <IconCircleButton
        onPress={() => this.onPressHome()}
        styleButton={{
          marginRight: sizeWidth(5),
        }}
        source={require("../../../../../res/images_paint/buttons/home.png")}
      />
    );
  };

  onPressHome = () => {
    NavigationActions.navigate("Main");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  view_control: {
    marginBottom: sizeWidth(2),
    flexDirection: "row",
    width: "80%",
    alignContent: "center",
    justifyContent: "space-between",
  },
  icon_mode: {
    height: sizeWidth(17),
    width: sizeWidth(17),
  },
  text: {
    fontWeight: "bold",
    fontSize: sizeFont(5),
    color: "#595959",
    marginTop: sizeWidth(8),
  },
  text_number: {
    fontWeight: "bold",
    fontSize: sizeFont(5),
    color: "#595959",
  },
  textStyle: {
    fontSize: sizeFont(3.3),
  },
  button_replay: {
    width: sizeWidth(35),
    backgroundColor: "#0B763C",
    padding: sizeWidth(1),
    marginLeft: sizeWidth(2),
  },
  button_painting: {
    width: sizeWidth(35),
    // width: sizeWidth(75),
    backgroundColor: "#0D4D99",
    padding: sizeWidth(1),
    marginRight: sizeWidth(2),
  },
  contentImage: {
    height: sizeHeight(51.5),
    width: sizeWidth(85),
    borderRadius: sizeWidth(3),
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: sizeWidth(1),
    paddingRight: sizeWidth(1),
    paddingTop: sizeWidth(2),
    marginTop: sizeWidth(2),
  },
  imgWrapper: {
    borderRadius: sizeWidth(3),
    overflow: "hidden",
  },
  imgStyle: {
    height: sizeWidth(75),
    width: sizeWidth(75),
  },
});
