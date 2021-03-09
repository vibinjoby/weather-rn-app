/**
 *
 * @author VIBIN E JOBY
 */

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import RootStackNav from './src/navigations/RootStackNav';
import store from './src/store/index';
import Loader from './src/components/common/Loader';
import ToastStore from './src/context/store/ToastStore';

const App = () => {
  return (
    <Provider store={store}>
      <Loader />
      <ToastStore>
        <NavigationContainer>
          <RootStackNav />
        </NavigationContainer>
      </ToastStore>
    </Provider>
  );
};

export default App;
