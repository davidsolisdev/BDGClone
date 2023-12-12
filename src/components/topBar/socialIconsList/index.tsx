import React from "react";
import FacebookIcon from "./socialIcons/facebookIcon";
import WhatsappIcon from "./socialIcons/whatsappIcon";
import YoutubeIcon from "./socialIcons/youtubeIcon";

function SocialIconsList() {
  return (
    <section className="h-full flex flex-wrap items-center justify-center">
      <FacebookIcon />
      <WhatsappIcon />
      <YoutubeIcon />
    </section>
  );
}

export default SocialIconsList;
