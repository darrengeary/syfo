import React from "react"
import classNames from "classnames"
import { SectionProps } from "../../utils/SectionProps"
import ButtonGroup from "../elements/ButtonGroup"
import Button from "../elements/Button"
import Image from "../elements/Image"

const propTypes = {
  ...SectionProps.types,
}

const defaultProps = {
  ...SectionProps.defaults,
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  )

  return (
    <section {...props} className={outerClasses}>
      <div className='container-sm'>
        <div className={innerClasses}>
          <div className='hero-content'>
            <h1
              className='mt-0 mb-16 reveal-from-bottom'
              data-reveal-delay='200'
            >
              Experts in{" "}
              <span className='text-color-primary'>business software</span>{" "}
              products.
            </h1>
            <div className='container-xs'>
              <p
                className='m-0 small-space reveal-from-bottom'
                data-reveal-delay='400'
              >
                Donegal and Galway based company who build and implement end to
                end software products to help businesses succeed.
              </p>
              <div className='reveal-from-bottom' data-reveal-delay='600'>
                <ButtonGroup>
                  <Button
                    tag='a'
                    className='button-contact'
                    color='primary'
                    wideMobile
                    href='#contact'
                  >
                    Contact Us
                  </Button>

                  <Button tag='a' color='dark' wideMobile href='#past'>
                    View Our Projects
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className='hero-figure reveal-from-bottom illustration-element-01'
            data-reveal-value='20px'
            data-reveal-delay='800'
          >
            <Image
              className='syfogif'
              src={require("./../../assets/images/syfo.gif")}
              alt='Hero'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = propTypes
Hero.defaultProps = defaultProps

export default Hero
