import "./../styles/Links.css";
import "./../styles/Fonts.css";

const Links = () => {
  // Define your social media links
  const socialMediaLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/raj-dhakate/",
      icon: "fab fa-linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/rajdhakate/",
      icon: "fab fa-github",
    },
    {
      name: "Email",
      url: "mailto:engrdhakate@gmail.com?subject=Hey there !!",
      icon: "fab fa-email",
    },
    {
      name: "WhatsApp",
      url: "whatsapp://send?abid=+919654343680&text=Hello%2C%20World!",
      icon: "fab fa-whatsapp",
    },
  ];

  return (
    <div className="social-links">
      {socialMediaLinks.map((socialMedia, index) => (
        <a
          key={index}
          href={socialMedia.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link p bold"
        >
          {socialMedia.name}
        </a>
      ))}
    </div>
  );
};

export default Links;
