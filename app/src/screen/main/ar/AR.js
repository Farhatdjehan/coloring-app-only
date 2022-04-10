import React from "react";
import { View, Text } from "react-native";
import Toast from "react-native-toast-message";
import UnityView, { UnityModule } from "@asmadsen/react-native-unity-view";
import IconCircleButton from "../../../component/IconCircleButton";
import { COLOR_APP_BLUE } from "../../../../res/style/AppStyle";
import { sizeWidth } from "../../../util/Size";
import NavigationActions from "../../../router/NavigationActions";
import { isLoaded } from "expo-font";

export default class AR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      statusImage: "",
    };
  }
  //   const [count, setClickCount] = useState(0);
  //   console.log(count);
  //   const onUnityMessage = (hander) => {
  //     console.log({ hander });
  //   };

  //   const onClick = () => {
  //     UnityModule.postMessageToUnityManager({
  //       name: "ToggleRotate",
  //       data: "",
  //       callBack: (data) => {
  //         Alert.alert("Tip", JSON.stringify(data));
  //       },
  //     });
  //   };
  onPressHome = () => {
    NavigationActions.navigate("Paint");
  };
  componentDidMount = () => {
    this.setState({ isLoaded: true });
    UnityModule.resume();
  };
  componentWillUnmount = () => {
    this.setState({ isLoaded: false });
    UnityModule.postMessage("GameObject/Canvas", "SetActive", "hide");
    UnityModule.pause();
  };
  // componentDidUpdate = () => {
  //     if (this.state.isLoaded === false) {
  //       NavigationActions.navigate("Paint");
  //     }
  // };
  onMessage(event) {
    const { navigation } = this.props;
    const char = navigation.getParam("char");
    const screen = navigation.getParam("screen");
    // this.setState({ statusImage: event });
    // console.log(this.state.statusImage);
    if (event === "found") {
      UnityModule.pause();
      this.setState({ isLoaded: false });

      NavigationActions.navigate(screen, {
        studiedNumber: [],
        studiedAlphabet: [],
        char: char,
      });
      // Toast.show({
      //   type: "success",
      //   text2: "Sukses Scan!",
      // });
      Toast.show({
        type: "success",
        text1: "Sukses Scan!",
        visibilityTime: 2000,
      });
    }
  }

  render() {
    return (
      <>
        {this.state.isLoaded ? (
          <View style={{ flex: 1 }}>
            <IconCircleButton
              onPress={() => this.onPressHome()}
              styleButton={{
                marginLeft: sizeWidth(5),
                position: "absolute",
                zIndex: 2,
                top: 10,
              }}
              backgroundColor={COLOR_APP_BLUE}
              source={require("../../../../res/images_paint/buttons/arrow_back.png")}
            />

            <UnityView
              style={{ flex: 1 }}
              onMessage={this.onMessage.bind(this)}
            />
            {/* <Toast /> */}
          </View>
        ) : (
          <View></View>
        )}
      </>
    );
  }
}

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: "absolute",
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "600",
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: "400",
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: "700",
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: "600",
//     padding: 4,
//     paddingRight: 12,
//     textAlign: "right",
//   },
// });
