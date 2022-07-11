import { Fragment, useState } from "react";
import emailjs from "@emailjs/browser";
import classNames from "classnames";

import { Modal } from "../Modal/Modal";

const isEmpty = (value: string) => value.trim() === "";
const isTenChars = (value: string) => value.trim().length === 10;

const isEmailValid = (value: string) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (value.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

type ContactInput = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  touched: {
    firstName: boolean;
    lastName: boolean;
    phone: boolean;
    email: boolean;
    message: boolean;
  };
  validity: {
    firstName: boolean;
    lastName: boolean;
    phone: boolean;
    email: boolean;
    message: boolean;
  };
};

const initialFormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
  touched: {
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    message: false,
  },
  validity: {
    firstName: true,
    lastName: true,
    phone: true,
    email: true,
    message: true,
  },
};

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState<ContactInput>(initialFormState);

  const onCloseModalHandler = () => {
    setShowModal(false);
  };

  const submitFormHandler = (e: any) => {
    e.preventDefault();

    const firstNameisValid = !isEmpty(form.firstName);
    const lastNameisValid = !isEmpty(form.lastName);
    const phoneNumberisValid = isTenChars(form.phone);
    const messageIsValid = !isEmpty(form.message);
    const emailIsValid = isEmailValid(form.email);

    setForm((current) => ({
      ...current,
      validity: {
        firstName: firstNameisValid,
        lastName: lastNameisValid,
        phone: phoneNumberisValid,
        message: messageIsValid,
        email: emailIsValid,
      },
    }));

    const formIsValid =
      firstNameisValid &&
      lastNameisValid &&
      phoneNumberisValid &&
      messageIsValid &&
      emailIsValid;

    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm(
        "contact_service",
        "template_w3hydwo",
        e.target,
        "user_kwfk7unP7jS9DOSbszb09"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setForm(initialFormState);

    setShowModal(true);
  };

  const inputDiv = classNames("my-4");
  const inputStyle = classNames("w-60 p-2 rounded-md shadow-xl");

  return (
    <Fragment>
      <section
        id="Contact"
        className="flex flex-col p-8 leading-8 text-center bg-lightGrayTwo md:px-18 lg:flex-row lg:text-xl lg:leading-10 "
      >
        <div className="flex flex-col lg:w-50vw">
          <h1 className="self-center px-8 py-4 text-3xl border-2 border-white font-Nautigal">
            Contact Us
          </h1>
          <p className="pt-4 lg:px-10">
            Ready to take it to the next level? Let’s talk about your upcoming
            event. Please leave us a short detailed message regarding your
            upcoming event. Include number of courses, guests, likes, dislikes,
            allergies and any special requests!
          </p>
        </div>
        <form
          onSubmit={submitFormHandler}
          className="flex flex-col justify-between py-4 mt-4 bg-grayTwo rounded-2xl md:w-80 md:mx-auto"
        >
          <div className={inputDiv}>
            <label htmlFor="fname" />
            <input
              className={inputStyle}
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  firstName: e.target.value,
                  touched: {
                    ...current.touched,
                    firstName: true,
                  },
                }))
              }
              value={form.firstName}
            />
            {!form.validity.firstName && (
              <span>Please enter your first name.</span>
            )}
          </div>
          <div className={inputDiv}>
            <label htmlFor="lname" />
            <input
              className={inputStyle}
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  lastName: e.target.value,
                  touched: {
                    ...current.touched,
                    lastName: true,
                  },
                }))
              }
              value={form.lastName}
            />
            {!form.validity.lastName && (
              <span>Please enter your last name.</span>
            )}
          </div>
          <div className={inputDiv}>
            <label htmlFor="phone" />
            <input
              className={inputStyle}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  phone: e.target.value,
                  touched: {
                    ...current.touched,
                    phone: true,
                  },
                }))
              }
              value={form.phone}
            />
            {!form.validity.phone && (
              <span>Please enter your phone number.</span>
            )}
          </div>
          <div className={inputDiv}>
            <label htmlFor="email" />
            <input
              className={inputStyle}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  email: e.target.value,
                  touched: {
                    ...current.touched,
                    email: true,
                  },
                }))
              }
              value={form.email}
            />
            {!form.validity.email && (
              <span>Please enter your email address.</span>
            )}
          </div>

          <div className={inputDiv}>
            <label htmlFor="message"></label>
            <textarea
              className={inputStyle}
              id="message"
              name="message"
              placeholder="Leave a message"
              onChange={(e) =>
                setForm((current) => ({
                  ...current,
                  message: e.target.value,
                  touched: {
                    ...current.touched,
                    message: true,
                  },
                }))
              }
              value={form.message}
            />
            {!form.validity.message && <span>Please enter your message.</span>}
          </div>
          <button
            type="submit"
            className="self-center px-8 py-1 bg-white shadow-xl rounded-2xl"
          >
            SUBMIT
          </button>
        </form>
      </section>
      <Modal show={showModal} onClose={onCloseModalHandler}>
        Thank you! We have receieved your message. We will be in contact within
        24 hours!
      </Modal>
    </Fragment>
  );
};

export default ContactForm;
