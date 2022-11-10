import React from "react";
import {
   TouchableWithoutFeedback,
   TouchableOpacity,
   View,
   Share,
} from "react-native";

import { Feather } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard';

import {
   ModalContainer,
   Container,
   Header,
   LinkArea,
   Title,
   LongUrl,
   ShortLinkArea,
   ShortLinkUrl,
} from './styles';


export function ModalLink({ onClose }) {

   async function copyLink() {
      await Clipboard.setStringAsync('hello world');
      alert('link copiado com sucesso! ')
   }

   async function handleShare() {
      try {
         const result = await Share.share({
            message: `Link: https://sergioProgramador.com`
         });

         if (result.action === Share.sharedAction) {
            if (result.activityType) {
               console.log('ActivetyType');
            } else {
               // Compartilhou
               console.log('Compartilhado com sucesso!');
            }
         } else if (result.action === Share.dismissedAction) {
            console.log("Modal Fechado");
         }
      } catch (err) {
         console.log(err.message);
      }
   }


   return (
      <ModalContainer>
         <TouchableWithoutFeedback
            onPress={onClose}
         >
            <View style={{ flex: 1 }}></View>
         </TouchableWithoutFeedback>

         <Container>

            <Header>
               <TouchableOpacity
                  onPress={onClose}

               >
                  <Feather
                     name="x"
                     color="#212743"
                     size={30}
                  />
               </TouchableOpacity>

               <TouchableOpacity onPress={handleShare}>
                  <Feather
                     name="share"
                     color="#212743"
                     size={30}
                  />
               </TouchableOpacity>
            </Header>



            <LinkArea>
               <Title>Link encurtado</Title>
               <LongUrl
                  numberOfLines={1}
               >
                  https://sergioProgramador.com
               </LongUrl>

               <ShortLinkArea
                  activeOpacity={1}
               >
                  <ShortLinkUrl
                     numberOfLines={1}
                     onPress={copyLink}
                  >
                     https://bit.ly/sergio
                  </ShortLinkUrl>

                  <TouchableOpacity onPress={copyLink}>
                     <Feather
                        name="copy"
                        color="#fff"
                        size={25}
                     />
                  </TouchableOpacity>

               </ShortLinkArea>
            </LinkArea>


         </Container>
      </ModalContainer>
   )
}