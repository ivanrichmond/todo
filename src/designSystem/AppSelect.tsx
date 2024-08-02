export default function AppSelect({label, filter, options}:
    {label: string, filter: (value: string) => {}, options: { value: string; text: string; }[]}){
    const optionData = options.map((option,i) => {
        return <option key={i} value={option.value}>{option.text}</option>
    })
    return (
        <>
            <label htmlFor='status'>{label}</label>
            <select
            className = 'ui selection dropdown'
            name = {label}
            onChange = {e => filter(e.target.value)}
            >
                {optionData}
            </select>
        </>
    )
}