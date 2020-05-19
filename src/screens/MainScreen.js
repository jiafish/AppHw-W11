import React, { useContext } from "react";
import { StyleSheet, Dimensions, View, Text, FlatList, TouchableOpacity, Image, ScrollView, ImageBackground, SectionList, SafeAreaView } from "react-native";
import Drink from "../json/drink.json";
import MainList from "../components/MainList";
import { StoreContext } from "../stores/drinkStore";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const MainScreen = ({ navigation }) => {
  const { drinkState } = useContext(StoreContext);
  const [drinks, setDrinks] = drinkState;
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <Image
        style={{ position: 'absolute', height: screenHeight, width: screenWidth }}
        source={require('../../assets/icon/bg-juice.png')} />
        <View>
                <View style={styles.DataStyle}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, margin: 3 }}>今日攝取</Text>
                    <ImageBackground
                      style={{ height: 124, width: 124, alignItems: 'center', justifyContent: 'center' }}
                      source={require('../../assets/icon/cal.png')}>
                      <Text style={styles.dataFontStyle}>500</Text>
                    </ImageBackground>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, margin: 3 }}>本月杯數</Text>
                    <ImageBackground
                      style={{ height: 124, width: 124, alignItems: 'center', justifyContent: 'center' }}
                      source={require('../../assets/icon/cup.png')}>
                      <Text style={styles.dataFontStyle}>20</Text>
                    </ImageBackground>
                  </View>
                </View>
                <View style={styles.calStyle}>
                  <Text style={{ color: "#FF612B" }}>本月剩餘熱量</Text>
                  <Text style={{ fontSize: 21, color: "#6A6A6A" }}>2000-250=1750 cal</Text>
                </View>
              </View>
        <FlatList
          data={drinks}
          renderItem={({ item }) =>
            <MainList
              drink={item}
              navigation={navigation}
            />}
          keyExtractor={item => item.day}
        />
      <TouchableOpacity
        onPress={() => { navigation.navigate('Add') }}
        style={styles.TouchStyle}>
        <Image
          style={styles.iconStyle}
          source={require('../../assets/icon/btn-FAB.png')} />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    //position:"absolute",
    height: 84,
    width: 84,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TouchStyle: {
    position: 'absolute',
    width: 84,
    height: 84,
    alignSelf: 'center',
    justifyContent: 'center',
    //right: 150,
    bottom: 30,
  },
  DataStyle: {
    width: null,
    height: 200,
    backgroundColor: '#FAE7CB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: "#00000029",
    borderBottomRightRadius: 21,
    borderBottomLeftRadius: 21,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: "#000",
    elevation: 3
  },
  calStyle: {
    width: null,
    height: 64,
    margin: 16,
    borderColor: "#D5A5FF",
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  dataFontStyle: {
    fontSize: 40,
    color: "#FF612B"
  }
});

export default MainScreen;