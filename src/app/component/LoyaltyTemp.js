import React from "react";
import Image from "next/image";
import logo from "/public/logo.png";
import loyaltyTemp1 from "/public/LoyaltyTemp1.svg";
import loyaltyTemp2 from "/public/LoyaltyTemp2.svg";

function LoyaltyTemp() {
  return (
    <>
      <section>
        <div className="container p-5">
          <div className="border md:bg-[url('/LoyaltyTempImg.png')] bg-no-repeat bg-right-bottom sm:bg-none">
            <div className="flex col-2">
              <div className="w-[30%] md:w-1/2">
                <Image
                  src={loyaltyTemp1}
                  width={190}
                  height={30}
                  className=""
                ></Image>
              </div>
              <div className="w-1/2">
                <Image
                  src={logo}
                  width={130}
                  height={30}
                  className="my-5"
                ></Image>
              </div>
            </div>
            <div className="px-12 md:w-[60%]">
              <h1 className="text-[#3dbb7d] text-2xl font-semibold">
                Congratulations! You've successfully claimed your reward
              </h1>
              <p className="text-sm md:text-base mt-2">
                Thank you for joining Soul family. Your [Points/Discount/Free
                Shipping] will be applied to your next order. Start shopping now
                and experience the best of Soul!
              </p>
              <div className="grid my-5">
                <label className="text-base font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border rounded-md p-2"
                />
                <button class="mt-3 font-medium text-white bg-[#05f] border-1 border-[#05f] py-2 px-4 w-[130px] hover:border-1 hover:border-[#05f] hover:shadow-[0_8px_20px_-6px_rgba(0,85,255,.6)] rounded">
                  Submit
                </button>
              </div>
            </div>
            <div className="flex col-2">
              <div className="w-[50%] md:w-[40%]">
                <Image src={loyaltyTemp2} width={390} className=""></Image>
              </div>
              <div className="w-[50%] flex items-center">
                  <p className="text-xs md:text-base font-medium">Thank you for joining Soul family.</p>
                </div>
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoyaltyTemp;
