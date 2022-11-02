import React from "react"
import classNames from "classnames"
import { SectionTilesProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"
import { ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWrench } from "@fortawesome/free-solid-svg-icons"

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const Testimonial = ({
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
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  )

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left")

  const sectionHeader = {
    title: "Website Design",
    paragraph:
      "We can design websites for all sorts of needs. Costs can depend on specific needs but below are three sample tiers of of what can be provided",
  }

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='testimonial-item-content'>
                  <div className='text-sm mb-0'></div>
                </div>
                <div className='testimonial-item-footer text-xs mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    Brochure Website
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <span className='old-price'>€500</span>
                    <span>€249</span>
                  </span>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='testimonial-item-content'>
                  <div className='text-sm mb-0'>
                    <ListGroup className='tlist'>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        6 Content Pages
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Crisp Responsive Design
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Search Optimization (SEO)
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Minor Branding
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Stock Images
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Up to 100 Products
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Admin Cockpit
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Online Stripe Payments
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Analytics
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
                <div className='testimonial-item-footer text-xs mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    ECommerce
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <span>€1,500</span>
                  </span>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-left'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='testimonial-item-content'>
                  <div className='text-sm mb-0'>
                    <ListGroup className='tlist'>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        10 Content Pages
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Crisp Responsive Design
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Search Optimization (SEO)
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Full Rebranding
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        User Upload Capabilities
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Social Media Integrations
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        POS / Internal Integrations
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Stock Images
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Admin Cockpit
                      </ListGroup.Item>
                      <ListGroup.Item as='li'>
                        <FontAwesomeIcon
                          className='icon-bullet'
                          icon={faWrench}
                        />
                        Business Analytics
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
                <div className='testimonial-item-footer text-xs mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    Custom
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <span>€3,000</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Testimonial.propTypes = propTypes
Testimonial.defaultProps = defaultProps

export default Testimonial
