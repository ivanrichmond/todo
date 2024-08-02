import { Message, MessageProps } from 'semantic-ui-react'

export default function AppMessage(props: MessageProps){
    return (
        <Message {...props} />
    )
}