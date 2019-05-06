import React from 'react'
import { PropTypes } from 'prop-types'
import './index.scss'

const Subtitle = ({ type, weight, content }) => {
  const subTitleMap = {
    'st-1': (type, weight, content) => <h5 className={`subtitle ${type} ${weight}`}>{content}</h5>,
    'st-2': (type, weight, content) => <h6 className={`subtitle ${type} ${weight}`}>{content}</h6>
  }

  return subTitleMap[type](type, weight, content)
}

Subtitle.propTypes = {
  type: PropTypes.string,
  weight: PropTypes.string,
  content: PropTypes.string
}

export { Subtitle }
