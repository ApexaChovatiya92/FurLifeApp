import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { ScrollView } from 'react-native-gesture-handler';
import DeleteAccountPopup from './DeleteAccountPopup';
import DeleteSuccessPopup from './DeleteSuccessPopup';
const CustomComponent = ({ title, subtitle, date }) => {
    return (
        <View style={styles.vacContainer}>
            <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                <Image
                    source={require('./edit.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.row}>
                <View style={styles.details}>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
        </View>
    );
};
const CustomSecondComponent = ({ title }) => {
    return (
        <View style={styles.changeContainer}>
            <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                <Image
                    source={require('./edit.png')}
                    style={styles.image}
                />
            </View>
        </View>
    );
};
const Setting = () => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isDeleteSuccessPopupVisible, setDeletePopupVisible] = useState(false);

    const handleOpenPopup = () => {
        setPopupVisible(true);
    };
  
    const handleClosePopup = () => {
        setPopupVisible(false);
        handleDeleteSuccessOpenPopup();
    };
  
    const handleDeleteSuccessOpenPopup = () => {
        setDeletePopupVisible(true);
    };
  
    const handleDeleteSuccessClosePopup = () => {
        setDeletePopupVisible(false);
    };
  
    return (
        <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center', position: 'absolute', flex: 1, }}>
            <View style={styles.textContainer}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Image
                        source={require('./black-arrow.png')} // Add your image here
                        style={styles.backIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.text}>Settings</Text>
                <TouchableOpacity onPress={handleBackPress}>
                    <Image
                        source={require('./notification.png')} // Add your image here
                        style={styles.notiIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ width: '100%', position: 'absolute', top: 160 }}>
                <View style={{ width: '100%', height: 500, alignItems: 'center', }} >
                    <CustomComponent title="Canini Adenovirus (CAV)" subtitle="Royal pet clinic" date="22 Mar 2022" />
                    <CustomSecondComponent title="Change Password" />
                     <TouchableOpacity  onPress={handleDeleteSuccessOpenPopup } style={styles.editDetailText}>
                     <Text style={styles.editDetailText}>Delete Account</Text>
                     </TouchableOpacity>
                </View>
            </ScrollView>
            {
                isPopupVisible && (
                    <DeleteAccountPopup isVisible={isPopupVisible} onClose={handleClosePopup} />
                  )
            }
            {
                isDeleteSuccessPopupVisible && (
                    <DeleteSuccessPopup isVisible={isDeleteSuccessPopupVisible} onClose={handleDeleteSuccessClosePopup} />
                  )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    textInputContainer: {
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#616466',
    },
    vacContainer: {
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        width: '90%',
        marginBottom: 15,
        height: 100,
    },
    changeContainer: {
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        width: '90%',
        marginBottom: 15,
        height: 45,
    },
    content: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginLeft: -20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 10,
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 10,
        width: '100%'
    },
    image: {
        width: 24,
        height: 24,
        marginTop: -15,
        marginLeft: 20,
    },
    details: {
        flexDirection: 'column',
        width: '80%',
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 5,
    },
    date: {
        fontSize: 12,
    },
    arrowIcon: {
        width: 15,
        height: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
    },
    viewNameHeader: {
        position: 'absolute',
        width: '100%',
        top: 140,
        padding: 15,
        alignItems: 'center',
        borderRadius: 20,
        height: 400,
    },
    viewDataHeader: {
        position: 'absolute',
        width: '100%',
        top: 70,
        padding: 15,
        alignItems: 'center',
        height: 200,
    },
    viewHeader: {
        position: 'absolute',
        width: '90%',
        backgroundColor: '#FFFFFF',
        top: 50,
        padding: 15,
        alignItems: 'center',
        borderRadius: 20,
        height: 80,
    },
    textContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        top: 50,
        height: 70,
        left: 0,
        width: '90%',
        margin: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        alignItems: 'center',
    },
    viewContainer: {
        flex: 1,
        position: 'absolute',
        top: 320,
        height: '85%',
        left: 40,
        width: '80%',
    },
    viewTextInputContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        width: '100%',
    },
    tabContainer: {
        position: 'absolute',
        flex: '1',
        flexDirection: 'row',
        top: 280,
        height: 30,
        left: 20,
    },
    text: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },

    headerText: {
        color: '#000000',
        fontSize: 16,
        marginTop: 5,
    },
    curveBackGroundWhite: {
        marginTop: 700,
        height: "98%",
        width: "100%",
    },
    backIcon: {
        height: 40,
        width: 30,
        marginHorizontal: 5,
    },
    notiIcon: {
        height: 20,
        width: 20,
        marginRight: 10,
    },
    buttonContainer: {
        position: 'relative',
        top: 750,
        width: '100%',
        height: 40,
    },
    button: {
        backgroundColor: '#006C97',
        borderRadius: 5,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    editDetailText: {
        color: '#EF4444',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'left',
        margin:5,
        textDecorationLine: 'underline',
        width: '90%',
    },
});


export default Setting;