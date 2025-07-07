import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import {
  useCreateNewPassword,
  useForgotPassword,
  useOTPSubmit,
  useResendOTP,
  useSignIn,
} from "@/hooks/api/auth.hook";
import React, { useEffect, useState } from "react";
import ReusableInputField from "../InputField/ReusableInputField";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import images from "@/constants/images";
import ReusableOTPInputField from "../InputField/ReusableOTPInputField";

const ForgotPassword = () => {
  const [forgotPasswordState, setForgotPasswordState] = useState(1);

  let content;
  switch (forgotPasswordState) {
    case 1:
      content = (
        <ForgotPasswordEmailSubmit
          setForgotPasswordState={setForgotPasswordState}
        />
      );
      break;

    case 2:
      content = (
        <ForgotPasswordOTPSubmit
          setForgotPasswordState={setForgotPasswordState}
        />
      );
      break;

    default:
      content = <CreateNewPassword />;
      break;
  }

  return <div>{content}</div>;
};

export default ForgotPassword;

// Forgot Password Email Submit
function ForgotPasswordEmailSubmit({ setForgotPasswordState }) {
  const { form, mutate, isPending } = useForgotPassword();

  const onSubmit = (values) => {
    // handle sign up
    mutate(values, {
      onSuccess: () => {
        setForgotPasswordState(2);
      },
    });
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
            Forgot Password
          </h2>
          <p className="text-text-paragraph text-center">
            No worries! Enter your email below and we will send you a code to
            reset password
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
                  <div>
                    <ReusableInputField
                      name="email"
                      placeholder="Enter Your Email"
                      control={form.control}
                      type="text"
                    />
                  </div>
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="bg-[#615EF0] text-white h-11 rounded-md text-base font-medium px-10 w-full"
                  >
                    {isPending ? "Sending OTP..." : "Send"}{" "}
                    <span className="ml-2">&rarr;</span>
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Forgot Password OTP Submit
function ForgotPasswordOTPSubmit({ setForgotPasswordState }) {
  const { form, mutate, isPending } = useOTPSubmit();
  const { mutate: resendMutate, isPending: resendIsPending } = useResendOTP();

  // demo code for otp count down
  const [counter, setCounter] = useState(30);

  const onSubmit = (values) => {
    // handle sign up
    mutate(
      { values, navigatesIsHere: false },
      {
        onSuccess: () => {
          setForgotPasswordState(3);
        },
      }
    );
  };

  //   Resend OTP
  const handleResendOTP = () => {
    resendMutate();
    setCounter(30);
  };

  useEffect(() => {
    if (counter === 0) return;
    const timer = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

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
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">CRM</h2>
          <p className="text-gray-500 text-center">
            Didn’t Receive Code? Resend Code
          </p>
          <p className="text-gray-500 text-center">
            Resend Code in 00:{counter.toString().padStart(2, "0")}
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
                    Type OTP to Forgot
                  </h3>
                  <div className="mx-auto w-fit">
                    <ReusableOTPInputField
                      length={4}
                      control={form.control}
                      name={"otp"}
                    />
                  </div>
                  <Button
                    disabled={isPending || resendIsPending}
                    type="submit"
                    className="bg-[#615EF0] text-white h-11 rounded-md text-base font-medium px-10 w-full"
                  >
                    {isPending ? "Verifying...." : "Verify"}{" "}
                    <span className="ml-2">&rarr;</span>
                  </Button>
                </form>
              </Form>
              {counter === 0 && (
                <div
                  onClick={() => handleResendOTP()}
                  className="mt-2 w-fit ml-auto text-gray-400 hover:underline cursor-pointer select-none"
                >
                  {resendIsPending ? "Resending...." : "Resend"}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Forgot Password Email Submit
function CreateNewPassword() {
  const { form, mutate, isPending } = useCreateNewPassword();

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
            Create New Password
          </h2>
          <p className="text-text-paragraph text-center">
            No worries! Enter your email below and we will send you a code to
            reset password
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
                  <div>
                    <ReusableInputField
                      name="password"
                      placeholder="Enter New Password"
                      control={form.control}
                      type="password"
                    />
                  </div>
                  <div>
                    <ReusableInputField
                      name="password_confirmation"
                      placeholder="Confirm New Password"
                      control={form.control}
                      type="password"
                    />
                  </div>
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="bg-[#615EF0] text-white h-11 rounded-md text-base font-medium px-10 w-full"
                  >
                    {isPending ? "Sending OTP..." : "Send"}{" "}
                    <span className="ml-2">&rarr;</span>
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
