import React from 'react';
import { Text, HStack, Pressable } from '@gluestack-ui/themed';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ title, destination }) => {
  const { navigate } = useNavigation();
   return (
     <Pressable
       onPress={() => {
         destination ? navigate(destination) : null;
       }}
     >
       <HStack
         bg="#4D7037"
         px="$4"
         py="$3"
         borderTopWidth={1}
         borderColor="lightgray"
         justifyContent="space-between" 
       >

         <Text size={16} color="white">{title}</Text>
         <AntDesign name="right" color="white"
          size={16} />
       </HStack>
     </Pressable>
   );
}

export default ListItem;