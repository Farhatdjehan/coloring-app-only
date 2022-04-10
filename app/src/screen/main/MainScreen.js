import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CardViewBg from "../../component/CardViewBg";
import Text from "../../component/Text";
import Icons from "../../component/Icon";
import { strings } from "../../config/i18n/i18n";
import NavigationActions from "../../router/NavigationActions";
import { sizeHeight, sizeWidth, sizeFont } from "../../util/Size";
import {
  ANIMALS_DATA,
  COLOR_DATA,
  OBJECTS_DATA,
  SOUND,
  CHACHA_LOGO,
} from "../../../Constant";
import PaintList from "../../component/PaintList";
import new_painting from "../../../res/images_paint/mainScreen/new_painting.svg";
import { Audio } from "expo-av";

import { inject, observer } from "mobx-react";
@inject("paintStore")
@observer
export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      isPlaying: false,
    };
  }

  componentDidMount() {
    // this._playRecording();
    // this.setState({ modalVisible: true });
  }

  componentWillUnmount() {}

  async _playRecording() {
    try {
      //alert("Kai");
      const { sound } = await Audio.Sound.createAsync(
        SOUND[0].sound,
        {
          shouldPlay: true,
          isLooping: true,
        },
        this._updateScreenForSoundStatus
      );
      this.sound = sound;
      this.setState({
        isPlaying: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  _updateScreenForSoundStatus = (status) => {};

  async _pauseAndPlayRecording() {
    if (this.sound != null) {
      if (this.state.isPlaying == true) {
        // console.log("playing..");
        await this.sound.playAsync();
      }
    }
  }

  render() {
    //this._pauseAndPlayRecording()
    var paintedList = this.props.paintStore.paintedList;
    var DataPaint = [];

    paintedList.map((item, index) => {
      paintItem =
        item.paint == "Animals"
          ? ANIMALS_DATA.find((animal) => animal.name == item.name)
          : OBJECTS_DATA.find((object) => object.name == item.name);

      DataPaint.push(paintItem);
    });

    return (
      <React.Fragment>
        <Image
          style={styles.backgroundImage}
          source={require("../../../res/images_paint/background/mainscreen.png")}
        />
        <View style={styles.container}>
          {/* <View style={styles.contentHeader}></View> */}
          <Image
            style={styles.logo}
            source={require("../../../res/assets/logo/chachalogo.png")}
          />
          {this.renderNewPainting()}
          {this.renderScanPackaging()}
          {/*
          <TouchableOpacity
          onPress={() => this.OnPressPaintedList(DataPaint)}
          style={styles.button}
        >
          <Text style={styles.title}>Gambarmu sebelumnya</Text>
          <Icons
            style={{ marginLeft: 15 }}
            source={require("../../../res/images_paint/buttons/next_arrow_2x.png")}
          />
        </TouchableOpacity>
          <View style={styles.contentColor}>
            <FlatList
              data={DataPaint}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              numColumns={1}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderItemPainted}
            />
          </View>
        */}
        </View>
      </React.Fragment>
    );
  }

  OnPressPaintedList(DataPaint) {
    if (DataPaint.length != 0) {
      NavigationActions.navigate("PaintedList", {
        studiedNumber: [],
        studiedAlphabet: [],
        DataPaint: DataPaint,
      });
    }
  }

  renderItemPainted = ({ item, index }) => {
    var backgroundColor = Math.floor(Math.random() * 11);
    return (
      <View
        style={[
          styles.painted,
          { backgroundColor: COLOR_DATA[backgroundColor].color },
        ]}
      >
        <PaintList
          key={index}
          item={item}
          onPress={this._onPressItemPen(item)}
        />
      </View>
    );
  };

  _onPressItemPen(item) {
    return (event) => {
      NavigationActions.navigate("LetNewPaint", {
        paint: item.paint,
        item: item,
        currentIndex: 0,
        needIndexFromNavigation: true,
        isNumber: false,
        studiedAlphabet: [],
        studiedNumber: [],
      });
    };
  }

  renderNewPainting = () => {
    return (
      <CardViewBg
        bgImage={require("../../../res/images_paint/mainScreen/coloring.png")}
        bgImageStyle={styles.bgImageStyle}
        Img={new_painting}
        title={strings("menu.new_painting")}
        style={styles.newPainting}
        styleImg={styles.styleImg}
        styleTitle={{
          fontSize: sizeFont(4.5),
          color: "#fff",
        }}
        styleButton={{ width: sizeWidth(15), height: sizeWidth(15) }}
        backgroundColor={"#ff0000"}
        colorButton={"#00A100"}
        buttonSource={require("../../../res/images_paint/mainScreen/button_paint.png")}
        onPress={() => {
          //this._playRecording();
          NavigationActions.navigate("Paint");
        }}
      />
    );
  };
  renderScanPackaging = () => {
    return (
      <CardViewBg
        bgImage={require("../../../res/images_paint/mainScreen/scan-coming.jpg")}
        bgImageStyle={styles.bgImageStyleComing}
        Img={new_painting}
        title={strings("menu.scan_packaging")}
        style={styles.newPainting}
        styleImg={styles.styleImg}
        styleTitle={{
          fontSize: sizeFont(4.5),
          color: "rgba(255,255,255,0.25)",
        }}
        styleButton={{ width: sizeWidth(15), height: sizeWidth(15) }}
        backgroundColor={"#ff0000"}
        colorButton={"#00A100"}
        buttonSource={require("../../../res/images_paint/mainScreen/AR.png")}
        onPress={() => {
          //this._playRecording();
          // NavigationActions.navigate("SceneSelection");
        }}
      />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: sizeHeight(100),
    // backgroundColor: "red",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  logo: {
    alignItems: "center",
    height: sizeWidth(25),
    width: sizeWidth(50),
    marginTop: sizeHeight(-8),
  },
  contentHeader: {
    height: sizeHeight(16.5),
    width: sizeWidth(80.5),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  contentColor: {
    height: sizeHeight(20.5),
    width: sizeWidth(70),
    alignItems: "center",
    justifyContent: "center",
  },
  painted: {
    flex: 1,
    marginHorizontal: sizeWidth(2),
    height: sizeHeight(18.5),
    width: sizeHeight(14.5),
    borderRadius: sizeWidth(3),
    backgroundColor: "#FF5C00",
    alignItems: "center",
    justifyContent: "center",
  },
  newPainting: {
    width: sizeWidth(75),
    height: sizeWidth(55),
  },
  styleImg: {
    resizeMode: "center",
    width: sizeWidth(75),
    height: sizeWidth(55),
    marginBottom: sizeWidth(-10),
    marginRight: sizeWidth(3),
    marginTop: sizeWidth(-5),
  },
  title: {
    fontWeight: "bold",
    fontSize: sizeFont(4.5),
    color: "black",
  },
  button: {
    margin: sizeWidth(2),
    alignItems: "center",
    flexDirection: "row",
    height: sizeHeight(5),
    width: sizeWidth(70),
  },
  scroll: {
    width: "100%",
    alignItems: "center",
  },
  bgImageStyle: {
    overflow: "hidden",
    borderRadius: sizeWidth(5),
    width: sizeWidth(75),
    height: sizeWidth(55),
  },
  bgImageStyleComing: {
    overflow: "hidden",
    borderRadius: sizeWidth(5),
    width: sizeWidth(75),
    height: sizeWidth(55),
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff55",
  },
  modalView: {
    backgroundColor: "#ffffff55",
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
});
