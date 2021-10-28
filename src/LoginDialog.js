import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TextInput from './TextInput'

// styled components
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 10px;
  /*border: 1px solid blue;*/
  /*text-align: center;*/
`
const Button = styled.button`
  height: 25px;
  width:  75px;
  margin: 0px 10px;
`
// TODO: work on Link
/*
button {
    overflow: visible;
    width: auto;
}
button.link {
    font-family: "Verdana" sans-serif;
    font-size: 1em;
    text-align: left;
    color: blue;
    background: none;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;

    -moz-user-select: text;

    // override all your button styles here if there are any others
}

button.link span {
    text-decoration: underline;
}
button.link:hover span,
button.link:focus span {
    color: black;
}
<button type="submit" class="link"><span>Button as Link</span></button>
*/
const Link = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  /*optional*/
  /*font-family: arial, sans-serif;*/
  /*input has OS specific font-family*/
  color: #069;
  text-decoration: underline;
  cursor: pointer;
`
const Content = styled.div`
  position: relative;
  /*border: 1px solid red;*/
`
const Form = styled.div`
  min-height: 75px;
  padding: 10px;
  background-color: white;
`
const Img = styled.img`
  height: 50px;
  margin-right: 15px;
  background-color: white;
`
const Text = styled.p`
  max-width: 375px;
  min-height: 18px;
  font-size: 16px;
  color: red;
`
const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 3px 7px;
  color: #185492;
  background-color: white;
`

const defaultMessage = 'Enter User Id and Password'

export default function LoginDialog({
  message,
  setMessage,
  logo = null,
  title = '',
  emailDomain = null,
  onCancel = null,
  onSubmit,
  onForgotPassword = null,
  onRegister = null
}) {
  console.warn('************ RENDERING LoginDialog ************')
  console.log(message)

  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')

  // This function should get the credentials needed for authentication from
  // the dialog and pass them to the onSubmit function.
  const loginSubmitHandler = () => {
    if (!userEmail || !password) {
      setMessage('User Id and Password are required!')
    } else {
      const user = emailDomain ? userEmail + '@' + emailDomain : userEmail
      const credentials = {
        userEmail: user,
        password: password
      }
      onSubmit(credentials)
    }
  }

  const userEmailChangeHandler = (newValue) => {
    setMessage('')
    setUserEmail(newValue)
  }

  const passwordChangeHandler = (newValue) => {
    setMessage('')
    setPassword(newValue)
  }

  const msg = message || defaultMessage

  return (
    <div>
      {(title || logo) && (
        <Title>
          {logo ? <Img src={logo} alt='logo' /> : null}
          {title && <strong>{title}</strong>}
        </Title>
      )}

      <p>Please Login</p>

      <Content>
        <Form>
          <TextInput
            focus
            label='User Id:'
            value={userEmail}
            changeHandler={userEmailChangeHandler}
            width={emailDomain ? '80px' : null}
            suffix={emailDomain ? '@' + emailDomain : false}
          />
          <TextInput
            label='Password:'
            type='password'
            value={password}
            changeHandler={passwordChangeHandler}
          />
          <ButtonContainer>
            {onForgotPassword ? (
              <Link onClick={onForgotPassword}>forgot password?</Link>
            ) : null}
            {onRegister ? <Link onClick={onRegister}>register</Link> : null}
          </ButtonContainer>
        </Form>
        <Text>{msg}</Text>
        <ButtonContainer>
          <Button onClick={loginSubmitHandler}>Login</Button>
          {onCancel && typeof onCancel === 'function' && (
            <Button onClick={onCancel}>Cancel</Button>
          )}
        </ButtonContainer>
      </Content>
    </div>
  )
}

LoginDialog.propTypes = {
  message: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func.isRequired
}
