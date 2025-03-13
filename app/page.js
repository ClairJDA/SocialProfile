import Attribution from "@/components/attribution";
import ProfilePicture from "@/components/profilePicture";
import SocialLinkBtn from "@/components/socialLinkBtn";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-grey-900 font-inter text-white h-full w-full">
      <div className="flex flex-col justify-center items-center w-xs rounded-xl p-6 bg-grey-800">
        <ProfilePicture />
        <SocialLinkBtn label="GitHub" link="https://www.github.com" />
        <SocialLinkBtn label="Frontend Mentor" link="https://www.frontendmentor.io" />
        <SocialLinkBtn label="LinkedIn" link="https://www.linkedin.com"/>
        <SocialLinkBtn label="Twitter" link="https://www.x.com"/>
        <SocialLinkBtn label="Instagram" link="https://www.instagram.com"/>
      </div>
      <Attribution />
    </div>
  );
}
