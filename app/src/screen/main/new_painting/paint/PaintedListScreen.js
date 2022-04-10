import React, { Component } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import _ from "lodash";
import ToolBar from "../../../../component/ToolBar";
import AppText from "../../../../component/Text";
import styleApp from "../../../../../res/style/style";
import { strings } from "../../../../config/i18n/i18n";
import {
  ANIMALS_DATA,
  COLOR_DATA,
  NUMBER_SACLE,
  NUMBER_PATH,
  OBJECTS_DATA,
} from "../../../../../Constant";
import { sizeFont, sizeWidth, sizeHeight } from "../../../../util/Size";
import NavigationActions from "../../../../router/NavigationActions";
import Svg from "react-native-svg";
import Shape from "../../../../component/Shape";
import Shape2 from "../../../../component/Shape";
import ShapeKai from "../../../../component/ShapeKai";
import ShapePainted from "../../../../component/ShapePainted";
import PaintList from "../../../../component/PaintList";

import { inject, observer } from "mobx-react";
@inject("paintStore")
@observer
export default class PaintListScreen extends Component {
  state = {
    studiedAlphabet: [],
    studiedNumber: [],
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require("../../../../../res/images_paint/background/backgroundA_2x.png")}
        />
        <Image
          style={styles.newPaintImage}
          source={require("../../../../../res/images_paint/newPaintingScreen/imgListPaint_2x.png")}
        />
        <View
          style={{
            zIndex: 10,
            backgroundColor: "white",
            height: sizeHeight(10),
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {this.renderToolbar()}
        </View>
        {this.renderPaintedList()}
      </View>
    );
  }

  renderToolbar = () => {
    return (
      <ToolBar
        center={
          <AppText style={styleApp.ToolBarText}>
            {strings("paint.paintedList")}
          </AppText>
        }
      />
    );
  };

  renderPaintedList = () => {
    const { navigation } = this.props;
    //var DataPaint = navigation.getParam("DataPaint");
    var paintedList = this.props.paintStore.paintedList;
    var DataPaint = [];

    paintedList.map((item, index) => {
      paintItem =
        item.paint == "Animals"
          ? ANIMALS_DATA.find((animal) => animal.name == item.name)
          : OBJECTS_DATA.find((object) => object.name == item.name);

      DataPaint.push(paintItem);
    });
    var AddNew = { name: "addNew" };
    DataPaint.push(AddNew);
    return (
      <FlatList
        data={DataPaint}
        style={{
          margin: sizeWidth(2),
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItemPainted}
      />
    );
  };

  renderItemPainted = ({ item }) => {
    const { navigation } = this.props;
    const Img = item.image;
    let backgroundColor =
      item.name === "addNew"
        ? "#00C8BA"
        : COLOR_DATA[Math.floor(Math.random() * 11)].color;

    numberScale =
      (this.props.paintStore.pNumber / 3) * this.props.paintStore.numberScale;
    numberPath =
      (this.props.paintStore.pNumber / 3) * this.props.paintStore.numberPath;
    let paint_svg =
      item.name === "addNew" ? (
        <Image
          source={require("../../../../../res/images_paint/buttons/new_draw_2x.png")}
          style={{ resizeMode: "center", width: sizeHeight(18.4) }}
        />
      ) : (
        <Svg
          width={item.size.width * numberScale}
          height={item.size.height * numberScale}
        >
          {item.data.map((itemData, index) => (
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
      );
    return (
      <TouchableOpacity
        onPress={() => this.onPressPainted({ item })}
        style={[styles.view, { backgroundColor: backgroundColor }]}
      >
        {paint_svg}
      </TouchableOpacity>
    );
  };

  onPressPainted = ({ item }) => {
    const { navigation } = this.props;
    const studiedAlphabets = navigation.getParam("studiedAlphabet");
    const studiedNumber = navigation.getParam("studiedNumber");

    if (item.name === "addNew") {
      NavigationActions.navigate("Paint");
    } else {
      NavigationActions.navigate("LetNewPaint", {
        paint: item.paint,
        item: item,
        currentIndex: ANIMALS_DATA.findIndex((letter) => letter.id == item.id),
        needIndexFromNavigation: true,
        isNumber: false,
        studiedAlphabet: studiedAlphabets,
        studiedNumber: studiedNumber,
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: "stretch",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  newPaintImage: {
    position: "absolute",
    left: "-8%",
    width: "128%",
    height: "100%",
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: sizeHeight(18.4),
    height: sizeHeight(18.4),
    marginHorizontal: sizeWidth(8),
    marginVertical: sizeWidth(6),
    borderRadius: sizeWidth(6),
  },
});
