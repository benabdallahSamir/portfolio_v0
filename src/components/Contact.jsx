import React from "react";
import Swal from "sweetalert2";
import ContactIcons from "./ContactIcons";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact page" id="contact">
      <div>
        <ContactIcons
          href={"https://www.facebook.com/benabdallah.samir.94/"}
          icon={faFacebook}
        />
        <ContactIcons
          href={"https://github.com/samirbenabdallah"}
          icon={faGithub}
        />
        <ContactIcons
          href={"https://www.instagram.com/samir_benabdallah1318"}
          icon={faInstagram}
        />
        <ContactIcons
          href={"mailto:samirbenabdallah4002@gmail.com"}
          icon={faMailBulk}
        />
      </div>
      <input type="eamil" placeholder="Enter Email" id="email" name="email" />
      <textarea
        name="desx"
        id="desx"
        cols="30"
        rows="10"
        placeholder="explain your app "
      ></textarea>
      <button
        onClick={() => {
          Swal.fire({
            title:
              "is just a template , if you want to conntact me check my account",
            icon: "warning",
            showConfirmButton: true,
          });
        }}
      >
        send form to us
      </button>
    </div>
  );
};

export default Contact;
