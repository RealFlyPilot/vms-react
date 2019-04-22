import React from 'react'
import './index.scss'
import { dynamicAttributes } from '../utils'
import { PropTypes } from 'prop-types'

const VmsButton = ({ cssClass, buttonType, disabled, ...props }) => {
  const type = dynamicAttributes(buttonType, 'true')
  const dis = dynamicAttributes('disabled', disabled)
  return (
    <button {...type} {...dis} className={`${buttonType}`}>
      {props.children}
    </button>
  )
}

VmsButton.propTypes = {
  cssClass: PropTypes.string,
  disabled: PropTypes.bool,
  buttonType: PropTypes.string.isRequired
}

export { VmsButton }
