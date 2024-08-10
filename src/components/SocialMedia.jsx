import React from "react";
import {  BsLinkedin } from "react-icons/bs";
import { FaGithub, } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/hossam-mohamed-90910918a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqzbdZ0RsTGOaLhkgATvlQQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/hossam206"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div>
        <a
          href="mailTo:hossammohamed6401@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail />
        </a>
      </div>
 
    </div>
  );
};

export default SocialMedia;
