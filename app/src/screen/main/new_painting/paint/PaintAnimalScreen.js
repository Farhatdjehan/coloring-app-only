import React, { Component } from "react";
import {
  BackHandler,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import _ from "lodash";
import ToolBar from "../../../../component/ToolBar";
import AppText from "../../../../component/Text";
import styleApp from "../../../../../res/style/style";
import { strings } from "../../../../config/i18n/i18n";
import { ANIMALS_DATA } from "../../../../../Constant";
import { sizeFont, sizeWidth, sizeHeight } from "../../../../util/Size";
import NavigationActions from "../../../../router/NavigationActions";
import Toast from "react-native-toast-message";
export default class LearnAlphabetScreen extends Component {
  state = {
    studiedAlphabet: [],
    studiedNumber: [],
  };
  handleBackButton = () => {
    NavigationActions.navigate("Paint");
    return true;
  };
  componentDidMount = () => {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  };
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require("../../../../../res/images_paint/background/bgchacha.png")}
        />
        {this.renderToolbar()}
        {this.renderAnimals()}
      </View>
    );
  }

  renderToolbar = () => {
    return (
      <ToolBar
        center={
          <AppText style={styleApp.ToolBarText}>
            {strings("paint.listAnimal")}
          </AppText>
        }
        target="Paint"
      />
    );
  };

  renderAnimals = () => {
    return (
      <FlatList
        data={ANIMALS_DATA}
        style={{
          paddingHorizontal: sizeWidth(4),
          flexGrow: 0,
          marginTop: sizeHeight(4),
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItemAnimal}
      />
    );
  };

  renderItemAnimal = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.onPressAnimal({ item })}
        style={[styles.view]}
      >
        <Image
          source={item.url}
          // resizeMode="center"
          style={{
            height: sizeWidth(40),
            width: sizeWidth(40),
          }}
        />
      </TouchableOpacity>
    );
  };

  onPressAnimal = ({ item }) => {
    const { navigation } = this.props;
    const studiedAlphabets = navigation.getParam("studiedAlphabet");
    const studiedNumber = navigation.getParam("studiedNumber");
    const char = navigation.getParam("char");
    // console.log(char);

    NavigationActions.navigate("LetNewPaint", {
      paint: item.paint,
      item: item,
      currentIndex: ANIMALS_DATA.findIndex((letter) => letter.id == item.id),
      needIndexFromNavigation: true,
      isNumber: false,
      studiedAlphabet: studiedAlphabets,
      studiedNumber: studiedNumber,
      char: char,
    });
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
    borderRadius: sizeWidth(5),
    backgroundColor: "transparent",
    marginBottom: sizeWidth(8),
    height: sizeWidth(40),
  },
});
