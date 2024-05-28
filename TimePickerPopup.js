import React, { useState } from 'react';
import { View, Modal, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePickerPopup = ({ popupVisible, setPopupVisible, selectedTime1, selectedTime2, onTimeChange1, onTimeChange2 }) => {
    const [time1, setTime1] = useState(selectedTime1);
    const [time2, setTime2] = useState(selectedTime2);

    const handleTimeChange1 = (event, selectedTime) => {
        setTime1(selectedTime);
        onTimeChange1(selectedTime);
    };

    const handleTimeChange2 = (event, selectedTime) => {
        setTime2(selectedTime);
        onTimeChange2(selectedTime);
    };

    const handleSave = () => {
        setPopupVisible(false);
    };

    return (
        <Modal visible={popupVisible} transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.popupContainer}>
                    <Text style={styles.label}>Start Time</Text>
                    <DateTimePicker
                        value={time1}
                        mode="time"
                        display="default"
                        onChange={handleTimeChange1}
                    />
                    <Text style={styles.label}>End Time</Text>
                    <DateTimePicker
                        value={time2}
                        mode="time"
                        display="default"
                        onChange={handleTimeChange2}
                    />
                    <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    popupContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    saveButton: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default TimePickerPopup;
