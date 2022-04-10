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


import {inject, observer} from "mobx-react";
@inject('paintStore')
@observer

export default class Path1 extends Component {
  constructor(props){
    super(props);
  }

  render() { 
    const {data, paint, numberScale, numberPath, id, idPath} = this.props;
    const dataPath = paint == "Animals" ? this.props.paintStore.pointAnimals[id].point[idPath]:this.props.paintStore.pointObjects[id].point[idPath];
    //console.log("render path1 " + data.number);
    if (dataPath != null)
    {
        return (
            <G >
              <Defs>
                  <Path  id={"path1" + data.number}
                      d = {data.d}
                      stroke={data.stroke} 
                      strokeWidth="0.8"
                      opacity={data.opacity}
                      x = {this.props.paintStore.posX}
                      y = {this.props.paintStore.posY}
                      />
      
                </Defs>
                
                <ClipPath id={"clip1" + data.number}>
                    <Use transform={{  scale: numberScale}}  href={"#path1" + data.number} x = {this.props.paintStore.posX} y = {this.props.paintStore.posY}/>
                </ClipPath>
                
               <Use  transform={{scale: numberScale}}   href={"#path1" + data.number}  fill={data.fill}/>
               
               <G clipPath={"url(#clip1" + data.number + ")"}>
                    {
                        dataPath.listData.map((item, index) =>
                        <Path  transform={{scale: numberPath}}
                            key={index}
                            d={item.data}
                            fill="none"
                            stroke={item.color}
                            strokeWidth={item.strokeWidth}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        />)
                    }
                    
                </G> 
              </G>
          );
    }

    return null;
    
    
  }
}


