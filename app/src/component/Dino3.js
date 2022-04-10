import * as React from 'react';
import{
    Component
} from 'react'
import {View, StyleSheet} from 'react-native';
import Svg, {
    Ellipse,
    Path,
    Rect,
    G,
    Text,
    ClipPath,
    Defs,
    Circle,
    Polyline,
    Line,
    Use
  } from 'react-native-svg';

import {inject, observer} from "mobx-react";
import { ANIMALS_DATA } from "../../Constant";
import Shape from "../component/Shape";


@inject('dinoStore')
@observer

export default class Dino3 extends Component {
  constructor(props){
    super(props);
    this.state={
        animals :  ANIMALS_DATA[ANIMALS_DATA.findIndex(letter => letter.name == "dino")]  
    };
  }

  render() {
    return (
        <Svg  height="100%" width="100%" >
            {
              this.state.animals.data.map((item, index) =>
                  <Shape data={item} mau={this.props.mau} key={index}/>)
            }
        </Svg>
    );
  }
}


