import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePickerField = ({ onChange }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTextFieldClick = () => {
    setPopupVisible(true);
  };

  const handleTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedTime;
    setPopupVisible(Platform.OS === 'ios');
    setSelectedTime(currentDate);
    onChange(currentDate);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <View style={styles.container}>
      {popupVisible && (
        <Modal
          transparent={true}
          visible={popupVisible}
          animationType="fade"
          onRequestClose={handleClosePopup}
        >
          <TouchableOpacity style={styles.overlay} onPress={handleClosePopup}>
            <View style={styles.popupContainer}>
              <DateTimePicker
                testID="dateTimePicker"
                value={selectedTime}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={handleTimeChange}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    fontSize: 18,
    marginBottom: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    height: 200,
    width:'80%',
  },
});

export default TimePickerField;
