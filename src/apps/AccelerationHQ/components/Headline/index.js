import React from 'react'
import { PropTypes } from 'prop-types'
import './index.scss'

const Headline = ({ type, weight, content }, ...props) => {
  const headlineMap = {
    h1: (type, weight, content) => (
      <h1 {...props} className={`headline ${type} ${weight}`}>
        {content}
      </h1>
    ),
    h2: (type, weight, content) => (
      <h2 {...props} className={`headline ${type} ${weight}`}>
        {content}
      </h2>
    ),
    h3: (type, weight, content) => (
      <h3 {...props} className={`headline ${type} ${weight}`}>
        {content}
      </h3>
    ),
    h4: (type, weight, content) => (
      <h4 {...props} className={`headline ${type} ${weight}`}>
        {content}
      </h4>
    ),
    h5: (type, weight, content) => (
      <h5 {...props} className={`headline ${type} ${weight}`}>
        {content}
      </h5>
    ),
    h6: (type, weight, content) => (
      <h6 {...props} className={`headline ${type} ${weight}`}>
        {content}
      </h6>
    )
  }

  return headlineMap[type](type, weight, content)
}

Headline.propTypes = {
  type: PropTypes.string,
  weight: PropTypes.string,
  content: PropTypes.string
}

export { Headline }
