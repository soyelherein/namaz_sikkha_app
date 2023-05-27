import { StatusBar } from 'expo-status-bar';
import { useState, } from 'react';
import { StyleSheet, FlatList, Text, Image, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function LangSel() {
  const [selectedLanguage, setSelectedLanguage] = useState("bengali");
  console.log(selectedLanguage)
  return (
      <View>
        <Text style={styles.para}>Select Language</Text>
        <Picker style={styles.para}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Bengali" value="bengali" />
        <Picker.Item label="English" value="english" />
        </Picker>
      </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#f5f5f5',
    },
    header: {
      marginTop: 20,
      backgroundColor: '#adff2f',
      paddingLeft: 20,
      flexDirection: 'row',
      textAlign: 'center'
    },
    tinyLogo: {
      marginTop: 10,
      width: 40,
      height: 40,
    },
    title: {
      paddingVertical: 8,
      color: '#20232a',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '500'
    },
    row: {
      marginTop: 16,
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      textAlign: 'center'
    },
    para: {
      marginTop: 16,
      paddingVertical: 8,
      paddingLeft: 20,
      backgroundColor: '#ffffff',
      color: '#20232a',
      textAlign: 'center',
      fontSize: 27,
      fontWeight: '300',
    },
  });