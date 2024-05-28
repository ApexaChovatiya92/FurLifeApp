import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    StyleSheet,
    Dimensions,
} from 'react-native';

const DeleteSuccessPopup = ({ visible, onClose }) => {
    const screenHeight = Dimensions.get('window').height;
    const [otp, setOtp] = useState('');
    const handleChange = (otp) => {
        setOtp(otp);
    };
    useEffect(() => {
        let timer = setTimeout(() => {
                onClose();
            }, 1000); // 4000 milliseconds = 4 seconds
        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or visible changes
    }, [onClose]);

    return (
        <Modal transparent={true} visible={visible} animationType="slide">
            <View style={[styles.modalMainContainer, { height: screenHeight }]}>
                <View style={[styles.modalContainer, { height: screenHeight * 0.4 }]}>
                    <View style={styles.header}>
                        <Image
                            source={require('./person.png')}
                            style={{ width: 120, height: 120 }}
                            resizeMode="contain"
                        />
                        <Text style={styles.headerText}>Account deleted</Text>
                        <Text style={styles.subTitleText}>You account has been deleted permanently. Along with all your pet's information</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        left: '10%',
        right: '10%',
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
    headerText: {
        marginTop: 30,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitleText: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        width: '80%',
    },
});

export default DeleteSuccessPopup;