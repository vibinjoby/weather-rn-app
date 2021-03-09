import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import RNTextView from '../common/RNTextView';

export default function CityBlock({cityName, onPress}) {
  return (
    <TouchableOpacity onPress={() => onPress(cityName)}>
      <View style={styles.container}>
        <RNTextView>{cityName}</RNTextView>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
  },
});
