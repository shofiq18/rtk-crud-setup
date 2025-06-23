
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
import { ArrowRightIcon } from "lucide-react";
// Adjust the import path based on your setup

export default function PersonalInformation() {
  return (
    <div className="min-h-screen p-4">
      <ProgressBar currentStep={1} totalSteps={7} />
      <div className="flex justify-center mt-12">
        <div className="p-6 w-full max-w-[1180px] h-[752px]">
          <h1 className="text-5xl text-[#333333] font-bold mb-6">
            Tell Us About Yourself
          </h1>
          <p className="text-gray-600 mb-6">
            Fill in your personal details so we can tailor your resume perfectly
            to your career goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-xl font-medium text-gray-800 mb-2">
                First Name
              </label>
              <Input type="text" placeholder="Saifur" className="w-full bg-gray-50 py-7" />
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-800 mb-2">
                Last Name
              </label>
              <Input type="text" placeholder="Rahman" className="w-full bg-gray-50 py-7" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-xl font-medium text-gray-800 mb-2">
                Phone Number
              </label>
              <Input
                type="text"
                placeholder="+880 1567808747"
                className="w-full bg-gray-50 py-7"
              />
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-800 mb-2">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="ux.saifur.ug@gmail.com"
                className="w-full bg-gray-50 py-7"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div className="w-full md:w-1/3">
              <label className="block text-xl font-medium text-gray-800 mb-2">
                Country/Region
              </label>
              <Select>
                <SelectTrigger className="w-full bg-gray-50 py-7">
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
            <div className="w-full md:w-2/3">
              <label className="block text-xl font-medium text-gray-800 mb-2">
                Address
              </label>
              <Input
                type="text"
                placeholder="Section-06, Mirpur, Dhaka."
                className="w-full bg-gray-50 py-7"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div>
              <label className="block text-xl font-medium text-gray-800 mb-2">
                City
              </label>
              <Input type="text" placeholder="Dhaka" className="w-full bg-gray-50 py-7" />
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-800 mb-2">
                State
              </label>
              <Input type="text" placeholder="Dhaka" className="w-full bg-gray-50 py-7" />
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-800 mb-2">
                ZIP Code
              </label>
              <Input type="text" placeholder="1216" className="w-full bg-gray-50 py-7" />
            </div>
          </div>
         <button className="w-full bg-[#28C76F] text-white py-4 rounded hover:bg-green-600 flex items-center justify-center gap-2">
      Next <ArrowRightIcon className="w-5 h-5" />
    </button>
        </div>
      </div>
    </div>
  );
}