import { useState } from "react";
import { add } from "./PizzaSlice";
import { useDispatch } from "react-redux";

export default function PizzaOrder() {
    const [currentSelect, setSelect] = useState("Hawaii");
    const dispatch = useDispatch();

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(add(currentSelect));
    }

    const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value);
    }


    return(
        <>
        <h1>Order your pizza!</h1>
        <form>
            <select name="pizza" onChange={change}>
                <option value="Hawaii">Hawaii</option>
                <option value="Salami">Salami</option>
                <option value="Sejrova">Sejrova</option>
                <option value="Diablo">Diablo</option>
                <option value="Mexicana">Mexicana</option>
            </select>
            <input type="submit" value="Order pizza" onClick={submit}/>
        </form>
        </>
    )
}