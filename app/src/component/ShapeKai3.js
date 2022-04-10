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
      // console.log(error);
    }
  }

  _Press(e, data) {
    //console.log(data.number);
    if (data.isColor && this.props.isPaint) {
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
    //console.log(data.number);
    if (data.isColor && this.props.isPaint) {
      if (this.props.paint == "Animals") {
        this.props.paintStore.pointAnimals[this.props.id].point[
          this.props.idPath
        ].path.push({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY });
      } else if (this.props.paint == "Objects") {
        this.props.paintStore.pointObjects[this.props.id].point[
          this.props.idPath
        ].path.push({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY });
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
        });
        this.props.paintStore.pointAnimals[this.props.id].point[
          this.props.idPath
        ].path = [];
      } else if (this.props.paint == "Objects") {
        this.props.paintStore.pointObjects[this.props.id].point[
          this.props.idPath
        ].listData.push({
          color: this.props.paintStore.color,
          data: dataPath,
          strokeWidth: this.props.paintStore.strokeColor,
        });
        this.props.paintStore.pointObjects[this.props.id].point[
          this.props.idPath
        ].path = [];
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
            stroke={data.stroke}
            strokeWidth="0.15"
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
          fill={data.fill}
        />

        <G clipPath={"url(#clip" + data.number + ")"}>
          {dataShape.listData.map((item, index) => {
            return (
              <Path
                transform={{ scale: numberPath }}
                key={index}
                d={item.data}
                fill="none"
                stroke={item.color}
                strokeWidth={item.strokeWidth}
                strokeOpacity={item.strokeOpacity}
                strokeLinejoin={item.strokeLinejoin}
                strokeLinecap={item.strokeLinecap}
                strokeDasharray={[item.strokeDasharrayS, item.strokeDasharrayG]}
              />
            );
          })}
          <Path
            d={dataPath}
            fill="none"
            stroke={this.props.paintStore.color}
            strokeWidth={this.props.paintStore.strokeColor}
            strokeOpacity={this.props.paintStore.strokeOpacity}
            strokeLinejoin={this.props.paintStore.strokeLinejoin}
            strokeLinecap={this.props.paintStore.strokeLinecap}
            strokeDasharray={[
              this.props.paintStore.strokeDasharrayS,
              this.props.paintStore.strokeDasharrayG,
            ]}
          />
        </G>
      </G>
    );
  }
}
