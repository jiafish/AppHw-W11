import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function MainList({ drink, navigation }) {
  return (
    <View style={styles.container}>
      {/* {drink.map((date, i) => {
          return ( */}
      <View>
        <Text style={{ marginLeft: 16, fontSize: 12, marginTop: 15 }}>{drink.day}</Text>
        <View>
          {drink.detail.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => navigation.navigate('Detail', item)}>
                <View style={styles.cardStyle}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      style={{ width: 40, height: 40, marginLeft: 10 }}
                      source={require('../../assets/icon/img.png')} />
                    <Text style={styles.nameStyle}>{item.name}</Text>
                  </View>
                  <View style={{ marginRight: 14 }}>
                    <Text style={{ color: "#6A6A6A" }}>{item.calories + "cal"}</Text>
                    <Text style={{ color: "#6A6A6A" }}>{item.sugar + "g"}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
      {/* )
        })}  */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardStyle: {
    flexDirection: 'row',
    borderColor: "#D5A5FF",
    borderRadius: 2,
    borderWidth: 1,
    height: 54,
    width: null,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10,
    backgroundColor:'#FAE7CB'
  },
  nameStyle: {
    marginLeft: 16,
    color: "#515151",
    fontWeight: 'bold'
  }
});
