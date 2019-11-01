import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    fontFamily: 'SF-Pro-Display-Regular',
    textAlign: 'center',
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
  };
};

export default Business;
