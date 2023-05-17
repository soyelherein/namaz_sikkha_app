import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text,Image, View } from 'react-native';
import { Link } from "expo-router";
import { useNavigation, useRouter, useSearchParams } from "expo-router";

const customData = require('../assets/surah_names.json');

export default function surah_details() {
  const navigation = useNavigation();
  const router = useRouter();
  const params = useSearchParams();
  const {surah_name } = params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
        style={styles.tinyLogo}
        source= {require('../assets/mosque.png')}
      />
        <Text style={styles.title}>  নামায শিক্ষা</Text>
      </View>

     <Link href="./">Go Back</Link>

      <StatusBar style="auto" />
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
    marginTop:20,
    backgroundColor: '#adff2f',
    paddingLeft:20,
    flexDirection: 'row',
    textAlign: 'center'
  },
  tinyLogo: {
    marginTop:10,
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
    marginTop:16,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    textAlign: 'center'
  },
  para: {
    marginTop: 16,
    paddingVertical: 8,
    paddingLeft:20,
    backgroundColor: '#ffffff',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 27,
    fontWeight: '300',
  },
});

