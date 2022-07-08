import { Fragment, useState } from "react";
import emailjs from "emailjs-com";
import clsx from "classnames";
import Modal from "../Modal/Modal";

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

  return (
    <Fragment>
      <section>
        <div>
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your upcoming
            event. Please leave us a short detailed message regarding your
            upcoming event. Include number of courses, guests, likes, dislikes,
            allergies and any special requests!
          </p>
        </div>
        <form onSubmit={submitFormHandler}>
          <div>
            <div>
              <label htmlFor="fname" />
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
                className={clsx({
                  control:
                    form.validity.firstName ||
                    (!form.validity.firstName && form.touched.firstName),
                  invalid: !form.validity.firstName && !form.touched.firstName,
                })}
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
                <span
                  className={
                    !form.validity.firstName && form.touched.firstName
                      ? "hidden"
                      : "visible"
                  }
                >
                  Please enter your first name.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="lname" />
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
                className={clsx({
                  control:
                    form.validity.lastName ||
                    (!form.validity.lastName && form.touched.lastName),
                  invalid: !form.validity.lastName && !form.touched.lastName,
                })}
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
                <span
                  className={
                    !form.validity.lastName && form.touched.lastName
                      ? "hidden"
                      : "visible"
                  }
                >
                  Please enter your last name.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="phone" />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className={clsx({
                  control:
                    form.validity.phone ||
                    (!form.validity.phone && form.touched.phone),
                  invalid: !form.validity.phone && !form.touched.phone,
                })}
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
                <span
                  className={
                    !form.validity.lastName && form.touched.lastName
                      ? "hidden"
                      : "visible"
                  }
                >
                  Please enter your phone number.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className={clsx({
                  control:
                    form.validity.email ||
                    (!form.validity.email && form.touched.email),
                  invalid: !form.validity.email && !form.touched.email,
                })}
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
                <span
                  className={
                    !form.validity.lastName && form.touched.lastName
                      ? "hidden"
                      : "visible"
                  }
                >
                  Please enter your email address.
                </span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="message"></label>
            <textarea
              className={clsx({
                control:
                  form.validity.message ||
                  (!form.validity.message && form.touched.message),
                invalid: !form.validity.message && !form.touched.message,
              })}
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
            {!form.validity.message && (
              <span
                className={
                  !form.validity.message && form.touched.message
                    ? "hidden"
                    : "visible"
                }
              >
                Please enter your message.
              </span>
            )}
          </div>
          <button type="submit">SUBMIT</button>
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
