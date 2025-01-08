const SocialLinks = ({ id, href, icon, iconClassType }) => {
  return (
    <li key={id}>
      <a href={href} target='_blank' className={iconClassType} rel='noreferrer'>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLinks;
