import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import { inject, observer } from "mobx-react";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import Constants from "expo-constants";
import { Device } from "../../model/Device";
import { getLocale } from "../../config/i18n/i18n";
import { getLanguage, getToken } from "../../util/Store";
import { sizeWidth, sizeHeight } from "../../util/Size";
import { ANIMALS_DATA, OBJECTS_DATA, NUMBER_SACLE } from "../../../Constant";

@inject("loadingStore")
@inject("userStore")
@inject("paintStore")
@observer
export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const language = await getLanguage();
      if (language) {
        this.props.userStore.changeLanguage(language);
      } else {
        const languageLocale = getLocale(i18n.locale);
        this.props.userStore.changeLanguage(languageLocale);
      }
      const token = await getToken();
      if (token) {
        this.props.navigation.replace("Main");
      } else {
        this.props.navigation.replace("Tutorial");
      }
    } catch (e) {
      this.props.navigation.replace("Tutorial");
    }

    // paintedList
    // AsyncStorage.getAllKeys((err, keys) => {
    //   keyName = "paintedList";
    //   if ((keys.findIndex(k => k === keyName)) == -1)
    //   {
    //     AsyncStorage.setItem(keyName, JSON.stringify({paintedList: []}));
    //     this.props.paintStore.paintedList = [];
    //   }
    //   else
    //   {
    //     AsyncStorage.getItem(keyName, (err, result) => {
    //       this.props.paintStore.paintedList = JSON.parse(result).paintedList;
    //     });
    //   }
    // });
    // Kai number Scale
    pNumber = 1;
    pNumberMin = 100;
    isPass = false;
    ANIMALS_DATA.map((item, index) => {
      keys = { index };
      isPass = false;
      pNumber = 1;
      while (!isPass) {
        nScale = pNumber * NUMBER_SACLE;
        if (
          item.size.width * nScale > sizeWidth(90.5) ||
          item.size.height * nScale > sizeHeight(40.5)
        ) {
          isPass = true;
          break;
        }
        pNumber++;
      }
      pNumberMin = pNumberMin > pNumber ? pNumber : pNumberMin;

      //AsyncStore
      item.data.map((shape, shapeIndex) => {
        // AsyncStorage.getAllKeys((err, keys) => {
        //   keyName = item.name + shapeIndex;
        //   if (keys.findIndex((k) => k === keyName) == -1) {
        //     AsyncStorage.setItem(
        //       keyName,
        //       JSON.stringify({ name: keyName, listDataStore: [] })
        //     );
        //     this.props.paintStore.pointAnimals[index].point[
        //       shapeIndex
        //     ].listData = [];
        //   } else {
        //     AsyncStorage.getItem(keyName, (err, result) => {
        //       this.props.paintStore.pointAnimals[index].point[
        //         shapeIndex
        //       ].listData = JSON.parse(result).listDataStore;
        //     });
        //   }
        // });
      });
    });

    OBJECTS_DATA.map((item, index) => {
      keys = { index };
      isPass = false;
      pNumber = 1;
      while (!isPass) {
        nScale = pNumber * NUMBER_SACLE;
        if (
          item.size.width * nScale > sizeWidth(90.5) ||
          item.size.height * nScale > sizeHeight(40.5)
        ) {
          isPass = true;
          break;
        }
        pNumber++;
      }
      pNumberMin = pNumberMin > pNumber ? pNumber : pNumberMin;

      //AsyncStore
      item.data.map((shape, shapeIndex) => {
        // AsyncStorage.getAllKeys((err, keys) => {
        //   keyName = item.name + shapeIndex;
        //   if (keys.findIndex((k) => k === keyName) == -1) {
        //     AsyncStorage.setItem(
        //       keyName,
        //       JSON.stringify({ name: keyName, listDataStore: [] })
        //     );
        //     this.props.paintStore.pointObjects[index].point[
        //       shapeIndex
        //     ].listData = [];
        //   } else {
        //     AsyncStorage.getItem(keyName, (err, result) => {
        //       this.props.paintStore.pointObjects[index].point[
        //         shapeIndex
        //       ].listData = JSON.parse(result).listDataStore;
        //     });
        //   }
        // });
      });
    });

    this.props.paintStore.setPNumber(pNumberMin - 1);
  }

  render() {
    return <View />;
  }
}
