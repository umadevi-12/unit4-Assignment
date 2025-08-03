import { useContext } from "react";
import {ThemeContext} from "../context/ThemeContext";

function NestedComponent(){
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`nested-box ${theme}`}>
            <p>This is a nested component with {theme} theme.</p>
        </div>
    )
}
export default NestedComponent;