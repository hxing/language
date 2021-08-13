import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {change} from "./langSlice";
import Bar from "./bar";
import {getText} from "./util";

export default function App() {
    const lang = useSelector((state) => state.lang.lang);
    useEffect(() => {
        localStorage["language"] = localStorage["language"] ?? "cn";
    }, []);

    const dispatch = useDispatch();
    return (
        <div className="App">
            <button onClick={() => dispatch(change())}>{getText("switch")}</button>
            <h1>{lang}</h1>
            <Bar/>
        </div>
    );
}