import { View, ScrollView, StyleSheet } from 'react-native';

interface ContainerProps {
    children: React.ReactNode,
    scollable: Boolean
}

export default function Container ({children, scrollable}: ContainerProps) {

    const El = scrollable ? ScrollView : View

    return (
        <El style={styles.container}>
            {children}
        </El>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingStart: 16,
        paddingEnd: 16
    }
})