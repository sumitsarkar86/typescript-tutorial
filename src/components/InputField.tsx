import { useRef } from "react";
import "./styles.css";

export interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleOnSubmit: (e: React.FormEvent) => void;
}

export function InputField({todo, setTodo, handleOnSubmit}  :InputFieldProps) {
    
    // Clicking on the sumbit focus should go away
    const inputRef = useRef<HTMLInputElement>(null);

    return <>
        <form className="input" onSubmit={(e) => {
            handleOnSubmit?.(e);
            inputRef.current?.blur();
        }}>
            <input
                type="text"
                placeholder="Enter a Task"
                value={todo}
                ref={inputRef}
                onChange={(e) => setTodo(e.target.value)}
                className="input-box"
            />
            
            <button type="submit" className="input-submit">
                GO
            </button>
        </form>
    </>
}