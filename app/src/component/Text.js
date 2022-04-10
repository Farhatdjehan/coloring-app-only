import React, {PureComponent} from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types'
import {sizeFont} from "../util/Size";
import {COLOR_APP_WHITE, FONT_FAMILY_APP} from "../../res/style/AppStyle";

const EMPTY = '';

export default class AppText extends PureComponent {

    static propTypes = {
        children: PropTypes.any,
        onPress: PropTypes.func,
        style: PropTypes.any,
        enabled: PropTypes.any
    };

    render() {

        const {style, onPress, enabled} = this.props;
        const children = (this.props.children !== null && this.props.children !== undefined) ? this.props.children : EMPTY;
        return (
            <Text
                {...this.props}
                numberOfLines={0}
                allowFontScaling={false}
                ellipsizeMode="tail"
                lineBreakMode='tail'
                onPress={onPress}
                enabled={enabled}
                style={[styles.Text, style]}>
                {children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    Text: {
        fontSize: sizeFont(4.2),
        color: COLOR_APP_WHITE,
        fontFamily: FONT_FAMILY_APP,
        backgroundColor: 'transparent',
    }
});
