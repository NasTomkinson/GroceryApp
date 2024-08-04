import { Text, StyleSheet } from 'react-native'
import * as config from './config.json'

const fonts = config.fonts

interface ThemedTextProps {
    children: any,
    family?: 'primary' | 'secondary',
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl',
    weight?: 300 | 400 | 500 | 600 | 700,
    style?: Obejct
}

export default function ThemedText ({ children, family = 'primary', size = 'base', weight, style }: ThemedTextProps) {

    return (
        <Text style={[styles[family], styles[size], {fontWeight: weight, ...style}]}> { children } </Text>
    )

}

const styles = StyleSheet.create({
    primary: {
        fontFamily: fonts.primary
    }, 
    secondary: {
        fontFamily: fonts.secondary
    },
    xs: {
        fontSize: fonts.sizes.xs
    },
    sm: {
        fontSize: fonts.sizes.sm
    },
    base: {
        fontSize: fonts.sizes.base,
        lineHeight: '1.4'
    },
    lg: {
        fontSize: fonts.sizes.lg
    },
    xl: {
        fontSize: fonts.sizes.xl
    },
    "2xl": {
        fontSize: fonts.sizes["2xl"]
    },
    "3xl": {
        fontSize: fonts.sizes["3xl"]
    },
    "4xl": {
        fontSize: fonts.sizes["4xl"]
    },
    "5xl": {
        fontSize: fonts.sizes["5xl"]
    }
})