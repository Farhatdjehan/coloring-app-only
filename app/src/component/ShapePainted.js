import * as React from "react";
import { Component } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, G, ClipPath, Defs, Use } from "react-native-svg";

import PathOld from "../component/PathOld";
import * as d3 from "d3";

import { inject, observer } from "mobx-react";
@inject("paintStore")
@observer
export default class ShapePainted extends Component {
  constructor(props) {
    super(props);
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
            strokeWidth="0.05"
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
          fill={data.fill === "none" ? "#fff" : data.fill}
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
