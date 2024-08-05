import AppTooltip from './AppTooltip'

export type AppDateProps = {
    className?: string;
    label?: string;
    labelClass?: string;
    name?: string;
    onChange: (value: string) => void;
    tooltip?: string;
    tooltipPosition?: "right center" | "top left" | "top right" | "bottom right" | "bottom left" | "left center" | "top center" | "bottom center"
    value?: string;
}

/**
 * On some browsers, the value stored in an input date ends up being in YYYY-MM-DD format, 
 * once it's used outside of the input.  This function sets it to the American MM/DD/YYYY format,
 * if it does that, or passes value through otherwise.
 */
export const convertDate = (value: string) => {
    let formattedDueDate = value
    let matches = value.match(/(\d\d\d\d)-(\d\d)-(\d\d)/) // gets YYYY, MM, and DD out of it
    if(matches){
        formattedDueDate = `${matches[2]}/${matches[3]}/${matches[1]}` // puts it back together.
    }
    return formattedDueDate
}

/**
 * A custom date picker that puts things in MM/DD/YYYY format.
 */
const AppDate = ({className, label, labelClass, name, onChange, tooltip, tooltipPosition, value}: AppDateProps) => { 
    return (
        <>
            <label htmlFor={name} className={labelClass}>Due Date</label>
            <AppTooltip
            content = {tooltip}
            inverted
            position = {tooltipPosition || 'bottom center'}
            trigger = {
                <input 
                className = {className}
                data-testid = {name}
                name = {name}
                onChange = {(event) => onChange(event.target.value)}
                type="date" 
                value = {value}
                />
            }/>
        </>
    )
}

export default AppDate