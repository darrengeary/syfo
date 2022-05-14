import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useState } from "react"
import SectionHeader from "./partials/SectionHeader"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FloatingLabel } from "react-bootstrap"
import axios from "axios"
import { toast } from "react-toastify"

const sectionHeader = {
  title: "Contact Us",
  paragraph:
    "Feel free to reach out if you have any questions or if you are just a little curious. We are happy to help",
}

const Contact = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [location, setLocation] = useState()
  const [message, setMessage] = useState()

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await axios.post("/api/users/message", {
        name: name,
        email: email,
        phone: phone,
        location: location,
        message: message,
      })
      toast.success("Message Sent!")
    } catch (err) {
      toast.error("Error " + err)
    }
  }

  return (
    <section>
      <SectionHeader
        id='contact'
        data={sectionHeader}
        className='center-content'
      />
      <div className='contact2'>
        <div className='container'>
          <div className='row contact-container'>
            <div className='col-lg-12'>
              <div className='card card-shadow border-0 mb-4'>
                <div className='row'>
                  <div className='col-lg-8'>
                    <div className='contact-box p-4'>
                      <form className='box-height' onSubmit={submitHandler}>
                        <div className='mt-8 row'>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <FloatingLabel label='name' className='mb-3'>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='name'
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </FloatingLabel>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <FloatingLabel label='email' className='mb-3'>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='email'
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </FloatingLabel>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <FloatingLabel label='phone' className='mb-3'>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='phone'
                                  onChange={(e) => setPhone(e.target.value)}
                                />
                              </FloatingLabel>
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-group '>
                              <FloatingLabel label='location' className='mb-3'>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='location'
                                  onChange={(e) => setLocation(e.target.value)}
                                />
                              </FloatingLabel>
                            </div>
                          </div>
                          <div className='col-lg-12'>
                            <div className='form-group '>
                              <FloatingLabel
                                label='message'
                                className='mb-3 message-box'
                              >
                                <textarea
                                  className='form-control'
                                  rows='1'
                                  cols='50'
                                  placeholder='message'
                                  onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                              </FloatingLabel>
                            </div>
                          </div>
                          <div className='box-big col-lg-5'>
                            <div className='d-flex contact-details'>
                              <FontAwesomeIcon
                                className='email contact-icon'
                                icon={faEnvelope}
                              />
                              <a
                                href='mailto:syfodesign@gmail.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='ms-2 pt-1'
                              >
                                syfodesign@gmail.com
                              </a>
                            </div>
                            <div className='d-flex contact-details'>
                              <FontAwesomeIcon
                                className='contact-icon whatsapp'
                                icon={faWhatsapp}
                              />
                              <a
                                href='https://api.whatsapp.com/send?phone=353871204431'
                                rel='noopener noreferrer'
                                target='_blank'
                                className='ms-2 mb-8 pt-1'
                              >
                                Click here for WhatsApp
                              </a>
                            </div>
                          </div>
                          <div className='box-big col-lg-7'>
                            <button className='btn btn-danger-gradiant me-8 mt-3 mb-3 text-white border-0 py-2 px-3'>
                              <span>
                                Submit <i className='ti-arrow-right'></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='col-lg-4 bg-image'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
