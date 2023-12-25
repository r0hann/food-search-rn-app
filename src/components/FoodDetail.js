import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import Skeleton from './Skeleton';

const FoodDetail = (props) => {

  const { result } = props;

  return (
    <View style={styles.container}>
      <Skeleton
        width={250}
        height={180}
        style={{ borderRadius: 10 }}
        show={!result}
      >
        <Image source={{ uri: result?.image_url || "" }} style={styles.image} />
      </Skeleton>
      <Text style={styles.name}>{result.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.rating}>{result.rating} Stars</Text>
        <Text style={styles.reviewCount}>{result.review_count} Reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginEnd: 10,
    marginVertical: 10,
  },
  image: {
    width: 250,
    height: 180,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  rating: {
    color: 'gray',
    marginRight: 10,
  },
  reviewCount: {
    color: 'gray',
  },
});

export default FoodDetail;
