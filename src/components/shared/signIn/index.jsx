import React from "react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ReusableInputField from "../InputField/ReusableInputField";
import images from "@/constants/images";
import Google from "@/assets/svg/Google";
import ReusableCheckboxField from "../InputField/ReusableCheckboxField";
import { useSignIn } from "@/hooks/api/auth.hook";
import { Link } from "react-router";
import { Separator } from "@/components/ui/separator";

const SignIn = () => {
  const { form, mutate, isPending } = useSignIn();

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
          <span className="flex items-center justify-center text-4xl font-bold mb-6 text-primary w-48">
            <img
              src={images?.logo_2}
              alt=""
              className="h-full w-full object-contain"
            />
          </span>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome</h2>
          <p className="text-gray-500 text-center">
            The CRM that speaks Winemaker.
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
                    Sign In
                  </h3>
                  <Button
                    variant="outline"
                    className="w-full h-11 mt-2 flex items-center justify-center gap-2 border border-gray-200"
                    type="button"
                  >
                    {/* <FcGoogle className="text-lg" /> */}
                    <Google />
                    Sign In With Google
                  </Button>
                  <div className="relative flex items-center justify-center overflow-hidden">
                    <Separator />
                    <div className="px-2 text-center bg-background text-sm">
                      OR
                    </div>
                    <Separator />
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
                  <div className="flex items-center justify-between">
                    <ReusableCheckboxField
                      name="remember-me"
                      control={form.control}
                      label="Remember Me"
                    />
                    <div className="text-center text-xs text-gray-500">
                      <Link to="/forgot-password" className="hover:underline">
                        Forgot Password
                      </Link>
                    </div>
                  </div>
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="bg-[#615EF0] text-white h-11 rounded-md text-base font-medium px-10 w-full"
                  >
                    {isPending ? "Signing In..." : "Sign In"}{" "}
                    <span className="ml-2">&rarr;</span>
                  </Button>
                </form>
              </Form>
              <div className="text-center text-xs text-gray-500 mt-4">
                Don't have an account? <Link to="/sign-up">Sign Up</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
