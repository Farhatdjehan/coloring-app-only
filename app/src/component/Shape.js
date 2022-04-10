import * as React from "react";
import { Component } from "react";
import * as d3 from "d3";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Audio } from "expo-av";
import Svg, { Path, G, ClipPath, Defs, Use } from "react-native-svg";

import PathOld from "../component/PathOld";
import { inject, observer } from "mobx-react";
import { SOUND } from "../../Constant";

@inject("paintStore")
@observer
export default class ShapeKai3 extends Component {
  constructor(props) {
    super(props);
    this.audio = null;
    this.state = {
      isMove: false,
      startX: null,
      startY: null,
    };
  }

  componentDidMount() {
    //this._playSound();
  }

  componentWillUnmount() {}

  async _playSound() {
    try {
      //alert("Kai");
      this.audio = null;
      const audio = await Audio.Sound.createAsync(SOUND[1].sound, {
        shouldPlay: true,
        isLooping: false,
      });
      this.audio = audio;
    } catch (error) {
      //error when playing sound
      console.log(error);
    }
  }

  _Press(e, data) {
    const { startX, startY } = this.state;
    if (!startX && !startY) {
      this.setState({
        startX: e.nativeEvent.pageX - e.nativeEvent.locationX,
        startY: e.nativeEvent.pageY - e.nativeEvent.locationY,
      });
    }
    if (data.isColor && this.props.isPaint) {
      this.setState({ isMove: true });
      if (this.props.paint == "Animals") {
        this.props.paintStore.pointAnimals[this.props.id].point[
          this.props.idPath
        ].path.push({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY });
        this.props.paintStore.pointAnimals[this.props.id].point[
          this.props.idPath
        ].path.push({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY });
      } else if (this.props.paint == "Objects") {
        this.props.paintStore.pointObjects[this.props.id].point[
          this.props.idPath
        ].path.push({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY });
        this.props.paintStore.pointObjects[this.props.id].point[
          this.props.idPath
        ].path.push({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY });
      }
    }
    //this._refData._update(false);
  }

  _Move(e, data) {
    const { startX, startY } = this.state;
    let newX = e.nativeEvent.locationX;
    let newY = e.nativeEvent.locationY;
    let draw = true;
    // console.log("e", startX, startY);
    if (data.isColor && this.props.isPaint && this.state.isMove) {
      if (
        e.nativeEvent.pageX < startX ||
        e.nativeEvent.pageX > 290.5 + startX - 1 ||
        e.nativeEvent.pageY < startY ||
        e.nativeEvent.pageY > 290.5 + startY - 1
      )
        draw = false;
      else draw = true;
      if (this.props.paint == "Animals" && draw) {
        this.props.paintStore.pointAnimals[this.props.id].point[
          this.props.idPath
        ].path.push({
          x: newX,
          y: newY,
        });
      } else if (this.props.paint == "Objects" && draw) {
        this.props.paintStore.pointObjects[this.props.id].point[
          this.props.idPath
        ].path.push({
          x: newX,
          y: newY,
        });
      }
    }
  }

  _Release(e, data, dataPath) {
    if (this.props.isPaint) {
      if (this.props.paint == "Animals") {
        this.props.paintStore.pointAnimals[this.props.id].point[
          this.props.idPath
        ].listData.push({
          color: this.props.paintStore.color,
          data: dataPath,
          strokeWidth: this.props.paintStore.strokeColor,
          strokeLinecap: this.props.paintStore.strokeLinecap,
          strokeLinejoin: this.props.paintStore.strokeLinejoin,
          strokeOpacity: this.props.paintStore.strokeOpacity,
          strokeDasharrayS: this.props.paintStore.strokeDasharrayS,
          strokeDasharrayG: this.props.paintStore.strokeDasharrayG,
        });
        this.props.paintStore.pointAnimals[this.props.id].point[
          this.props.idPath
        ].path = [];
        this.props.setPrevIndex({
          id: this.props.id,
          idPath: this.props.idPath,
        });
      } else if (this.props.paint == "Objects") {
        this.props.paintStore.pointObjects[this.props.id].point[
          this.props.idPath
        ].listData.push({
          color: this.props.paintStore.color,
          data: dataPath,
          strokeWidth: this.props.paintStore.strokeColor,
          strokeLinecap: this.props.paintStore.strokeLinecap,
          strokeLinejoin: this.props.paintStore.strokeLinejoin,
          strokeOpacity: this.props.paintStore.strokeOpacity,
          strokeDasharrayS: this.props.paintStore.strokeDasharrayS,
          strokeDasharrayG: this.props.paintStore.strokeDasharrayG,
        });
        this.props.paintStore.pointObjects[this.props.id].point[
          this.props.idPath
        ].path = [];
        this.props.setPrevIndex({
          id: this.props.id,
          idPath: this.props.idPath,
        });
      }
    }
    this._playSound();
    //this._refData._update(true);
  }
  /*
 async playSound(){
      const audio = new Audio.Sound();
      try {
        await audio.loadAsync(SOUND[2].sound);
        await audio.playAsync();
      } catch (error) {
        //error when playing sound
        console.log(error);
      }
  };*/

  async playSound() {
    //alert("Kai");
    if (this.audio != null) {
      await this.audio.replayAsync();
    }
  }

  render() {
    const { data, numberScale, numberPath, id, idPath } = this.props;
    const { paint } = this.props;
    const dataShape =
      paint == "Animals"
        ? this.props.paintStore.pointAnimals[id].point[idPath]
        : this.props.paintStore.pointObjects[id].point[idPath];
    const lineFunction = d3
      .line()
      .x(function (p) {
        return p.x;
      })
      .y(function (p) {
        return p.y;
      })
      .curve(d3.curveCatmullRom.alpha(0.5));
    //console.log("render path2 " + data.number);
    const dataPath =
      dataShape.path.length == 0 ? "" : lineFunction(dataShape.path);
    return (
      <G>
        <Defs>
          <Path
            id={"path" + data.number}
            d={data.d}
            stroke={"none"}
            strokeWidth="0.8"
            opacity={data.opacity}
          />

          <Use id={"shape" + data.number} href={"#path" + data.number} />
          <ClipPath id={"clip" + data.number}>
            <Use
              transform={{ scale: numberScale }}
              id={"shape" + data.number}
              href={"#path" + data.number}
              x={this.props.paintStore.posX}
              y={this.props.paintStore.posY}
            />
          </ClipPath>
        </Defs>
        <Use
          transform={{ scale: numberScale }}
          href={"#shape" + data.number}
          fill="none"
          onMoveShouldSetResponder={() => true}
          onStartShouldSetResponder={() => true}
          onResponderMove={(e) => this._Move(e, data, dataPath)}
          onResponderGrant={(e) => this._Press(e, data)}
          onResponderRelease={(e) => this._Release(e, data, dataPath)}
        />
      </G>
    );
  }
}
