import React, {useState} from "react";

const PasswordInput = () => {
    const [pwdShow,setPwdShow] = useState<boolean>(false);
    return (
        <div className="flex rounded-md border-2 border-gray-200 items-center pr-2">
            <input
                type={pwdShow ? "text" : "password"}
                name="password"
                placeholder="Password(8 or more characters)"
                id="password"
                className="w-full block  py-2 pl-3 text-gray-700 sm:text-sm sm:leading-6"
            />
            <div className="flex items-center" onClick={() => setPwdShow(v => !v)}>
                <span style={{display: 'inline-flex', cursor: 'pointer'}}>
                    <div className="h-6 w-6">
                        <svg className="h-6 w-6"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                             data-name="Layer 1"
                             viewBox="0 0 24 24" role="img"><path fill="none"
                                                                  vectorEffect="non-scaling-stroke"
                                                                  stroke="var(--icon-color, #001e00)"
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  strokeWidth="1.5"
                                                                  d="M6.68 17.32A9.28 9.28 0 0021 12a9.42 9.42 0 00-3.68-5.32M15 5.5A9.28 9.28 0 003 12a9.43 9.43 0 001.91 3.69m9.28-5.88a2.73 2.73 0 01.49.63">
                        </path>
                            {!pwdShow && <line x1="3" x2="21" y1="21" y2="3" fill="none"
                                              vectorEffect="non-scaling-stroke"
                                              stroke="var(--icon-color, #001e00)" strokeLinecap="round"
                                              strokeLinejoin="round" strokeWidth="1.5"></line>}

                            <path fill="none"
                                  vectorEffect="non-scaling-stroke"
                                  stroke="var(--icon-color, #001e00)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  d="M8.91 11.68a3.11 3.11 0 012.77-2.77m-1.87 5.28a3 3 0 002.19.91 3.1 3.1 0 003.1-3.1 3 3 0 00-.91-2.19">

                            </path>
                        </svg>
                    </div>
                </span>
            </div>
        </div>
    )
}
export default PasswordInput;