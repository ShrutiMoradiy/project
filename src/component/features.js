import Image from "next/image";
import Link from "next/link";
import check from "/public/check.svg"
import arrowright from "/public/arrow-right.svg"

export default function Features() {
  return (
    <>
      <section class="position-relative pb-16 pt-12">
        <div class="container">
          <div class="row justify-center">
            <div class="text-center col">
              <h3 class="text-[#343a40] text-[1.3125rem] font-medium mb-[3rem]">Many more powerful features</h3>
            </div>
          </div>
          <div class="row flex">
            <div class="col-lg-3 col-md-6 p-8">
              <h6 class="font-medium text-base flex mb-4">
              <Image src={check} width={24} height={24}></Image>  
                <span className="p-2">Hire and Retain Top Talent</span>
              </h6>
              <h6 class="font-medium text-base flex mb-4">
              <Image src={check} width={24} height={24}></Image>  
                <span className="p-2">Team Management</span>
              </h6>
            </div>
            <div class="col-lg-3 col-md-6 p-8">
              <h6 class="font-medium text-base flex mb-4">
              <Image src={check} width={24} height={24}></Image>  
                <span className="p-2">Stay Compliant</span>
              </h6>
              <h6 class="font-medium text-base flex mb-4">
              <Image src={check} width={24} height={24}></Image>  
                <span className="p-2">Improve Productivity</span>
              </h6>
              <h6 class="font-medium text-base flex mb-4">
              <Image src={check} width={24} height={24}></Image>  
                <span className="p-2">Improve Experience</span>
              </h6>
            </div>
            <div class="col-lg-3 col-md-6 p-8">
              <h6 class="font-medium text-base flex mb-4">
              <Image src={check} width={24} height={24}></Image>  
                <span className="p-2">Self-service Time Tracking</span>
              </h6>
              <h6 class="font-medium text-base flex mb-4">
              <Image src={check} width={24} height={24}></Image>  
                <span className="p-2">Performance Management</span>
              </h6>
              <h6 class="font-medium text-base flex mb-4">
              <Image src={check} width={24} height={24}></Image>  
                <span className="p-2">Expert HR</span>
              </h6>
            </div>
            <div class="col-lg-3 col-md-6 p-8">
              <h6 class="font-medium text-base flex mb-4">
              <Image src={check} width={24} height={24}></Image>  
                <span className="p-2">New Hire Checklist</span>
              </h6>
              <h6 class="font-medium text-base flex mb-4">
              <Image src={check} width={24} height={24}></Image>  
                <span className="p-2">Tax Calculator</span>
              </h6>
            </div>
          </div>
          <div class="mt-5 row flex justify-center">
            <div className="bg-[#0055ff] w-[160px] h-[42px] col p-2 text-white rounded-md m p-8b-2" >
              <Link href="/" className="flex items-center  text-[.9375rem] font-medium justify-between">
                <span>Sign Up Now</span>
                <Image src={arrowright} width={24} height={24}></Image>  
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
