import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
import Skeleton from '../components/Skeleton';

const ResultShowScreen = (props) => {
  const { route } = props;
  const id = route.params.id;

  const [result, setResult] = useState([]);

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return (
            <Skeleton
              width={300}
              height={200}
              style={{ borderRadius: 4, marginBottom: 20 }}
              show={!item}
            >
              <Image style={styles.imageStyle} source={{ uri: item }} />
            </Skeleton>
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageStyle: {
    width: 300,
    height: 200,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: '#ccc',
  },
});

export default ResultShowScreen;
