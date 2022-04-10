import * as React from "react";
import { Component } from "react";
import { View, StyleSheet, PanResponder } from "react-native";
import Svg, { Path, G, ClipPath, Defs, Use } from "react-native-svg";
import PropTypes from "prop-types";
import PathOld from "../component/PathOld";
import { inject, observer } from "mobx-react";
@inject("paintStore")
@observer
export default class Shape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      paint: this.props.paint,
      numberScale: this.props.numberScale,
      numberPath: this.props.numberPath,
      dataPath:
        this.props.paint === "Animals"
          ? this.props.paintStore.getPointStoreAnimals(
              this.props.data.number,
              this.props.name
            )
          : this.props.paintStore.getPointStoreObjects(
              this.props.data.number,
              this.props.name
            ),
    };

    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderTerminate: (evt, gestureState) => {},
      onShouldBlockNativeResponder: (evt, gestureState) => {
        return true;
      },

      onPanResponderGrant: (evt, gestureState) => {
        this._Press(evt, this.state.data);
      },
      onPanResponderMove: (evt, gestureState) => {
        this._Move(evt, this.state.data);
      },

      onPanResponderRelease: (evt, gestureState) => {
        this._Release(evt, this.state.data, this.state.dataPath);
      },
    });
  }

  _Press(e, data) {
    if (data.isColor && this.props.isPaint) {
      /*
      this.props.paintStore.set_X(e.nativeEvent.locationX);
      this.props.paintStore.set_Y(e.nativeEvent.locationY);
      var dataStr = ` M ${e.nativeEvent.locationX},${e.nativeEvent.locationY} Q ${e.nativeEvent.locationX},${e.nativeEvent.locationY} ${e.nativeEvent.locationX},${e.nativeEvent.locationY}`;

      if (this.props.paint === "Animals")
      {
        this.props.paintStore.addPathAnimals(dataStr, data.number, this.props.name);
      }
      else if (this.props.paint === "Objects")
      {
        this.props.paintStore.addPathObjects(dataStr, data.number, this.props.name);
      }*/

      var dataStr = ` M ${e.nativeEvent.locationX},${e.nativeEvent.locationY} `;

      if (this.props.paint === "Animals") {
        this.props.paintStore.addPathAnimals(
          dataStr,
          data.number,
          this.props.name
        );
      } else if (this.props.paint === "Objects") {
        this.props.paintStore.addPathObjects(
          dataStr,
          data.number,
          this.props.name
        );
      }
    }

    this._refData._update(false);
  }

  _Move(e, data) {
    if (data.isColor && this.props.isPaint) {
      /*
      let _locationX = e.nativeEvent.locationX;
      let _locationY = e.nativeEvent.locationY;  

      let _QX = (_locationX -this.props.paintStore._X )/2 + this.props.paintStore._X;
      let _QY = (_locationY -this.props.paintStore._Y)/2 + this.props.paintStore._Y;
      
      var dataStr = `M ${this.props.paintStore._X},${this.props.paintStore._Y} Q ${_QX},${_QY} ${_locationX},${_locationY}`;

      if (this.props.paint === "Animals")
      {
        this.props.paintStore.addPathAnimals(dataStr, data.number, this.props.name);
      }
      else if (this.props.paint === "Objects")
      {
        this.props.paintStore.addPathObjects(dataStr, data.number, this.props.name);
      }
      

      this.props.paintStore.set_X(_locationX);
      this.props.paintStore.set_Y(_locationY);*/

      var dataStr = `L ${e.nativeEvent.locationX},${e.nativeEvent.locationY} `;

      if (this.props.paint === "Animals") {
        this.props.paintStore.addPathAnimals(
          dataStr,
          data.number,
          this.props.name
        );
      } else if (this.props.paint === "Objects") {
        this.props.paintStore.addPathObjects(
          dataStr,
          data.number,
          this.props.name
        );
      }
    }
  }
  //
  _Release(e, data, dataPath) {
    if (this.props.isPaint) {
      if (this.props.paint === "Animals") {
        this.props.paintStore.addPointAnimals(
          {
            color: this.props.paintStore.color,
            data: dataPath.path,
            strokeWidth: this.props.paintStore.strokeColor,
            strokeLinecap: this.props.paintStore.strokeLinecap,
            strokeLinejoin: this.props.paintStore.strokeLinejoin,
            strokeOpacity: this.props.paintStore.strokeOpacity,
            strokeDasharrayS: this.props.paintStore.strokeDasharrayS,
            strokeDasharrayG: this.props.paintStore.strokeDasharrayG,
          },
          data.number,
          this.props.name
        );
        this.props.paintStore.resetPathAnimals(data.number, this.props.name);
      } else if (this.props.paint === "Objects") {
        this.props.paintStore.addPointObjects(
          {
            color: this.props.paintStore.color,
            data: dataPath.path,
            strokeWidth: this.props.paintStore.strokeColor,
            strokeLinecap: this.props.paintStore.strokeLinecap,
            strokeLinejoin: this.props.paintStore.strokeLinejoin,
            strokeOpacity: this.props.paintStore.strokeOpacity,
            strokeDasharrayS: this.props.paintStore.strokeDasharrayS,
            strokeDasharrayG: this.props.paintStore.strokeDasharrayG,
          },
          data.number,
          this.props.name
        );
        this.props.paintStore.resetPathObjects(data.number, this.props.name);
      }
    }

    this._refData._update(true);
  }

  render() {
    //const {data, numberScale, numberPath} = this.props;
    //const {paint} = this.props;
    //const dataPath = paint === "Animals" ? this.props.paintStore.getPointStoreAnimals(data.number, this.props.name):this.props.paintStore.getPointStoreObjects(data.number, this.props.name);
    //console.log("render shape" + dataPath.number);

    const data = this.state.data;
    const numberScale = this.state.numberScale;
    const numberPath = this.state.numberPath;
    const dataPath = this.state.dataPath;

    if (dataPath != null) {
      return (
        <G {...this._panResponder.panHandlers}>
          <Defs>
            <Path
              id={"path" + data.number}
              d={data.d}
              stroke={data.stroke}
              strokeWidth="0.8"
              opacity={data.opacity}
              x={this.props.paintStore.posX}
              y={this.props.paintStore.posY}
            />

            <Use id={"shape" + data.number} href={"#path" + data.number} />
          </Defs>

          <ClipPath id={"clip" + data.number}>
            <Use
              transform={{ scale: numberScale }}
              id={"shape" + data.number}
              href={"#path" + data.number}
              x={this.props.paintStore.posX}
              y={this.props.paintStore.posY}
            />
          </ClipPath>

          <Use
            transform={{ scale: numberScale }}
            href={"#shape" + data.number}
            fill={data.fill}
          />

          <G clipPath={"url(#clip" + data.number + ")"}>
            <PathOld
              listData={dataPath.listData}
              numberPath={numberPath}
              strokeWidth={this.props.paintStore.strokeColor}
              onRef={(ref) => (this._refData = ref)}
            />
            <Path
              d={dataPath.path}
              fill="none"
              stroke={this.props.paintStore.color}
              strokeWidth={this.props.paintStore.strokeColor}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </G>
        </G>
      );
    }

    return null;
  }
}
