import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    font-size: 14px;
    box-sizing: border-box;
    position: fixed;
`;

const TopRight = styled.div`
    top: 12px;
    right: 12px;
    transition: transform .6s ease-in-out;
    animation: toast-in-right .7s;
`;



const Toast = (props) => {
    const { toastList, position } = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList(toastList);
    }, [toastList, list]);

  return (
    <>
        <div className="notification-container">
            <div className="notification toast">
                <button>
                    X
                </button>
                <div className="notification-image">
                    <img src="" alt="" />
                </div>
                <div>
                    <p className="notification-title">Title</p>
                    <p className="notification-message">Message</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default Toast