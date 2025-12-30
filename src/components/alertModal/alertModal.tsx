"use client";
import React from "react";
import { Modal } from "@/components/ui/modal";
import Button from "../ui/button/Button";
import {
  FaRegCircleXmark,
  FaRegCircleCheck,
  FaCircleExclamation,
} from "react-icons/fa6";
import DangerAlert from "./modal/dangerAlert";
import InfoAlert from "./modal/infoAlert";
import WarningAlert from "./modal/warningAlert";
import SuccessAlert from "./modal/successAlert";

export default function AlertModal({
  type,
  title,
  desc,
  isOpen,
  openModal,
  closeModal,
}) {
  // if (type === "danger") {
  //     return <DangerAlert />;
  // } else if (type === "info") {
  //     return <InfoAlert />;
  // } else if (type === "warning") {
  //     return <WarningAlert />;
  // } else if (type === "success") {
  //     return <SuccessAlert />;
  // } else {
  //     return null;
  // }
  console.log(type);
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      className="max-w-[600px] p-5 lg:p-10"
    >
      <div className="text-center">
        <div className="relative flex items-center justify-center z-1 mb-7">
          <svg
            className={
              type === "success"
                ? "fill-success-50 dark:fill-success-500/15"
                : type === "info"
                ? "fill-blue-light-50 dark:fill-blue-light-500/15"
                : type === "warning"
                ? "fill-warning-50 dark:fill-warning-500/15"
                : type === "danger"
                ? "fill-error-600 dark:fill-error-500"
                : ""
            }
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.364 6.85053C38.6205 -2.28351 51.3795 -2.28351 55.636 6.85053C58.0129 11.951 63.5594 14.6722 68.9556 13.3853C78.6192 11.0807 86.5743 21.2433 82.2185 30.3287C79.7862 35.402 81.1561 41.5165 85.5082 45.0122C93.3019 51.2725 90.4628 63.9451 80.7747 66.1403C75.3648 67.3661 71.5265 72.2695 71.5572 77.9156C71.6123 88.0265 60.1169 93.6664 52.3918 87.3184C48.0781 83.7737 41.9219 83.7737 37.6082 87.3184C29.8831 93.6664 18.3877 88.0266 18.4428 77.9156C18.4735 72.2695 14.6352 67.3661 9.22531 66.1403C-0.462787 63.9451 -3.30193 51.2725 4.49185 45.0122C8.84391 41.5165 10.2138 35.402 7.78151 30.3287C3.42572 21.2433 11.3808 11.0807 21.0444 13.3853C26.4406 14.6722 31.9871 11.951 34.364 6.85053Z"
              fill=""
              fillOpacity=""
            />
          </svg>

          <span className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            {type === "success" ? (
              <FaRegCircleCheck className="fill-success-600 dark:fill-success-500 text-2xl" />
            ) : type === "info" ? (
              <FaCircleExclamation className="fill-blue-light-500 dark:fill-blue-light-500 text-2xl" />
            ) : type === "warning" ? (
              <FaCircleExclamation className="fill-warning-600 dark:fill-orange-400 text-2xl" />
            ) : type === "danger" ? (
              <FaRegCircleXmark className="fill-error-600 dark:fill-error-500 text-2xl" />
            ) : (
              ""
            )}
          </span>
        </div>

        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
          {type === "success"
            ? "Success"
            : type === "info"
            ? "Info"
            : type === "warning"
            ? "Warning"
            : type === "danger"
            ? "Error"
            : ""}{" "}
          Alert!
        </h4>
        <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
          {desc }
        </p>

        <div className="flex items-center justify-center w-full gap-3 mt-7">
          <Button
          onClick={closeModal}
            className="flex justify-center w-full px-4 py-3 text-sm font-medium text-white rounded-lg bg-warning-500 shadow-theme-xs hover:bg-warning-600 sm:w-auto"
          >
            Okay, Got It
          </Button>
        </div>
      </div>
    </Modal>
  );
}
