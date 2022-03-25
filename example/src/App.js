import { Login } from '@wal3/rc-login'
//import '@wal3/rc-login/dist/index.css'

import MyApplication from './MyApplication'
import logo from './1R0Sa.png'

// mock api call
const validateUser = async (userEmail, password) => {
  const checkIt = (resolve, reject) => {
    if (userEmail === 'worth@wal3geo.com' && password === 'pass') {
      resolve({
        data: 'data from server...'
      })
    } else {
      reject(new Error('Authorization failed. Please check User Id and Password.'))
    }
  }

  return new Promise((resolve, reject) => {
    setTimeout(checkIt, 1000, resolve, reject)
  })
}

// REQUIRED FUNCTION for onDialogSubmit
// this is the function which calls a server to authenticate the user
// handling of auth token should be done here or stored in payload
// for example: axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
const loginSubmitHandler = async ({ userEmail, password }) => {
  console.log(userEmail, password);
   try {
    // this is a call to the api to login a user
    const response = await validateUser(userEmail, password)
    // This is where you handle the api response.
    console.log(response)
    // check for valid login here - this depends on API response
    // if valid login return payload else throw Error with message to user
    // extract needed payload
    const payload = response.data
    console.log(payload);
    // payload will be stored in the LoginContext for use later if needed.
    return payload
  } catch (err) {
    // handle error from api
    // should rethrow to be caught in Login
    // or allow to be caught in Login
    console.log(err)
    throw new Error(err);
  }
}

// TODO: not implemented yet..
// const forgotPasswordHandler = null
// const newUserHandler = null
// Login props:
// onForgotPassword={forgotPasswordHandler}
// onRegister={newUserHandler}


const App = () => {
  return (
    <Login
      title="Login Example"
      logo={logo}
      emailDomain="wal3geo.com"
      onDialogSubmit={loginSubmitHandler}
    >
      <MyApplication/>
    </Login>
  )
}

export default App
