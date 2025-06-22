import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProgressBar from "./progressBarComponent";
// Adjust the import path based on your setup

export default function PersonalInformation() {
  return (
    <div className="min-h-screen   p-4">
      <ProgressBar currentStep={1} totalSteps={7} />
      <div className="flex justify-center mt-12">
        <div className=" p-6  w-[1180px] h-[752px]   ">
          <h1 className="text-5xl text-gray-900 font-bold mb-6">
            Tell Us About Yourself
          </h1>
          <p className="text-gray-600 mb-6">
            Fill in your personal details so we can tailor your resume perfectly
            to your career goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <Input type="text" placeholder="Saifur" className="w-full py-5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <Input type="text" placeholder="Rahman" className="w-full py-5" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input
                type="text"
                placeholder="+880 1567808747"
                className="w-full py-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="ux.saifur.ug@gmail.com"
                className="w-full py-5"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country/Region
              </label>
              <Select>
                <SelectTrigger className="w-full py-5">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bd">Bangladesh</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <Input
                type="text"
                placeholder="Section-06, Mirpur, Dhaka."
                className="w-full py-5"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <Input type="text" placeholder="Dhaka" className="w-full py-5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <Input type="text" placeholder="Dhaka" className="w-full py-5" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code
              </label>
              <Input type="text" placeholder="1216" className="w-full py-5" />
            </div>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
