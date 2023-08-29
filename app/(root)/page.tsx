"use client"
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";


const SetUpPage = () => {
  return (
    <div className="p-4">
      <Modal title="Test" description="Test Desc" isOpen onClose={() => {}}>
        childern
      </Modal>
    </div>
  );
}

export default SetUpPage
