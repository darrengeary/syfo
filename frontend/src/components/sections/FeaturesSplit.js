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

const FeaturesSplit = ({
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
    title: "Business Software",
    paragraph:
      "We value user interfaces and strongly believe that slick, fast and easy to use interfaces makes for happier employees.",
  }

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={splitClasses}>
            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  Cloud-Based Storefront management
                </div>
                <h3 className='website mt-0 mb-12'>eCommerce Cockpit</h3>
                <p className='m-0'>
                  eCommerce is fastly taking over the consumer market. Our easy
                  to use administration system has been specifically designed to
                  support the management of your eCommerce site, from webpage
                  content to product and customer administration.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require("./../../assets/images/features-split-image-01.gif")}
                  alt='Features split 01'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-right'
                data-reveal-container='.split-item'
              >
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  Cloud-Based Business process management
                </div>
                <h3 className='website mt-0 mb-12'>Management Cockpit</h3>
                <p className='m-0'>
                  Every business has unique requirements. Our versatile
                  management cockpit can be molded to suit your unique business
                  requirements. Whether its staff management, analysis reports
                  or ticketing needs, we've got you covered.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require("./../../assets/images/features-split-image-02.gif")}
                  alt='Features split 02'
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesSplit.propTypes = propTypes
FeaturesSplit.defaultProps = defaultProps

export default FeaturesSplit
