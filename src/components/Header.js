import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import avatar from '../../assets/avatar/avatar.png';

const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    fontFamily: 'SF-Pro-Display-Regular',
    textAlign: 'center',
  },
  imageStyle: {
    marginRight: 20,
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Header = props => {
  return (
    <View style={styles.containerStyle}>
      <View />
      <Text style={styles.headerStyle}>{props.title}</Text>
      <Image source={avatar} style={styles.imageStyle} />
    </View>
  );
};

export default Header;
