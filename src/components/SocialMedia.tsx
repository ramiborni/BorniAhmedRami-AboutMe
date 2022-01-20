import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DirectboxSend,
  Facebook,
  Instagram,
  LinkCircle,
  Twitch,
} from "iconsax-react";
import { ReactNode } from "react";
import { faGithub,faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialMedia = () => {
  const socialMedia = [
    {
      icon: <Facebook size="32" color="#fff" variant="Bold" />,
      title: "Facebook",
      color: "#0080f8",
      url: "https://www.facebook.com/borniramy",
    },
    {
      icon:<FontAwesomeIcon icon={faInstagram} size="2x" />,
      title: "Instagram",
      color: "#e704a3",
      url: "https://www.instagram.com/rikiramy99",
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} size="2x" />,
      title: "LinkedIn",
      color: "#003cff",
      url: "https://www.linkedin.com/in/borni-ahmed-rami-3018b2156/",
    },
    {
      icon: <FontAwesomeIcon icon={faTwitter} size="2x" />,
      title: "Twitter",
      color: "#04c5e7",
      url: "https://www.twitter.com/borniramy",
    },
    {
        icon: <FontAwesomeIcon icon={faGithub} size="2x" />        ,
        title: "Github",
        color: "#1a1b29",
        url: "https://www.github.com/rikiraspoutine",
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
      title: "E-mail",
      color: "#707070",
      url: "mailto:borniahmedrami@gmail.com",
    },
  ];
  const SocialMediaButton = ({
    icon,
    title,
    color,
    url,
  }: {
    icon: ReactNode;
    title: string;
    color: string;
    url: string;
  }) => (
    <a
      href={url}
      className="flex items-center text-white font-bold py-2 px-4 rounded-xl"
      style={{ backgroundColor: color }}
    >
      {icon} &nbsp; &nbsp;
      {title}
    </a>
  );

  return (
    <div className="flex space-x-12 lg:flex-row flex-col-reverse my-16  lg:mx-10">
      <div className="flex-1 space-y-6 text-center lg:text-left mt-10">
        <h1 className="text-2xl lg:text-6xl font-bold text-portfolio-headers">
          Contact <span className="text-portfolio-primary">Me !</span>
        </h1>
        <p className="text-lg">
          Feel free to contact me in one of following social media platforms
        </p>
        <div className="grid lg:grid-cols-3 2xl:grid-cols-5 gap-5">
          {socialMedia.map((s) => (
            <SocialMediaButton
              icon={s.icon}
              title={s.title}
              color={s.color}
              url={s.url}
            />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <img src="/img/contact.svg" alt="Contact" />
      </div>
    </div>
  );
};

export default SocialMedia;
