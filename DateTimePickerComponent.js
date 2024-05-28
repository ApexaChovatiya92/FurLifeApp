import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateTimePickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);

    const onDateChange = (date) => {
        setSelectedDate(date);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirm = (time) => {
        setSelectedTime(time);
        hideTimePicker();
    };

    const formatDateTime = () => {
        if (!selectedDate || !selectedTime) return '';
        const date = selectedDate.format('YYYY-MM-DD');
        const hours = selectedTime.getHours();
        const minutes = selectedTime.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${date} ${formattedHours}:${formattedMinutes} ${ampm}`;
    };

    return (
        <View style={styles.container}>
            <CalendarPicker onDateChange={onDateChange} />
            <TouchableOpacity onPress={showTimePicker} style={styles.timeButton}>
                <Text style={styles.timeText}>{selectedTime ? formatDateTime() : 'Select Time'}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideTimePicker}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    timeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#DDDDDD',
        borderRadius: 5,
    },
    timeText: {
        fontSize: 16,
        color: '#000',
    },
});

export default DateTimePickerComponent;