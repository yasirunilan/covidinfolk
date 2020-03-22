'use strict';
import type {Node} from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

const AppHeader = (): Node => (
    <ImageBackground
        accessibilityRole={'image'}
        source={require('./assets/images/COVID-19-STRAG-19MARCH-1406.jpg')}
        style={styles.background}
        imageStyle={styles.logo}>
        <Text style={styles.text}>COVID-19 Situation</Text>
    </ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        paddingBottom: 30,
        paddingTop: 30,
        paddingHorizontal: 32,
        backgroundColor: '#F3F3F3',
    },
    logo: {
        opacity: 0.2,
        overflow: 'visible',
        resizeMode: 'cover',
        height: 100,
        /*
         * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
         *
         * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
         * source image's size.
         */
        marginLeft: -128,
        marginBottom: -192,
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        color: '#000',
    },
});

export default AppHeader;
