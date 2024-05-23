import React from "react";
import Header from "../../Header";
import Footer from "../Footer";
import Image from "next/image";

function page() {
  return (
    <>
      <Header />
      <section className="bg-[#001632] flex justify-center pt-[6rem] pb-[3rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="flex flex-col items-center mb-10 lg:w-[70%]">
          <h1 className="text-white text-2xl md:text-[35px] lg:text-[45px] font-bold leading-normal md:leading-[40px] lg:leading-[60px] text-center">
            We are a team of tech & marketing enthusiast
          </h1>
          <p className="text-white text-xs md:text-[16px] lg:text-xl leading-normal md:leading-[25px] font-normal my-3 text-center">
            At TechMonk, we understand the demands of today's fast-paced digital
            world, where customers crave personalized experiences tailored to
            their unique needs and preferences. Gone are the days of generic
            interactions and one-size-fits-all marketing.
          </p>
          <button className="bg-[#019ED1] text-white text-sm md:text-[16px] lg:text-[18px] leading-[21.6px] font-medium w-[150px] h-[45px] md:h-[55px] md:w-[200px] rounded-md mt-7">
            Schedule a Demo
          </button>
        </div>
      </section>

      <section className="flex justify-center pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-10">
          <div className="flex flex-col lg:w-[50%]">
            <span className="text-[#019ED1] text-[16px] md:text-[18px] lg:text-[22px] font-normal leading-[45px] md:leading-[66px]">
              Our Belief
            </span>
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[45px] font-bold leading-normal md:leading-[40px] lg:leading-[60px]">
              Dummy text of the printing and typesetting industry.
            </h1>
            <p className="text-[#787878] text-xs md:text-[16px] lg:text-xl leading-normal md:leading-[25px] font-normal mt-3 mb-7">
              At TechMonk, we understand the demands of today's fast-paced
              digital world, where customers crave personalized experiences
              tailored to their unique needs and preferences. Gone are the days
              of generic interactions and one-size-fits-all marketing.
            </p>
            <div className="flex gap-3 mb-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="49"
                viewBox="0 0 56 49"
                fill="none"
              >
                <path
                  d="M30.9436 19.8875L30.9436 19.8875C29.6527 19.6938 28.7068 20.2799 28.0366 20.6953L28.0302 20.6992L28.0302 20.6992C27.8817 20.7913 27.7194 20.8916 27.578 20.9649C27.5072 21.0016 27.4447 21.0299 27.3939 21.0469C27.3686 21.0554 27.3482 21.0604 27.3326 21.0626C27.3173 21.0648 27.3109 21.0637 27.3104 21.0637C26.6143 20.8831 26.1124 20.61 25.7565 20.2663C25.401 19.923 25.1855 19.5039 25.0705 19.0215C24.8388 18.0501 25.0161 16.8325 25.2797 15.4911L25.2797 15.4911L25.2812 15.4833C25.3706 15.0284 25.4458 14.6455 25.4765 14.3101C26.3877 14.0594 27.3467 13.9254 28.3366 13.9254C33.7711 13.9253 38.2802 17.9644 39.0193 23.1983C38.3904 23.362 37.5514 23.5258 36.7343 23.5186C35.8772 23.511 35.064 23.3157 34.5339 22.7585C34.2622 22.4725 34.0284 22.1754 33.7994 21.8841L33.7208 21.9459L33.7994 21.8841L33.794 21.8773C33.1525 21.0617 32.4011 20.1063 30.9436 19.8875ZM19.6795 18.2823C20.5515 17.1119 21.6548 16.1235 22.921 15.3855C22.7036 16.5169 22.4683 17.9809 22.7553 19.3923L22.7553 19.3923C23.1637 21.3994 24.5434 22.759 26.7256 23.3245C27.7843 23.5988 28.614 23.0847 29.2502 22.6905L29.2603 22.6843L29.2603 22.6842C29.8404 22.3246 30.183 22.1345 30.597 22.197L30.5971 22.197C31.1082 22.2736 31.3688 22.5714 31.9636 23.3278L31.9636 23.3278L31.966 23.3309C32.2122 23.6438 32.494 24.002 32.8412 24.3675L32.8413 24.3676C33.9198 25.5012 35.3994 25.8469 36.8034 25.8469C37.6168 25.8468 38.4089 25.7309 39.0907 25.5821C38.9911 26.8276 38.6791 28.0141 38.1909 29.1052C37.5003 28.584 36.6884 27.9862 36.2471 27.7149L36.1948 27.8001L36.2471 27.7149C34.6949 26.7606 33.2151 26.4807 31.8561 26.9056C30.7938 27.2376 29.9727 27.9521 29.3331 28.7741C28.6936 29.596 28.2315 30.5307 27.8884 31.3122L27.9799 31.3524L27.8884 31.3122C27.1384 33.0207 25.7541 33.9664 24.3437 34.7371C23.6166 34.4465 22.9283 34.0788 22.2887 33.6443L22.3555 33.6063L22.3555 33.6063L22.361 33.6032C22.9901 33.2462 23.6744 32.8578 24.1979 32.3564C24.7262 31.8504 25.0973 31.2232 25.0867 30.3909C25.0759 29.5431 24.5286 28.8749 23.9798 28.205L23.9676 28.1901C23.49 27.6069 22.9669 26.9661 22.7612 26.2305C22.5419 25.4463 22.4236 24.5337 22.4107 23.5172C22.3843 21.4143 21.3629 19.4967 19.6795 18.2823ZM22.1613 29.67L22.1613 29.67C22.2781 29.8125 22.4139 29.9784 22.5285 30.1296C22.5857 30.2052 22.6368 30.2762 22.6771 30.3379C22.7087 30.3862 22.7315 30.4257 22.7458 30.4557C22.7304 30.5035 22.6855 30.5709 22.5989 30.6565C22.5017 30.7527 22.3671 30.8573 22.211 30.965C21.8991 31.1802 21.5148 31.3984 21.203 31.5754L21.203 31.5754L21.1983 31.5781C20.9405 31.7244 20.6768 31.8741 20.4173 32.0334C18.6369 30.1087 17.5478 27.5362 17.5478 24.7141C17.5478 23.1461 17.884 21.6553 18.4882 20.3098C19.4705 21.0981 20.0598 22.2704 20.0759 23.5467C20.0913 24.7621 20.2378 25.8769 20.5125 26.8592C20.851 28.0704 21.5813 28.962 22.1576 29.6655L22.1613 29.67ZM28.3366 11.5899C21.0999 11.5899 15.2125 17.4774 15.2125 24.7141C15.2125 31.9508 21.0999 37.8382 28.3366 37.8382C35.5734 37.8382 41.4608 31.9509 41.4608 24.7141C41.4608 17.4773 35.5734 11.5899 28.3366 11.5899ZM30.0268 32.2509L29.9353 32.2107L30.0268 32.2509C30.2841 31.6648 30.6173 30.9765 31.0384 30.3877C31.4606 29.7973 31.9626 29.319 32.553 29.1344C33.2211 28.9257 34.0489 29.1048 35.0243 29.7043C35.4019 29.9366 36.2513 30.565 37.0021 31.1345C35.034 33.7837 31.8823 35.5029 28.3366 35.5029C28.057 35.5029 27.7799 35.4922 27.5056 35.4712C28.4299 34.732 29.3911 33.6988 30.0268 32.2509Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M1.11501 24.0397L1.115 24.0398C0.828338 24.4442 0.828328 24.9857 1.115 25.3901C1.24056 25.5673 4.19099 29.7002 8.99259 33.8907C11.8268 36.3642 14.7195 38.3395 17.5909 39.7609C21.226 41.5605 24.8401 42.4746 28.3322 42.4746C31.8243 42.4746 35.4384 41.5604 39.0735 39.7609C41.9448 38.3395 44.8376 36.3642 47.6718 33.8907C52.4732 29.7004 55.4236 25.5676 55.5493 25.3901C55.8362 24.9856 55.8362 24.4442 55.5496 24.0398C55.4243 23.8629 52.4738 19.7297 47.672 15.5391C44.8378 13.0656 41.945 11.0903 39.0737 9.66889C35.4386 7.86928 31.8245 6.95518 28.3324 6.95518C24.8403 6.95518 21.2262 7.86939 17.5911 9.66889C14.7197 11.0903 11.827 13.0656 8.9928 15.5391C4.19087 19.7297 1.24039 23.8629 1.11501 24.0397ZM46.1364 32.1312C41.9418 35.7918 35.4568 40.1393 28.3323 40.1393C21.2226 40.1393 14.7502 35.8087 10.5639 32.1624C7.07113 29.1202 4.55182 26.0409 3.52703 24.7146C4.54656 23.394 7.04688 20.3368 10.5282 17.2987C14.7227 13.638 21.2077 9.29051 28.3323 9.29051C35.4419 9.29051 41.9144 13.6211 46.1007 17.2674C49.5934 20.3097 52.1127 23.3887 53.1375 24.7152C52.1179 26.0358 49.6176 29.093 46.1364 32.1312Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M28.3333 4.87095C28.9782 4.87095 29.501 4.34807 29.501 3.70329V2.06815C29.501 1.42337 28.9782 0.900488 28.3333 0.900488C27.6884 0.900488 27.1656 1.42337 27.1656 2.06815V3.70339C27.1656 4.34819 27.6884 4.87095 28.3333 4.87095Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M12.4609 9.23564L12.4609 9.23566C12.6889 9.46354 12.9879 9.57765 13.2865 9.57765C13.5852 9.57765 13.8843 9.46355 14.1122 9.23564C14.5682 8.77966 14.5682 8.0403 14.1122 7.58423L14.1122 7.58422L12.9559 6.42794L12.9559 6.42793C12.4999 5.97207 11.7606 5.97208 11.3045 6.42792L11.3045 6.42794C10.8485 6.88392 10.8485 7.62327 11.3045 8.07935L11.3045 8.07936L12.4609 9.23564Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M45.3543 6.42793L45.3543 6.42795C45.8102 6.88402 45.8102 7.62338 45.3543 8.07936L44.198 9.23564C43.9701 9.46355 43.671 9.57765 43.3723 9.57765C43.0737 9.57765 42.7746 9.46368 42.5467 9.23563L45.3543 6.42793ZM45.3543 6.42793C44.8983 5.97207 44.1589 5.97207 43.703 6.42793L43.703 6.42794M45.3543 6.42793L43.703 6.42794M43.703 6.42794L42.5467 7.58422M43.703 6.42794L42.5467 7.58422M42.5467 7.58422C42.0907 8.0402 42.0907 8.77955 42.5467 9.23562L42.5467 7.58422Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M28.3333 44.5577C27.6884 44.5577 27.1656 45.0806 27.1656 45.7254V47.3605C27.1656 48.0053 27.6884 48.5282 28.3333 48.5282C28.9782 48.5282 29.501 48.0053 29.501 47.3605V45.7254C29.501 45.0806 28.9782 44.5577 28.3333 44.5577Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M44.1981 40.1945L44.1981 40.1945C43.7421 39.7387 43.0028 39.7387 42.5467 40.1945L42.5467 40.1945C42.0907 40.6505 42.0907 41.3899 42.5467 41.846L42.5467 41.846L43.703 43.0022L43.703 43.0023C43.931 43.2301 44.2299 43.3443 44.5286 43.3443C44.8273 43.3443 45.1264 43.2302 45.3543 43.0022C45.8102 42.5463 45.8102 41.8069 45.3543 41.3509C45.3543 41.3509 45.3543 41.3509 45.3543 41.3509L44.1981 40.1945Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M11.3045 43.0022L11.3045 43.0022C11.5325 43.2301 11.8315 43.3442 12.1301 43.3442C12.4288 43.3442 12.7279 43.2301 12.9558 43.0022L14.1121 41.8459C14.5681 41.39 14.568 40.6506 14.1121 40.1945L14.1121 40.1945C13.6561 39.7387 12.9167 39.7387 12.4608 40.1946L11.3045 41.3509C10.8485 41.8069 10.8485 42.5463 11.3045 43.0022Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
              </svg>
              <div>
                <h3 className="text-[#222222] text-[16px] md:text-[20px] lg:text-[26px] leading-normal md:leading-[25px] lg:leading-[30px] font-medium">
                  Vision
                </h3>
                <p className="text-[#787878] text-xs md:text-[16px] lg:text-[18px] leading-normal md:leading-[25px] font-normal">
                  We want to be the one of the preferred digital solutions
                  providers for every startups and visionary entrepreneurs
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
              >
                <path
                  d="M20.649 25.0513L20.649 25.0513L22.8603 28.0003L25.2925 25.5682C25.7169 25.1438 26.4066 25.1438 26.831 25.5682C27.2554 25.9926 27.2554 26.6824 26.831 27.1068L23.5111 30.4267C23.3064 30.6314 23.03 30.7445 22.7428 30.7445H22.7417L20.649 25.0513ZM20.649 25.0513C20.4403 24.7729 20.1058 24.6378 19.7778 24.6378C19.4499 24.6378 19.1158 24.7729 18.908 25.0514C18.908 25.0515 18.908 25.0515 18.908 25.0515L16.6968 28.0003L14.2647 25.5682C13.8403 25.1438 13.1505 25.1438 12.7261 25.5682C12.3017 25.9926 12.3017 26.6824 12.7261 27.1068L16.0457 30.4264C16.0458 30.4264 16.0458 30.4265 16.0459 30.4265C16.2674 30.6501 16.5646 30.7683 16.8932 30.7422C17.2061 30.7183 17.4954 30.5618 17.6848 30.3093C17.6848 30.3093 17.6848 30.3093 17.6848 30.3093L19.7786 27.5189L21.8723 30.3093C22.0613 30.5612 22.3485 30.7204 22.6644 30.7423L20.649 25.0513Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M32.4043 2.75983L32.4043 2.75981C32.7154 2.44873 32.8091 1.98086 32.6394 1.57381C32.4717 1.16677 32.0735 0.901465 31.6341 0.901465H19.7771C19.1765 0.901465 18.6891 1.38889 18.6891 1.98954V14.8345C18.6891 15.4352 19.1765 15.9226 19.7771 15.9226C20.3778 15.9226 20.8652 15.4352 20.8652 14.8345V10.9822H31.6341C32.0734 10.9822 32.4718 10.717 32.6375 10.3097C32.8071 9.90265 32.7134 9.43491 32.4023 9.12388L29.2203 5.94187L32.4043 2.75983ZM26.9135 6.71211L29.0074 8.80607H20.8652V3.07762H29.0076L26.9135 5.17355C26.9134 5.17356 26.9134 5.17357 26.9134 5.17358C26.4891 5.59799 26.4891 6.28772 26.9135 6.71211Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M1.03241 46.9187L1.03229 46.9189C0.849641 47.2559 0.856067 47.6649 1.05194 47.9957C1.24786 48.3266 1.60472 48.5289 1.98774 48.5289H37.5585C37.9415 48.5289 38.2984 48.3266 38.4943 47.9957C38.6901 47.6649 38.6966 47.2559 38.5139 46.9189L38.5138 46.9187L20.7284 14.3122C20.7284 14.3122 20.7284 14.3122 20.7284 14.3122C20.5341 13.9558 20.1482 13.7843 19.7731 13.7843C19.3981 13.7843 19.0121 13.9558 18.8178 14.3122C18.8178 14.3122 18.8178 14.3122 18.8178 14.3122L1.03241 46.9187ZM3.82011 46.3527L19.7731 17.1063L35.7241 46.3527H3.82011Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M36.635 30.0519L45.5998 46.3534H37.56C36.9593 46.3534 36.4719 46.8408 36.4719 47.4415C36.4719 48.0421 36.9593 48.5296 37.56 48.5296H47.4407C47.826 48.5296 48.1807 48.327 48.3784 47.9946C48.5767 47.6632 48.5806 47.2539 48.396 46.9172L48.3959 46.917L37.5271 27.1556L36.635 30.0519ZM36.635 30.0519L32.9527 37.6714L32.9527 37.6715C32.6916 38.2111 32.045 38.4396 31.4992 38.1765M36.635 30.0519L31.4992 38.1765M31.4992 38.1765C30.9573 37.9153 30.7309 37.2645 30.9941 36.7227M31.4992 38.1765L30.9941 36.7227M30.9941 36.7227C30.9941 36.7227 30.9942 36.7227 30.9942 36.7226L35.5946 27.2056L35.5948 27.2053C35.773 26.8401 36.1384 26.6028 36.5455 26.5919L36.553 26.5917L36.553 26.592C36.9507 26.611 37.3287 26.7942 37.5271 27.1555L30.9941 36.7227Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
              </svg>
              <div>
                <h3 className="text-[#222222] text-[16px] md:text-[20px] lg:text-[26px] leading-normal md:leading-[25px] lg:leading-[30px] font-medium">
                  Mission
                </h3>
                <p className="text-[#787878] text-xs md:text-[16px] lg:text-[18px] leading-normal md:leading-[25px] font-normal">
                  Designing digital solutions which benefits our customers,
                  consumers and our employees.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
              >
                <path
                  d="M25.6587 5.91736C26.2459 5.91736 26.7221 5.44129 26.7221 4.85399V1.96386C26.7221 1.37656 26.2459 0.900488 25.6587 0.900488C25.0715 0.900488 24.5953 1.37656 24.5953 1.96386V4.85399C24.5953 5.44129 25.0715 5.91736 25.6587 5.91736Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M45.8931 26.7262H49.3612C49.9484 26.7262 50.4246 26.2501 50.4246 25.6628C50.4246 25.0755 49.9484 24.5995 49.3612 24.5995H45.8931C45.3059 24.5995 44.8297 25.0755 44.8297 25.6628C44.8297 26.2501 45.3059 26.7262 45.8931 26.7262Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M1.96337 26.7262H5.43152C6.01872 26.7262 6.4949 26.2501 6.4949 25.6628C6.4949 25.0755 6.01872 24.5995 5.43152 24.5995H1.96337C1.37618 24.5995 0.9 25.0755 0.9 25.6628C0.9 26.2501 1.37618 26.7262 1.96337 26.7262Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M40.7153 11.5316L40.7154 11.5316L42.7596 9.48733C43.1749 9.07208 43.1749 8.39876 42.7596 7.98342L42.7596 7.9834C42.3443 7.56816 41.6712 7.56817 41.2557 7.98339L41.2557 7.98341L39.2114 10.0277C38.7962 10.4429 38.7962 11.1163 39.2114 11.5316L39.2114 11.5316C39.6268 11.9469 40.2999 11.9469 40.7153 11.5316Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M10.6073 11.5316L10.6073 11.5316C11.0226 11.9469 11.6957 11.9469 12.1112 11.5316L12.1112 11.5316C12.5265 11.1164 12.5264 10.443 12.1112 10.0277L12.1112 10.0277L10.0669 7.98341L10.0669 7.9834C9.65156 7.56816 8.97845 7.56817 8.56302 7.98339L8.563 7.98341C8.14774 8.39867 8.14776 9.07198 8.56299 9.48732L8.563 9.48733L10.6073 11.5316Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M25.6587 50.4257C26.246 50.4257 26.7221 49.9496 26.7221 49.3623C26.7221 48.775 26.246 48.2989 25.6587 48.2989C25.0714 48.2989 24.5953 48.775 24.5953 49.3623C24.5953 49.9496 25.0714 50.4257 25.6587 50.4257Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
                <path
                  d="M31.8262 16.414C31.8262 15.4068 31.0066 14.5873 29.9994 14.5873C28.9922 14.5873 28.1727 15.4068 28.1727 16.414V21.3272C28.1727 22.3344 28.9922 23.154 29.9994 23.154C30.132 23.154 30.2626 23.155 30.3901 23.156C30.3902 23.156 30.3902 23.156 30.3902 23.156M31.8262 16.414L31.8706 23.1228C31.7261 23.2661 30.8934 23.2598 30.3931 23.256L30.3894 23.256L30.3902 23.156M31.8262 16.414V22.7723C31.8262 22.9024 31.813 22.9812 31.8018 23.0247C31.7978 23.0402 31.794 23.0511 31.7913 23.0581M31.8262 16.414L31.7913 23.0581M30.3902 23.156L30.3924 23.156C30.6427 23.1579 30.9725 23.1604 31.2577 23.1448C31.4009 23.137 31.5298 23.1248 31.6303 23.1064C31.6806 23.0971 31.7213 23.0868 31.752 23.0758C31.7715 23.0688 31.7839 23.0626 31.7913 23.0581M30.3902 23.156L31.7913 23.0581M21.3291 48.2981H19.5023V40.113C19.5023 39.7116 19.2745 39.3438 18.9166 39.163L18.9165 39.163L18.9164 39.1629L18.9161 39.1628L18.915 39.1622L18.9114 39.1603L18.8985 39.1536C18.8876 39.1478 18.8719 39.1394 18.8518 39.1284C18.8117 39.1065 18.754 39.0743 18.6813 39.0319C18.5358 38.947 18.3304 38.8212 18.0852 38.6551C17.5945 38.3227 16.9453 37.8293 16.298 37.179C15.0025 35.8777 13.7221 33.9558 13.7221 31.4427V24.2174C13.7221 23.2102 14.5416 22.3906 15.5489 22.3897H25.925C25.4416 24.4811 23.5641 26.0441 21.3291 26.0441H18.4389C17.8517 26.0441 17.3756 26.5202 17.3756 27.1075C17.3756 27.6948 17.8517 28.1709 18.4389 28.1709C22.6333 28.1709 26.0459 31.5834 26.0459 35.7779C26.0459 36.3652 26.5221 36.8412 27.1093 36.8412C27.6965 36.8412 28.1727 36.3652 28.1727 35.7779C28.1727 33.1771 30.2887 31.061 32.8895 31.061C33.4767 31.061 33.9529 30.5849 33.9529 29.9976C33.9529 29.4103 33.4767 28.9342 32.8895 28.9342C30.597 28.9342 28.5645 30.0674 27.3221 31.8023C26.57 30.1281 25.3591 28.7032 23.8496 27.69C25.4255 27.0634 26.7148 25.8671 27.4635 24.3573C28.1506 24.9329 29.0352 25.2769 29.9995 25.2769C30.1225 25.2769 30.247 25.2778 30.3701 25.2788L30.3756 25.2788C30.4967 25.2798 30.6164 25.2807 30.7312 25.2807C31.1514 25.2807 31.5652 25.2717 31.9524 25.205C32.3921 26.9084 33.9405 28.1709 35.7797 28.1709C36.4384 28.1709 37.0597 28.0081 37.6064 27.7218V31.4427C37.6064 33.9558 36.326 35.8777 35.0307 37.1789C34.3835 37.8292 33.7344 38.3224 33.244 38.6547C32.9989 38.8208 32.7936 38.9465 32.6484 39.0313C32.5757 39.0737 32.5181 39.1059 32.4781 39.1277C32.4581 39.1387 32.4424 39.147 32.4315 39.1528L32.4187 39.1595L32.4151 39.1614L32.4141 39.1619L32.414 39.162C32.4139 39.162 32.4139 39.162 32.4138 39.162C32.0537 39.3422 31.8262 39.7103 31.8262 40.113V48.2981H29.9994C29.4122 48.2981 28.936 48.7741 28.936 49.3614C28.936 49.9487 29.4122 50.4248 29.9994 50.4248H32.8895C33.4767 50.4248 33.9529 49.9487 33.9529 49.3614V40.7328C35.5276 39.7753 39.7332 36.7252 39.7332 31.4427V31.4314V31.42V31.4084V31.3968V31.385V31.3731V31.3611V31.349V31.3367V31.3243V31.3119V31.2993V31.2866V31.2737V31.2608V31.2478V31.2346V31.2213V31.2079V31.1944V31.1808V31.1671V31.1532V31.1393V31.1252V31.111V31.0968V31.0824V31.0679V31.0533V31.0385V31.0237V31.0088V30.9938V30.9786V30.9634V30.948V30.9326V30.917V30.9013V30.8856V30.8697V30.8537V30.8376V30.8214V30.8052V30.7888V30.7723V30.7557V30.739V30.7222V30.7054V30.6884V30.6713V30.6541V30.6368V30.6195V30.602V30.5844V30.5668V30.549V30.5312V30.5132V30.4952V30.4771V30.4588V30.4405V30.4221V30.4036V30.385V30.3663V30.3476V30.3287V30.3097V30.2907V30.2716V30.2523V30.233V30.2136V30.1941V30.1746V30.1549V30.1352V30.1153V30.0954V30.0754V30.0553V30.0352V30.0149V29.9946V29.9742V29.9537V29.9331V29.9124V29.8917V29.8709V29.85V29.829V29.8079V29.7868V29.7656V29.7443V29.7229V29.7014V29.6799V29.6583V29.6366V29.6149V29.593V29.5711V29.5491V29.5271V29.505V29.4828V29.4605V29.4381V29.4157V29.3932V29.3707V29.348V29.3253V29.3026V29.2797V29.2568V29.2338V29.2108V29.1877V29.1645V29.1413V29.118V29.0946V29.0711V29.0476V29.0241V29.0004V28.9767V28.953V28.9291V28.9052V28.8813V28.8573V28.8332V28.8091V28.7849V28.7606V28.7363V28.7119V28.6875V28.663V28.6385V28.6139V28.5892V28.5645V28.5397V28.5149V28.49V28.4651V28.4401V28.415V28.3899V28.3648V28.3395V28.3143V28.289V28.2636V28.2382V28.2127V28.1872V28.1616V28.136V28.1104V28.0846V28.0589V28.0331V28.0072V27.9813V27.9554V27.9294V27.9033V27.8772V27.8511V27.8249V27.7987V27.7724V27.7461V27.7198V27.6934V27.667V27.6405V27.614V27.5874V27.5608V27.5342V27.5075V27.4808V27.454V27.4273V27.4004V27.3736V27.3467V27.3197V27.2927V27.2657V27.2387V27.2116V27.1845V27.1573V27.1302V27.1029V27.0757V27.0484V27.0211V26.9938V26.9664V26.939V26.9115V26.8841V26.8566V26.8291V26.8015V26.7739V26.7463V26.7187V26.691V26.6633V26.6356V26.6079V26.5801V26.5523V26.5245V26.4967V26.4688V26.441V26.4131V26.3851V26.3572V26.3292V26.3012V26.2732V26.2452V26.2171V26.1891V26.161V26.1329V26.1047V26.0766V26.0484V26.0203V25.9921V25.9639V25.9356V25.9074V25.8792V25.8509V25.8226V25.7943V25.766V25.7377V25.7094V25.681V25.6527V25.6243V25.5959V25.5675V25.5392V25.5108V25.4823V25.4539V25.4255V25.3971V25.3686V25.3402V25.3117V25.2833V25.2548V25.2263V25.1978V25.1694V25.1409V25.1124V25.0839V25.0554V25.0269V24.9984V24.9699V24.9414V24.9129V24.8845V24.856V24.8275V24.799V24.7705V24.742V24.7135V24.685V24.6565V24.6281V24.5996V24.5711V24.5427V24.5142V24.4858V24.4573V24.4289V24.4005V24.372V24.3436V24.3152V24.2868V24.2584V24.2301V24.2017V24.1733V24.145V24.1167V24.0884V24.06V24.0318V24.0035V23.9752V23.9469V23.9187V23.8905V23.8623V23.8341V23.8059V23.7777V23.7496V23.7215V23.6934V23.6653V23.6372V23.6092V23.5811V23.5531V23.5251V23.4971V23.4692V23.4413V23.4134V23.3855V23.3576V23.3298V23.302V23.2742V23.2464V23.2187V23.1909V23.1633V23.1356V23.108V23.0804V23.0528V23.0252V22.9977V22.9702V22.9427V22.9153V22.8879V22.8605V22.8332V22.8058V22.7786V22.7513V22.7241V22.6969V22.6697V22.6426V22.6155V22.5885V22.5615V22.5345V22.5076V22.4806V22.4538V22.4269V22.4002V22.3734V22.3467V22.32V22.2934V22.2668V22.2402V22.2137V22.1872V22.1608V22.1344V22.108V22.0817V22.0554V22.0292V22.003V21.9769V21.9508V21.9247V21.8987V21.8728V21.8469V21.821V21.7952V21.7694V21.7437V21.718V21.6924V21.6668V21.6413V21.6159V21.5904V21.5651V21.5397V21.5145V21.4893V21.4641V21.439V21.4139V21.3889V21.364V21.3391V21.3143V21.2895V21.2648V21.2401V21.2155V21.1909V21.1664V21.142V21.1176V21.0933V21.069V21.0448V21.0207V20.9966V20.9726V20.9486V20.9247V20.9009V20.8771V20.8534V20.8298V20.8062V20.7827V20.7592V20.7358V20.7125V20.6893V20.6661V20.643V20.6199V20.5969V20.574V20.5512V20.5284V20.5057V20.4831V20.4605V20.438V20.4156V20.3932V20.3709V20.3487V20.3266V20.3045V20.2825V20.2606V20.2388V20.217V20.1953V20.1737V20.1522V20.1307V20.1093V20.088V20.0668V20.0456V20.0246V20.0036V19.9827V19.9618V19.9411V19.9204V19.8998V19.8793V19.8589V19.8385V19.8183V19.7981V19.778V19.758V19.7381V19.7182V19.6985V19.6788V19.6592V19.6397V19.6203V19.601V19.5818V19.5626V19.5436V19.5246V19.5057V19.487V19.4683V19.4497V19.4311V19.4127V19.3944V19.3762V19.358V19.34V19.322V19.3042C39.7332 17.1241 37.9597 15.3507 35.7797 15.3507C35.1029 15.3507 34.4656 15.5223 33.9081 15.8234C33.6221 13.9226 31.9788 12.4605 29.9994 12.4605C29.3227 12.4605 28.6853 12.6321 28.1279 12.9332C27.8418 11.0324 26.1985 9.57041 24.2192 9.57041C22.2398 9.57041 20.5965 11.0324 20.3105 12.9332C19.753 12.6321 19.1157 12.4605 18.4389 12.4605C16.2589 12.4605 14.4854 14.234 14.4854 16.414V20.4092C12.8204 20.8747 11.5953 22.4054 11.5953 24.2174V31.4427C11.5953 36.7252 15.8009 39.7753 17.3756 40.7328V49.3614C17.3756 49.9487 17.8517 50.4248 18.4389 50.4248H21.3291C21.9163 50.4248 22.3924 49.9487 22.3924 49.3614C22.3924 48.7741 21.9163 48.2981 21.3291 48.2981ZM35.7797 17.4774C36.7868 17.4774 37.6064 18.297 37.6064 19.3042V24.2174C37.6064 25.2245 36.7868 26.0441 35.7797 26.0441C34.7725 26.0441 33.9529 25.2245 33.9529 24.2174V19.3042C33.9529 18.297 34.7725 17.4774 35.7797 17.4774ZM22.3924 13.5239C22.3924 12.5167 23.212 11.6972 24.2192 11.6972C25.2264 11.6972 26.0459 12.5167 26.0459 13.5239V20.2639H22.3924V13.5239ZM18.4389 14.5873C19.4461 14.5873 20.2657 15.4068 20.2657 16.414V20.2639H16.6122V16.414C16.6122 15.4068 17.4318 14.5873 18.4389 14.5873Z"
                  fill="#019ED1"
                  stroke="#019ED1"
                  stroke-width="0.2"
                />
              </svg>
              <div>
                <h3 className="text-[#222222] text-[16px] md:text-[20px] lg:text-[26px] leading-normal md:leading-[25px] lg:leading-[30px] font-medium">
                  Goal
                </h3>
                <p className="text-[#787878] text-xs md:text-[16px] lg:text-[18px] leading-normal md:leading-[25px] font-normal">
                  To become one of the best IT companies in Ahmedabad to work.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Image
              src="/aboutImg.png"
              alt="aboutImg"
              width={518}
              height={667}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#e6f5fa] flex justify-center pt-[6rem] pb-[4rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="container">
          <div className="flex flex-col">
            <h1 className="text-[#222222] text-2xl md:text-[35px] lg:text-[45px] font-bold leading-normal md:leading-[40px] lg:leading-[60px] text-center">
              Meet our Founders
            </h1>
            <p className="text-[#787878] text-xs md:text-[16px] lg:text-xl leading-normal md:leading-[25px] font-normal mt-3 mb-7 text-center">
              Meet the passionate brains driving our journey, the imaginative
              founders who give life to our mission.
            </p>
            <div className="flex justify-center flex-wrap md:flex-nowrap gap-5 lg:gap-14 mt-10">
              <div className="w-full xl:w-[25%] lg:bg-[url('/founderbg.svg')] lg:bg-right-bottom lg:bg-no-repeat ">
                <Image
                  src="/foundersImg1.png"
                  alt="foundersImg"
                  width={280}
                  height={320}
                  className="rounded-lg"
                />
              </div>
              <div className="w-full xl:w-[70%] flex flex-col text-center md:text-left gap-2 lg:gap-4">
                <h1 className="text-[#019ED1] text-[16px] md:text-[24px] lg:text-[30px] font-medium leading-normal md:leading-[25px] lg:leading-[36px]">
                  Arun Menon
                </h1>
                <span className="text-[#222222] text-[14px] md:text-[17px] lg:text-[20px] font-normal leading-normal md:leading-[25px] lg:leading-[36px]">
                  Co-Founder, CEO
                </span>
                <p className="text-[#787878] text-xs md:text-[16px] lg:text-xl leading-normal md:leading-[24px] lg:leading-[30px] font-normal my-1 lg:mt-3 lg:mb-7">
                  Arun Menon is an IIT-B alumni with a passion for technology,
                  love for solving problems and taking on challenges which led
                  him to build multiple technology companies over the last two
                  decades. Arun has deep knowledge of varied technologies as
                  well as markets and has delivered many first to market
                  products and business models.
                </p>
                <p className="text-[#787878] text-xs md:text-[16px] lg:text-xl leading-normal md:leading-[24px] lg:leading-[30px] font-normal my-1 lg:mt-3 lg:mb-7">
                  In his last start up Arun sold mobile applications to over 5
                  million customers in India through a unique distribution
                  network spanning 800 cities and 15000 points of presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#d6eff7] flex justify-center pt-[6rem] pb-[6rem] px-[1rem] md:px-[3rem] lg:px-[3rem] 2xl:px-[5rem]">
        <div className="flex justify-center flex-wrap md:flex-nowrap gap-5 lg:gap-14">
          <div className="w-full xl:w-[70%] flex flex-col text-center md:text-left gap-2 lg:gap-4">
            <h1 className="text-[#019ED1] text-[16px] md:text-[24px] lg:text-[30px] font-medium leading-normal md:leading-[25px] lg:leading-[36px]">
              Kamal Soboo
            </h1>
            <span className="text-[#222222] text-[14px] md:text-[17px] lg:text-[20px] font-normal leading-normal md:leading-[25px] lg:leading-[36px]">
              Co-Founder, COO
            </span>
            <p className="text-[#787878] text-xs md:text-[16px] lg:text-xl leading-normal md:leading-[24px] lg:leading-[30px] font-normal my-1 lg:mt-3 lg:mb-7">
              Seasoned and highly committed professional with proven strategic
              thinking and leadership skills. IIT Bombay, 2003 alumni having a
              multi-faceted background spanning various roles, project planning,
              UX, dev-ops, development, testing automation and key client
              management.
            </p>
            <p className="text-[#787878] text-xs md:text-[16px] lg:text-xl leading-normal md:leading-[24px] lg:leading-[30px] font-normal my-1 lg:mt-3 lg:mb-7">
              Having strong foundation and understanding of technology, with
              hands on experience on numerous technologies along with proven
              track record of delivering key turn around projects. Domain
              expertise includes Fintech Solutions, eComm Lifecycle and
              MicroSite development.
            </p>
          </div>
          <div className="w-full xl:w-[25%] lg:bg-[url('/founderbg.svg')] lg:bg-left-bottom lg:bg-no-repeat">
            <Image
              src="/foundersImg2.png"
              alt="foundersImg"
              width={280}
              height={320}
              className="xl:ml-14 rounded-lg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
