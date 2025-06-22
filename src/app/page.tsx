// import HomePage from "./components/allPosts";

import PersonalInformation from "./components/personalInfomation";

// import ResumeCreate from "./components/AiResumeCreate/aiResumeCreate";

export default function Home() {
  return (
    <div className="max-w-[1420px] mx-auto">
      <h1 className="text-3xl  font-bold text-center  mt-20">
        {/* RTK CRUD OPERATION <HomePage /> */}
      </h1>

      {/* <ResumeCreate></ResumeCreate> */}
      <PersonalInformation></PersonalInformation>
    </div>
  );
}
