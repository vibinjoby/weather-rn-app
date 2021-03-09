import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';

import RNTextView from '../components/common/RNTextView';
import setLoading from '../utils/loadingManager';

export default function ViewWeatherDetails({route, navigation}) {
  const weatherDetails = useSelector((state) => state.weather.details);

  const [celsius, setCelsius] = useState();
  const [weatherImg, setWeatherImg] = useState();
  const [weatherType, setWeatherType] = useState();

  useEffect(() => {
    navigation.setOptions({
      title: weatherDetails?.name,
    });
  }, [weatherDetails]);

  useEffect(() => {
    try {
      setLoading(true);
      if (!weatherDetails) return setLoading(false);
      const temperature = parseFloat(
        weatherDetails?.main?.temp - 273.15,
      ).toFixed(0);
      setCelsius(temperature + '\u2103');
      if (!weatherDetails?.weather) return setLoading(false);
      setWeatherImg(weatherDetails?.weather[0]?.icon);
      setWeatherType(weatherDetails?.weather[0]?.main);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [weatherDetails]);

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <RNTextView style={styles.tempTxt}>{celsius}</RNTextView>
        <View style={styles.wrapper}>
          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${weatherImg}@2x.png`,
            }}
            style={styles.tempImg}
          />
          <RNTextView style={styles.weatherTypeTxt}>{weatherType}</RNTextView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  wrapper: {
    alignItems: 'center',
  },
  tempTxt: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  weatherTypeTxt: {
    fontSize: 18,
    fontWeight: '500',
  },
  tempImg: {
    width: 100,
    height: 100,
  },
});
