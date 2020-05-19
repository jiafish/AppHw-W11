import React, { useContext } from "react";
import { StyleSheet, View, FlatList, Text, Image, ImageBackground } from "react-native";
import { StoreContext } from "../stores/drinkStore";
import AnalysisList from "../components/AnalysisList";

const AnalysisScreen = ({ navigation }) => {
  const { drinkState } = useContext(StoreContext);
  const [drinks, setDrinks] = drinkState;
  return (
    <View style={{ flex: 1, backgroundColor: '#FAE7CB' }}>
      <View>
        <FlatList
          ListHeaderComponent={() => {
            return (
              <View style={styles.analysisStyle}>
                <Text style={{ marginLeft: 33, marginTop: 16, fontSize: 14, color: '#515151', alignSelf: 'flex-start', fontWeight: 'bold' }}>總熱量(cal)</Text>
                <ImageBackground
                  style={{ width: 238, height: 160, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 28 }}
                  source={require('../../assets/icon/img-analysis.png')} >
                  <Text style={{ fontSize: 30, color: '#FF8155' }}>2580</Text>
                </ImageBackground>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                  <View style={{ marginTop: 12, alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, color: '#515151', fontWeight: 'bold' }}>總杯數</Text>
                    <Text style={{ fontSize: 30, color: '#FF8155', marginTop: 12 }}>20</Text>
                  </View>
                  <View style={{ marginLeft: 100, marginTop: 12, alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, color: '#515151', fontWeight: 'bold' }}>總金額(NT$)</Text>
                    <Text style={{ fontSize: 30, color: '#FF8155', marginTop: 12 }}>825</Text>
                  </View>
                </View>
              </View>
            )
          }}
          data={drinks}
          renderItem={({ item }) =>
            <AnalysisList
              drink={item}
              navigation={navigation}
            />}
          keyExtractor={item => item.day}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  analysisStyle: {
    height: 337,
    width: null,
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: 21,
    borderBottomLeftRadius: 21,
    alignItems: 'center',
    shadowColor: '#00000029',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3
  },
});

export default AnalysisScreen;