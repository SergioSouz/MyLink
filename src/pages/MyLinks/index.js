import React from 'react';
import { View, Text } from 'react-native';
import { StatusBarPage } from '../../components/StatusBarPage'


export function MyLinks() {
   return (
      <View >
         <StatusBarPage
            barStyle='light-content'
            backgroundColor='#132742'
         />
         <Text>pagina home</Text>
      </View>
   );
}