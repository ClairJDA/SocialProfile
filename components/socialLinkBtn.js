import Link from "next/link";
import React from "react";

function SocialLinkBtn({ label, link }) {
  return (
    <a href= {`${link}`} >
      <div className="hover:bg-green hover:text-grey-900 inter-regular w-[280px] rounded-md my-2 py-3 bg-grey-700 text-center text-white">
        {label}
      </div>
    </a>
  );
}

export default SocialLinkBtn;
