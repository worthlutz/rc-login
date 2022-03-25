import { createContext, useContext } from 'react'

// setup context
const LoginContext = createContext({
  isLoggedIn: false,
})

const useLoginContext = () => {
  const context = useContext(LoginContext)
  if (context === undefined) {
    throw new Error('useLoginContext must be used within LoginContext.Provider')
  }
  return context
}

export { LoginContext, useLoginContext }
