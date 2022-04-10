import * as React from "react";
import { Component } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, G, ClipPath, Defs, Use } from "react-native-svg";

import PathOld from "../component/PathOld";

import { inject, observer } from "mobx-react";
@inject("paintStore")
@observer
export default class ShapeObjects extends Component {
  constructor(props) {
    super(props);
  }

  _Press(e, data) {
    if (data.isColor) {
      this.props.paintStore.pointObjects[this.props.id].point[
        this.props.idPath
      ].path.push({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY });
    }
    //console.log(data.number);
    this._refData._update(false);
  }

  _Move(e, data) {
    //console.log(data.number);
    if (data.isColor) {
      this.props.paintStore.pointObjects[this.props.id].point[
        this.props.idPath
      ].path.push({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY });
    }
  }

  _Release(e, data, dataPath) {
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
    this._refData._update(true);
  }

  _CreatePath(path) {
    let dStr = "";
    //alert(path.length);
    if (path.length != 0) {
      var xM = 1;
      var yM = 1;

      dStr = `M ${path[0].x * xM} ${path[0].y * yM} Q ${path[0].x * xM} ${
        path[0].y * yM
      } , ${path[0].x * xM} ${path[0].y * yM} `;
      for (var i = 1; i < path.length - 2; ) {
        var a = 2;

        while (
          i + a < path.length - 2 &&
          Math.sqrt(
            Math.pow(path[i].x - path[i + a].x, 2) +
              Math.pow(path[i].y - path[i + a].y, 2)
          ) < 5
        )
          a++;
        var xc = (path[i].x * xM + path[i + a].x * xM) / 2;
        var yc = (path[i].y * yM + path[i + a].y * yM) / 2;
        dStr += ` Q ${path[i].x * xM} ${path[i].y * yM} , ${xc} ${yc} `;
        i += a;
      }
    }
    return dStr;
  }

  render() {
    const { data, numberScale, numberPath, id, idPath } = this.props;
    const { paint } = this.props;
    const dataShape = this.props.paintStore.pointObjects[id].point[idPath];
    const dataPath = this._CreatePath(dataShape.path);
    return (
      <G>
        <Defs>
          <Path
            id={"path" + data.number}
            d={data.d}
            stroke={data.stroke}
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
          fill={data.fill}
        />

        <G clipPath={"url(#clip" + data.number + ")"}>
          <PathOld
            listData={dataShape.listData}
            numberPath={numberPath}
            strokeWidth={this.props.paintStore.strokeColor}
            onRef={(ref) => (this._refData = ref)}
          />
          <Path
            d={dataPath}
            fill="none"
            stroke={this.props.paintStore.color}
            strokeWidth={this.props.paintStore.strokeColor}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </G>

        <Use
          transform={{ scale: numberScale }}
          href={"#shape" + data.number}
          fill="none"
          onMoveShouldSetResponder={() => true}
          onStartShouldSetResponder={() => true}
          onResponderMove={(e) => this._Move(e, data)}
          onResponderGrant={(e) => this._Press(e, data)}
          onResponderRelease={(e) => this._Release(e, data, dataPath)}
        />
      </G>
    );
  }
}
