import AppForm from './AppForm'

import AppTooltip from './AppTooltip'

export type AppDateProps = {
    label?: string;
    onChange: (value: string) => void;
    tooltip?: string;
    tooltipPosition?: "right center" | "top left" | "top right" | "bottom right" | "bottom left" | "left center" | "top center" | "bottom center"
}

/**
 * A custom date picker that puts things in MM/DD/YYYY format.
 */
const AppDate = ({label, onChange, tooltip, tooltipPosition}: AppDateProps) => { 
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
            position = {tooltipPosition || 'bottom center'}
            trigger = {
                <AppForm.Input 
                className = {'AppDate'}
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