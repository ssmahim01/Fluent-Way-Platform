"use client"

import { IoTimer } from "react-icons/io5"
import Link from "next/link"
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3DCard"
// import { CardBody, CardContainer, CardItem } from "../ui/3d-card"

// Custom star rating component for better performance
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i < Math.floor(rating) ? "gold" : "none"}
          stroke={i < Math.floor(rating) ? "gold" : "currentColor"}
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}
    </div>
  )
}

const CoursesCard = ({ course }) => {
  // Use memo for expensive calculations if needed
  const truncatedDescription = course?.description?.slice(0, 80) + "..."

  return (
    <CardContainer className="w-full sm:w-auto inter-var border">
      <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] dark:bg-black dark:border-white/[0.2] border-neutral-200 w-auto rounded-xl p-0 border shadow-sm hover:shadow-md transition-all">
        
          <CardItem translateZ="100" className="w-full p-6 h-full">
            <Image
              src={course?.image || "/placeholder.svg"}
              alt={course?.title}
              height={1000}
              width={1000}
              className="h-60 w-full  object-cover rounded-xl group-hover/card:shadow-xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </CardItem>

        <div className="p-4">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white">
            {course?.title}
          </CardItem>

          <CardItem translateZ="40" className="text-neutral-600 text-sm dark:text-neutral-300 mt-2">
            {truncatedDescription}
          </CardItem>

          <div className="flex justify-between items-center mt-3">
            <CardItem
              translateZ="30"
              className="text-lg font-bold text-neutral-800 dark:text-white flex gap-1 items-center"
            >
              <Image
                alt="price"
                src={"https://img.icons8.com/ios-filled/50/us-dollar-circled--v2.png"}
                height={35}
                width={28}
                loading="lazy"
              />
              <span>{course?.price}</span>
            </CardItem>
            <CardItem
              translateZ="30"
              className="text-lg font-bold text-neutral-800 dark:text-white flex gap-1 items-center"
            >
              <IoTimer className="text-2xl" />
              <span>{course?.duration}</span>
            </CardItem>
          </div>

          <div className="flex justify-between items-center mt-3">
            <CardItem translateZ="30">
              <StarRating rating={course?.rating || 0} />
            </CardItem>
            <CardItem
              translateZ="50"
              as={Link}
              href={`/course/${course?._id}`}
              className="px-4 py-2 rounded-md bg-neutral-900 dark:bg-white dark:text-black text-white flex gap-1 items-center font-bold"
            >
              <span>Read More</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.2 1H4.17741H4.1774C3.86936 0.999988 3.60368 0.999978 3.38609 1.02067C3.15576 1.04257 2.92825 1.09113 2.71625 1.22104C2.51442 1.34472 2.34473 1.51442 2.22104 1.71625C2.09113 1.92825 2.04257 2.15576 2.02067 2.38609C1.99998 2.60367 1.99999 2.86935 2 3.17738V3.1774V3.2V11.8V11.8226V11.8226C1.99999 12.1307 1.99998 12.3963 2.02067 12.6139C2.04257 12.8442 2.09113 13.0717 2.22104 13.2837C2.34473 13.4856 2.51442 13.6553 2.71625 13.779C2.92825 13.9089 3.15576 13.9574 3.38609 13.9793C3.60368 14 3.86937 14 4.17741 14H4.2H10.8H10.8226C11.1306 14 11.3963 14 11.6139 13.9793C11.8442 13.9574 12.0717 13.9089 12.2837 13.779C12.4856 13.6553 12.6553 13.4856 12.779 13.2837C12.9089 13.0717 12.9574 12.8442 12.9793 12.6139C13 12.3963 13 12.1306 13 11.8226V11.8V3.2V3.17741C13 2.86936 13 2.60368 12.9793 2.38609C12.9574 2.15576 12.9089 1.92825 12.779 1.71625C12.6553 1.51442 12.4856 1.34472 12.2837 1.22104C12.0717 1.09113 11.8442 1.04257 11.6139 1.02067C11.3963 0.999978 11.1306 0.999988 10.8226 1H10.8H4.2ZM3.23875 2.07368C3.26722 2.05623 3.32362 2.03112 3.48075 2.01618C3.64532 2.00053 3.86298 2 4.2 2H10.8C11.137 2 11.3547 2.00053 11.5193 2.01618C11.6764 2.03112 11.7328 2.05623 11.7613 2.07368C11.8285 2.11491 11.8851 2.17147 11.9263 2.23875C11.9438 2.26722 11.9689 2.32362 11.9838 2.48075C11.9995 2.64532 12 2.86298 12 3.2V11.8C12 12.137 11.9995 12.3547 11.9838 12.5193C11.9689 12.6764 11.9438 12.7328 11.9263 12.7613C11.8851 12.8285 11.8285 12.8851 11.7613 12.9263C11.7328 12.9438 11.6764 12.9689 11.5193 12.9838C11.3547 12.9995 11.137 13 10.8 13H4.2C3.86298 13 3.64532 12.9995 3.48075 12.9838C3.32362 12.9689 3.26722 12.9438 3.23875 12.9263C3.17147 12.8851 3.11491 12.8285 3.07368 12.7613C3.05624 12.7328 3.03112 12.6764 3.01618 12.5193C3.00053 12.3547 3 12.137 3 11.8V3.2C3 2.86298 3.00053 2.64532 3.01618 2.48075C3.03112 2.32362 3.05624 2.26722 3.07368 2.23875C3.11491 2.17147 3.17147 2.11491 3.23875 2.07368ZM5 10C4.72386 10 4.5 10.2239 4.5 10.5C4.5 10.7761 4.72386 11 5 11H8C8.27614 11 8.5 10.7761 8.5 10.5C8.5 10.2239 8.27614 10 8 10H5ZM4.5 7.5C4.5 7.22386 4.72386 7 5 7H10C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8H5C4.72386 8 4.5 7.77614 4.5 7.5ZM5 4C4.72386 4 4.5 4.22386 4.5 4.5C4.5 4.77614 4.72386 5 5 5H10C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4H5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default CoursesCard

