import { View, ScrollView, StyleSheet } from 'react-native';

interface ContainerProps {
    children: React.ReactNode,
    scrollable?: Boolean,
    style?: Object
}

export default function Container ({children, scrollable, style}: ContainerProps) {

    const El = scrollable ? ScrollView : View

    return (
        <ScrollView  style={[styles.container, style]} contentContainerStyle={{ flexGrow: 1, flex: 1 }}>
            {children}
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingStart: 16,
        paddingEnd: 16
    }
})