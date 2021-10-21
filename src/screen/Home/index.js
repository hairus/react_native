import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {Container} from '../../components'

const Component = () => {

  useEffect(() => {
    console.log('halo')
  },[])

  return (
    <View>
      <Text>Home</Text>
      <Container title='Pertama' />
      <Container title='Pertama' />
      <Container title='Pertama' />
    </View>
  );
};

export default Component;
