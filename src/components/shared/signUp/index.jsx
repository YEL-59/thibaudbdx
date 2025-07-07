import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ReusableInputField from "../InputField/ReusableInputField";
import images from "@/constants/images";
import Google from "@/assets/svg/Google";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import ReusableCheckboxField from "../InputField/ReusableCheckboxField";
import { useSignUp } from "@/hooks/api/auth.hook";
import { Link } from "react-router";
// import { FcGoogle } from "react-icons/fc"; // Uncomment if using react-icons

export default function SignUp() {
  const { form, mutate, isPending } = useSignUp();

  const onSubmit = (values) => {
    // handle sign up
    mutate(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7]">
      <div
        className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg w-full max-w-4xl overflow-hidden"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        {/* Left side illustration or info */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#fafbfc] w-1/2 p-10">
          {/* You can put an illustration or branding here */}
          <span className="rounded-full flex items-center justify-center text-4xl font-bold text-primary mb-6">
            <img
              src={images?.logo}
              alt=""
              className="h-full w-full rounded-full"
            />
          </span>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome to Thibaud BDX
          </h2>
          <p className="text-gray-500 text-center">
            Manage your contacts, notes, and more with a modern dashboard
            experience.
          </p>
        </div>
        {/* Right side form */}
        <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12">
          <Card className="w-full border-none shadow-none">
            <CardContent className="p-0">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-10"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
                    Sign Up
                  </h3>
                  <div>
                    <ReusableInputField
                      name="name"
                      placeholder="Enter Your Name"
                      control={form.control}
                      type="text"
                    />
                  </div>
                  <div>
                    <ReusableInputField
                      name="email"
                      placeholder="Enter Your Email"
                      control={form.control}
                      type="text"
                    />
                  </div>
                  <div>
                    <ReusableInputField
                      name="password"
                      placeholder="Enter Password"
                      control={form.control}
                      type="password"
                    />
                  </div>
                  <div>
                    <ReusableInputField
                      name="password_confirmation"
                      placeholder="Confirm Your Password"
                      control={form.control}
                      type="password"
                    />
                  </div>
                  <div>
                    <ReusableCheckboxField
                      name="agree"
                      control={form.control}
                      label="Accept terms and conditions"
                    />
                  </div>
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="bg-[#615EF0] text-white h-11 rounded-md text-base font-medium px-10 w-full"
                  >
                    {isPending ? "Signing Up..." : "Sign Up"}{" "}
                    <span className="ml-2">&rarr;</span>
                  </Button>
                </form>
              </Form>
              <div className="text-center text-xs text-gray-500 mt-4">
                Already have an account?{" "}
                <Link className="hover:underline" to="/sign-in">
                  Sign In
                </Link>
              </div>
              <Button
                variant="outline"
                className="w-full h-11 mt-2 flex items-center justify-center gap-2 border border-gray-200"
                type="button"
              >
                {/* <FcGoogle className="text-lg" /> */}
                <Google />
                Sign In With Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
