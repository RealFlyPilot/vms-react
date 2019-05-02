import React from 'react'
import './index.scss'
import { dynamicAttributes } from '../utils'
import { PropTypes } from 'prop-types'

const VmsButton = ({ cssClass, Icon, buttonType, disabled, pill, ...props }) => {
  const type = dynamicAttributes(buttonType, 'true')
  const dis = dynamicAttributes('disabled', disabled)
  const iconColor = disabled ? '#C5C5C5' : buttonType === 'primary' ? '#fff' : '#607D8B'
  return (
    <button {...type} {...dis} className={`${buttonType} ${Icon ? 'with-icon' : ''} ${cssClass || ''}`}>
      {Icon ? <Icon color={iconColor} /> : null} {buttonType === 'pill' ? <span className='plus'>+</span> : null}{' '}
      {props.children}
    </button>
  )
}

VmsButton.propTypes = {
  cssClass: PropTypes.string,
  disabled: PropTypes.bool,
  pill: PropTypes.bool,
  buttonType: PropTypes.string.isRequired,
  Icon: PropTypes.element
}

export { VmsButton }
