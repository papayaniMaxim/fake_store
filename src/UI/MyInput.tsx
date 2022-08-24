import classes from './MyInput.module.css'
export default function MyInput(props: {
    onChange?: (param: any) => any,
    placeholder?: string,
    value?: string,
    type?: string,
    
}) {
    return (
        <input
            className={classes.myinput}
            type={props.type || 'text'}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
        ></input>
    )
}