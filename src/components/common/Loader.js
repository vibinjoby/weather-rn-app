import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import AppLoader from './AppLoader';

const Loader = () => {
  const isLoading = useSelector((state) => state.loading?.isLoading);

  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, [show]);

  useEffect(() => {
    setShow(isLoading);
  }, [isLoading]);

  return <AppLoader visible={show} onRequestClose={() => setShow(false)} />;
};

export default Loader;
