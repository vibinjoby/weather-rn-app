import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

import colors from '../../theme/colors';

const ActivityIndicatorModal = ({onRequestClose, visible}) => (
  <Modal
    animationType="none"
    transparent
    visible={visible}
    onRequestClose={onRequestClose}>
    <View style={styles.modalWrapper}>
      <View style={styles.modalContainer}>
        <ActivityIndicator animating color={colors.primaryColor} size="large" />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.52)',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});

export default ActivityIndicatorModal;
