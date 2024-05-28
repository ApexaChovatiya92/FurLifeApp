// Popup.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image} from 'react-native';

const Popup = ({ visible, options, onSelect, position, onClose, fieldType, selectedOptions }) => {
  const renderOptions = () => {
    if (fieldType === 'duration') {
      return options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => onSelect(option)}>
          <View style={styles.radioButtonContainer}>
          <Image
              style={styles.radioButton}
              source={selectedOptions.includes(option) ? require('./sel-radio.png') : require('./radio.png')}
            />  
            <Text style={styles.optionText}>{option}</Text>
          </View>
        </TouchableOpacity>
      ));
    } else if (fieldType === 'day') {
      return options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => onSelect(option)}>
          <View style={styles.checkboxContainer}>
            <Image
              style={styles.checkbox}
              source={selectedOptions.includes(option) ? require('./sel-checkbox.png') : require('./checkbox.png')}
            />            
            <Text style={styles.optionText}>{option}</Text>
          </View>
        </TouchableOpacity> 
      ));
    } else {
      return options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => onSelect(option)}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ));
    }
    return null;
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={[styles.popupContainer, { top: position.top, left: position.left }]}>
          {renderOptions()}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    width: '90%',
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
  },
  radioButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'blue',
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  checkboxChecked: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'blue',
    marginRight: 10,
  },
});

export default Popup;
