import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {
  const { term, onTermChange, onSubmitText } = props;

  return (
    <View style={styles.container}>
      <Feather style={styles.searchIcon} name="search" />
      <TextInput
        value={term}
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        placeholder="Search..."
        onChangeText={onTermChange}
        onEndEditing={() => onSubmitText()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
  },
  searchIcon: {
    fontSize: 26,
    alignSelf: 'center',
    marginHorizontal: 10,
    color: 'gray',
  },
  input: {
    height: 40,
    flex: 1,
  },
});

export default SearchBar;
