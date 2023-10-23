import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Together forever, never apart, eternally bonded in heart</span>
        <span className="headerTitleLg">Eternally Bonded</span>
      </div>
      <img
        className="headerImg"
        src="https://www.glam.com/img/gallery/grief-isnt-just-for-death-you-deserve-the-grace-to-properly-grieve-other-endings-in-your-life/intro-1682363788.jpg"
        alt=""
      />
    </div>
  );
}