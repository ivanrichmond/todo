import AppTooltip from './AppTooltip'
export type AppSelectProps = {
    className?: string, 
    label?: string, 
    filter?: (value: string) => {}, /* A generic name for a function that gets called when something is selected.  */
    options: { value: string; text: string; }[],
    tooltip?: string,
    tooltipPosition?: "right center" | "top left" | "top right" | "bottom right" | "bottom left" | "left center" | "top center" | "bottom center"
}
export default function AppSelect({
        className, 
        label, 
        filter, 
        options, 
        tooltip, 
        tooltipPosition,
    }: AppSelectProps){
    const optionData = options.map((option,i) => {
        return <option key={i} value={option.value}>{option.text}</option>
    })

    // Wraps filter to allow it to be an optional prop.
    const filterWrapper = (selection: string) => {
        if(!filter) return
        filter(selection)
    }
    
    return (
        <div className = {'ui form field'} >
            <label htmlFor='status'>{label}</label>
            <AppTooltip
            content = {tooltip || ''}
            disabled = {!tooltip}
            inverted
            position = {tooltipPosition || 'bottom center'}
            trigger = {
                <select
                // Format like Semantic UI for consistency with SUI Form.
                //.ui.form .field > .selection.dropdown
                className = {`${className} selection dropdown`}
                name = {label}
                onChange = {e => filterWrapper(e.target.value)}
                >
                    {optionData}
                </select>
            }
            />
        </div>
    )
}