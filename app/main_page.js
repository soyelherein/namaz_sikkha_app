import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, Image, View } from 'react-native';
import { Link } from "expo-router";
import { useNavigation, useRouter, useSearchParams } from "expo-router";
import {styles} from './styles'

const customData = require('../assets/index_items.json');

export default function mainPage() {
    const navigation = useNavigation();
    const router = useRouter();
    const params = useSearchParams();
    const { sel_language, title, back } = params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/kaba_50x63.png')}
        />
        <Link style={styles.head} href={{ pathname: "./"}}>
        <Text>{title}</Text>
        </Link>
      </View>
      <FlatList
        data={
          customData
        }

        renderItem={({ item }) =>
          <View >
            <Link style={styles.para} href={{ pathname: item.link, params: { "sel_language": sel_language, "title" :title , "back":back}} }>
              <Text>{item[sel_language]}</Text>
            </Link>
          </View>}
      />
      <StatusBar style="auto" />
      <View style={styles.head}>
      <Link href="./"><Text style={styles.head}>{back}</Text></Link>
      </View>
    </View>
  );
}



