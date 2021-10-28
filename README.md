# @wal3/rc-login

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@wal3/rc-login.svg)](https://www.npmjs.com/package/@wal3/rc-login) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## NOTE: This component is currently under construction and may change substantially.

## Install

```bash
npm install --save @wal3/rc-login
```

## Usage

TODO: expand on the example...

```jsx
import Login from '@wal3/rc-login'

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

```

### Properties

| Property             | Type     | Description                                                                                                            | Default     |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- | ----------- |
| `onDialogSubmit`     | function | **Required**. Function which handles the API call to the server to validate the user                        |             |
| `loginDialog`        | function | A React component which implements a login dialog. A default component is used if this prop is missing.         | `LoginDialog`    |


Any additional props sent to `Login` will be passed on to the `LoginDialog` component. For example, `title, logo and emailDomain` in the example above which are props needed for the default `LoginDialog`.

#### Default `LoginDialog` component properties

| Property       | Type     | Description                                     | Default |
| ------------------ | -------- | ----------------------------------------------- | ------- |
| `message`          | string   | **Required.** Message shown to user. From a `useState` in the parent component.  | `'Enter User Id and Password'`  |
| `setMessage`       | function | **Required.** Function to set the message. From a `useState` in the parent component.  |         |
| `title`            | string   | The title shown on the dialog.                  | `''`   |
| `logo`             | image    | An image shown before the title.                | `null`  |
| `emailDomain`      | string   | The part after the "@" in an email address which limits the user id to emails in that domain.| `null`  |
| `onCancel`         | function | Function to handle click of 'cancel' button.    | `null`  |
| `onSubmit`         | function | **Required** function from login which gets credentials. TODO: needs better description  | `null`  |
| `onForgotPassword` | function | **Not Implemented Yet.**                        | `null`  |
| `onRegister`       | function | **Not Implemented Yet.**                        | `null`  |


## License

MIT © [worthlutz](https://github.com/worthlutz)
