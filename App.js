import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import { } from "./src/stores/drinkStore";

import { StoreProvider, StoreContext } from "./src/stores/drinkStore";

import MainScreen from "./src/screens/MainScreen"
import AnalysisScreen from "./src/screens/AnalysisScreen"
import DetailScreen from "./src/screens/DetailScreen"
import AddScreen from "./src/screens/AddScreen"

const Stack = createStackNavigator();

const App = () => {
  const { drinkState } = useContext(StoreContext);
  const [drinks, setDrinks] = drinkState;

  const { drinkTempState } = useContext(StoreContext);
  const [drinkTemp, setDrinkTemp] = drinkTempState;
  const ref = React.useRef(null);
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main"
          component={MainScreen}
          options={() => ({
            title: null,
            headerStyle: { backgroundColor: "#FFB385", height: 60 },
            headerRight: () => {
              return (
                <View style={{ flexDirection: 'row',justifyContent:'center' }}>
                  <TouchableOpacity>
                    <Image
                      style={styles.btnIconStyle}
                      source={require('./assets/icon/btn-search.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => ref.current?.navigate('Analysis')}
                  >
                    <Image
                      style={styles.btnIconStyle}
                      source={require('./assets/icon/btn-analysis.png')}
                    />
                  </TouchableOpacity>
                </View>
              )
            },
            headerLeft: () => {
              return (
                <TouchableOpacity>
                  <Image
                    style={styles.btnIconStyle}
                    source={require('./assets/icon/btn-setting.png')}
                  />
                </TouchableOpacity>
              )
            }

          })}
        />
        <Stack.Screen name="Analysis"
          component={AnalysisScreen}
          options={({ navigation }) => ({
            title: null,
            headerStyle: { backgroundColor: "#FFB385", height: 60 },
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Main')}>
                  <Image
                    style={styles.btnIconStyle}
                    source={require('./assets/icon/btn-arrow.png')} />
                </TouchableOpacity>
              )
            },
            headerTitle: () => {
              return (
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity>
                    <Image
                      style={styles.btnIconStyle}
                      source={require('./assets/icon/btn-left.png')}
                    />
                  </TouchableOpacity>
                  <Text>4.1~4.30</Text>
                  <TouchableOpacity>
                    <Image
                      style={styles.btnIconStyle}
                      source={require('./assets/icon/btn-right.png')}
                    />
                  </TouchableOpacity>
                </View>
              )
            },
            headerTitleAlign: 'center'
          })}
        />
        <Stack.Screen name="Detail"
          component={DetailScreen}
          options={({ navigation }) => ({
            title: null,
            headerStyle: { backgroundColor: "#FFB385", height: 60 },
            headerRight: () => {
              return (
                <TouchableOpacity>
                  <Image
                    style={styles.btnIconStyle}
                    source={require('./assets/icon/btn-delete.png')}
                  />
                </TouchableOpacity>
              )
            },
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Main')}>
                  <Image
                    style={styles.btnIconStyle}
                    source={require('./assets/icon/btn-arrow.png')} />
                </TouchableOpacity>
              )
            }
          })}
        />
        <Stack.Screen name="Add"
          component={AddScreen}
          options={({ navigation }) => ({
            title: null,
            headerStyle: { backgroundColor: "#FFB385", height: 60 },
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={(name, capacity, sweet, calories, sugar, sport, photo, store, cup, ice, day, data, plus) => {
                    name = drinkTemp.detail[0].name;
                    capacity = drinkTemp.detail[0].capacity;
                    sweet = drinkTemp.detail[0].sweet;
                    photo = drinkTemp.detail[0].photo;
                    store = drinkTemp.detail[0].store;
                    cup = drinkTemp.detail[0].cup;
                    ice = drinkTemp.detail[0].ice;
                    day = drinkTemp.day;
                    sugar = capacity * 0.02 * drinkTemp.detail[0].sweetindex * cup;
                    calories = capacity * 0.08 * drinkTemp.detail[0].sweetindex * cup;
                    //sport = parseInt(calories / 10);
                    sport = (calories / 10 / 60).toFixed(1);
                    data = {
                      day,
                      detail: [
                        {
                          name,
                          capacity,
                          sweet,
                          calories,
                          sugar,
                          sport,
                          photo,
                          store,
                          cup,
                          ice
                        }
                      ]
                    };
                    setDrinks([data, ...drinks]);


                    navigation.navigate('Main');
                  }}>
                  <Image
                    style={styles.btnIconStyle}
                    source={require('./assets/icon/btn-check.png')}
                  />
                </TouchableOpacity>
              )
            },
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Main')}>
                  <Image
                    style={styles.btnIconStyle}
                    source={require('./assets/icon/btn-arrow.png')} />
                </TouchableOpacity>
              )
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnIconStyle: {
    width: 48,
    height: 48
  }
});

//export default App;

export default () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  )
};
