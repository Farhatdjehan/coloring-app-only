import React from "react";
import { Platform, StatusBar } from "react-native";
import { isIPhoneX } from "./src/util/Device";
import { sizeWidth } from "./src/util/Size";
import { strings } from "./src/config/i18n/i18n";
import logo from "./res/assets/logo/chachalogo.png";

//policeman
import policeman1 from "./res/images_paint/policeman/1.svg";
import policeman2 from "./res/images_paint/policeman/2.svg";
import policeman3 from "./res/images_paint/policeman/3.svg";
import policeman4 from "./res/images_paint/policeman/4.svg";
import policeman5 from "./res/images_paint/policeman/5.svg";
import policeman6 from "./res/images_paint/policeman/6.svg";

import OUTPUT1 from "./src/mobx/policeman/scene1";
import OUTPUT2 from "./src/mobx/policeman/scene2";
import OUTPUT3 from "./src/mobx/policeman/scene3";
import OUTPUT4 from "./src/mobx/policeman/scene4";
import OUTPUT5 from "./src/mobx/policeman/scene5";
import OUTPUT6 from "./src/mobx/policeman/scene6";

//fireman
import fireman1 from "./res/images_paint/fireman/1.svg";
import fireman2 from "./res/images_paint/fireman/2.svg";
import fireman3 from "./res/images_paint/fireman/3.svg";
import fireman4 from "./res/images_paint/fireman/4.svg";
import fireman5 from "./res/images_paint/fireman/5.svg";
import fireman6 from "./res/images_paint/fireman/6.svg";

import OUTPUT_F1 from "./src/mobx/fireman/scene1";
import OUTPUT_F2 from "./src/mobx/fireman/scene2";
import OUTPUT_F3 from "./src/mobx/fireman/scene3";
import OUTPUT_F4 from "./src/mobx/fireman/scene4";
import OUTPUT_F5 from "./src/mobx/fireman/scene5";
import OUTPUT_F6 from "./src/mobx/fireman/scene6";

//constructionman
import constructionman1 from "./res/images_paint/constructionman/1.svg";
import constructionman2 from "./res/images_paint/constructionman/2.svg";
import constructionman3 from "./res/images_paint/constructionman/3.svg";
import constructionman4 from "./res/images_paint/constructionman/4.svg";
import constructionman5 from "./res/images_paint/constructionman/5.svg";
import constructionman6 from "./res/images_paint/constructionman/6.svg";
import constructionman7 from "./res/images_paint/constructionman/7.svg";

import OUTPUT_C1 from "./src/mobx/constructionman/scene1";
import OUTPUT_C2 from "./src/mobx/constructionman/scene2";
import OUTPUT_C3 from "./src/mobx/constructionman/scene3";
import OUTPUT_C4 from "./src/mobx/constructionman/scene4";
import OUTPUT_C5 from "./src/mobx/constructionman/scene5";
import OUTPUT_C6 from "./src/mobx/constructionman/scene6";
import OUTPUT_C7 from "./src/mobx/constructionman/scene7";

import penA_1 from "./res/images_paint/pen/A/penA_1.svg";
import penA_2 from "./res/images_paint/pen/A/penA_2.svg";
import penA_3 from "./res/images_paint/pen/A/penA_3.svg";
import penA_4 from "./res/images_paint/pen/A/penA_4.svg";
import penA_5 from "./res/images_paint/pen/A/penA_5.svg";
import penA_6 from "./res/images_paint/pen/A/penA_6.svg";
import penA_7 from "./res/images_paint/pen/A/penA_7.svg";
import penA_8 from "./res/images_paint/pen/A/penA_8.svg";
import penA_9 from "./res/images_paint/pen/A/penA_9.svg";
import penA_10 from "./res/images_paint/pen/A/penA_10.svg";
import penA_11 from "./res/images_paint/pen/A/penA_11.svg";
import penA_12 from "./res/images_paint/pen/A/penA_12.svg";
import penA_13 from "./res/images_paint/pen/A/penA_13.svg";
import penA_14 from "./res/images_paint/pen/A/penA_14.svg";
import penA_15 from "./res/images_paint/pen/A/penA_15.svg";
import penA_16 from "./res/images_paint/pen/A/penA_16.svg";
import penA_17 from "./res/images_paint/pen/A/penA_17.svg";
import penA_18 from "./res/images_paint/pen/A/penA_18.svg";
import penA_19 from "./res/images_paint/pen/A/penA_19.svg";
import penA_20 from "./res/images_paint/pen/A/penA_20.svg";
import penA_21 from "./res/images_paint/pen/A/penA_21.svg";
import penA_22 from "./res/images_paint/pen/A/penA_22.svg";

import penB_1 from "./res/images_paint/pen/B/penB_1.svg";
import penB_2 from "./res/images_paint/pen/B/penB_2.svg";
import penB_3 from "./res/images_paint/pen/B/penB_3.svg";
import penB_4 from "./res/images_paint/pen/B/penB_4.svg";
import penB_5 from "./res/images_paint/pen/B/penB_5.svg";
import penB_6 from "./res/images_paint/pen/B/penB_6.svg";
import penB_7 from "./res/images_paint/pen/B/penB_7.svg";
import penB_8 from "./res/images_paint/pen/B/penB_8.svg";
import penB_9 from "./res/images_paint/pen/B/penB_9.svg";
import penB_10 from "./res/images_paint/pen/B/penB_10.svg";
import penB_11 from "./res/images_paint/pen/B/penB_11.svg";
import penB_12 from "./res/images_paint/pen/B/penB_12.svg";
import penB_13 from "./res/images_paint/pen/B/penB_13.svg";
import penB_14 from "./res/images_paint/pen/B/penB_14.svg";
import penB_15 from "./res/images_paint/pen/B/penB_15.svg";
import penB_16 from "./res/images_paint/pen/B/penB_16.svg";
import penB_17 from "./res/images_paint/pen/B/penB_17.svg";
import penB_18 from "./res/images_paint/pen/B/penB_18.svg";
import penB_19 from "./res/images_paint/pen/B/penB_19.svg";
import penB_20 from "./res/images_paint/pen/B/penB_20.svg";
import penB_21 from "./res/images_paint/pen/B/penB_21.svg";
import penB_22 from "./res/images_paint/pen/B/penB_22.svg";

import penC_1 from "./res/images_paint/pen/C/penC_1.svg";
import penC_2 from "./res/images_paint/pen/C/penC_2.svg";
import penC_3 from "./res/images_paint/pen/C/penC_3.svg";
import penC_4 from "./res/images_paint/pen/C/penC_4.svg";
import penC_5 from "./res/images_paint/pen/C/penC_5.svg";
import penC_6 from "./res/images_paint/pen/C/penC_6.svg";
import penC_7 from "./res/images_paint/pen/C/penC_7.svg";
import penC_8 from "./res/images_paint/pen/C/penC_8.svg";
import penC_9 from "./res/images_paint/pen/C/penC_9.svg";
import penC_10 from "./res/images_paint/pen/C/penC_10.svg";
import penC_11 from "./res/images_paint/pen/C/penC_11.svg";
import penC_12 from "./res/images_paint/pen/C/penC_12.svg";
import penC_13 from "./res/images_paint/pen/C/penC_13.svg";
import penC_14 from "./res/images_paint/pen/C/penC_14.svg";
import penC_15 from "./res/images_paint/pen/C/penC_15.svg";
import penC_16 from "./res/images_paint/pen/C/penC_16.svg";
import penC_17 from "./res/images_paint/pen/C/penC_17.svg";
import penC_18 from "./res/images_paint/pen/C/penC_18.svg";
import penC_19 from "./res/images_paint/pen/C/penC_19.svg";
import penC_20 from "./res/images_paint/pen/C/penC_20.svg";
import penC_21 from "./res/images_paint/pen/C/penC_21.svg";
import penC_22 from "./res/images_paint/pen/C/penC_22.svg";

import penD_1 from "./res/images_paint/pen/D/penD_1.svg";
import penD_2 from "./res/images_paint/pen/D/penD_2.svg";
import penD_3 from "./res/images_paint/pen/D/penD_3.svg";
import penD_4 from "./res/images_paint/pen/D/penD_4.svg";
import penD_5 from "./res/images_paint/pen/D/penD_5.svg";
import penD_6 from "./res/images_paint/pen/D/penD_6.svg";
import penD_7 from "./res/images_paint/pen/D/penD_7.svg";
import penD_8 from "./res/images_paint/pen/D/penD_8.svg";
import penD_9 from "./res/images_paint/pen/D/penD_9.svg";
import penD_10 from "./res/images_paint/pen/D/penD_10.svg";
import penD_11 from "./res/images_paint/pen/D/penD_11.svg";
import penD_12 from "./res/images_paint/pen/D/penD_12.svg";
import penD_13 from "./res/images_paint/pen/D/penD_13.svg";
import penD_14 from "./res/images_paint/pen/D/penD_14.svg";
import penD_15 from "./res/images_paint/pen/D/penD_15.svg";
import penD_16 from "./res/images_paint/pen/D/penD_16.svg";
import penD_17 from "./res/images_paint/pen/D/penD_17.svg";
import penD_18 from "./res/images_paint/pen/D/penD_18.svg";
import penD_19 from "./res/images_paint/pen/D/penD_19.svg";
import penD_20 from "./res/images_paint/pen/D/penD_20.svg";
import penD_21 from "./res/images_paint/pen/D/penD_21.svg";
import penD_22 from "./res/images_paint/pen/D/penD_22.svg";

import pencil from "./res/images_paint/pen/stylePen/pencil.svg";
import paint_brush from "./res/images_paint/pen/stylePen/paint-brush.svg";
import crayon from "./res/images_paint/pen/stylePen/crayon.svg";
import brush from "./res/images_paint/pen/stylePen/brush.svg";
import eraser from "./res/images_paint/pen/stylePen/eraser.svg";

const STATUS_BAR_IOS_HEIGHT = isIPhoneX() ? 30 : 20;
export const STATUS_BAR_HEIGHT =
  Platform.OS === "ios" ? STATUS_BAR_IOS_HEIGHT : StatusBar.currentHeight;
export const BOTTOM_BAR_HEIGHT = isIPhoneX() ? 34 : 0;
export const TOOL_BAR_HEIGHT = sizeWidth(12) + STATUS_BAR_HEIGHT;

// Zoom  shape
export const NUMBER_SACLE = 0.5;
export const NUMBER_PATH = NUMBER_SACLE / 4;
export const CHACHA_LOGO = logo;

export const TUTORIAL_DATA = [
  {
    id: 0,
    image: require("./res/assets/logo/chachalogo.png"),
    background_image: require("./res/images_paint/onB/bg1.png"),
    title: strings("tutorial.tutorial_title_1"),
    backgroundColor: "#006C3900",
    content: strings("tutorial.tutorial_content_1"),
  },
  // {
  //   id: 1,
  //   image: require("./res/images_paint/onB/tutorial_2x_2.png"),
  //   background_image: require("./res/images_paint/onB/OnB_2x_2.png"),
  //   title: strings("tutorial.tutorial_title_2"),
  //   backgroundColor: "#656AFF",
  //   content: strings("tutorial.tutorial_content_2"),
  //   button: strings("tutorial.button_let_go"),
  //   // dot: require("./res/images_paint/onB/dot2_2x.png"),
  // },
  // {
  //   id: 2,
  //   image: require('./res/images_paint/onB/tutorial_2x_3.png'),
  //   background_image: require('./res/images_paint/onB/OnB_2x_3.png'),
  //   title: strings('tutorial.tutorial_title_3'),
  //   backgroundColor: "#C3184E",
  //   content: strings('tutorial.tutorial_content_3'),
  //   button: strings('tutorial.button_ship'),
  //   dot: require("./res/images_paint/onB/dot3_2x.png"),
  // },
  // {
  //   id: 3,
  //   image: require('./res/images_paint/onB/tutorial_2x_4.png'),
  //   background_image: require('./res/images_paint/onB/OnB_2x_4.png'),
  //   title: strings('tutorial.tutorial_title_4'),
  //   backgroundColor: "#971993",
  //   content: strings('tutorial.tutorial_content_4'),
  //   button: strings('tutorial.button_let_go'),
  // }
];

export const COLOR_DATA = [
  {
    id: 0,
    img_1: require("./res/images_paint/pen/B/penB_2x_1.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_1.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_1.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_1.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_1.png"),

    imgP_1: penB_1,
    imgP_2: penA_1,
    imgP_3: penC_1,
    imgP_4: penD_1,
    imgP_5: penA_1,

    color: "#019653",
  },
  {
    id: 1,
    img_1: require("./res/images_paint/pen/B/penB_2x_2.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_2.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_2.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_2.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_2.png"),

    imgP_1: penB_2,
    imgP_2: penA_2,
    imgP_3: penC_2,
    imgP_4: penD_2,
    imgP_5: penA_2,

    color: "#08a650",
  },
  {
    id: 2,
    img_1: require("./res/images_paint/pen/B/penB_2x_3.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_3.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_3.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_3.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_3.png"),

    imgP_1: penB_3,
    imgP_2: penA_3,
    imgP_3: penC_3,
    imgP_4: penD_3,
    imgP_5: penA_3,

    color: "#ed2224",
  },
  {
    id: 3,
    img_1: require("./res/images_paint/pen/B/penB_2x_4.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_4.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_4.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_4.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_4.png"),

    imgP_1: penB_4,
    imgP_2: penA_4,
    imgP_3: penC_4,
    imgP_4: penD_4,
    imgP_5: penA_4,

    color: "#f15a22",
  },
  {
    id: 4,
    img_1: require("./res/images_paint/pen/B/penB_2x_5.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_5.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_5.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_5.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_5.png"),

    imgP_1: penB_5,
    imgP_2: penA_5,
    imgP_3: penC_5,
    imgP_4: penD_5,
    imgP_5: penA_5,

    color: "#f89520",
  },
  {
    id: 5,
    img_1: require("./res/images_paint/pen/B/penB_2x_6.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_6.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_6.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_6.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_6.png"),

    imgP_1: penB_6,
    imgP_2: penA_6,
    imgP_3: penC_6,
    imgP_4: penD_6,
    imgP_5: penA_6,

    color: "#fdbc42",
  },
  {
    id: 6,
    img_1: require("./res/images_paint/pen/B/penB_2x_7.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_7.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_7.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_7.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_7.png"),

    imgP_1: penB_7,
    imgP_2: penA_7,
    imgP_3: penC_7,
    imgP_4: penD_7,
    imgP_5: penA_7,

    color: "#0d73bb",
  },
  {
    id: 7,
    img_1: require("./res/images_paint/pen/B/penB_2x_8.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_8.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_8.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_8.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_8.png"),

    imgP_1: penB_8,
    imgP_2: penA_8,
    imgP_3: penC_8,
    imgP_4: penD_8,
    imgP_5: penA_8,

    color: "#4598d3",
  },
  {
    id: 8,
    img_1: require("./res/images_paint/pen/B/penB_2x_9.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_9.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_9.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_9.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_9.png"),

    imgP_1: penB_9,
    imgP_2: penA_9,
    imgP_3: penC_9,
    imgP_4: penD_9,
    imgP_5: penA_9,

    color: "#abe1fa",
  },
  {
    id: 9,
    img_1: require("./res/images_paint/pen/B/penB_2x_10.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_10.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_10.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_10.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_10.png"),

    imgP_1: penB_10,
    imgP_2: penA_10,
    imgP_3: penC_10,
    imgP_4: penD_10,
    imgP_5: penA_10,

    color: "#fcee23",
  },
  {
    id: 10,
    img_1: require("./res/images_paint/pen/B/penB_2x_11.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_11.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_11.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_11.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_11.png"),

    imgP_1: penB_11,
    imgP_2: penA_11,
    imgP_3: penC_11,
    imgP_4: penD_11,
    imgP_5: penA_11,

    color: "#914d2d",
  },
  {
    id: 11,
    img_1: require("./res/images_paint/pen/B/penB_2x_12.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_12.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_12.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_12.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_12.png"),

    imgP_1: penB_12,
    imgP_2: penA_12,
    imgP_3: penC_12,
    imgP_4: penD_12,
    imgP_5: penA_12,

    color: "#af7a4a",
  },

  {
    id: 12,
    img_1: require("./res/images_paint/pen/B/penB_2x_13.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_13.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_13.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_13.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_13.png"),

    imgP_1: penB_13,
    imgP_2: penA_13,
    imgP_3: penC_13,
    imgP_4: penD_13,
    imgP_5: penA_13,

    color: "#c6946b",
  },
  {
    id: 13,
    img_1: require("./res/images_paint/pen/B/penB_2x_14.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_14.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_14.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_14.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_14.png"),

    imgP_1: penB_14,
    imgP_2: penA_14,
    imgP_3: penC_14,
    imgP_4: penD_14,
    imgP_5: penA_14,

    color: "#4d4d4d",
  },
  {
    id: 14,
    img_1: require("./res/images_paint/pen/B/penB_2x_15.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_15.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_15.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_15.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_15.png"),

    imgP_1: penB_15,
    imgP_2: penA_15,
    imgP_3: penC_15,
    imgP_4: penD_15,
    imgP_5: penA_15,

    color: "#a09f9f",
  },
  {
    id: 15,
    img_1: require("./res/images_paint/pen/B/penB_2x_16.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_16.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_16.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_16.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_16.png"),

    imgP_1: penB_16,
    imgP_2: penA_16,
    imgP_3: penC_16,
    imgP_4: penD_16,
    imgP_5: penA_16,

    color: "#dedfe0",
  },
  {
    id: 16,
    img_1: require("./res/images_paint/pen/B/penB_2x_17.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_17.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_17.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_17.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_17.png"),

    imgP_1: penB_17,
    imgP_2: penA_17,
    imgP_3: penC_17,
    imgP_4: penD_17,
    imgP_5: penA_17,

    color: "#2f2d2c",
  },
  {
    id: 17,
    img_1: require("./res/images_paint/pen/B/penB_2x_18.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_18.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_18.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_18.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_18.png"),

    imgP_1: penB_18,
    imgP_2: penA_18,
    imgP_3: penC_18,
    imgP_4: penD_18,
    imgP_5: penA_18,

    color: "#231f20",
  },
  {
    id: 18,
    img_1: require("./res/images_paint/pen/B/penB_2x_19.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_19.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_19.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_19.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_19.png"),

    imgP_1: penB_19,
    imgP_2: penA_19,
    imgP_3: penC_19,
    imgP_4: penD_19,
    imgP_5: penA_19,

    color: "#857bac",
  },
  {
    id: 19,
    img_1: require("./res/images_paint/pen/B/penB_2x_20.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_20.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_20.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_20.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_20.png"),

    imgP_1: penB_20,
    imgP_2: penA_20,
    imgP_3: penC_20,
    imgP_4: penD_20,
    imgP_5: penA_20,

    color: "#ffc0ff",
  },
  {
    id: 20,
    img_1: require("./res/images_paint/pen/B/penB_2x_21.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_21.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_21.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_21.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_21.png"),

    imgP_1: penB_21,
    imgP_2: penA_21,
    imgP_3: penC_21,
    imgP_4: penD_21,
    imgP_5: penA_21,

    color: "#fbffe1",
  },
  {
    id: 21,
    img_1: require("./res/images_paint/pen/B/penB_2x_22.png"),
    img_2: require("./res/images_paint/pen/A/penA_2x_22.png"),
    img_3: require("./res/images_paint/pen/C/penC_2x_22.png"),
    img_4: require("./res/images_paint/pen/D/penD_2x_22.png"),
    img_5: require("./res/images_paint/pen/A/penA_2x_22.png"),

    imgP_1: penB_22,
    imgP_2: penA_22,
    imgP_3: penC_22,
    imgP_4: penD_22,
    imgP_5: penA_22,

    color: "#ffffff",
  },
];

export const PEN_DATA = [
  {
    id: 0,
    image: require("./res/images_paint/pen/stylePen/pencil_2x.png"),
    imageP: pencil,
    strokeWidth: 4, //ori 10
    strokeLinejoin: "miter",
    strokeLinecap: "round",
    strokeDasharrayS: 0,
    strokeDasharrayG: 0,
    strokeOpacity: 0.8,
  },
  {
    id: 1,
    image: require("./res/images_paint/pen/stylePen/paint-brush_2x.png"),
    imageP: paint_brush,
    strokeWidth: 13, //ori 35
    strokeLinejoin: "round",
    strokeLinecap: "round",
    strokeDasharrayS: 0,
    strokeDasharrayG: 0,
    strokeOpacity: 0.8,
  },
  {
    id: 2,
    image: require("./res/images_paint/pen/stylePen/crayon_2x.png"),
    imageP: crayon,
    strokeWidth: 8, //ori 20
    strokeLinejoin: "round",
    strokeLinecap: "round",
    strokeDasharrayS: 0,
    strokeDasharrayG: 0,
    strokeOpacity: 0.4,
  },
  {
    id: 3,
    image: require("./res/images_paint/pen/stylePen/brush_2x.png"),
    imageP: brush,
    strokeWidth: 20, //ori 50
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    strokeDasharrayS: 20,
    strokeDasharrayG: 1,
    strokeOpacity: 0.7,
  },
  {
    id: 4,
    image: require("./res/images_paint/pen/stylePen/eraser_2x.png"),
    imageP: eraser,
    strokeWidth: 10, //ori 10
    strokeLinejoin: "miter",
    strokeLinecap: "round",
    strokeDasharray: "none",
    strokeOpacity: 1,
  },
];

export const SOUND = [
  {
    action: "background",
    sound: require("./res/assets/sounds/draw/backgroundMusic.mp3"),
  },
  {
    action: "click",
    sound: require("./res/assets/sounds/draw/click.mp3"),
  },
  {
    action: "draw",
    sound: require("./res/assets/sounds/draw/draw.mp3"),
  },
];

export const ANIMALS_DATA = [
  {
    id: 0,
    name: "policeman1",
    paint: "Animals",
    size: { width: 83, height: 83 },
    image: policeman1,
    imageColor: require("../app/res/images_paint/policeman_color/1.png"),
    url: require("../app/res/images_paint/policeman/1.png"),
    url_color: require("../app/res/images_paint/policeman/1.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/garden2.png"),
    data: OUTPUT1,
  },
  {
    id: 1,
    name: "policeman2",
    paint: "Animals",
    size: { width: 83, height: 83 },
    image: policeman2,
    imageColor: require("../app/res/images_paint/policeman_color/2.png"),
    url: require("../app/res/images_paint/policeman/2.png"),
    url_color: require("../app/res/images_paint/policeman/2.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/snail.png"),
    data: OUTPUT2,
  },
  {
    id: 2,
    name: "policeman3",
    paint: "Animals",
    size: { width: 83, height: 83 },
    image: policeman3,
    imageColor: require("../app/res/images_paint/policeman_color/3.png"),
    url: require("../app/res/images_paint/policeman/3.png"),
    url_color: require("../app/res/images_paint/policeman/3.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/garden.png"),
    data: OUTPUT3,
  },
  {
    id: 3,
    name: "policeman4",
    paint: "Animals",
    size: { width: 83, height: 83 },
    image: policeman4,
    imageColor: require("../app/res/images_paint/policeman_color/4.png"),
    url: require("../app/res/images_paint/policeman/4.png"),
    url_color: require("../app/res/images_paint/policeman/4.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/garden.png"),
    data: OUTPUT4,
  },
  {
    id: 4,
    name: "policeman5",
    paint: "Animals",
    size: { width: 83, height: 83 },
    image: policeman5,
    imageColor: require("../app/res/images_paint/policeman_color/5.png"),
    url: require("../app/res/images_paint/policeman/5.png"),
    url_color: require("../app/res/images_paint/policeman/5.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/cat.png"),
    data: OUTPUT5,
  },
  {
    id: 5,
    name: "policeman6",
    paint: "Animals",
    size: { width: 83, height: 83 },
    image: policeman6,
    imageColor: require("../app/res/images_paint/policeman_color/6.png"),
    url: require("../app/res/images_paint/policeman/6.png"),
    url_color: require("../app/res/images_paint/policeman/6.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/beach.png"),
    data: OUTPUT6,
  },
];

export const OBJECTS_DATA = [
  {
    id: 0,
    paint: "Objects",
    name: "fireman1",
    size: { width: 83, height: 83 },
    image: fireman1,
    imageColor: require("../app/res/images_paint/fireman_color/1.png"),
    url: require("../app/res/images_paint/fireman/1.png"),
    url_color: require("../app/res/images_paint/fireman/1.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_F1,
  },
  {
    id: 1,
    paint: "Objects",
    name: "fireman2",
    size: { width: 83, height: 83 },
    image: fireman2,
    imageColor: require("../app/res/images_paint/fireman_color/2.png"),
    url: require("../app/res/images_paint/fireman/2.png"),
    url_color: require("../app/res/images_paint/fireman/2.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_F2,
  },
  {
    id: 2,
    paint: "Objects",
    name: "fireman3",
    size: { width: 83, height: 83 },
    image: fireman3,
    imageColor: require("../app/res/images_paint/fireman_color/3.png"),
    url: require("../app/res/images_paint/fireman/3.png"),
    url_color: require("../app/res/images_paint/fireman/3.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_F3,
  },
  {
    id: 3,
    paint: "Objects",
    name: "fireman4",
    size: { width: 83, height: 83 },
    image: fireman4,
    imageColor: require("../app/res/images_paint/fireman_color/4.png"),
    url: require("../app/res/images_paint/fireman/4.png"),
    url_color: require("../app/res/images_paint/fireman/4.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_F4,
  },
  {
    id: 4,
    paint: "Objects",
    name: "fireman5",
    size: { width: 83, height: 83 },
    image: fireman5,
    imageColor: require("../app/res/images_paint/fireman_color/5.png"),
    url: require("../app/res/images_paint/fireman/5.png"),
    url_color: require("../app/res/images_paint/fireman/5.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_F5,
  },
  {
    id: 5,
    paint: "Objects",
    name: "fireman6",
    size: { width: 83, height: 83 },
    image: fireman6,
    imageColor: require("../app/res/images_paint/fireman_color/6.png"),
    url: require("../app/res/images_paint/fireman/6.png"),
    url_color: require("../app/res/images_paint/fireman/6.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_F6,
  },
  {
    id: 6,
    paint: "Objects",
    name: "constructionman1",
    size: { width: 83, height: 83 },
    image: constructionman1,
    imageColor: require("../app/res/images_paint/constructionman_color/1.png"),
    url: require("../app/res/images_paint/constructionman/1.png"),
    url_color: require("../app/res/images_paint/constructionman/1.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_C1,
  },
  {
    id: 7,
    paint: "Objects",
    name: "constructionman2",
    size: { width: 83, height: 83 },
    image: constructionman2,
    imageColor: require("../app/res/images_paint/constructionman_color/2.png"),
    url: require("../app/res/images_paint/constructionman/2.png"),
    url_color: require("../app/res/images_paint/constructionman/2.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_C2,
  },
  {
    id: 8,
    paint: "Objects",
    name: "constructionman3",
    size: { width: 83, height: 83 },
    image: constructionman3,
    imageColor: require("../app/res/images_paint/constructionman_color/3.png"),
    url: require("../app/res/images_paint/constructionman/3.png"),
    url_color: require("../app/res/images_paint/constructionman/3.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_C3,
  },
  {
    id: 9,
    paint: "Objects",
    name: "constructionman4",
    size: { width: 83, height: 83 },
    image: constructionman4,
    imageColor: require("../app/res/images_paint/constructionman_color/4.png"),
    url: require("../app/res/images_paint/constructionman/4.png"),
    url_color: require("../app/res/images_paint/constructionman/4.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_C4,
  },
  {
    id: 10,
    paint: "Objects",
    name: "constructionman5",
    size: { width: 83, height: 83 },
    image: constructionman5,
    imageColor: require("../app/res/images_paint/constructionman_color/5.png"),
    url: require("../app/res/images_paint/constructionman/5.png"),
    url_color: require("../app/res/images_paint/constructionman/5.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_C5,
  },
  {
    id: 11,
    paint: "Objects",
    name: "constructionman6",
    size: { width: 83, height: 83 },
    image: constructionman6,
    imageColor: require("../app/res/images_paint/constructionman_color/6.png"),
    url: require("../app/res/images_paint/constructionman/6.png"),
    url_color: require("../app/res/images_paint/constructionman/6.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_C6,
  },
  {
    id: 12,
    paint: "Objects",
    name: "constructionman7",
    size: { width: 83, height: 83 },
    image: constructionman7,
    imageColor: require("../app/res/images_paint/constructionman_color/7.png"),
    url: require("../app/res/images_paint/constructionman/7.png"),
    url_color: require("../app/res/images_paint/constructionman/7.png"),
    backgroundImg: require("../app/res/images_paint/newPaint/city.png"),
    data: OUTPUT_C7,
  },
];
