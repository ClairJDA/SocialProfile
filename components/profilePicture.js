import Image from "next/image";

function ProfilePicture() {
  return (
    <div className="flex-col justify-items-center items-center gap-2 text-center text-white text-xs">
      <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden">
        <Image
          src="/images/avatar-jessica.jpeg"
          alt="avatar"
          fill
          className="object-cover"
        />
      </div>
      <p className="text-xl">Jessica Randall</p>
      <p className="text-green">London, United Kingdom</p>
      <p className="mt-5 mb-3">&ldquo; Front-end developer and avid reader. &rdquo;</p>
    </div>
  );
}

export default ProfilePicture;
