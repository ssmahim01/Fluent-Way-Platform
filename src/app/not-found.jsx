import { CornerDownLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="lg:pt-28 pt-20 lg:pb-4 pb-12">
            <figure className="flex justify-center items-center">
                <Image
                    src="/assets/error.jpg"
                    alt="Image of error"
                    width={450}
                    height={250}
                    className="w-[450px] h-80"
                />
            </figure>

           <div className="space-y-2 mt-4 flex flex-col justify-center items-center">
           <h2 className="md:text-4xl text-3xl text-neutral-800 dark:text-neutral-300 font-extrabold">Not Found Page: 404</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 font-semibold">Could not find requested resource</p>

            <Link href="/"><button className="mt-3 py-2 rounded-full px-10 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-800 hover:border-none hover:text-white/90 shadow-sm font-bold flex gap-2 items-center"><CornerDownLeft className="text-2xl" /> <span className="text-lg">Back to Home</span> </button></Link>
           </div>
        </div>
    )
}

export default NotFound;