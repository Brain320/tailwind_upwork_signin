import React, {useState} from "react";
import classnames from 'classnames';

const defaultProps = {
    className: ""
}
type props = {
    content: React.ReactNode,
    className?: String
}
const MyCheckBox: React.FunctionComponent<props> = (props) => {
    const content = props.content;
    const [selected, setSelected] = useState<boolean>(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.checked);
    }
    return (
        <>
            <div className={`relative flex ${props.className}`}>
                <div>
                    <label className='text-sm leading-6 flex'>
                        <input
                            type="checkbox"
                            className="h-0 w-0 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            onChange={handleChange}
                        />
                        <div
                        className={classnames("h-6 w-6 rounded border-gray-400 mr-2 ", {"border-0 bg-[#108a00] text-white": selected},
                            {"bg-transparent border-2 text-dark": !selected})} data-test="checkbox-icon">
                                <svg className="w-6 h-6 " xmlns="http://www.w3.org/2000/svg"
                                     fill="none" aria-hidden="true"
                                     viewBox="0 0 24 24" role="img">
                                    {selected &&
                                    <path
                                        vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #fff)"
                                        strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                        strokeWidth="1.5"
                                        d="M19 7l-9.99 9L5 12.365"></path>
                                    }

                                </svg>

                        </div>
                        <span
                            className="text-gray-500 text-left">
                            {content}
                        </span>
                    </label>
                </div>

            </div>
        </>
    )
}
MyCheckBox.defaultProps = defaultProps;
export default MyCheckBox;