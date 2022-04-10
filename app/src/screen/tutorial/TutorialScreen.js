import React, {Component, useRef} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {sizeHeight, sizeWidth, sizeFont} from "../../util/Size";
import {TUTORIAL_DOT_COLOR_ACTIVE, TUTORIAL_DOT_COLOR_INACTIVE} from "../../../res/style/AppStyle";
import ItemTutorial from "./ItemTutorial";
import Swiper from 'react-native-swiper';
import {TUTORIAL_DATA} from "../../../Constant";
import NavigationActions from "../../router/NavigationActions";
import ButtonSwiper from "../../component/ButtonSwiper";
import IconCircleButton from "../../component/IconCircleButton";
import SwiperFlatList from 'react-native-swiper-flatlist';


export default () => {
    const scrollRef = React.useRef(null);
    const goToSecondIndex = (index) => {
        scrollRef.current.scrollToIndex({ index: index });
      };
    return ( 
        <SwiperFlatList 
            ref={scrollRef}
        > 
            {TUTORIAL_DATA.map((item, index) => {
                return <ItemTutorial 
                    data={item} key={index}
                    onPressNext={() => {
                        item.id == 0 ? NavigationActions.resetPage('Main') : goToSecondIndex(item.id + 1); 
                    }} 
                    onPressPrev={() => {
                        item.id == 0 ? goToSecondIndex(3) : goToSecondIndex(item.id - 1); 
                    }}
                    />
            })}   
        </SwiperFlatList>      
        
    )     
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    paginationStyle: {
        height: sizeHeight(22)
    },
    activeDotStyle: {
        width: sizeWidth(5)
    },
    button_started: {
        width: sizeWidth(20),
    },
    button_startedKai: {
        width: sizeWidth(60),
    },
    textStyle:{
        fontSize: sizeFont(4)
    },
    buttonSwiper: {
        backgroundColor: 'transparent', 
        flexDirection: 'row', 
        position: 'absolute', 
        top: sizeHeight(35), left: 0, 
        flex: 1, 
        paddingHorizontal: 50, 
        paddingVertical: 10, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    buttonSwiperKai: {
        backgroundColor: 'transparent', 
        flexDirection: 'row',
        position: 'absolute', 
        top: sizeHeight(35), left: 0, 
        flex: 1, 
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    icon:{
        marginRight: sizeWidth(5)
    }
});
