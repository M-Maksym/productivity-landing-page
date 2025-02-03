import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const array = [...props.testimonials, ...props.testimonials];
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {array.map(({ text, imageSrc, name, username }, i: number) => (
          <div className="card" key={i}>
            <div>{text}</div>
            <div className="flex items-center gap-2 mt-5">
              <Image
                src={imageSrc}
                alt={name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">
                  {name}
                </div>
                <div className="leading-5 tracking-tight">{username}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
