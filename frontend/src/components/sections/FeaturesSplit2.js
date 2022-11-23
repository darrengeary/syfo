import React from "react"
import classNames from "classnames"
import { SectionSplitProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"

import { BsBroadcast } from "react-icons/bs"

const propTypes = {
  ...SectionSplitProps.types,
}

const defaultProps = {
  ...SectionSplitProps.defaults,
}

const FeaturesSplit2 = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  )

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  )

  const sectionHeader = {
    title: "Business Websites",
    paragraph:
      "We can design websites for all sorts of needs. Below are two examples from our portfolio.",
  }

  return (
    <section {...props} className={outerClasses}>
      <div id='past' className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={splitClasses}>
            <div className='container pt-8'>
              <div className='row align-items-center'>
                <div className='col-md align-content-between center-content flex-wrap'>
                  <BsBroadcast alt='Icon' className='feature-icons2' />
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://rayoflightmilford.ie'
                  >
                    <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                      Psychotherapist Website
                    </div>
                    <h3 className='website'>
                      Ray of Light Counselling Services
                    </h3>
                  </a>
                </div>
                <div
                  className='col-md-7 pb-2 center-content'
                  data-reveal-container='.split-item'
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    width={528}
                    height={396}
                  >
                    <source
                      src={require("./../../assets/images/ray-of-light.webm")}
                      type='video/webm'
                    />
                  </video>
                </div>
              </div>
              <div className='row align-items-center section-inner pb-0'>
                <div className='col-md  align-content-between center-content flex-wrap'>
                  <BsBroadcast alt='Icon' className='feature-icons2' />
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://mcglynns.ie'
                  >
                    <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                      Restaurant Website
                    </div>
                    <h3 className='website'>McGlynn's Restaurant Castlefinn</h3>
                  </a>
                </div>
                <div
                  className='col-md-7 center-content'
                  data-reveal-container='.split-item'
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    width={528}
                    height={396}
                  >
                    <source
                      src={require("./../../assets/images/mcglynns.webm")}
                      type='video/webm'
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesSplit2.propTypes = propTypes
FeaturesSplit2.defaultProps = defaultProps

export default FeaturesSplit2
