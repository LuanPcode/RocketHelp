import { useState } from 'react'
import { Alert } from 'react-native'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { VStack, Heading, Icon, useTheme} from 'native-base'
import Logo from '../assets/logo_primary.svg'

import {Envelope, Key } from 'phosphor-react-native'

import { Input } from '../components/input'
import { Button } from '../components/Button'

export function Signin() {
    const [isLoading, setIsLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {colors} = useTheme()

    function handleSignIn(){
        if(!email || !password) {
        return Alert.alert('Entrar','Informe e-mail e senha')
            54,10
        setIsLoading(true)

        auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {

        })
        }
    }

    return( 
        
       <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
        <Logo />
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6} >

                Acesse sua conta    

            </Heading>

            <Input 
             mb={4}
             placeholder="E-mail" 
             InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4} />}
             onChangeText={setEmail}
            />
            <Input 
            mb={8}
             placeholder="Senha" 
             InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4} />}
             secureTextEntry
             onChangeText={setPassword}
            />

            <Button
             title='Entrar'
              w='full' 
              onPress={handleSignIn}
              isLoading
            />
       </VStack>
        
    )
    
}