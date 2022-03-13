import SocialMediaLinks from "../SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="flex h-20 bg-slate-800 text-slate-100 items-center justify-center ">
      <div>
        <strong>Designed By Usman Ghani</strong>
      </div>
      <div>
        <SocialMediaLinks />
      </div>
    </footer>
  );
};

export default Footer;
