import React from 'react'
import Modal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import { closeSignup } from '../../store/modal'
import SignupForm from './SignupForm'

Modal.setAppElement(document.getElementById('root'))

const SignupModal = ({ authenticated, setAuthenticated }) => {
    const dispatch = useDispatch()
    const signupState = useSelector((state) => state.modal.signupShow)

    const closeModal = () => dispatch(closeSignup())

    return (
        <>
            <Modal
                isOpen = {signupState}
                closeTimeoutMS={200}
                onRequestClose={closeModal}
                contentLabel='Signup Modal'
                overlayClassName='OuterModal'
                className='InnerModal'
                >
                <SignupForm
                    authenticated={authenticated}
                    setAuthenticated={setAuthenticated}
                />
            </Modal>
        </>
    )
}

export default SignupModal;