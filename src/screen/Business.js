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
});

const Business = props => {
  return (
    <View>
      <Text>Business</Text>
    </View>
  );
};
Business.navigationOptions = () => {
  return {
    headerTitle: <Text style={styles.headerStyle}>Business</Text>,
    headerRight: <Image source={avatar} style={styles.imageStyle} />,
  };
};

export default Business;
