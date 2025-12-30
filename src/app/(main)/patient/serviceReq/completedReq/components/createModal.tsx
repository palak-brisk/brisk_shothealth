"use client";
import React, { useState } from "react";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/ui/modal";
import { FaSquarePlus } from "react-icons/fa6";
import UserDetailsTab from "./userDetailsTab";
import UserRolesTab from "./userRolesTab";
import Tabs from "@/components/ui/tabs/Tabs";
import Button from "@/components/ui/button/Button";

export default function NewUserCreate() {
  const { isOpen, openModal, closeModal } = useModal();

  const tabs = [
    {
      label: "User details",
      content: <UserDetailsTab />,
    },
    {
      label: "User roles",
      content: <UserRolesTab />,
    },
  ];

  return (
    <>
      <Button
        className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md"
        onClick={openModal}
      >
        <FaSquarePlus /> Create
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="max-w-2xl mx-auto mt-2 bg-white rounded-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Create new user</h2>
          </div>

          <div className="border-gray-200 mb-4">
            <Tabs tabs={tabs} defaultIndex={0} />
          </div>
        </div>{" "}
      </Modal>
    </>
  );
}
