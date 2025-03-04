"use client";
const Heading = ({ title, subTitle }) => {
  return (
    <div className="mb-5 text-center space-y-2">
      <h2 className="font-extrabold md:text-4xl text-3xl">{title}</h2>
      <p className="max-w-lg w-11/12 mx-auto md:text-base text-sm font-medium text-neutral-700 dark:text-white">{subTitle}</p>
    </div>
  );
};

export default Heading;
