import React, {Component} from "react";
import {StyleSheet} from 'react-native';
import Input from "./Input";
import PropTypes from "prop-types";
import {sizeWidth} from "../util/Size";

export default class SearchInput extends Component {

    static propTypes = {
        onPress: PropTypes.any,
        onChangeText: PropTypes.any,
        placeholder: PropTypes.string,
    };


    render() {
        const {placeholder, onChangeText} = this.props
        return (
            <Input
                styleView={styles.container}
                icon={require('../../res/images/ic_search.png')}
                placeholder={placeholder}
                onChangeText={onChangeText}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: sizeWidth(2)
    }
});
