import React from "react"
import classNames from "classnames"
import { SectionSplitProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"
import Image from "../elements/Image"

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
    title: "Web Design",
    paragraph:
      "Our goal in web design is to provide results. We will help you bring your business to the top of Google Search and ultimately help you grow your business and find new customers.",
  }

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={splitClasses}>
            <a target='_blank' rel="noopener noreferrer" href='https://sylvia.syfo.ie'>
              <div className='split-item'>
                <div
                  className='split-item-content center-content-mobile reveal-from-left'
                  data-reveal-container='.split-item'
                >
                  <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                    Counsellor / Psychotherapist Web Design
                  </div>
                  <h3 className='mt-0 mb-12'>
                    Ray of Light Counselling Services
                  </h3>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile reveal-from-bottom",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container='.split-item'
                >
                  <Image
                    src={require("./../../assets/images/ray-of-light.gif")}
                    alt='Features split 01'
                    width={528}
                    height={396}
                  />
                </div>
              </div>
            </a>
            <a target='_blank' rel="noopener noreferrer" href='https://sylvia.syfo.ie'>
              <div className='split-item'>
                <div
                  className='split-item-content center-content-mobile reveal-from-right'
                  data-reveal-container='.split-item'
                >
                  <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                    Restaurant Web Design
                  </div>
                  <h3 className='mt-0 mb-12'>
                    McGlynn's Restaurant Castlefinn
                  </h3>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile reveal-from-bottom",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container='.split-item'
                >
                  <Image
                    src={require("./../../assets/images/mcglynns.gif")}
                    alt='Features split 02'
                    width={528}
                    height={396}
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesSplit2.propTypes = propTypes
FeaturesSplit2.defaultProps = defaultProps

export default FeaturesSplit2
