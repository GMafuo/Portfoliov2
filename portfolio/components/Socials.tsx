import Link from "next/link";
import { socialLinks } from "../data/site.config";
import { SOCIAL_ICONS } from "../data/icons";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialLinks.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          {(() => {
            const Icon = SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS] || SOCIAL_ICONS.github;
            return <Icon aria-hidden />;
          })()}
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;