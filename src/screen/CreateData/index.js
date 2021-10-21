import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';

import styles from './styles';

const initForm = {
  name: '',
  alamat: '',
  umur: '',
  harga: '',
};

const Component = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initForm);

  const listForm = [
    {
      key: 'name',
      placeholder: 'Name',
    },
    {
      key: 'alamat',
      placeholder: 'Alamat',
    },
    {
      key: 'umur',
      placeholder: 'Umur',
    },
    {
      key: 'harga',
      placeholder: 'Harga',
    },
  ];

  const _handleSubmmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post('http://192.168.2.6:8000/api/create', form);

      console.log(res.data);
      setLoading(false);
      setForm(initForm);
    } catch (e) {
      setLoading(false);
      Alert.alert(e.response.data.message);
    }
  };

  return (
    <View style={styles.container}>
      {listForm.map((item, index) => (
        <TextInput
          key={index}
          value={form[item.key]}
          style={styles.textInput}
          placeholder={item.placeholder}
          onChangeText={e => setForm({...form, [item.key]: e})}
        />
      ))}

      <TextInput onChangeText={e => console.log(e)} />

      <TouchableOpacity
        style={styles.button}
        disabled={loading}
        onPress={_handleSubmmit}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={{color: '#fff'}}>Create</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Component;
