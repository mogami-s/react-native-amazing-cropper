import React from 'react';
import { View, Animated, Image, PanResponderInstance } from 'react-native';
import styles from './Cropper.component.style';

interface CropperProps {
  imageUri: string;
  footerComponent: JSX.Element;
  getTopOuterStyle: () => object;
  getLeftOuterStyle: () => object;
  getBottomOuterStyle: () => object;
  getRightOuterStyle: () => object;
  getTopLeftStyle: () => object;
  getBottomLeftStyle: () => object;
  getBottomRightStyle: () => object;
  getTopRightStyle: () => object;
  getTopSideStyle: () => object;
  getLeftSideStyle: () => object;
  getBottomSideStyle: () => object;
  getRightSideStyle: () => object;
  getRectangleStyle: () => object;
  getImageStyle: () => object;
  onDone: () => void;
  onRotate: () => void;
  onCancel: () => void;
  topOuterPanResponder: PanResponderInstance;
  leftOuterPanResponder: PanResponderInstance;
  bottomOuterPanResponder: PanResponderInstance;
  rightOuterPanResponder: PanResponderInstance;
  topPanResponder: PanResponderInstance;
  leftPanResponder: PanResponderInstance;
  bottomPanResponder: PanResponderInstance;
  rightPanResponder: PanResponderInstance;
  topLeftPanResponder: PanResponderInstance;
  bottomLeftPanResponder: PanResponderInstance;
  bottomRightPanResponder: PanResponderInstance;
  topRightPanResponder: PanResponderInstance;
  rectanglePanResponder: PanResponderInstance;
  topOuterRef: (ref: any) => any;
  leftOuterRef: (ref: any) => any;
  bottomOuterRef: (ref: any) => any;
  rightOuterRef: (ref: any) => any;
}

const Cropper: React.FC<CropperProps> = props => (
  <View style={styles.container}>
    <View style={styles.secondContainer}>
      <Image style={props.getImageStyle()} source={{ uri: props.imageUri }} />
    </View>

    <View style={styles.footerContainer}>
      {React.cloneElement(props.footerComponent, {
        onDone: props.onDone,
        onRotate: props.onRotate,
        onCancel: props.onCancel,
      })}
    </View>
    {/*
      // @ts-ignore */}
    <Animated.View ref={props.topOuterRef} style={[styles.animation, props.getTopOuterStyle()]} {...props.topOuterPanResponder.panHandlers} />
    {/*
      // @ts-ignore */}
    <Animated.View ref={props.leftOuterRef} style={[styles.animation, props.getLeftOuterStyle()]} {...props.leftOuterPanResponder.panHandlers} />
    {/*
      // @ts-ignore */ /* eslint-disable-line */ /* eslint-disable-next-line prettier/prettier */}
    <Animated.View ref={props.bottomOuterRef} style={[styles.animation, props.getBottomOuterStyle()]} {...props.bottomOuterPanResponder.panHandlers} />
    {/*
      // @ts-ignore */}
    <Animated.View ref={props.rightOuterRef} style={[styles.animation, props.getRightOuterStyle()]} {...props.rightOuterPanResponder.panHandlers} />

    <Animated.View style={[styles.animation, styles.topSideAnimation, props.getTopSideStyle()]} {...props.topPanResponder.panHandlers} />
    <Animated.View style={[styles.animation, styles.leftSideAnimation, props.getLeftSideStyle()]} {...props.leftPanResponder.panHandlers} />
    <Animated.View style={[styles.animation, styles.bottomSideAnimation, props.getBottomSideStyle()]} {...props.bottomPanResponder.panHandlers} />
    <Animated.View style={[styles.animation, styles.rightSideAnimation, props.getRightSideStyle()]} {...props.rightPanResponder.panHandlers} />

    <Animated.View style={[styles.animation, styles.topLeftAnimation, props.getTopLeftStyle()]} {...props.topLeftPanResponder.panHandlers} />
    <Animated.View style={[styles.animation, styles.bottomLeftAnimation, props.getBottomLeftStyle()]} {...props.bottomLeftPanResponder.panHandlers} />
    {/* eslint-disable-next-line prettier/prettier */}
    <Animated.View style={[styles.animation, styles.bottomRightAnimation, props.getBottomRightStyle()]} {...props.bottomRightPanResponder.panHandlers} />
    <Animated.View style={[styles.animation, styles.topRightAnimation, props.getTopRightStyle()]} {...props.topRightPanResponder.panHandlers} />

    <Animated.View style={[styles.animation, props.getRectangleStyle()]} {...props.rectanglePanResponder.panHandlers}>
      <View style={styles.gridRow}>
        <View style={styles.gridColumn}>
          <View style={[styles.borderDesign, { borderLeftWidth: 5, borderTopWidth: 5 }]} />
        </View>
        <View style={styles.gridColumn}>
          <View style={[styles.borderDesign, { borderTopWidth: 5, alignSelf: 'center' }]} />
        </View>
        <View style={styles.gridColumn}>
          <View style={[styles.borderDesign, { borderTopWidth: 5, borderRightWidth: 5, alignSelf: 'flex-end' }]} />
        </View>
      </View>

      <View style={styles.gridRow}>
        <View style={[styles.gridColumn, { flexDirection: 'row' }]}>
          <View style={[styles.borderDesign, { borderLeftWidth: 5, alignSelf: 'center' }]} />
        </View>
        <View style={styles.gridColumn} />
        <View style={[styles.gridColumn, { justifyContent: 'center' }]}>
          <View style={[styles.borderDesign, { borderRightWidth: 5, alignSelf: 'flex-end' }]} />
        </View>
      </View>

      <View style={styles.gridRow}>
        <View style={[styles.gridColumn, { justifyContent: 'flex-end' }]}>
          <View style={[styles.borderDesign, { borderLeftWidth: 5, borderBottomWidth: 5 }]} />
        </View>
        <View style={[styles.gridColumn, { justifyContent: 'flex-end' }]}>
          <View style={[styles.borderDesign, { borderBottomWidth: 5, alignSelf: 'center' }]} />
        </View>
        <View style={[styles.gridColumn, { justifyContent: 'flex-end' }]}>
          <View
            style={[
              styles.borderDesign,
              {
                borderRightWidth: 5,
                borderBottomWidth: 5,
                alignSelf: 'flex-end',
              },
            ]}
          />
        </View>
      </View>
    </Animated.View>
  </View>
);

export default Cropper;
