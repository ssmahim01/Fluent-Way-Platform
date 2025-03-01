"use client";
const AboutUsSection = () => {
  return (
    <div className="pt-16 pb-10">
      <section className="bg-neutral-800 px-6 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">About FluentWay</h1>
        <p className="mt-4 font-medium">
          Empowering learners to achieve English fluency with our expert-led
          courses.
        </p>
      </section>

      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
              Our Mission
            </h2>
            <p className="font-medium">
              Our mission is to make English learning accessible, effective, and
              enjoyable. We are committed to providing high-quality courses that
              cater to every learner’s needs, helping them improve their skills
              at their own pace and succeed in their personal and professional
              endeavors.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
              Our Vision
            </h2>
            <p className="font-medium">
              Our vision is to become the leading online English learning
              platform, empowering learners worldwide to achieve fluency and
              confidence in English, no matter where they are in their journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4 text-center">
            How FluentWay Works
          </h2>
          <p className="font-medium text-center mb-6">
            FluentWay offers a user-friendly experience where students can
            explore a wide range of English courses, enroll in them, and manage
            their progress. Our platform allows learners to track their course
            status, make adjustments to their bookings, and access a variety of
            learning resources that suit their individual needs.
          </p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600">
                Explore Courses
              </h3>
              <p className="mt-4 font-medium">
                Browse through various English learning courses and choose the
                one that fits your needs.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600">
                Track Your Progress
              </h3>
              <p className="mt-4 font-medium">
                Keep track of your learning journey with progress updates and
                personalized feedback.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600">
                Manage Your Bookings
              </h3>
              <p className="mt-4 font-medium">
                Easily edit, delete, or update your course bookings and learning
                status on the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
            Meet Our Team
          </h2>
          <p className="font-medium mb-6">
            FluentWay is dedicated to providing the best learning experience for
            you. Led by Sayman Shakil Mahim, I strive to bring my expertise in
            education and technology to the forefront, creating a platform that
            supports your growth every step of the way.
          </p>

          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <img
                src="/assets/ss-mahim.jpeg"
                alt="Reading of Students"
                className="w-28 h-28 rounded-full object-cover border-4 border-neutral-800 mx-auto"
              />
              <h3 className="font-semibold text-lg mt-4">Sayman Shakil Mahim</h3>
              <p className="font-medium">Founder & MERN Stack Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
