"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { ImWhatsapp } from "react-icons/im";
import { MdEmail, MdOutlineMessage } from "react-icons/md";
import { Button } from "@/components/ui/button";

const ConnectWithUs = () => {
  const form = useRef();
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching location:", error);
          setLocation({ lat: 23.8103, lng: 90.4125 });
        }
      );
    }
  }, []);

  const googleMapsApiKey = "AIzaSyDCLuUSPiCNWdIDvwObRWbfUN6d-o67338";
  const googleMapsUrl =
    location.lat !== 0 && location.lng !== 0
      ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C${location.lat},${location.lng}&key=${googleMapsApiKey}`
      : null;

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.SERVICE_ID}`,
        `${process.env.TEMPLATE_ID}`,
        form.current,
        `${process.env.PUBLIC_KEY}`
      )
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully sent the mail!",
          showConfirmButton: false,
          timer: 3000,
        });
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

  return (
    <div className="pt-20 pb-10">
      <h2 className="text-center md:text-5xl text-4xl font-extrabold mb-6">
        Connect with Us
      </h2>

      <div className="w-11/12 mx-auto flex lg:flex-row flex-col justify-between border border-neutral-200 dark:border-neutral-600 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 rounded-lg">
        <div className="lg:w-1/2 p-4 lg:border-r border-r-neutral-300 dark:border-r-neutral-600 lg:mr-6 lg:border-b-0 border-b">
          {googleMapsUrl && (
            <figure className="w-full md:h-[295px] h-64">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={googleMapsUrl}
                alt="Location"
                fetchPriority="high"
              />
            </figure>
          )}

          <div className="pt-5 pl-4 space-y-3">
            <h4 className="text-xl flex gap-x-2 items-center">
              <MdEmail className="text-2xl text-indigo-500" />{" "}
              <span className="font-semibold">
                saymanshakilmahim03@gmail.com
              </span>
            </h4>

            <h4 className="text-xl flex gap-x-2 items-center">
              <ImWhatsapp className="text-2xl text-lime-500" />{" "}
              <span className="font-semibold">+8801818788816</span>
            </h4>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form ref={form} onSubmit={handleSend} className="space-y-4 p-7">
            <h2 className="text-3xl font-extrabold pb-2">Send Your Message</h2>

            <input
              type="text"
              name="from_name"
              placeholder="Write your Name"
              className="pl-2 text-neutral-600 font-semibold py-2 w-full rounded-md border border-neutral-400"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Type your Email"
              className="pl-2 text-neutral-600 font-semibold py-2 w-full rounded-md border border-neutral-400"
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              className="pl-3 text-neutral-600 font-semibold pt-2 h-28 w-full rounded-md border border-neutral-400"
            ></textarea>

            <div className="mt-6">
              <Button variant="default">
                <p className="flex gap-2 items-center">
                  <MdOutlineMessage className="text-2xl" />
                  <span className="text-base font-bold">Send Message</span>
                </p>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
