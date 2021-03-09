import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';

import RNTextView from '../components/common/RNTextView';
import CityBlock from '../components/home/CityBlock';
import routes from '../navigations/routes';
import {getWeatherByCity} from '../store/actions/weatherActions';
import ToastContext from '../context/ToastContext';

export default function Home({navigation}) {
  const cityData = ['London', 'Toronto', 'Austin'];
  const toastCtx = useContext(ToastContext);
  const dispatch = useDispatch();

  const onPress = (city) => {
    dispatch(getWeatherByCity(city, toastCtx, navigation));
  };

  return (
    <View style={styles.container}>
      <RNTextView style={styles.headerTxt}>
        Select your city for checking weather
      </RNTextView>

      <FlatList
        data={cityData}
        renderItem={({item}) => <CityBlock cityName={item} onPress={onPress} />}
        ItemSeparatorComponent={() => <View style={{marginBottom: 10}} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
