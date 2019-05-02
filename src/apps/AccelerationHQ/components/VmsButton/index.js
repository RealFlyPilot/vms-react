import React from 'react'
import './index.scss'
import { dynamicAttributes } from '../utils'
import { PropTypes } from 'prop-types'

const VmsButton = ({ cssClass, Icon, buttonType, disabled, ...props }) => {
  const type = dynamicAttributes(buttonType, 'true')
  const dis = dynamicAttributes('disabled', disabled)
  return (
    <button {...type} {...dis} className={`${buttonType}`}>
      {Icon ? <Icon /> : null} {props.children}
    </button>
  )
}

VmsButton.propTypes = {
  cssClass: PropTypes.string,
  disabled: PropTypes.bool,
  buttonType: PropTypes.string.isRequired,
  Icon: PropTypes.element
}

export { VmsButton }
