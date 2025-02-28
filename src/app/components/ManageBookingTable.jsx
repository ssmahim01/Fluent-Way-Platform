"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageBookingTable = ({ bookingData }) => {
  const totalFee = bookingData.reduce((prev, item) => prev + parseInt(item?.coursePrice), 0);

  return (
    <div className="pt-20 pb-10">
      <h1 className="text-center font-bold text-3xl mb-3">
        My Booking Courses
      </h1>
      <div className="w-11/12 mx-auto overflow-x-auto">
        <Table>
          <TableCaption>A list of your recent booked of courses.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white/90">Image</TableHead>
              <TableHead className="text-white/90">Title</TableHead>
              <TableHead className="text-white/90">Fee</TableHead>
              <TableHead className="text-white/90">Duration</TableHead>
              <TableHead className="text-white/90">Number</TableHead>
              <TableHead className="text-white/90">Edit</TableHead>
              <TableHead className="text-white/90">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookingData.map((booking) => (
              <TableRow className="hover:bg-neutral-200" key={booking?._id}>
                <TableCell>
                  <img 
                  src={booking?.courseImage}
                  alt={booking?.courseTitle}
                  className="w-20 h-16 rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  {booking?.courseTitle}
                </TableCell>
                <TableCell>${booking?.coursePrice}</TableCell>
                <TableCell>{booking?.courseDuration}</TableCell>
                <TableCell>{booking?.number}</TableCell>
                <TableCell>
                  <Link href={`/update-booking/${booking?._id}`}>
                    <button className="py-2 px-5 bg-neutral-800 text-white flex gap-2 items-center">
                      <FaEdit className="text-white/90 text-lg" />
                      <span className="md:block hidden">Edit</span>
                    </button>
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  <button
                    className="py-2 px-5 bg-rose-500 text-white flex gap-2 items-center"
                  >
                    <FaTrashAlt />
                    <span className="md:block hidden">Delete</span>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total Price:</TableCell>
              <TableCell>${totalFee}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default ManageBookingTable;
