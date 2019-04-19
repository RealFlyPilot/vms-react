import React from 'react'
import './index.scss'
import { dynamicAttributes } from '../utils'
import { PropTypes } from 'prop-types'

const VmsButton = ({ cssClass, buttonType, ...props }) => {
  const attrs = dynamicAttributes(buttonType, 'true')
  return (
    <button {...attrs} className={`${buttonType}`}>
      {props.children}
    </button>
  )
}

VmsButton.propTypes = {
  cssClass: PropTypes.string,
  buttonType: PropTypes.string.isRequired
}

export { VmsButton }
