import React, { Component } from "react";
import _ from "lodash";
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import ToolBar from "../../../component/ToolBar";
import styleApp from "../../../../res/style/style";
import AppText from "../../../component/Text";
import { strings } from "../../../config/i18n/i18n";
import CardView from "../../../component/CardView";
import CardViewBg from "../../../component/CardViewBg";

import { sizeWidth, sizeHeight, sizeFont } from "../../../util/Size";
import NavigationActions from "../../../router/NavigationActions";
import { AsyncStorage } from "react-native";
import Toast from "react-native-toast-message";

export default class PaintScreen extends Component {
  state = {
    isLoading: false,
    studiedAlphabet: [],
    studiedNumber: [],
  };
  componentDidMount() {
    // AsyncStorage.getAllKeys((error, keys) => {
    //   AsyncStorage.multiGet(keys, (error, stores) => {
    //     const alphabets = [];
    //     const numbers = [];
    //     stores.map((result, i, store) => {
    //       // get at each store's key/value so you can work with it
    //       if (store[i] != null) {
    //         //data provide is [key: value] - value [[]]
    //         if (store[i][0] == "learned_alphabets") {
    //           alphabets.push(JSON.parse(store[i][1]));
    //         }
    //         if (store[i][0] == "learned_numbers") {
    //           numbers.push(JSON.parse(store[i][1]));
    //         }
    //       }
    //       if (i == keys.length - 1) {
    //         this.setState({
    //           isLoading: false,
    //           studiedAlphabet: alphabets[0],
    //           studiedNumber: numbers[0],
    //         });
    //       }
    //     });
    //   });
    // });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Image
            style={styles.backgroundImage}
            source={require("../../../../res/images_paint/background/bgchacha.png")}
          />
          {this.renderToolbar()}
          <ScrollView contentContainerStyle={styles.containerScroll}>
            <View
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                marginTop: sizeWidth(7.5),
                marginBottom: sizeWidth(5),
              }}
            >
              {this.renderPoliceman()}
              {this.renderFireman()}
              {this.renderContructorMan()}
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <React.Fragment>
          <Image
            style={styles.backgroundImage}
            source={require("../../../../res/images_paint/background/bgchacha.png")}
          />
          <Text>Loading...</Text>
        </React.Fragment>
      );
    }
  }

  renderToolbar = () => {
    return (
      <ToolBar
        center={
          <AppText style={styleApp.ToolBarText}>
            {strings("paint.title")}
          </AppText>
        }
      />
    );
  };

  renderPoliceman = () => {
    return (
      <CardViewBg
        bgImage={require("../../../../res/images_paint/newPaintingScreen/policeman.png")}
        bgImageStyle={styles.bgImageStyle}
        title={strings("paint.animals")}
        style={styles.newPainting}
        styleImg={styles.styleImg}
        iconLeft={true}
        containerStyle={{
          justifyContent: "flex-start",
          marginBottom: sizeHeight(-3),
        }}
        styleTitle={{
          fontSize: sizeFont(3.5),
          color: "#111",
        }}
        styleButton={{ width: sizeWidth(7.5), height: sizeWidth(7.5) }}
        backgroundColor={"#ff0000"}
        colorButton={"#00A100"}
        // onPress={() =>
        //   NavigationActions.navigate("PaintAnimals", {
        //     studiedNumber: this.state.studiedNumber,
        //     studiedAlphabet: this.state.studiedAlphabet,
        //     char: "policeman",
        //   })
        // }
        onPress={() =>
          NavigationActions.navigate("Scan", {
            studiedNumber: this.state.studiedNumber,
            studiedAlphabet: this.state.studiedAlphabet,
            char: "policeman",
            screen: "PaintAnimals",
          })
        }
      />
    );
  };

  renderFireman = () => {
    return (
      <CardViewBg
        bgImage={require("../../../../res/images_paint/newPaintingScreen/fireman.jpg")}
        bgImageStyle={styles.bgImageStyle}
        title={strings("paint.fireman")}
        style={styles.newPainting}
        styleImg={styles.styleImg}
        iconLeft={true}
        containerStyle={{
          justifyContent: "flex-start",
          marginBottom: sizeHeight(-3),
        }}
        styleTitle={{
          fontSize: sizeFont(3.5),
          color: "#111",
        }}
        styleButton={{ width: sizeWidth(7.5), height: sizeWidth(7.5) }}
        backgroundColor={"#ff0000"}
        colorButton={"#00A100"}
        // onPress={() =>
        //   NavigationActions.navigate("PaintObjects", {
        //     studiedNumber: this.state.studiedNumber,
        //     studiedAlphabet: this.state.studiedAlphabet,
        //     char: "fireman",
        //   })
        // }
        onPress={() =>
          NavigationActions.navigate("Scan", {
            studiedNumber: this.state.studiedNumber,
            studiedAlphabet: this.state.studiedAlphabet,
            char: "fireman",
            screen: "PaintObjects",
          })
        }
      />
    );
  };

  renderContructorMan = () => {
    return (
      <CardViewBg
        bgImage={require("../../../../res/images_paint/newPaintingScreen/construction.png")}
        bgImageStyle={styles.bgImageStyle}
        title={strings("paint.constructor")}
        style={styles.newPainting}
        styleImg={styles.styleImg}
        iconLeft={true}
        containerStyle={{
          justifyContent: "flex-start",
          marginBottom: sizeHeight(-3),
        }}
        styleTitle={{
          fontSize: sizeFont(3.5),
          color: "#111",
        }}
        styleButton={{ width: sizeWidth(7.5), height: sizeWidth(7.5) }}
        backgroundColor={"#ff0000"}
        colorButton={"#00A100"}
        onPress={() =>
          NavigationActions.navigate("Scan", {
            studiedNumber: this.state.studiedNumber,
            studiedAlphabet: this.state.studiedAlphabet,
            char: "constructorman",
            screen: "PaintObjects",
          })
        }
        // onPress={() =>
        //   NavigationActions.navigate("PaintObjects", {
        //     studiedNumber: this.state.studiedNumber,
        //     studiedAlphabet: this.state.studiedAlphabet,
        //     char: "constructorman",
        //   })
        // }
      />
    );
  };

  renderAnimal = () => {
    return (
      <CardView
        image={require("../../../../res/images_paint/newPaintingScreen/policeman.png")}
        styleImg={styles.styleAnimal}
        title={strings("paint.animals")}
        backgroundColor={"#fff"}
        colorButton={"#FE6230"}
        onPress={() =>
          NavigationActions.navigate("PaintAnimals", {
            studiedNumber: this.state.studiedNumber,
            studiedAlphabet: this.state.studiedAlphabet,
          })
        }
      />
    );
  };

  renderObject = () => {
    const { studiedAlphabet } = this.state;

    return (
      <CardView
        image={require("../../../../res/images_paint/newPaintingScreen/object_2x.png")}
        styleImg={styles.styleObject}
        title={strings("paint.objects")}
        backgroundColor={"#B29FFF"}
        colorButton={"#FE6230"}
        onPress={() =>
          NavigationActions.navigate("PaintObjects", {
            studiedNumber: this.state.studiedNumber,
            studiedAlphabet: this.state.studiedAlphabet,
          })
        }
      />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerScroll: {
    alignItems: "center",
    flexGrow: 1,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  newPaintImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  bgImageStyle: {
    overflow: "hidden",
    borderRadius: sizeWidth(3),
    width: sizeWidth(75),
    height: sizeWidth(75),
  },
  newPainting: {
    width: sizeWidth(75),
    height: sizeWidth(75),
  },
  styleImg: {
    resizeMode: "center",
    width: sizeWidth(75),
    height: sizeWidth(75),
    marginBottom: sizeWidth(-10),
    marginRight: sizeWidth(3),
    marginTop: sizeWidth(-5),
  },
});
