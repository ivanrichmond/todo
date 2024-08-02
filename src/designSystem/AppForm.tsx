import { 
    ButtonProps, 
    CheckboxProps, 
    DropdownProps,
    Form, 
    FormFieldProps,
    FormGroupProps,
    FormProps,
    InputProps,
    RadioProps,
    SelectProps,
    TextAreaProps
} from 'semantic-ui-react'

const AppForm = (props: FormProps) => {
    return (
        <Form {...props} />
    )
}

AppForm.Button = (props: ButtonProps) => (<Form.Button {...props} />)
AppForm.Checkbox = (props: CheckboxProps) => (<Form.Checkbox {...props} />)
AppForm.Dropdown = (props: DropdownProps) => (<Form.Dropdown {...props} />)
AppForm.Field = (props: FormFieldProps) => (<Form.Field {...props} />)
AppForm.Group = (props: FormGroupProps) => (<Form.Group {...props} />)
AppForm.Input = (props: InputProps) => (<Form.Input {...props} />)
AppForm.Radio = (props: RadioProps) => (<Form.Radio {...props} />)
AppForm.Select = (props: SelectProps) => (<Form.Select {...props} />)
AppForm.TextArea = (props: TextAreaProps) => (<Form.TextArea {...props} />)


export default AppForm