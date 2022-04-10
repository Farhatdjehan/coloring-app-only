import React, { Component } from "react";
import { Image, StyleSheet, View,FlatList } from "react-native";
import ToolBar from "../../../../component/ToolBar";
import AppText from "../../../../component/Text";
import styleApp from "../../../../../res/style/style";
import { sizeFont, sizeWidth, sizeHeight } from "../../../../util/Size";
import IconCircleButton from "../../../../component/IconCircleButton";
import NavigationActions from "../../../../router/NavigationActions";
import {COLOR_APP_RED, COLOR_APP_SAVE, COLOR_APP_CLEAR} from "../../../../../res/style/AppStyle";
import Svg from 'react-native-svg';
import ColorPen from "../../../../component/ColorPen";
import FlatListPen from "../../../../component/FlatListPen";
import Shape from "../../../../component/Shape";
import Shape2 from "../../../../component/Shape2";
import Button from "../../../../component/Button";
import { strings } from "../../../../config/i18n/i18n";
import { COLOR_DATA , PEN_DATA} from "../../../../../Constant";



import {inject, observer} from "mobx-react";
@inject('paintStore')
@observer
export default class LetPaintingScreen extends Component {


  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state={
      isload: false
    }
  }

  

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const paint = navigation.getParam("paint");
    // console.log("render Paint");

    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          resizeMode={"stretch"}
          source={require("../../../../../res/images_paint/background_screen.png")}
        />
        {this.renderToolbar()}
        <View
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <View style={styles.contentHeader}>
            <Button
              onPress={() => this.onPressSave(item, paint)}
              style={styles.button_save}
              text={strings("common.save")}
              iconLeft = {require("../../../../../res/images_paint/buttons/save.png")}
            />
            <Button
              onPress={() => this.onPressClear(item, paint)}
              style={styles.button_clear}
              textStyle={{color: "#FFF200"}}
              text={strings("common.clear")}
              iconLeft = {require("../../../../../res/images_paint/buttons/bin.png")}
            />
          </View>
          <View style={styles.contentImage}>
            <Svg  width={item.size.width * 4} height={item.size.height * 4}>
              {
                item.data.map((itemData, index) =>
                    <Shape2 paint={paint} data={itemData} name={item.name} mau={"red"} isPaint={true} key={index}/>)
              }
            </Svg>   
            
          </View>
          <View style={styles.contentColor}>

            <View style={styles.contentPenColor}>
              <FlatListPen data={COLOR_DATA} renderItem={this.renderItemPen} onRef={ref => (this._refColor = ref)} />
            </View>
            

            <View style={styles.contentPen}>
              <FlatListPen data={PEN_DATA} renderItem={this.renderItemSelectPen} onRef={ref => (this._refPen = ref)} />
            </View>
          </View>
         
        </View>
      </View>
    );
  }


  onPressSave(item, paint){
    const { navigation } = this.props;
    const studiedAlphabets = navigation.getParam("studiedAlphabet");
    const studiedNumber = navigation.getParam("studiedNumber");

    this.props.paintStore.addPaintedList(paint, item.name);
    
    NavigationActions.navigate("LetPainted", {
      item: item,
      paint: paint,
      needIndexFromNavigation: true,
      isNumber: false,
      studiedAlphabet: studiedAlphabets,
      studiedNumber: studiedNumber
    });
  }

  onPressClear(item){
    //
  }


  renderItemPen = ({ item , index}) => {
    let numberSelectPen = this.props.paintStore.getNumberSelectPen();
    let source = numberSelectPen == 1 ? item.img_1
              : numberSelectPen == 2 ? item.img_2
              : numberSelectPen == 3 ? item.img_3
              : numberSelectPen == 4 ? item.img_4
              : null;

    return (
      <ColorPen source={source} id={item.id} isPen={false} onPress={this._onPressItem(item)} styleColor={styles.styleColor} key={index} />
    );
  };

  _onPressItem(item){
    return(event) =>{
        //this.setState({colorDraw: item.color});
        this.props.paintStore.setColor(item.color);
    }
  }

  renderItemSelectPen = ({ item , index}) => {
    return (
      <View style={styles.selectPen}>
          <ColorPen source={item.image} id={item.id} isPen={true} onPress={this._onPressItemPen(item)} styleColor={{}} key={index} />
      </View>
      
    );
  };

  _onPressItemPen(item){
    return(event) =>{
      if (item.id == 4){
        this.props.paintStore.setColor("white");
        this.props.paintStore.setStrokeColor(10);
        this.props.paintStore.setStrokeLinecap("round");
        this.props.paintStore.setStrokeLinejoin("miter");
        this.props.paintStore.setStrokeOpacity(1);
        this.props.paintStore.setStrokeDasharrayS(0);
        this.props.paintStore.setStrokeDasharrayG(0);
      }
      else
      {
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

      //this.setState({isload: true})
      this._refColor._update(true);
      
    }
  }

  renderToolbar = () => {
    return (
      <ToolBar
        right={this.renderToolbarRight()}
        center={
          <AppText style={styleApp.ToolBarText}>
          </AppText>
        }
      />
    );
  };

  renderToolbarRight = () => {
    return (
      <IconCircleButton
        onPress={() => this.onPressHome()}
        styleButton={{
          marginRight: sizeWidth(5)
        }}
        source={require("../../../../../res/images_paint/buttons/home.png")}
      />
    );
  };


  onPressHome = () => {
    const { navigation } = this.props;
    const isNumber = navigation.getParam("isNumber");
    NavigationActions.navigate("Paint", {
      studiedNumber: navigation.getParam("studiedNumber"),
      studiedAlphabet: navigation.getParam("studiedAlphabet")
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  view_control: {
    marginBottom: sizeWidth(2),
    flexDirection: "row",
    width: "80%",
    alignContent: "center",
    justifyContent: "space-between"
  },
  icon_mode: {
    height: sizeWidth(17),
    width: sizeWidth(17)
  },
  text: {
    fontWeight: "bold",
    fontSize: sizeFont(5),
    color: "#595959",
    marginTop: sizeWidth(8)
  },
  text_number: {
    fontWeight: "bold",
    fontSize: sizeFont(5),
    color: "#595959"
  },
  button_save: {
    width: sizeWidth(35),
    backgroundColor: COLOR_APP_SAVE,
  },
  button_clear: {
    width: sizeWidth(35),
    backgroundColor: COLOR_APP_CLEAR,
  },
  contentImage: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: sizeHeight(20.5),
    width: sizeWidth(90.5),
    backgroundColor: "#fff", 
    borderRadius: sizeWidth(6),
  },
  contentColor: {
    marginTop: 20,
    height: sizeHeight(35.5),
    width: "100%",
    backgroundColor: "#fff", 
    borderTopLeftRadius: sizeWidth(6),
    alignItems: "center",
    justifyContent: "center",
  },
  contentPenColor: {
    paddingHorizontal: sizeWidth(20),
    height: sizeHeight(10.5),
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: sizeWidth(6), 
    alignItems: "center",
    justifyContent: "center",
  },
  contentPen: {
    paddingHorizontal: sizeWidth(15),
    height: sizeHeight(25),
    width: "100%",
    backgroundColor: "#8B8FFF", 
    borderTopLeftRadius: sizeWidth(6),
    alignItems: "center",
    justifyContent: "center",
  },
  selectPen: {
    flex: 1,
    marginHorizontal: sizeWidth(1.5),
    marginVertical: sizeHeight(5),
    borderRadius: sizeWidth(20),
    backgroundColor: "#CED0FF",
    alignItems: "center",
    justifyContent: "center",
  },
  styleColor: {
    paddingTop: sizeHeight(10),
  },
  contentHeader: {
    height: sizeHeight(8.5),
    width: sizeWidth(90.5),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: 'row',
  }
});
