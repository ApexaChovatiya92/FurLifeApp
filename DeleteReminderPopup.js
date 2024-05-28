import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';

const { height } = Dimensions.get('window');

const images = [
    require('./Images/a.png'),
    require('./Images/b.jpg'),
    require('./Images/c.jpeg'),
    require('./Images/d.jpeg'),
    require('./Images/e.jpg'),
];

const DeleteReminderPopup = ({ visible, onClose }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const screenHeight = Dimensions.get('window').height;
    const [otp, setOtp] = useState('');
    const handleChange = (otp) => {
        setOtp(otp);
    };
    const handleNextImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <Modal transparent={true} visible={visible} animationType="slide">
            <View style={[styles.modalMainContainer, { height: screenHeight }]}>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Image
                        source={require('./x-circle.png')}
                        style={{ width: 40, height: 40 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={[styles.modalContainer, { height: screenHeight * 0.4 }]}>
                    <View style={styles.header}>
                        <Image
                            source={require('./error.png')}
                            style={{ width: 60, height: 60 }}
                            resizeMode="contain"
                        />
                        <Text style={styles.headerText}>Delete Reminder</Text>
                        <Text style={styles.subTitleText}>
                          Are you sure you want to delete your reminder?
                        </Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.deleteButton} onPress={onClose}>
                                <Text style={styles.deleteButtonText}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.buttonActive} onPress={onClose}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    openText: {
        fontSize: 18,
        color: 'blue',
    },
    viewTextInputContainer: {
        flex: 1,
        position: 'relative',
        flexDirection: 'row',
        height: 50,
        width: '80%',
        marginTop: 30,
    },
    modalContainer: {
        position: 'absolute',
        bottom: '0%',
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
        elevation: 5,
    },
    modalMainContainer: {
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
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitleText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        width: '80%',
    },
    boldText: {
        fontWeight: 'bold',
    },
    imageContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    iconContainer: {
        padding: 5,
    },
    footer: {
        paddingVertical: 5,
        marginBottom: 20,
    },
    footerText: {
        fontSize: 16,
    },
    closeButton: {
        position: 'absolute',
        bottom: 320,
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    buttonContainer: {
        position: 'relative',
        top: 80,
        bottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    deleteButton: {
        flex: 1,
        padding: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    deleteButtonText: {
        color: 'red',
        fontWeight: 'bold',
    },
    cancelButton: {
        flex: 1,
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    buttonActive: {
        flex: 1,
        padding: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        backgroundColor: '#006C97',
    },
    cancelButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default DeleteReminderPopup;