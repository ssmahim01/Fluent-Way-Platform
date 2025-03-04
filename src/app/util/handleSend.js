import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const handleSend = (e, formRef) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        formRef.current,
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
      )
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully sent the mail!",
          showConfirmButton: false,
          timer: 3000,
        });

        formRef.current.reset();
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to send the mail! Please try again later.",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };