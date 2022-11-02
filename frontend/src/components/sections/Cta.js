import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { SectionProps } from "../../utils/SectionProps"
import Button from "../elements/Button"

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  )

  return (
    <section {...props} className={outerClasses}>
      <div className=' cta-space container'>
        <div className={innerClasses}>
          <h3 className='m-0'>
            Are you interested in software to help your business grow?
          </h3>
          <br></br>
          <div className='d-flex row'>
            <h3 className='col-sm-9'>
              We can deliver on any requirement big or small.
            </h3>
            <div className='cta-action d-sm-flex justify-content-sm-end col-sm-3'>
              <Button tag='a' color='dark' wideMobile href='#contact'>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Cta.propTypes = propTypes
Cta.defaultProps = defaultProps

export default Cta
