import AppForm from './AppForm'

import AppTooltip from './AppTooltip'

export type AppDateProps = {
    dataTestid?: string; // Useful for unit testing.
    label?: string;
    onChange: (value: string) => void;
    tooltip?: string;
    value?: string;
}

/**
 * A custom date picker that puts things in MM/DD/YYYY format.
 */
const AppDate = ({label, onChange, value, tooltip, dataTestid}: AppDateProps) => { 
    // Convert DueDate to MM/DD/YYYY
    const handleChange = (value: string) => {
        let formattedDueDate = value
        let matches = value.match(/(\d\d\d\d)-(\d\d)-(\d\d)/) // gets YYYY, MM, and DD out of it
        if(matches){
            formattedDueDate = `${matches[2]}/${matches[3]}/${matches[1]}` // puts it back together.
        }
        onChange(formattedDueDate)
    }
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <AppTooltip
            content = {tooltip || ''}
            disabled = {!tooltip}
            inverted
            position = 'bottom center'
            trigger = {
                <AppForm.Input 
                className = {'AppDate'}
                defaultValue = {value}
                name = {label}
                onChange = {(event) => handleChange(event.target.value)}
                placeholder={label} 
                type='date' 
                />
            }
            />
        </>
    )
}

export default AppDate