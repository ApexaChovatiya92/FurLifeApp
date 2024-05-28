import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import CalenderPopup from './CalenderPopup';
import DeleteReminderPopup from './DeleteReminderPopup';
const Reminder = () => {
    const moreIconRefs = useRef([]);

    const FlatListItem = ({ data, index }) => {
        return (
            <View style={styles.itemMainContainer}>
                <View style={styles.itemcontainer}>
                    <View style={styles.row}>
                        <View style={styles.firstTextContainer}><Text style={styles.firsttext}>{data[0]}</Text></View>
                        <View style={styles.firstTextContainer}><Text style={styles.firsttext}>{data[1]}</Text></View>
                        <View style={styles.firstTextContainer}><Text style={styles.firsttext}>{data[2]}</Text></View>
                        <View style={styles.moreIconContainer}>
                            <TouchableOpacity
                                onPress={() => handleMorePress(index)}
                                ref={ref => moreIconRefs.current[index] = ref}
                            >
                                <Image source={require('./more.png')} style={styles.moreIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.singleText}>{data[3]}</Text>
                    </View>
                    <View style={[styles.row, styles.timerRow]}>
                        <Image source={require('./clock.png')} style={styles.timerIcon} />
                        <Text style={styles.timerText}>{data[4]}</Text>
                    </View>
                </View>
            </View>

        );
    };
    const handleDelete = () => {
        // Handle delete action
        setModalVisible(false);
        onDeletePressed();

    };

    const handleEdit = () => {
        // Handle edit action
        setModalVisible(false);
    };

    const navigation = useNavigation();
    const data = [
        ['10AM', '10mg', '1 tablet/day', 'Loperamide (Imodium®)', '10:00 - 12:11'],
        ['8AM', '20mg', '2 tablets/day', 'Loperamide (Imodium®)', '08:00 - 12:11'],
        ['8AM', '20mg', '2 tablets/day', 'Loperamide (Imodium®)', '08:00 - 12:11'],
        ['8AM', '20mg', '2 tablets/day', 'Loperamide (Imodium®)', '08:00 - 12:11'],
        ['8AM', '20mg', '2 tablets/day', 'Loperamide (Imodium®)', '08:00'],
        ['8AM', '20mg', '2 tablets/day', 'Loperamide (Imodium®)', '08:00'],
    ];
    const handleBackPress = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };
    const [isCalPopupVissible, setPopupVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
    const [selectedDate, setSelectedDate] = useState('January 12, 2021 - Today');
    
    const [isPopupVisible, setDeletePopupVisible] = useState(false);

    const onCalenderPressed = () => {
        setPopupVisible(true);
    };

    const onDeletePressed = () => {
        setDeletePopupVisible(true);
    };

    const handleCalenderClosePopup = (date) => {
        setPopupVisible(false);
        setSelectedDate(date)
    };
    
    const handleClosePopup = () => {
        setDeletePopupVisible(false);
    };
    
    
    const onCreateReminder = () => {
        navigation.navigate('CreateReminder')
    };

    const handleMorePress = (index) => {
        moreIconRefs.current[index].measure((fx, fy, width, height, px, py) => {
            setModalPosition({ x: px-(width*3), y: py + height });
            setModalVisible(true);
        });
    };

    return (
        <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center', position: 'absolute', flex: 1, bottom: 0, top: 0, }}>
            <View style={styles.textContainer}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Image
                        source={require('./black-arrow.png')} // Add your image here
                        style={styles.backIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.text}>Reminder</Text>
                <TouchableOpacity onPress={handleBackPress}>
                    <Image
                        source={require('./notification.png')} // Add your image here
                        style={styles.notiIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.deleteButton} onPress={onCalenderPressed}>
                    <Text style={styles.deleteButtonText}>{selectedDate}  ▼</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonActive} onPress={onCreateReminder}>
                    <Text style={styles.cancelButtonText}>Create Reminder</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.flateContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => <FlatListItem data={item} index={index} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            {isModalVisible && (
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={[styles.modalContent, { top: modalPosition.y, left: modalPosition.x }]}>
                            <TouchableOpacity style={styles.modalButton} onPress={handleEdit}>
                                <View style={styles.rowPopup}>
                                    <Image source={require('./ic_edit.png')} style={styles.timerIcon} />
                                    <Text style={styles.modalButtonText}>Edit</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={handleDelete}>
                                <View style={styles.rowPopup}>
                                    <Image source={require('./ic_trash.png')} style={styles.timerIcon} />
                                    <Text style={styles.modalButtonText}>Delete</Text>         
                               </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )}
            {
                isCalPopupVissible && (
                    <CalenderPopup isVisible={isCalPopupVissible} onClose={handleCalenderClosePopup} />)
            }
               {
                isPopupVisible && (
                    <DeleteReminderPopup isVisible={isPopupVisible} onClose={handleClosePopup} />
                  )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    moreIconContainer: {
        position: 'absolute',
        top: 0,
        right: 20,
    },
    itemcontainer: {
        margin: 10,
        flexDirection: 'column',
        width: '100%',
    },
    itemMainContainer: {
        flex: 1,
        width: '100%',
        height: '100',
        backgroundColor: '#ffffff',
        marginBottom: 10,
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 30,
    },
    rowPopup: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 90,
        paddingRight: 30,
        height: 20,
    },
    firsttext: {
        paddingHorizontal: 7,
        paddingVertical: 4,
        marginRight: 3,
        fontSize: 12,
    },
    firstTextContainer: {
        backgroundColor: '#FFF7F2',
        borderRadius: 15,
        marginRight: 5,
    },
    singleText: {
        marginRight: 8,
        marginLeft: 8,
    },
    timerText: {
    },
    deleteButton: {
        borderRadius: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        width: '60%'
    },
    deleteButtonText: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 14,
    },
    buttonActive: {
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006C97',
        width: '40%',
    },
    cancelButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
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
    flateContainer: {
        position: 'absolute',
        flex: '1',
        top: 230,
        width: '90%',
        marginBottom: 20,
        bottom: 0,
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
    timerIcon: {
        height: 15,
        width: 15,
        marginHorizontal: 5,
    },
    moreIcon: {
        height: 20,
        width: 15,
        marginHorizontal: 5,
    },
    notiIcon: {
        height: 20,
        width: 20,
        marginRight: 10,
    },
    buttonContainer: {
        position: 'absolute',
        justifyContent: 'space-between',
        top: 150,
        width: '90%',
        height: 50,
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 10,
        height: 120,
    },
    modalButton: {
        paddingVertical: 10,
    },
    modalButtonText: {
        fontSize: 16,
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        position: 'absolute',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    modalButton: {
        paddingVertical: 10,
    },
    modalButtonText: {
        fontSize: 16,
    },
});
export default Reminder;