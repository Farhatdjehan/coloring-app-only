import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {sizeWidth} from "../util/Size";
import PropTypes from 'prop-types';
import AppText from "./Text";
import Fontello from "./Fontello";

export default class FonteloText extends Component {

    static propTypes = {
        color: PropTypes.any,
        icon: PropTypes.any,
        text: PropTypes.string,
        onPress: PropTypes.any,
        resizeMode: PropTypes.any,
        styleText: PropTypes.any,
        styleIcon: PropTypes.any,
    };

    constructor(props) {
        super(props);
    }

    renderIcon = (icon) => {
        const {styleIcon, color, resizeMode} = this.props;
        if (icon) {
            return (
                <Fontello
                    name={icon}
                    color={color}
                    resizeMode={resizeMode || 'contain'}
                    style={[styles.icon, styleIcon]}
                />
            )
        }
    };

    render() {
        const {style, icon, text, onPress, disabled, styleText} = this.props;
        return (
            <TouchableOpacity style={[styles.container, style]}
                              onPress={onPress}
                              disabled={disabled}
            >
                {this.renderIcon(icon)}
                <AppText
                    style={[styles.text, styleText]}>
                    {text}
                </AppText>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: sizeWidth(3.2),
    },
    icon: {
        marginRight: sizeWidth(3),
    }
});
