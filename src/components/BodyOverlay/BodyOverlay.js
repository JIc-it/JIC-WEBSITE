import React, { useContext } from 'react'
import { Context } from '../../common/Context'

const BodyOverlay = ({ isOpen }) => {
    const { setisModalOpen } = useContext(Context)
    return (
        <div class={`body-overlay ${isOpen && 'opened'}`} onClick={() => setisModalOpen(false)}></div>
    )
}

export default BodyOverlay