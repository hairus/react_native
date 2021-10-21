import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import axios from 'axios';

import styles from './styles';

const Component = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const _getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://192.168.2.6:8000/api/users');
      console.log(res);
      setLoading(false);
      setData(res.data);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    _getData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.wrapLoading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={_getData} />
          }
          renderItem={({item}) => (
            <TouchableOpacity style={styles.wrapItem}>
              <Text>{`Nama: ${item.name}`}</Text>
              <Text>{`Alamat: ${item.alamat}`}</Text>
              <Text>{`Umur: ${item.umur}`}</Text>
              <Text>{`Harga: ${item.harga}`}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Component;
