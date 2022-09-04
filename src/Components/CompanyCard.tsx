import Image from "next/image";
import companyLogo from '../public/lilycute.png'
import location from '../public/location.svg'
import category from '../public/category.svg'


export function CompanyCard() {
  return (
    <div className="col-span-2 row-span-2 row-start-1 ">
        <div className="pt-4 pb-12 px-8 border flex flex-col items-center  gap-4 ">
        
        <div className="w-[80%] mb-12 flex justify-center">
            <Image src={companyLogo} alt="logo"  ></Image>
        </div>
        <h1 className="text-2xl font-black text-red-400">Lily&apos;Cute</h1>
        <p className="text-companytext">Every day, we use the power of beauty to bring to life the possibilities that lie within each of us — inspiring every guest and enabling each associate to build a fulfilling career.</p>
        <span className="text-red-400 font-semibold mb-16">Read More</span>
        <div className="flex items-start gap-4 self-start">
            <div className="pt-1">
            <Image src={location} alt="location"  ></Image>
            </div>
            <div>
                <span className="font-semibold">Location</span>
                <h2 className="text-locationgrey text-xl">London, United Kingdom</h2>
            </div>
        </div>
        <div className="flex items-start gap-4 self-start">
            <div className="pt-1">
            <Image src={category} alt="category"  ></Image>
            </div>
            <div>
                <span className="font-semibold">Product Category</span>
                <div className="flex gap-2  mt-2">
                    <span className="bg-red-300 cursor-pointer text-white px-4 py-1 rounded-md ">Beauty</span>
                    <span className="bg-red-300 cursor-pointer text-white px-4 py-1 rounded-md">Nails</span>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}