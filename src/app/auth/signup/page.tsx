"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Select from "@/components/form/Select";
import Label from "@/components/form/Label";
import {
  FaEye,
  FaEyeSlash,
  FaAngleDown,
  FaRegCopyright,
} from "react-icons/fa6";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

// export const metadata: Metadata = {
//   title: "BriskMD",
//   description: "BriskMD",
//   // other metadata
// };

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const shotHealthURL = "https://www.shothealth.com/";
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const options = [
    { value: "Registered Nurse", label: "Registered Nurse" },
    { value: "Nurse Practitioner", label: "Nurse Practitioner" },
    {
      value: " Licensed Practical Nurse(LPN)",
      label: " Licensed Practical Nurse(LPN)",
    },
  ];

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto overflow-x-auto">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto p-8">
        <div>
          <div className="mb-5 sm:mb-8 text-center">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Registration
            </h1>
          </div>
          <div>
            <form>
              <div className="space-y-5">
                {/* <!-- Select Nurse Type --> */}
                {type === "Nurse" && (
                  <div>
                    <Label>Nurse Type</Label>
                    <div className="relative">
                      <Select
                        options={options}
                        placeholder="Select Nurse Type"
                        onChange={handleSelectChange}
                        className="dark:bg-dark-900"
                      />
                      <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                        <FaAngleDown />
                      </span>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* <!-- First Name --> */}
                  <div className="sm:col-span-1">
                    <Label>
                      First Name<span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter your first name"
                    />
                  </div>
                  {/* <!-- Last Name --> */}
                  <div className="sm:col-span-1">
                    <Label>
                      Last Name<span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>{" "}
                {/* <!-- Email --> */}
                <div>
                  <Label>
                    Email<span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                {/* <!-- Phone Number --> */}
                <div>
                  <Label>
                    Phone Number<span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="number"
                    id="phnNo"
                    name="phnNo"
                    placeholder="Enter your phone number"
                  />
                </div>
                {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2"> */}{" "}
                {/* <!-- select State --> */}
                <div>
                  <Label>
                    Select State or Region
                    <span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type=""
                    id="state"
                    name="state"
                    placeholder="Enter your state or region"
                  />
                </div>
                {/* <!-- City --> */}
                <div>
                  <Label>
                    City<span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter your city"
                  />
                </div>
                {/* </div> */}
                {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2"> */}
                {/* <!-- Zipcode --> */}
                <div>
                  <Label>
                    Zipcode<span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="number"
                    id="zipcode"
                    name="zipcode"
                    placeholder="Enter your zipcode"
                  />
                </div>
                {/* </div> */}
                {/* <!-- Password --> */}
                <div>
                  <Label>
                    Password<span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <FaEye className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <FaEyeSlash className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>
                  </div>
                </div>
                {/* <!--Confirm Password --> */}
                <div>
                  <Label>
                    Confirm Password<span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="Confirm password"
                      type={showPassword ? "text" : "password"}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <FaEye className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <FaEyeSlash className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>
                  </div>
                </div>
                {/* <!-- Checkbox --> */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    className="w-5 h-5"
                    checked={isChecked}
                    onChange={setIsChecked}
                  />
                  <p className="inline-block font-normal text-gray-500 dark:text-gray-400">
                    I agree to BriskMD{" "}
                    <span className="text-gray-800 dark:text-white/90">
                      <a href={shotHealthURL + "/terms-conditions/"}>
                        Terms and Conditions,
                      </a>
                    </span>{" "}
                    and our{" "}
                    <span className="text-gray-800 dark:text-white">
                      <a href={shotHealthURL + "/privacy-policy/"}>
                        Privacy Policy{" "}
                      </a>
                    </span>
                    and{" "}
                    <span className="text-gray-800 dark:text-white/90">
                      <a href={shotHealthURL + "/hippa-policy/"}>
                        HIPPA Policy
                      </a>
                    </span>{" "}
                  </p>
                </div>
                {/* <!-- Button --> */}
                <div>
                  <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-primary-500 shadow-theme-xs hover:bg-brand-600">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-5">
              <p className="text-sm font-normal text-center justify-center text-gray-700 dark:text-gray-400 sm:text-start">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign In
                </Link>
              </p>
            </div>
            <div className="relative py-3 sm:py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
            </div>

            <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto text-center">
              <div className="mb-3 sm:mb-1">
                <h1 className="text-xl text-gray-500 dark:text-gray-400">
                  Having trouble?
                </h1>
                <p className="text-base text-gray-500 dark:text-gray-400 p-2">
                  Call{" "}
                  <a className="text-link" href="tel:(813) 755-6652">
                    (813) 755-6652
                  </a>{" "}
                  or Email{" "}
                  <a
                    className="text-link"
                    href="mailto:Support@RxAVE-Health.com"
                  >
                    Support@RxAVE-Health.com
                  </a>
                </p>
              </div>
            </div>
            <div className="relative py-3 sm:py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto text-center">
              <div className="mb-5 sm:mb-8">
                <p>
                  <FaRegCopyright /> 2025 - BriskMD
                  {/* <b>Version </b> 1.0.0.0 [20250507] */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
