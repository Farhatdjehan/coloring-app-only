import * as React from 'react';
import{
    Component
} from 'react'
import {View, StyleSheet} from 'react-native';
import Svg, {
    Path,
    G,
    ClipPath,
    Defs,
    Use
  } from 'react-native-svg';

import Path1 from "../component/Path1";
import Path2 from "../component/Path2";

import {inject, observer} from "mobx-react";
@inject('paintStore')
@observer

export default class Shape2 extends Component {
  constructor(props){
    super(props); 
  }


  render() {
    const {data, paint, name,isPaint,  numberScale, numberPath, id, idPath} = this.props;
    const mau = this.props.paintStore.color;
    //console.log("render shape2");
    return (
      <G>
        <Path1 numberScale={numberScale} numberPath={numberPath} data={data} idPath={idPath} id={id} paint={paint} name={name} mau={mau}/>
        <Path2 numberScale={numberScale} numberPath={numberPath} data={data} idPath={idPath} id={id} paint={paint} name={name} mau={mau} isPaint={isPaint}/>
      </G>);
    
  }
}


