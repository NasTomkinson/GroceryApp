import { ScrollView, View, Text } from "react-native";

import * as config from '@components/theme/config.json'

// import ThemedInput from "@/components/input";
import ThemedText from "@components/theme/typography"
import ThemedButton from "@/components/theme/button";

export function ThemedTextExample (props: any) {
    return (
        <View style={{ 
            borderBottomWidth: 1, 
            borderColor: 'black', 
            flexDirection: 'row', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-end', 
            gap: 16
        }}>
            <Text style={{ flex: 2}}> 
                Family - {props.family}   |  Size - {props.size}  
            </Text>
            <ThemedText {...props} style={{ flex: 3}}>
                This is text
            </ThemedText> 
        </View>
        
    )
}

export default function Styleguide () {

    return (
        <ScrollView>
            <ThemedText family="secondary" size="5xl" style={{ borderBottomWidth: 1, borderColor: 'black', marginBottom: 8}}> 
                Colours
            </ThemedText>

            
            <View style={{ paddingHorizontal: 16, gap: 12, flexDirection: 'row', flexWrap: 'wrap' }}> 
                { Object.entries(config.colours).map(([colour, value]) => (
                    <View style={{ borderWidth: 1, aspectRatio: '2/3', backgroundColor: value, minWidth: 120, padding: 8}}>
                        <Text style={{ fontWeight: '600'}}> {colour} </Text>
                    </View> 
                ))}
            </View>

            <ThemedText family="secondary" size="5xl" style={{ borderBottomWidth: 1, borderColor: 'black', marginBottom: 8, marginTop: 32}}> 
                Fonts 
            </ThemedText>
            <View style={{ paddingHorizontal: 16, gap: 16 }}> 
                <ThemedTextExample family="primary" size="xs" />
                <ThemedTextExample family="primary" size="sm" />
                <ThemedTextExample family="primary" size="base" />
                <ThemedTextExample family="primary" size="lg" />
                <ThemedTextExample family="primary" size="xl" />
                <ThemedTextExample family="primary" size="2xl" />
                <ThemedTextExample family="primary" size="3xl" />
                <ThemedTextExample family="primary" size="4xl" />
                <ThemedTextExample family="primary" size="5xl" />
            </View>

            <View style={{ padding: 16, gap: 16, marginTop: 32 }}> 
                <ThemedTextExample family="secondary" size="xs" />
                <ThemedTextExample family="secondary" size="sm" />
                <ThemedTextExample family="secondary" size="base" />
                <ThemedTextExample family="secondary" size="lg" />
                <ThemedTextExample family="secondary" size="xl" />
                <ThemedTextExample family="secondary" size="2xl" />
                <ThemedTextExample family="secondary" size="3xl" />
                <ThemedTextExample family="secondary" size="4xl" />
                <ThemedTextExample family="secondary" size="5xl" />
            </View>

            <ThemedText family="secondary" size="5xl" style={{ borderBottomWidth: 1, borderColor: 'black', marginBottom: 8, marginTop: 32}}> 
                Buttons
            </ThemedText>
            <View style={{ padding: 16, gap: 16}}> 
                <ThemedButton variant="primary" title="Hello world" />
                <ThemedButton variant="secondary" title="Hello world" />
                <ThemedButton variant="primary" title="Hello world" outline/>
                <ThemedButton variant="secondary" title="Hello world" outline/>
                <ThemedButton variant="primary" title="Hello world" ghost/>
                <ThemedButton variant="secondary" title="Hello world" ghost/>
            </View>
        </ScrollView>       
    )
}