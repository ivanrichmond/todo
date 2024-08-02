/**
 * The Notice class defines a notice, such as an error, warning, or info.
 * @param {string} text for notice
 * @param {string} error | info | success | warning
 */
// Here I break types down for each property.
export type Message = string
export type TypeOfNotice = string // I can't just use "Type" here, or it would be confusing.

// Complete type for exernal use.
export type NoticeType = {
    message: Message;
    sendToConsole?: () => void;
    type: TypeOfNotice;
}
export default class Notice {
    message: Message
    type: TypeOfNotice
    constructor(message: Message, type: TypeOfNotice = 'info'){
        this.message = message
        this.type = type
    }

    // Send Notice to the console, such as console.error for type = error.
    sendToConsole(){
        switch(this.type){
            case 'error': console.error(this.message); break;
            case 'info': console.info(this.message); break;
            case 'success': console.info(this.message); break;
            case 'warning': console.warn(this.message); break;
            default: console.log(this.message)
        }
    }
}