import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {sizeWidth} from "../util/Size";
import PropTypes from 'prop-types';
import Icons from "./Icon";
import {COLOR_APP_BLUE} from "../../res/style/AppStyle";

export default class IconCircleButton extends React.PureComponent {

    static propTypes = {
        source: PropTypes.any.isRequired,
        style: PropTypes.any,
        resizeMode: PropTypes.any,
        backgroundColor: PropTypes.any,
        styleButton: PropTypes.any,
        onPress: PropTypes.func,
    };

    render() {
        const {style, styleButton, source, onPress, resizeMode, backgroundColor} = this.props;

        return (
            <TouchableOpacity
                style={[styles.container, {backgroundColor}, styleButton]}
                onPress={onPress}
                disabled={!onPress}>
                <Icons style={styles.icon}
                       source={require('../../res/images/ic_ellipse.png')}/>
                <View style={{
                    justifyContent: 'center', alignItems: 'center', height: sizeWidth(8.5),
                    width: sizeWidth(8.5),
                }}>
                    <Image
                        source={source}
                        resizeMode={resizeMode || 'contain'}
                        style={[styles.image, style]}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR_APP_BLUE,
        borderRadius: sizeWidth(10),
        height: sizeWidth(8.5),
        width: sizeWidth(8.5),
    },
    image: {
        height: sizeWidth(6.5),
        width: sizeWidth(6.5),
    },
    icon: {
        position: 'absolute',
        top: sizeWidth(0.5),
        left: sizeWidth(1),
        height: sizeWidth(3),
        width: sizeWidth(3),
    },
});
