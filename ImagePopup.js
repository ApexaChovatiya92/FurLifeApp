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

const { height } = Dimensions.get('window');

const images = [
    require('./Images/a.png'),
    require('./Images/b.jpg'),
    require('./Images/c.jpeg'),
    require('./Images/d.jpeg'),
    require('./Images/e.jpg'),
];

const ImagePopup = ({ visible, onClose }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const screenHeight = Dimensions.get('window').height;

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
                <View style={[styles.modalContainer, { height: screenHeight * 0.5 }]}>

                    <View style={styles.header}>
                        <Text style={styles.headerText}>Bordetella/ Kennel Cough</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={handlePrevImage} style={styles.iconContainer}>
                            <Image
                                source={require('./arrow-left-circle.png')} 
                                style={{ width: 40, height: 40 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Image source={images[imageIndex]} style={styles.image} />
                        <TouchableOpacity onPress={handleNextImage} style={styles.iconContainer}>
                            <Image
                                source={require('./arrow-right-circle.png')} 
                                style={{ width: 40, height: 40 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>{`${imageIndex + 1}/${images.length}`}</Text>
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
        paddingTop: 40,
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
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
        marginBottom:20,
    },
    footerText: {
        fontSize: 16,
    },
    closeButton: {
        position: 'absolute',
        bottom: 420,
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
});

export default ImagePopup;