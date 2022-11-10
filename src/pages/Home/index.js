import React, { useState } from 'react';
import {
   TouchableWithoutFeedback,
   Keyboard,
   KeyboardAvoidingView,
   Platform,
   Modal
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'

import { StatusBarPage } from '../../components/StatusBarPage'
import { Menu } from '../../components/Menu';
import { ModalLink } from '../../components/ModalLink';

import {
   ContainerLogo,
   ContainerContent,
   Logo,
   Title,
   SubTitle,
   ContainerInput,
   BoxIcon,
   Input,
   ButtonLink,
   ButtonLinkText,
} from "./styles";



export function Home() {

   const [input, setInput] = useState('');
   const [modalVisible, setModalVisible] = useState(false)


   function handleShortLink() {
      // alert(`Url copiada: ${input}`)
      setModalVisible(true)

   }

   return (
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
         <LinearGradient
            colors={['#1ddbb9', '#132742']}
            style={{ flex: 1, justifyContent: 'center' }}
         >
            <StatusBarPage
               barStyle='light-content'
               backgroundColor='#1ddbb9'
            />

            <Menu />

            <KeyboardAvoidingView
               behavior={Platform.OS === 'android' ? 'padding' : 'position'}
               enabled
            >

               <ContainerLogo>
                  <Logo source={require('../../assets/Logo.png')} resizeMode='contain' />
               </ContainerLogo>

               <ContainerContent>

                  <Title>Meus Links</Title>
                  <SubTitle>Cole seu link para encutar</SubTitle>

                  <ContainerInput>
                     <BoxIcon>
                        <Feather name='link' size={22} color='#fff' />
                     </BoxIcon>
                     <Input
                        placeholderTextColor='#fff'
                        placeholder='Cole seu link aqui...'
                        autoCapitalize="none"
                        autoCorrect={false}
                        KeyboardType='url'
                        onChangeText={text => setInput(text)}
                        defaultValue={input}
                     />
                  </ContainerInput>

                  <ButtonLink onPress={handleShortLink}>
                     <ButtonLinkText>Gerar Link</ButtonLinkText>
                  </ButtonLink>

               </ContainerContent>
            </KeyboardAvoidingView>

            <Modal
               visible={modalVisible}
               transparent
               animationType='slide'
            >
               <ModalLink
                  onClose={() => setModalVisible(false)}
               />
            </Modal>

         </LinearGradient>
      </TouchableWithoutFeedback>
   );
}