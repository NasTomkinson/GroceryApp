import { Switch } from "react-native-gesture-handler";
import * as config from './config.json'

interface SwitchProps {
    isEnabled?: boolean,
    changeHandler?: Function
}

export default function ThemedSwitch ({ isEnabled = false, changeHandler }: SwitchProps ) {

    const colours = config.colours

    return (
        <Switch
            trackColor={{false: colours.neutral, true: colours.primary}}
            thumbColor={colours.neutral}
            activeThumbColor={colours.white}
            ios_backgroundColor={colours.neutral}
            onValueChange={ changeHandler }
            value={ isEnabled }
        />
    )
}