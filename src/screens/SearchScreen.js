import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, results, errorMessage, setErrorMessage] = useResults();

  const handleChange = (value) => { 
    setSearchTerm(value);
    setErrorMessage('');
  }

  const filterResultsByPrice = () => {
    // $ - Inexpensive
    // $$ - Moderate
    // $$$ - Pricey
    // $$$$ - Ultra High-End

    const lowCosts = [];
    const mediumCosts = [];
    const highCosts = [];

    if(results.length > 0) {
      results.forEach((result) => {
        if(result.price === '$') {
          lowCosts.push(result);
        } else if(result.price === '$$') {
          mediumCosts.push(result);
        } else {
          highCosts.push(result);
        }
      });
    }

    return (
      <ScrollView>
        <ResultList title="Cost Effective" results={lowCosts} />
        <ResultList title="Bit Pricier" results={mediumCosts} />
        <ResultList title="Big Spender" results={highCosts} />
      </ScrollView>
    )
  }
  
  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        term={searchTerm}
        onTermChange={handleChange}
        onSubmitText={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length>0 ? filterResultsByPrice() : null}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
  },
  bodyStyle: {
    backgroundColor: '#fff',
  },
});

export default SearchScreen;
