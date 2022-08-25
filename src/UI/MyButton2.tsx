import { ReactNode, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { State } from "../interface/interfaces"
import classes from './MyButton2.module.css'

export default function MyButton2(props: {
    category: string,
    children?: ReactNode,
    onClick?: (param?:any) => any
}) {
    const [isActive, setIsActive] = useState(false)
    const selectedCategories = useSelector((state: State) => state.selectedCategories)
    useEffect(() => {
        if (selectedCategories.includes(props.category)) {
            setIsActive(() => true)
        } else {
            setIsActive(() => false)
        }
    }, [selectedCategories])
    return (
        <button
            onClick={() => {
                if (props.onClick) props.onClick()
            }}
            className ={isActive? classes.active :classes.passive}
        >{props.children}</button>    
    )
}