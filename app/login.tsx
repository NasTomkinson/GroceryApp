import {View, Text, Image, StyleSheet } from 'react-native'
import { useState } from 'react'

import ThemedInput from '@components/theme/input'
import ThemedButton from '@components/theme/button'
import Container from '@components/container'

export default function Login () {

    const [userEmail, setUserEmail] = useState("");

    
    return (
        <Container scollable={ true }>
            <View style={ styles.formWrapper }> 
                <Image style={ styles.formImage }source={{ uri: "https://cdn.pixabay.com/photo/2017/11/29/16/12/berries-2986532_1280.jpg" }} />

                <View style={styles.form}>
                    <Text style={styles.formTitle}> 
                        Login 
                    </Text>
                    <ThemedInput label="Email Address" placeholder="Email Address" inputMode="email" />
                    <ThemedInput label="Password" placeholder="Password" secureTextEntry={true} />

                    <ThemedButton 
                        title="Login"
                        accessibilityLabel='Login to your account'
                        onPress={() => { return false }}
                    />
                </View>
            </View>
        </Container>

    )
}

const styles = StyleSheet.create({

    form: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 32,
        paddingBottom: 32,
        gap: 8,
    },
    formImage: {
        height: 300
    },
    formWrapper: {
        elevation: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    formTitle: {
        fontSize: 32,
        marginBottom: 16
    }

})