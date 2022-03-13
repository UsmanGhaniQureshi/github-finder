import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedinIn,
  FaGithubAlt,
  FaInstagram,
} from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="flex text-xl">
      <a
        href="https://www.facebook.com/usman.ghaniqureshi"
        className=" mx-2 rounded-full text-blue-700"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://wa.me/923351495270"
        className=" mx-2 text-green-700"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://github.com/UsmanGhaniQureshi"
        className="mx-2 text-white"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubAlt />
      </a>
      <a
        href="https://www.linkedin.com/in/usman-ghani-qureshi-806b3310b/"
        className="mx-2 text-blue-400"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://www.instagram.com/ug_sumi/"
        className="mx-2 text-pink-700"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
