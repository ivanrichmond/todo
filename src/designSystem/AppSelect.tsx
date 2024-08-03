export type AppSelectProps = {
    className?: string, 
    label: string, 
    filter: (value: string) => {}, 
    options: { value: string; text: string; }[]
}
export default function AppSelect({className, label, filter, options}: AppSelectProps){
    const optionData = options.map((option,i) => {
        return <option key={i} value={option.value}>{option.text}</option>
    })
    return (
        <div className = {'ui form field'}>
            <label htmlFor='status'>{label}</label>
            <select
            // Format like Semantic UI for consistency with SUI Form.
            //.ui.form .field > .selection.dropdown
            className = {`${className} selection dropdown`}
            name = {label}
            onChange = {e => filter(e.target.value)}
            >
                {optionData}
            </select>
        </div>
    )
}