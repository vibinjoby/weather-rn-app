import React, {useState} from 'react';

import ToastContext from '../ToastContext';
import AppToasts from '../../components/common/AppToasts';

export default function ToastStore({children}) {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [info, setInfo] = useState({});

  const showSuccessToast = (message) => {
    setTimeout(() => {
      setInfo({message, isSuccess: true});
      setIsToastVisible(true);
    }, 200);
  };
  const showErrorToast = (message) => {
    setTimeout(() => {
      setInfo({message, isSuccess: false});
      setIsToastVisible(true);
    }, 200);
  };

  return (
    <ToastContext.Provider
      value={{
        showSuccessToast,
        showErrorToast,
      }}>
      <>
        {children}
        {isToastVisible && <AppToasts info={info} />}
      </>
    </ToastContext.Provider>
  );
}
