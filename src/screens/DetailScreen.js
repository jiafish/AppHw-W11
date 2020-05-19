import React from "react";
import { View, Text, Dimensions, Image, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const DetailScreen = ({ route }) => {
  const {
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
  } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Image
        blurRadius={1}
        style={{ position: 'absolute', height: screenHeight, width: screenWidth }}
        source={require('../../assets/icon/bg-detail-juice.png')} />
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          {/* <View style={styles.photoStyle}> */}
          <View style={styles.photoBgStyle}>
            <Image
              style={styles.photoStyle}
              source={{ uri: photo }} />
          </View>

          {/* </View> */}
          <View style={{ alignItems: 'center' }}>
            <ImageBackground
              blurRadius={5}
              style={styles.detailBgStyle}
              source={require('../../assets/icon/bg-detail.png')} />
            <View style={styles.detailStyle}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: '#515151', fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
                <Text style={{ color: '#515151', fontSize: 12, fontWeight: 'bold' }}>{store}</Text>
              </View>
              <View style={{ alignItems: 'flex-start', marginLeft: 30, marginTop: 16 }}>
                <Text style={styles.detailFontStyle}>{"容量:" + cup + "cup/" + capacity + "ml"}</Text>
                <Text style={styles.detailFontStyle}>{"甜度:" + sweet}</Text>
                <Text style={styles.detailFontStyle}>{"冰塊:" + ice}</Text>
              </View>
              <View style={{ marginLeft: 13, marginTop: 22, flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', marginRight: 6 }}>
                  <ImageBackground
                    style={styles.detailImg}
                    source={require('../../assets/icon/bg-circle.png')}>
                    <Text style={styles.mainDetailStyle}>{calories + "cal"}</Text>
                  </ImageBackground>
                  <Text style={{ color: '#6A6A6A', fontSize: 14 }}>熱量</Text>
                </View>
                <View style={{ alignItems: 'center', marginRight: 6 }}>
                  <ImageBackground
                    style={styles.detailImg}
                    source={require('../../assets/icon/bg-circle.png')}>
                    <Text style={styles.mainDetailStyle}>{sugar + "g"}</Text>
                  </ImageBackground>
                  <Text style={{ color: '#6A6A6A', fontSize: 14 }}>糖量</Text>
                </View>
                <View style={{ alignItems: 'center', marginRight: 6 }}>
                  <ImageBackground
                    style={styles.detailImg}
                    source={require('../../assets/icon/bg-circle.png')}>
                    <Text style={styles.mainDetailStyle}>{sport + "hr"}</Text>
                  </ImageBackground>
                  <Text style={{ color: '#6A6A6A', fontSize: 14 }}>建議運動時間</Text>
                </View>
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  photoStyle: {
    height: 298,
    width: 300,
    //backgroundColor: '#F5F5F5',
    // borderWidth:1,
    // borderColor:'#000',
    // borderRadius: 12,
    // marginTop: 28,
    // marginBottom: -20,
    //zIndex: 1,
  },
  photoBgStyle: {
    height: 298,
    width: 300,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#F5F5F5',
    // borderWidth:1,
    // borderColor:'#000',
    borderRadius: 12,
    marginTop: 28,
    marginBottom: -20,
    shadowColor:'#00000029',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    zIndex: 1,
  },
  detailBgStyle: {
    position: 'absolute',
    height: 386,
    width: 336,
    opacity: 0.3,
    borderColor: '#D5A5FF',
    borderWidth: 1,
    borderRadius: 5
    //blurRadius:5
  },
  detailStyle: {
    height: 386,
    width: 336,
    marginTop: 50
  },
  detailFontStyle: {
    color: '#515151',
    fontSize: 14,
    fontWeight: 'bold'
  },
  detailImg: {
    height: 100,
    width: 100,
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainDetailStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF612B'
  }
})

export default DetailScreen;
