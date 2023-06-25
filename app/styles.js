import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f5f5f5',
    flex:1
  },
  header: {
    marginTop: 15,
    backgroundColor: '#adff2f',
    paddingLeft: 10,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent:'center'
  },
  tinyLogo: {
    paddingVertical: 8,
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
    textAlign: 'center'
  },
  para: {
    marginTop: 4,
    marginBottom: 4,
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: '#ffffff',
    color: '#20232a',
    fontSize: 27,
    fontWeight: '300',
    textAlign: 'center'
    },
    subheading: {
      marginTop: 0,
      marginBottom: 0,
      paddingVertical: 8,
      paddingLeft: 20,
      backgroundColor: '#adff2f',
      color: '#20232a',
      fontSize: 27,
      fontWeight: '300',
      textAlign: 'center'
      },
  picker: {
    marginTop: 16,
    backgroundColor: '#ffffff',
    color: '#20232a',
    fontSize: 20,
    fontWeight: '200',
  },
  footer: {
    marginTop: 16,
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: '#adff2f',
    color: '#20232a',
    fontSize: 27,
    fontWeight: '300',
  },
  head: {
    marginTop: 10,
    paddingVertical: 8,
    paddingLeft: 20,
    backgroundColor: '#adff2f',
    color: '#20232a',
    fontSize: 27,
    fontWeight: '700',
    height:60,
    textAlign:'center',
  },
});