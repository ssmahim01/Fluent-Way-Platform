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
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageBookingTable = ({ bookingData }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const totalFee = bookingData.reduce(
    (prev, item) => prev + parseInt(item?.coursePrice),
    0
  );

  const handleDeleteBooking = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        const response = await fetch(
          `http://localhost:3000/api/booked-course/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok && session?.user?.email) {
          router.refresh();
          Swal.fire({
            title: "Successful!",
            text: "Your booked course has been deleted",
            icon: "success",
            timer: 3000,
            showConfirmButton: false,
          });
        }
      });
    } catch (error) {
      // console.log(error);

      Swal.fire({
        title: "Failed!",
        text: `${error.message}` || "Something went wrong!",
        icon: "error",
        timer: 3500,
        showConfirmButton: false,
      });
    }
  };

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
                    onClick={() => handleDeleteBooking(booking?._id)}
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
