'use client'

import { LandingNavbar } from "@/components/LandingNavbar";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
    </div>
    // <div>
    //   <div>Landing Page (Unprotected)</div>
    //   <LogIn></LogIn>
    //   <a href="/sign-in">
    //     <Button>Login</Button>
    //   </a>
    //   <a href="/sign-up">
    //     <Button>Register</Button>
    //   </a>
    // </div>
  );
};
export default LandingPage;
