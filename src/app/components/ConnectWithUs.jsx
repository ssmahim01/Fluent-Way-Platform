"use client";

import { Button } from "@/components/ui/button";
import Heading from "./Heading";
import { handleSend } from "../util/handleSend";
import Image from "next/image";
import { useRef } from "react";

const ConnectWithUs = () => {
  const form = useRef()

  return (
    <div className="pt-20 pb-16">
      <Heading title={"Connect With Us"} subTitle={"Send your valuable message by your name and email"} />

      <div className="lg:pt-0 pt-4 w-11/12 mx-auto flex lg:flex-row-reverse flex-col justify-between border border-neutral-200 dark:border-neutral-600 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 rounded-lg">
        <div className="lg:w-1/2 p-4 lg:border-l border-l-neutral-300 dark:border-l-neutral-600 border-b-neutral-300 dark:border-b-neutral-600 lg:ml-6 lg:border-b-0 border-b">
          <figure className="w-full lg:h-[500px] md:h-[470px] h-72">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="/assets/ss-mahim.jpeg"
              alt="Image of developer"
              fetchPriority="high"
            />
          </figure>

          <div className="pt-5 pl-4 space-y-3">
            <h4 className="md:text-xl flex gap-x-2 items-center">
              <Image src={"https://img.icons8.com/fluency/48/new-post.png"} alt="email icon" width={30} height={30} />
              {" "}
              <span className="font-semibold">
                saymanshakilmahim03@gmail.com
              </span>
            </h4>

            <h4 className="md:text-xl flex gap-x-2 items-center">
              <svg className="" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="30" viewBox="0 0 24 24">
                <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
              </svg>
              {" "}
              <span className="font-semibold">+8801818788816</span>
            </h4>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form ref={form} onSubmit={(e) => handleSend(e, form)} className="space-y-4 p-7">
            <h2 className="text-3xl font-extrabold pb-2">Send Your Message</h2>

            <input
              type="text"
              name="from_name"
              placeholder="Write your Name"
              className="pl-2 text-neutral-600 dark:text-neutral-300 font-semibold py-2 w-full rounded-md border border-neutral-400"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Type your Email"
              className="pl-2 text-neutral-600 dark:text-neutral-300 font-semibold py-2 w-full rounded-md border border-neutral-400"
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              className="pl-3 text-neutral-600 dark:text-neutral-300 font-semibold pt-2 md:h-40 h-28 w-full rounded-md border border-neutral-400"
            ></textarea>

            <div className="mt-6">
              <Button variant="default">
                <p className="flex gap-2 items-center">
                  <Image alt="message icon" src={"https://img.icons8.com/sf-regular/48/chat-message.png"} className="invert" height={28} width={30}/>
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
