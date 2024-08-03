import {View, Text, TextInput, StyleSheet, TextInputProps} from 'react-native'

interface InputProps {
    TextInputProps: TextInputProps,
    label: String,
}

export default function ThemedInput (props:  InputProps) {

    return (
        <View> 
            <Text style={styles.label}> 
                { props.label }: 
            </Text>
            <TextInput 
                {...props}
                style={ styles.input }
            />
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 12
    },
    label: {
        fontSize: 12,
        marginBottom: 4
    }
})