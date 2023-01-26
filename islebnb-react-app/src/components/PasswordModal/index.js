import React from 'react'
import Modal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import { closePassword } from '../../store/modal'
import PasswordForm from './PasswordForm'

Modal.setAppElement(document.getElementById('root'))

const PasswordModal = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch()
    const passwordState = useSelector((state) => state.modal.passwordShow)

    const closeModal = () => dispatch(closePassword())

    return (
        <>
            <Modal
                isOpen = {passwordState}
                closeTimeoutMS={200}
                onRequestClose={closeModal}
                contentLabel='Password Modal'
                overlayClassName='OuterModal'
                className='InnerModal'
                >
                <PasswordForm
                    authenticated={authenticated}
                    setAuthenticated={setAuthenticated}
                />
            </Modal>
        </>
    )
}

export default PasswordModal;