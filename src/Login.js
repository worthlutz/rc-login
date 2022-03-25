import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import { LoginContext } from './LoginContext'
import DefaultLoginDialog from './LoginDialog'

// custom modal styles
const modalStyle = {
  minHeight: '250px',
  minWidth: '375px',
  backgroundColor: 'lightgrey',
  zIndex: 1000,
}
const overlayStyle = {
  backgroundColor: 'darkgrey',
  // background: 'rgba(36, 123, 160, 0.7)',
}

const Login = ({ children, loginDialog, onDialogSubmit, ...rest }) => {
  const LoginDialog = loginDialog || DefaultLoginDialog

  // storage for LoginDialog messages
  const [message, setMessage] = useState(null)

  // storage for context values
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [payload, setPayload] = useState({})

  // function in context to allow logout
  const logout = () => {
    setIsLoggedIn(false)
  }

  const submitHandler = async (credentials) => {
    // should also return isLoading?
    try {
      setMessage('Authorizing...')
      const result = await onDialogSubmit(credentials)
      setPayload(result)
      setMessage(null)
      setIsLoggedIn(true)
    } catch (err) {
      console.log(err.message)
      setMessage(err.message)
    }
  }

  const contextValue = useMemo(
    () => ({ isLoggedIn, logout, payload }),
    [isLoggedIn, payload],
  )

  console.log(contextValue)

  // TODO: should modal be removed and show Login or MyApplication
  //       As-is allows app to remain and have state...
  return (
    <>
      <LoginContext.Provider value={contextValue}>
        {children}
      </LoginContext.Provider>

      <Modal
        open={!isLoggedIn}
        center
        styles={{
          modal: modalStyle,
          overlay: overlayStyle,
        }}
        closeIconSize={20}
        showCloseIcon={false}
        closeOnOverlayClick={false}
        closeOnEsc={false}
        onClose={() => {
          console.log('closed modal')
        }}
      >
        <LoginDialog
          message={message}
          setMessage={setMessage}
          onSubmit={submitHandler}
          {...rest}
        />
      </Modal>
    </>
  )
}

// these props are for Login - any others are passed on to LoginDialog (...rest)
Login.propTypes = {
  loginDialog: PropTypes.func, // optional replacement LoginDialog
  onDialogSubmit: PropTypes.func.isRequired,
}

export default Login
