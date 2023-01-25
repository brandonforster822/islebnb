import React from 'react'
import Modal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import { closeLogin } from '../../store/modal'
import LoginForm from './LoginForm'

Modal.setAppElement(document.getElementById('root'))

const L