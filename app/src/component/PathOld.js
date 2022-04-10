import * as React from 'react';
import{
    Component
} from 'react'
import {View, StyleSheet} from 'react-native';
import Svg, {
    G,
    Path,
  } from 'react-native-svg';


export default class PathNew extends Component {
  constructor(props){
    super(props);
    this.state={
      isUpdate: true
    }
  }

  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  _update(isUpdate)
  {
    this.setState({isUpdate: isUpdate});
  }

  render() {
    //console.log("render old");
    const {numberPath} = this.props;
    return (
      this.props.listData.map((item, index) =>
      <Path transform={{ scale: numberPath}}
        key={index}
        d={item.data}
        fill="none"
        stroke={item.color}
        strokeWidth={item.strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />)
    );

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isUpdate == true) {  
      return true;
    }
    
    return false;
  }
}



