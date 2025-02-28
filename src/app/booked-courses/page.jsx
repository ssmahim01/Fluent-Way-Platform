import { headers } from "next/headers";
import ManageBookingTable from "../components/ManageBookingTable";

export const metadata = {
  title: "FluentWay | Booked Courses",
  description: "Collection of booked courses for manage",
};

const fetchBookedCoursesFromDB = async () => {
  const response = await fetch(
    "http://localhost:3000/api/booked-course",{
        headers: new Headers(await headers())
    }
  );
  const data = await response.json();
  return data;
};

const BookedCourses = async () => {
  const bookingData = await fetchBookedCoursesFromDB();
  return <ManageBookingTable bookingData={bookingData} />;
};

export default BookedCourses;
