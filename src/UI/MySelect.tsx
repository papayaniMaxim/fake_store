import classes from './MySelect.module.css'



export default function MySelect(props: {
    onChange?: (event: any) => any
    options?: string[] | undefined;
    disabled?: boolean | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;

}) {
    return (
        <select
            onChange={props.onChange}
            className={classes.select}>
            {props.options?.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
    )
}