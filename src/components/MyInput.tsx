import React from "react";
const defaultProps = {
    type : "text",
    placeholder: ""
}
type props = {
    name: String, label: String, type?:String, placeholder ?: String
};
const MyInput:React.FunctionComponent<props> =
    (props) => {
    return (
        <>
            <label htmlFor={`${props.name}`}
                   className="block text-base text-semibold text-left font-medium leading-6 text-gray-900">
                {props.label}
            </label>
            <div className="mt-2">
                <div className="flex">
                    <input
                        type={`${props.type}`}
                        name={`${props.name}`}
                        placeholder={`${props.placeholder}`}
                        id={`${props.name}`}
                        autoComplete="firstname"
                        className="w-full block rounded-md border-2 border-gray-200 py-2 pl-3 text-gray-700 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </>
    )
}
MyInput.defaultProps = defaultProps
export default MyInput;