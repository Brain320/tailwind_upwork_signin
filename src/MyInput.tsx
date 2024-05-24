import React from "react";
const defaultProps = {
    type : "text"
}
type props = {
    name: String, label: String, type?:String
};
const MyInput:React.FunctionComponent<props> =
    (props) => {
    return (
        <>
            <label htmlFor={`${props.name}`}
                   className="block text-sm text-left font-medium leading-6 text-gray-900">
                {props.label}
            </label>
            <div className="mt-2">
                <div className="flex">
                    <input
                        type={`${props.type}`}
                        name={`${props.name}`}
                        id={`${props.name}`}
                        autoComplete="firstname"
                        className="block rounded-md flex-1 border-2 border-gray-500 py-1.5 pl-1 text-gray-700 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </>
    )
}
MyInput.defaultProps = defaultProps
export default MyInput;