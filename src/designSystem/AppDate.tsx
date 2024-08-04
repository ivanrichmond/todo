import AppTooltip from './AppTooltip'

export type AppDateProps = {
    className?: string;
    label?: string;
    labelClass?: string;
    onChange: (value: string) => void;
    tooltip?: string;
    tooltipPosition?: "right center" | "top left" | "top right" | "bottom right" | "bottom left" | "left center" | "top center" | "bottom center"
    value?: string;
}

/**
 * A custom date picker that puts things in MM/DD/YYYY format.
 */
const AppDate = ({className, label, labelClass, onChange, tooltip, tooltipPosition, value}: AppDateProps) => { 
    // Convert DueDate to MM/DD/YYYY
    const convertDate = (value: string) => {
        let formattedDueDate = value
        let matches = value.match(/(\d\d\d\d)-(\d\d)-(\d\d)/) // gets YYYY, MM, and DD out of it
        if(matches){
            formattedDueDate = `${matches[2]}/${matches[3]}/${matches[1]}` // puts it back together.
        }
        return formattedDueDate
    }

    return (
        <>
            <label htmlFor={label} className={labelClass}>Due Date</label>
            <AppTooltip
            content = {tooltip}
            inverted
            position = {tooltipPosition || 'bottom center'}
            trigger = {
                <input 
                className = {className}
                name = {label}
                onChange = {(event) => onChange(event.target.value)}
                type="date" 
                value = {value}
                />
            }/>
        </>
    )
}

export default AppDate