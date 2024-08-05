// a generic search filter
import React from 'react'

import AppInput from './AppInput'
import AppSelect from './AppSelect'
import AppTooltip from './AppTooltip'

const AppFilter = ({className, filter, label, options, placeholder, tooltip, 
tooltipPostion, type = 'text'}) => {
    const { setFilterTask } = useContext(TodoContext)

    const input = type === 'select' ? (
         <AppSelect
         className = {className}
         label = {label}
         onChange = {event => filter(event.target.value)} 
         options = {options}
         tooltip = {tooltip}
         tooltipPostion = {tooltipPostion}
         />
    ) : (
        <AppTooltip
        content = {tooltip || ''}
        disabled = {!tooltip}
        inverted
        position = {tooltipPosition || 'bottom center'}
        trigger = {
            <AppInput 
            onChange = {event => filter(event.target.value)} 
            placeholder = {placeholder}
            type = {type}
            />
        }/>
    )

    return(
        <div className = {className}>
            {label}
            {input}
        </div>
    )
}

export default AppFilter