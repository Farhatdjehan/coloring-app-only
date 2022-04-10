import React, { Component } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import LoadingView from "./src/component/LoadingView";
import { AppContainer } from "./src/router/AppRouter";
import NavigationActions from "./src/router/NavigationActions";
// import {inject, observer} from "mobx-react/native";
import { inject, observer } from "mobx-react";
import { STATUS_BAR_HEIGHT } from "./Constant";
// import * as Font from 'expo-font';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from "expo-ads-admob";

@inject("loadingStore")
@inject("navigationStore")
@observer
export default class App extends Component {
  //custom state for loading font
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    //await font async loaded
    // await Font.loadAsync({
    //   'expo-font': require('./res/assets/fonts/Overpass-ExtraBold.ttf'),
    // });
    // Set state for font load
    this.setState({ fontLoaded: true });
    // NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange)
  }

  componentWillUnmount() {
    // NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = async (isConnected) => {
    if (isConnected) {
    }
  };

  render() {
    // not render unless font loaded
    if (this.state.fontLoaded) {
      return (
        <View style={{ flex: 1 }}>
          {/* <View style={styles.statusBar}>
            <StatusBar translucent={true} />
          </View> */}
          <AppContainer
            ref={(ref) => NavigationActions.setTopLevelNavigator(ref)}
            onNavigationStateChange={this.handleNavigationChange}
          />
          {/* <LoadingView /> */}
          {/*<AdMobBanner
            style={styles.bottomBanner}
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            testDeviceID="EMULATOR"
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={this.bannerError} /> */}
        </View>
      );
    } else {
      return null;
    }
  }

  handleNavigationChange = (prevState, newState) => {
    const currentScreen = getActiveRouteName(newState);
    const prevScreen = getActiveRouteName(prevState);
    if (prevScreen !== currentScreen) {
      this.props.navigationStore.onChangeNavigation(prevScreen, currentScreen);
    }
  };
}

const styles = StyleSheet.create({
  bottomBanner: {
    position: "absolute",
    bottom: 0,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
  },
});

const getActiveRouteName = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
};
