import { useState } from "react";
import { add } from "./PcSlice";
import { useDispatch } from "react-redux";

export default function PcOrder() {
    const [currentSelect, setSelect] = useState("cpu");
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
        <h1>Order your PC parts!</h1>
        <form>
            <select name="cpu" onChange={change}>
                <option value="cpu">AMD</option>
                <option value="gpu">Intel</option>
                <option value="ram">ram</option>
                <option value="zdroj">zdroj</option>
            </select>
            <input type="submit" value="Order PC parts" onClick={submit}/>
        </form>
        </>
    )
}