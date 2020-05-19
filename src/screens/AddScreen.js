import React, { useState, useContext } from "react";
import { StyleSheet, View, Dimensions, Text, ScrollView, Image } from "react-native";
import { Input, ButtonGroup } from "react-native-elements";
import { StoreContext } from "../stores/drinkStore";

const screenWidth = Dimensions.get('window').width;

const sweetBtn = ['無糖', '微糖', '半糖', '少糖', '全糖'];
const iceBtn = ['去冰', '微冰', '半冰', '少冰', '全冰'];

const AddScreen = () => {
    const [sweetindex, setSweet] = useState(0);
    const [iceindex, setIce] = useState(0);

    const { drinkTempState } = useContext(StoreContext);
    const [drinkTemp, setDrinkTemp] = drinkTempState;
    return (
        <View style={{ flex: 1 }} >
            <ScrollView>
                <Image
                    style={{ position: 'absolute', height: 750, width: screenWidth }}
                    resizeMode='stretch'
                    source={require('../../assets/icon/bg.png')} />
                <View style={{
                    width: 343, height: null, alignSelf: 'center', justifyContent: 'center'
                }}>
                    <View style={{ paddingTop: 24 }}>
                        <Input
                            leftIcon={() => <Image style={{ width: 24, height: 24, marginLeft: -25 }} source={require('../../assets/icon/icon-room.png')} />}
                            leftIconContainerStyle={{
                                width: 24, height: 24
                            }}
                            placeholder="店家名稱"
                            containerStyle={{
                                height: 54,
                                width: null,
                                backgroundColor: '#FAE7CB',
                                borderColor: "#FFB385",
                                borderRadius: 2,
                                borderWidth: 1
                            }}
                            inputContainerStyle={{
                                height: 54,
                                width: null,
                                borderColor: "transparent",
                                alignSelf: 'center'
                            }}
                            inputStyle={{
                                color: '#515151',
                                fontSize: 16
                            }}
                            placeholderTextColor="#9D9D9D"
                            onChangeText={(store) => setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], store } } })}
                        // value={me.email}
                        // onChangeText={(email) => setMe({ ...me, email })}
                        />

                    </View>
                    <View style={{ paddingTop: 8 }}>
                        <Input
                            leftIcon={() => <Image style={{ width: 24, height: 24, marginLeft: -25 }} source={require('../../assets/icon/icon-create.png')} />}
                            leftIconContainerStyle={{
                                width: 24, height: 24
                            }}
                            placeholder="飲品名稱"
                            containerStyle={{
                                height: 54,
                                width: null,
                                backgroundColor: '#FAE7CB',
                                borderColor: "#FFB385",
                                borderRadius: 2,
                                borderWidth: 1
                            }}
                            inputContainerStyle={{
                                height: 54,
                                width: null,
                                borderColor: "transparent",
                                alignSelf: 'center'
                            }}
                            inputStyle={{
                                color: '#515151',
                                fontSize: 16
                            }}
                            placeholderTextColor="#9D9D9D"
                            onChangeText={(name) => setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], name } } })}
                        // value={me.email}
                        // onChangeText={(email) => setMe({ ...me, email })}
                        />
                    </View>
                    <View style={{ paddingTop: 8 }}>
                        <View style={{
                            paddingTop: 8,
                            flexDirection: 'row',
                            backgroundColor: '#FAE7CB',
                            borderColor: "#FFB385",
                            borderRadius: 2,
                            borderWidth: 1,
                            height: 54,
                            width: 343,
                            justifyContent: 'space-between',
                            alignItems: 'center',

                        }}>
                            <View style={{
                                height: 54, width: 204, flexDirection: 'row', alignItems: 'center'
                            }}>
                                <Input
                                    leftIcon={() => <Image style={{ width: 16, height: 18, marginLeft: -25 }} source={require('../../assets/icon/icon-cup.png')} />}
                                    leftIconContainerStyle={{
                                        width: 24, height: 24
                                    }}
                                    placeholder="杯數"
                                    containerStyle={{
                                        height: 54,
                                        width: 118,
                                    }}
                                    inputContainerStyle={{
                                        height: 54,
                                        width: null,
                                        borderColor: "transparent",
                                        alignSelf: 'center',
                                    }}
                                    inputStyle={{
                                        color: '#515151',
                                        fontSize: 16
                                    }}
                                    placeholderTextColor="#9D9D9D"
                                    onChangeText={(cup) => setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], cup } } })}
                                // value={me.email}
                                // onChangeText={(email=> setMe({ ...me, email })}
                                />
                                <Text style={{ fontSize: 14, color: '#FF8155' }}>cup</Text>
                            </View>
                            <View style={{
                                height: 54,
                                width: 140, flexDirection: 'row', alignItems: 'center'
                            }}>
                                <Input
                                    placeholder="容量"
                                    containerStyle={{
                                        height: 54,
                                        width: 108
                                    }}
                                    inputContainerStyle={{
                                        height: 54,
                                        width: null,
                                        borderColor: "transparent",
                                        marginLeft: 40
                                    }}
                                    inputStyle={{
                                        color: '#515151',
                                        fontSize: 16
                                    }}
                                    placeholderTextColor="#9D9D9D"
                                    onChangeText={(capacity) => setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], capacity } } })}
                                // value={me.email}
                                // onChangeText={(email) => setMe({ ...me, email })}
                                />
                                <Text style={{ fontSize: 14, color: '#FF8155' }}>ml</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 8 }}>
                        <View style={{
                            height: 170,
                            width: 343,
                            backgroundColor: '#FAE7CB',
                            borderColor: "#FFB385",
                            borderRadius: 2,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 20, height: 19, marginLeft: 11, marginRight: 10 }}
                                    source={require('../../assets/icon/Icon-suger.png')} />
                                <Text style={{ marginBottom: 12, marginTop: 11, color: "#FF8155" }}>甜度</Text>
                            </View>

                            {/* <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="無糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="微糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="半糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="少糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="全糖" /> */}
                            <ButtonGroup
                                buttons={sweetBtn}
                                onPress={(sweetindex, sweet) => {
                                    setSweet(sweetindex);
                                    sweet = sweetBtn[sweetindex];
                                    setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], sweet, sweetindex } } });

                                }}
                                selectedIndex={sweetindex}
                                containerStyle={{
                                    height: 30,
                                    width: 330,
                                    borderWidth: 0,
                                    marginBottom: 5,
                                    backgroundColor: '#FAE7CB',
                                }}
                                buttonStyle={{
                                    height: 30,
                                    width: 64,
                                    backgroundColor: "#FFFFFF",
                                    borderColor: "#FFB385",
                                    borderRadius: 2,
                                    borderWidth: 1,
                                }}
                                selectedButtonStyle={{
                                    backgroundColor: "#FFB385",
                                    borderColor: "#FF612B"
                                }}
                                textStyle={styles.buttonFontStyle}
                                innerBorderStyle={{ width: 0 }}
                            />
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ marginLeft: 40, marginBottom: 12, marginTop: 11, alignSelf: 'flex-start', color: "#FF8155" }}>冰塊</Text>
                                {/* <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="無糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="微糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="半糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="少糖" />
                            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.buttonFontStyle} type='outline' title="全糖" /> */}
                                <ButtonGroup
                                    buttons={iceBtn}
                                    onPress={(iceindex, ice) => { setIce(iceindex); ice = iceBtn[iceindex]; setDrinkTemp({ ...drinkTemp, detail: { ...drinkTemp.detail, 0: { ...drinkTemp.detail[0], ice } } }); }}
                                    selectedIndex={iceindex}
                                    containerStyle={{
                                        height: 30,
                                        width: 330,
                                        borderWidth: 0,
                                        marginBottom: 5,
                                        backgroundColor: '#FAE7CB',
                                    }}
                                    buttonStyle={{
                                        height: 30,
                                        width: 64,
                                        backgroundColor: "#FFFFFF",
                                        borderColor: "#FFB385",
                                        borderRadius: 2,
                                        borderWidth: 1,
                                    }}
                                    selectedButtonStyle={{
                                        backgroundColor: "#FFB385",
                                        borderColor: "#FF612B"
                                    }}
                                    textStyle={styles.buttonFontStyle}
                                    innerBorderStyle={{ width: 0 }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 8 }}>
                        <Input
                        leftIcon={() => <Image style={{ width: 48, height: 48, marginLeft: -25 }} source={require('../../assets/icon/btn-today.png')} />}
                        leftIconContainerStyle={{
                            width: 24, height: 24
                        }}
                            placeholder="日期"
                            containerStyle={{
                                height: 54,
                                width: null,
                                backgroundColor: '#FAE7CB',
                                borderColor: "#FFB385",
                                borderRadius: 2,
                                borderWidth: 1
                            }}
                            inputContainerStyle={{
                                height: 54,
                                width: null,
                                borderColor: "transparent",
                                alignSelf: 'center'
                            }}
                            inputStyle={{
                                color: '#515151',
                                fontSize: 16
                            }}
                            placeholderTextColor="#9D9D9D"
                            onChangeText={(day) => setDrinkTemp({ ...drinkTemp, day })}
                        // value={me.email}
                        // onChangeText={(email) => setMe({ ...me, email })}
                        />
                    </View>
                    <View style={{ paddingTop: 38, paddingBottom: 76 }}>
                        <View style={{
                            width: 183,
                            height: 183,
                            backgroundColor: '#FAE7CB',
                            borderColor: "#FFB385",
                            borderRadius: 2,
                            borderWidth: 1,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Image
                                style={{ width: 86, height: 86 }}
                                source={require('../../assets/icon/icon-plus.png')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        //flexDirection:'row',
        height: 30,
        width: 64,
        backgroundColor: "#FFFFFF",
        borderColor: "#FFB385",
        borderRadius: 2,
        borderWidth: 0.5,
        //padding:3
    },
    clickButtonStyle: {
        //flexDirection:'row',
        height: 30,
        width: 64,
        backgroundColor: "#FF612B",
        borderColor: "#FFB385",
        borderRadius: 2,
        borderWidth: 0.5,
        //padding:3
    },
    buttonFontStyle: {
        color: '#9D9D9D',
        fontSize: 12
    }
});

export default AddScreen;