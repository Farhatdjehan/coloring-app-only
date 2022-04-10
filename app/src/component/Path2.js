import * as React from "react";
import * as d3 from "d3";
import { Component } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, G, ClipPath, Defs, Use } from "react-native-svg";

import { inject, observer } from "mobx-react";
@inject("paintStore")
@observer
export default class Path2 extends Component {
  constructor(props) {
    super(props);
  }

  _Press(e, data) {
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
      }
    }
  }

  _Move(e, data) {
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
          strokeLinecap: this.props.paintStore.strokeLinecap,
          strokeLinejoin: this.props.paintStore.strokeLinejoin,
          strokeOpacity: this.props.paintStore.strokeOpacity,
          strokeDasharrayS: this.props.paintStore.strokeDasharrayS,
          strokeDasharrayG: this.props.paintStore.strokeDasharrayG,
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
          strokeLinecap: this.props.paintStore.strokeLinecap,
          strokeLinejoin: this.props.paintStore.strokeLinejoin,
          strokeOpacity: this.props.paintStore.strokeOpacity,
          strokeDasharrayS: this.props.paintStore.strokeDasharrayS,
          strokeDasharrayG: this.props.paintStore.strokeDasharrayG,
        });
        this.props.paintStore.pointObjects[this.props.id].point[
          this.props.idPath
        ].path = [];
      }
    }
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
          ) < 1
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
    const { data, paint, numberScale, numberPath, id, idPath } = this.props;
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
            id={"path2" + data.number}
            d={data.d}
            stroke={data.stroke}
            strokeWidth="0"
            opacity={data.opacity}
            x={this.props.paintStore.posX}
            y={this.props.paintStore.posY}
          />
        </Defs>

        <ClipPath id={"clip2" + data.number}>
          <Use
            transform={{ scale: numberScale }}
            href={"#path2" + data.number}
            x={this.props.paintStore.posX}
            y={this.props.paintStore.posY}
          />
        </ClipPath>

        <G clipPath={"url(#clip2" + data.number + ")"}>
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
          onMoveShouldSetResponder={() => true}
          onStartShouldSetResponder={() => true}
          onResponderMove={(e) => this._Move(e, data)}
          onResponderGrant={(e) => this._Press(e, data)}
          onResponderRelease={(e) => this._Release(e, data, dataPath)}
          transform={{ scale: numberScale }}
          href={"#path2" + data.number}
          fill={"none"}
        />
      </G>
    );
  }
}
