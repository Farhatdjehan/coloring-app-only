import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  AsyncStorage,
  Text,
  TouchableOpacity,
} from "react-native";
import ToolBar from "../../../../component/ToolBar";
import AppText from "../../../../component/Text";
import styleApp from "../../../../../res/style/style";
import { sizeFont, sizeWidth, sizeHeight } from "../../../../util/Size";
import IconCircleButton from "../../../../component/IconCircleButton";
import NavigationActions from "../../../../router/NavigationActions";
import {
  COLOR_APP_UNDO,
  COLOR_APP_SAVE,
  COLOR_APP_CLEAR,
} from "../../../../../res/style/AppStyle";
import Svg from "react-native-svg";
import ColorPen from "../../../../component/ColorPen";
import Color from "../../../../component/Color";
import Pen from "../../../../component/Pen";
import Shape from "../../../../component/Shape";
import Shape2 from "../../../../component/Shape2";
import ShapePan from "../../../../component/ShapePan";
import ShapeKai from "../../../../component/ShapeKai";
import ShapeKai2 from "../../../../component/ShapeKai2";
import ShapeKai3 from "../../../../component/ShapeKai3";
import ShapeAnimals from "../../../../component/ShapeAnimals";
import ShapeAnimals2 from "../../../../component/ShapeAnimals2";
import ShapeObjects from "../../../../component/ShapeObjects";
import Button from "../../../../component/Button";
import { strings } from "../../../../config/i18n/i18n";
import {
  COLOR_DATA,
  PEN_DATA,
  NUMBER_SACLE,
  NUMBER_PATH,
} from "../../../../../Constant";
const { width, height } = Dimensions.get("window");

import { inject, observer } from "mobx-react";
import { Modal } from "react-native";
@inject("paintStore")
@observer
export default class LetPaintingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isload: false,
      modalVisible: false,
      // images: [
      //   require("../../../../../res/images_paint/policeman/1.jpg"),
      //   require("../../../../../res/images_paint/policeman/2.jpg"),
      //   require("../../../../../res/images_paint/policeman/3.jpg"),
      //   require("../../../../../res/images_paint/policeman/4.jpg"),
      // ],
      prevIndex: [],
    };
  }
  componentDidMount() {
    this.setState({ modalVisible: true });
  }

  setPrevIndex = (newIndex) => {
    let newPrevIndex = [...this.state.prevIndex];
    newPrevIndex.push(newIndex);
    this.setState({ prevIndex: newPrevIndex });
  };

  onPressUndo() {
    const { navigation } = this.props;
    const prevIndexLength = this.state.prevIndex?.length;
    const paint = navigation.getParam("paint");
    if (prevIndexLength > 0) {
      let newPrevIndex = [...this.state.prevIndex];
      const id = this.state.prevIndex[prevIndexLength - 1].id;
      const idPath = this.state.prevIndex[prevIndexLength - 1].idPath;
      if (paint === "Animals")
        this.props.paintStore.pointAnimals[id].point[idPath].listData.pop();
      else this.props.paintStore.pointObjects[id].point[idPath].listData.pop();
      newPrevIndex.pop();
      this.setState({ prevIndex: newPrevIndex });
    }
  }

  render() {
    const { navigation } = this.props;
    const { modalVisible } = this.state;
    const item = navigation.getParam("item");
    const paint = navigation.getParam("paint");
    const char = navigation.getParam("char");
    let visibility = false;
    if (this?.state?.modalVisible) visibility = true;
    let numberScale = this.props.paintStore.pNumber * NUMBER_SACLE;
    let numberPath =
      this.props.paintStore.pNumber * this.props.paintStore.numberPath;
    return (
      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={visibility}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => this.setState({ modalVisible: false })}
                style={styles.xButton}
              >
                <Image
                  style={{ width: sizeWidth(10), resizeMode: "contain" }}
                  source={require("../../../../../res/images_paint/buttons/X.png")}
                />
              </TouchableOpacity>
              <View
                style={{
                  width: sizeWidth(80),
                  height: sizeHeight(80),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: sizeWidth(75), resizeMode: "contain" }}
                  source={require("../../../../../res/images_paint/modal/tutorial.png")}
                />
                {/* <SliderBox images={this.state.images} /> */}
              </View>
            </View>
          </View>
        </Modal>
        <Image
          style={styles.backgroundImage}
          source={require("../../../../../res/images_paint/background/bgchacha.png")}
        />
        {this.renderToolbar()}
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <View style={styles.contentHeader}>
            <Button
              onPress={() => this.onPressUndo()}
              style={styles.button_undo}
              textStyle={{ color: "#FFF200" }}
              text={"Undo"}
              textStyle={{ fontSize: sizeFont(3) }}
              iconLeft={require("../../../../../res/images_paint/buttons/undo.png")}
              displayEllipse={true}
            />
            <Button
              onPress={() => this.onPressClear(item, paint)}
              style={styles.button_clear}
              textStyle={{ color: "#FFF200" }}
              text={strings("common.clear")}
              textStyle={{ fontSize: sizeFont(3) }}
              iconLeft={require("../../../../../res/images_paint/buttons/bin.png")}
              displayEllipse={true}
            />
            <Button
              onPress={() => this.onPressSave(item, paint, char)}
              style={styles.button_save}
              text={strings("common.save")}
              textStyle={{ fontSize: sizeFont(3) }}
              iconLeft={require("../../../../../res/images_paint/buttons/save.png")}
              displayEllipse={true}
            />
          </View>

          <View style={styles.contentImage}>
            <Svg
              width={item.size.width * numberScale}
              height={item.size.height * numberScale}
              style={styles.svgStyle}
            >
              {item.data.map((itemData, index) => (
                <ShapeKai3
                  paint={paint}
                  numberScale={numberScale}
                  numberPath={numberPath}
                  data={itemData}
                  idPath={itemData.number - 1}
                  id={item.id}
                  name={item.name}
                  mau={"red"}
                  isPaint={true}
                  key={index}
                />
              ))}
            </Svg>

            <View style={styles.contentImageKai}>
              <Svg
                width={item.size.width * numberScale}
                height={item.size.height * numberScale}
                style={styles.svgStyle}
              >
                {item.data.map((itemData, index) => (
                  <Shape
                    paint={paint}
                    numberScale={numberScale}
                    numberPath={numberPath}
                    data={itemData}
                    idPath={itemData.number - 1}
                    id={item.id}
                    name={item.name}
                    mau={"red"}
                    isPaint={true}
                    key={index}
                    prevIndex={this.state.prevIndex}
                    setPrevIndex={this.setPrevIndex}
                  />
                ))}
              </Svg>
            </View>
          </View>

          <View style={styles.contentColor}>
            <View style={styles.contentPenColor}>
              <FlatList
                data={COLOR_DATA}
                style={{
                  margin: sizeWidth(0),
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItemPen}
              />
            </View>

            <View style={styles.contentPen}>
              <FlatList
                data={PEN_DATA}
                style={{
                  margin: sizeWidth(0),
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItemSelectPen}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  onPressSave(item, paint, char) {
    // Save paintedList
    this.props.paintStore.addPaintedList(paint, item.name);
    // AsyncStorage.setItem(
    //   "paintedList",
    //   JSON.stringify({ paintedList: this.props.paintStore.paintedList })
    // );
    let keyName;
    let listDataStore;
    // Save AsyncStore
    item.data.map((shape, shapeIndex) => {
      keyName = item.name + shapeIndex;
      listDataStore =
        paint == "Animals"
          ? this.props.paintStore.pointAnimals[item.id].point[shapeIndex]
              .listData
          : this.props.paintStore.pointObjects[item.id].point[shapeIndex]
              .listData;
      // AsyncStorage.setItem(
      //   keyName,
      //   JSON.stringify({ listDataStore: listDataStore })
      // );
    });

    const { navigation } = this.props;
    const studiedAlphabets = navigation.getParam("studiedAlphabet");
    const studiedNumber = navigation.getParam("studiedNumber");
    NavigationActions.navigate("LetPainted", {
      item: item,
      paint: paint,
      char: char,
      needIndexFromNavigation: true,
      isNumber: false,
      studiedAlphabet: studiedAlphabets,
      studiedNumber: studiedNumber,
    });
  }

  onPressClear(item, paint) {
    this.setState({ prevIndex: [] });
    paint === "Animals"
      ? this.props.paintStore.resetAnimals(item.name)
      : this.props.paintStore.resetObjects(item.name);
    // this.props.paintStore.removePaintedList(item.name);
  }

  renderItemPen = ({ item, index }) => {
    numberSelectPen = this.props.paintStore.getNumberSelectPen();
    source =
      numberSelectPen == 1
        ? item.img_1
        : numberSelectPen == 2
        ? item.img_2
        : numberSelectPen == 3
        ? item.img_3
        : numberSelectPen == 4
        ? item.img_4
        : null;
    if (numberSelectPen == 4) {
      stylesImg = styles.ImgColorPen4;
    } else {
      stylesImg = styles.ImgColor;
    }

    return (
      <Color
        source={source}
        id={item.id}
        isPen={false}
        onPress={this._onPressItem(item)}
        styleTouch={styles.TouchColor}
        styleImg={stylesImg}
        key={index}
      />
    );
  };

  _onPressItem(item) {
    return (event) => {
      //this.setState({colorDraw: item.color});
      this.props.paintStore.setColor(item.color);
      this.props.paintStore.setColorPen(item.id);
    };
  }

  renderItemSelectPen = ({ item, index }) => {
    if (item.id == 3) {
      return (
        <View style={styles.selectPen}>
          <Pen
            source={item.image}
            id={item.id}
            isPen={true}
            onPress={this._onPressItemPen(item)}
            styleTouch={styles.TouchPen}
            styleImg={styles.ImgPen4}
            key={index}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.selectPen}>
          <Pen
            source={item.image}
            id={item.id}
            isPen={true}
            onPress={this._onPressItemPen(item)}
            styleTouch={styles.TouchPen}
            styleImg={styles.ImgPen}
            key={index}
          />
        </View>
      );
    }
  };

  _onPressItemPen(item) {
    return (event) => {
      if (item.id == 4) {
        this.props.paintStore.setColor("white");
        this.props.paintStore.setStrokeColor(10);
        this.props.paintStore.setStrokeLinecap("round");
        this.props.paintStore.setStrokeLinejoin("miter");
        this.props.paintStore.setStrokeOpacity(1);
        this.props.paintStore.setStrokeDasharrayS(0);
        this.props.paintStore.setStrokeDasharrayG(0);
      } else {
        index = this.props.paintStore.getColorPenIsTrue();
        const color = COLOR_DATA[index].color;
        this.props.paintStore.setColor(color);
        this.props.paintStore.setStrokeColor(item.strokeWidth);
        this.props.paintStore.setStrokeLinecap(item.strokeLinecap);
        this.props.paintStore.setStrokeLinejoin(item.strokeLinejoin);
        this.props.paintStore.setStrokeOpacity(item.strokeOpacity);
        this.props.paintStore.setStrokeDasharrayS(item.strokeDasharrayS);
        this.props.paintStore.setStrokeDasharrayG(item.strokeDasharrayG);
      }
      this.props.paintStore.setSelectPen(item.id);
      this.setState({ isload: !this.state.isload });
    };
  }

  renderToolbar = () => {
    return (
      <ToolBar
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
  button_save: {
    width: sizeWidth(25),
    backgroundColor: COLOR_APP_SAVE,
    marginTop: sizeHeight(2),
  },
  button_clear: {
    width: sizeWidth(25),
    backgroundColor: COLOR_APP_CLEAR,
    marginTop: sizeHeight(2),
  },
  button_undo: {
    width: sizeWidth(25),
    backgroundColor: COLOR_APP_UNDO,
    marginTop: sizeHeight(2),
  },
  contentImage: {
    marginTop: sizeHeight(2),
    alignItems: "center",
    justifyContent: "center",
    height: sizeHeight(46),
    width: sizeWidth(90),
    backgroundColor: "#fff",
    borderRadius: sizeWidth(6),
    flexDirection: "row",
  },
  contentImageKai: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: sizeHeight(40.5),
    width: sizeWidth(90.5),
    borderRadius: sizeWidth(6),
    flexDirection: "row",
  },
  contentColor: {
    flex: 1,
    marginTop: sizeHeight(3),
    height: sizeHeight(35.5),
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: sizeWidth(6),
    borderTopRightRadius: sizeWidth(6),
    alignItems: "center",
    justifyContent: "center",
  },
  contentPenColor: {
    paddingHorizontal: sizeWidth(5),
    height: sizeHeight(10.5),
    width: "100%",
    borderTopLeftRadius: sizeWidth(6),
    borderTopRightRadius: sizeWidth(6),
    alignItems: "center",
    justifyContent: "center",
  },
  contentPen: {
    paddingHorizontal: sizeWidth(5),
    height: sizeHeight(20),
    width: "100%",
    backgroundColor: "#0B763C",
    borderTopLeftRadius: sizeWidth(6),
    borderTopRightRadius: sizeWidth(6),
    alignItems: "center",
    justifyContent: "center",
  },
  selectPen: {
    flex: 1,
    height: sizeHeight(20),
    marginHorizontal: sizeWidth(3),
    marginVertical: sizeHeight(4),
    borderRadius: sizeWidth(20),
    backgroundColor: "#CED0FF",
    alignItems: "center",
    justifyContent: "center",
  },
  TouchColor: {
    paddingTop: sizeHeight(10),
    width: sizeWidth(8.5),
    height: sizeHeight(8.5),
  },
  TouchPen: {
    width: sizeWidth(10),
    height: sizeHeight(6),
  },

  ImgColor: {
    resizeMode: "center",
    width: sizeWidth(5.5),
  },
  ImgColorPen4: {
    resizeMode: "center",
    width: sizeWidth(8),
    height: sizeHeight(8.5),
  },
  ImgPen: {
    resizeMode: "center",
    width: sizeWidth(5),
  },
  ImgPen4: {
    resizeMode: "center",
    width: sizeWidth(8),
  },
  contentHeader: {
    height: sizeHeight(8),
    width: sizeWidth(90.5),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  svgStyle: {
    // marginTop: sizeWidth(-10),
    // marginLeft: sizeWidth(-15),
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#11111155",
  },
  modalView: {
    backgroundColor: "#11111155",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: sizeHeight(100),
    width: sizeWidth(100),
  },
  xButton: {
    padding: sizeWidth(2),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: sizeWidth(20),
    zIndex: 100,
  },
});
