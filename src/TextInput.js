import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  margin: 10px;
`
const Label = styled.label`
  display: inline-block;
  width: 85px;
`

export default function TextInput(props) {
  const [nextNum] = useState(TextInput.count++)
  const id = 'text-input-' + nextNum

  console.warn('************ RENDERING TextInput ************')
  console.log(props)

  const type = props.type ? props.type : 'text'

  const style = props.width ? { width: props.width } : null

  return (
    <Container>
      <Label htmlFor={id} width={props.width}>
        {props.label}
      </Label>
      <input
        id={id}
        type={type}
        autoFocus={props.focus}
        style={style}
        value={props.value}
        onChange={(e) => {
          props.changeHandler(e.target.value)
        }}
        onFocus={(e) => {
          e.target.select()
        }}
      /> {props.suffix}
    </Container>
  )
}

TextInput.count = 0
TextInput.propTypes = {
  changeHandler: PropTypes.func,
  focus: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any
}
