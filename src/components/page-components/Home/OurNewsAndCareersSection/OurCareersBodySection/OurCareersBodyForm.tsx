"use client";

import { FormEvent } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const OurCareersBodyForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    if (!name || !email) {
      toast.error("Please enter your name and email address.");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // TODO: wire to API / email service when ready

    toast.success(
      "Thank you! We’ve received your interest in joining the Half Byte team.",
    );
    form.reset();
  };

  return (
    <form
      className="flex flex-col gap-9 lg:gap-9.5"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex flex-col gap-2.5 lg:gap-3.75">
        <Input
          name="name"
          id="careers-name"
          autoComplete="name"
          required
          placeholder="Enter your name"
          type="text"
          inputClassName="h-13.75! lg:h-15! text-base! lg:text-lg! px-4.5! lg:px-7.25! w-full"
          className="w-full"
        />
        <Input
          name="phone"
          id="careers-phone"
          autoComplete="tel"
          placeholder="Enter your phone number"
          type="tel"
          inputClassName="h-13.75! lg:h-15! text-base! lg:text-lg! px-4.5! lg:px-7.25! w-full"
          className="w-full"
        />
        <Input
          name="email"
          id="careers-email"
          autoComplete="email"
          required
          placeholder="Enter your email address"
          type="email"
          inputClassName="h-13.75! lg:h-15! text-base! lg:text-lg! px-4.5! lg:px-7.25! w-full"
          className="w-full"
        />
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          variant="default"
          className="rounded-[88px] bg-primary text-white h-11 lg:h-13 text-base! sm:text-lg! lg:text-xl! font-normal! py-0.5! px-16.25"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default OurCareersBodyForm;
