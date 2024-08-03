import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import * as config from './config.json'

const colours = config.colours

interface ThemedButtonProps {
    title: String,
    variant: 'primary' | 'secondary', 
    outline?: boolean,
    ghost?: boolean
}

export default function ThemedButton ({title, variant, outline, ghost}: ThemedButtonProps) {

    const colourDark: String = `${variant}-dark`
    const colourLight: String = `${variant}-light`

    return (
        <TouchableHighlight 
            style={[styles.button, styles[variant], outline ? styles.outline : false, ghost ? styles.ghost : false]}
            underlayColor={colours[colourDark]}
            onPress={() => alert("Hello!")}
        >
            <Text style={styles.primaryContent}> 
                { title }
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({

    button: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 0
    },
    primary: {
        backgroundColor: colours.primary,
        borderColor: colours.primary,
        color: colours.white
    },
    secondary: {
        backgroundColor: colours.secondary,
        borderColor: colours.secondary,
        color: colours.white
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        color: colours.black
    },
    ghost: {
        backgroundColor: 'transparent',
        color: colours.black
    },
    primaryContent: {
        color: 'inherit',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 16
    }

})