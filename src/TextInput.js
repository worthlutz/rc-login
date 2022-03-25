import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Container = styled.div`
  margin: 10px;
`
const Label = styled.label`
  display: inline-block;
  width: 85px;
`

export default function TextInput({
  changeHandler,
  focus,
  label,
  suffix,
  type,
  width,
  value,
}) {
  // eslint-disable-next-line no-plusplus
  const [nextNum] = useState(TextInput.count++)
  const id = `text-input-${nextNum}`

  console.warn('************ RENDERING TextInput ************')

  const inputType = type || 'text'

  const style = width ? { width } : null

  return (
    <Container>
      <Label htmlFor={id} width={width}>
        {label}
      </Label>
      <input
        id={id}
        type={inputType}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={focus}
        style={style}
        value={value}
        onChange={(e) => {
          changeHandler(e.target.value)
        }}
        onFocus={(e) => {
          e.target.select()
        }}
      />
      {` ${suffix || ''}`}
    </Container>
  )
}

TextInput.count = 0
TextInput.propTypes = {
  changeHandler: PropTypes.func,
  focus: PropTypes.bool,
  label: PropTypes.string,
  suffix: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number,
  value: PropTypes.any,
}
