// A wrapper around SUI's Popup: https://react.semantic-ui.com/modules/popup/ 
import { Popup, PopupProps } from 'semantic-ui-react'

export default function AppTooltip(props: PopupProps){
    return (
        <Popup {...props} />
    )
}