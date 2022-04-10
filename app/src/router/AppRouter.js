import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Splash from "../screen/splash/Splash";
import TutorialScreen from "../screen/tutorial/TutorialScreen";
import MainScreen from "../screen/main/MainScreen";
import PaintScreen from "../screen/main/new_painting/PaintScreen";
import PaintAnimalScreen from "../screen/main/new_painting/paint/PaintAnimalScreen";
import PaintObjectScreen from "../screen/main/new_painting/paint/PaintObjectScreen";
import PaintedListScreen from "../screen/main/new_painting/paint/PaintedListScreen";
import LetNewPaintScreen from "../screen/main/new_painting/painting/LetNewPaintScreen";
import LetPaintScreen from "../screen/main/new_painting/painting/LetPaintingScreen";
import LetPaintedScreen from "../screen/main/new_painting/painting/LetPaintedScreen";
import Scan from "../screen/main/camera/Scan";
import AR from "../screen/main/ar/AR";
import SceneSelection from "../screen/main/ar/SceneSelection";

const AppRouter = createStackNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Tutorial: {
      screen: TutorialScreen,
    },
    Main: {
      screen: MainScreen,
    },
    // Scan: {
    //   screen: Scan,
    // },
    Scan: {
      screen: AR,
    },
    SceneSelection: {
      screen: SceneSelection,
    },
    Paint: {
      screen: PaintScreen,
    },
    PaintAnimals: {
      screen: PaintAnimalScreen,
    },
    PaintObjects: {
      screen: PaintObjectScreen,
    },
    PaintedList: {
      screen: PaintedListScreen,
    },
    LetNewPaint: {
      screen: LetNewPaintScreen,
    },
    LetPaint: {
      screen: LetPaintScreen,
    },
    LetPainted: {
      screen: LetPaintedScreen,
    },
  },
  {
    headerMode: "none",
    initialRouteName: "Splash",
  }
);

export const AppContainer = createAppContainer(AppRouter);
