import React from "react"
import classNames from "classnames"
import { SectionTilesProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"

import {
  MdDevices,
  MdOutlineDesignServices,
  MdOutlineAreaChart,
  MdOutlineCameraAlt,
  MdOutlineSettings,
  MdOutlineQueryStats,
} from "react-icons/md"

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  )

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  )

  const sectionHeader = {
    title: "Covering your needs",
    paragraph: "",
  }

  return (
    <section {...props} className={outerClasses}>
      <div className='container section-inner'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <MdDevices alt='Icon' className='feature-icons' />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Responsive Designs</h4>
                  <p className='m-0 text-sm'>
                    Whether your customers are using a smartphone or pc, the
                    solutions provided will always respond accordingly to the
                    size of the screen.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <MdOutlineDesignServices
                      alt='Icon'
                      className='feature-icons'
                    />{" "}
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Custom Development</h4>
                  <p className='m-0 text-sm'>
                    We provide anything from websites and apps to internal web
                    apps to support your internal business processes with ease.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='400'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <MdOutlineAreaChart alt='Icon' className='feature-icons' />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Business Intelligence</h4>
                  <p className='m-0 text-sm'>
                    We can develop dashboards for monitoring and reporting for
                    business analysis and can cover the unique needs of any
                    business.
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <MdOutlineCameraAlt alt='Icon' className='feature-icons' />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Drone Footage & Photos</h4>
                  <p className='m-0 text-sm'>
                    Aerial footage, still photography and videography will
                    present your business as professional and appealing to your
                    customers.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <MdOutlineQueryStats alt='Icon' className='feature-icons' />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>SEO Driven Development</h4>
                  <p className='m-0 text-sm'>
                    Customer success is really important to us. We are dedicated
                    to optimising the searchability of your business on search
                    engines.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='400'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image mb-16'>
                    <MdOutlineSettings alt='Icon' className='feature-icons' />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>Branding and Graphics</h4>
                  <p className='m-0 text-sm'>
                    We create branding for your solutions or we can provide new
                    designs which are inline with your current branding and
                    styles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesTiles.propTypes = propTypes
FeaturesTiles.defaultProps = defaultProps

export default FeaturesTiles
