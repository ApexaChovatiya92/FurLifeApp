import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const CalenderPopup = ({ visible, onClose }) => {
    const screenHeight = Dimensions.get('window').height;
    const [selectedDate, setSelectedDate] = useState('');

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

    const handleDateSelect = (date) => {
        setSelectedDate(formatDate(date));
        onClose(formatDate(date));
    };

    return (
        <Modal transparent={true} visible={visible} animationType="slide">
            <View style={[styles.modalMainContainer, { height: screenHeight }]}>
                <View style={[styles.modalContainer, { height: screenHeight * 0.47 }]}>
                    <View style={styles.container}>
                        <CalendarPicker
                            onDateChange={handleDateSelect}
                            selectedDate={selectedDate}
                        />
                        <TouchableOpacity onPress={onClose}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        padding: 10,
        borderBottomColor: '#ccc',
    },
    selectedItem: {
        backgroundColor: '#ddd',
    },
    itemText: {
        fontSize: 16,
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
    modalContainer: {
        position: 'absolute',
        left: '0%',
        right: '0%',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    modalMainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '0%',
        left: '0%',
        right: '0%',
        top: '0%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    header: {
        position: 'absolute',
        top: 20,
        width: '100%',
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
});

export default CalenderPopup;