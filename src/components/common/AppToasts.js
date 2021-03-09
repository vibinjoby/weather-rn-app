import React, {useState, useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';

export default function AppToasts({info}) {
  const [modalVisible, setModalVisible] = useState(true);
  const [animationType, setAnimationType] = useState('slideInRight');

  useEffect(() => {
    setModalVisible(true);
    // After 3 sec close the toast using timeout animation to right
    setTimeout(() => {
      setAnimationType('slideOutRight');
    }, 3000);
    setAnimationType('slideInRight');
  }, [info]);

  return (
    <Modal
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
      onBackdropPress={() => {
        setModalVisible(false);
      }}>
      <Animatable.View animation={animationType} style={styles.animatableView}>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => {
            setModalVisible(false);
          }}>
          <View
            style={[
              styles.modalView,
              !info.isSuccess && {borderLeftColor: 'red'},
            ]}>
            <View style={styles.modalViewContent}>
              <Image
                source={
                  info.isSuccess
                    ? require('../../assets/images/success-toasts.png')
                    : require('../../assets/images/error-toasts.png')
                }
                resizeMode={'contain'}
                style={styles.toastImg}
              />
              <Text style={styles.modalText}>{info.message}</Text>
              <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                <Image
                  source={require('../../assets/images/close-toasts.png')}
                  resizeMode={'contain'}
                  style={styles.closeToast}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  animatableView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderLeftColor: 'green',
    borderLeftWidth: 8,
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalViewContent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 16,
    alignSelf: 'center',
    width: '60%',
    flexWrap: 'wrap',
  },
  toastImg: {
    width: 30,
    height: 30,
  },
  closeToast: {
    marginTop: 10,
    width: 12,
    height: 12,
  },
});
