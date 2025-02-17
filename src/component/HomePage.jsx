import "../styles/Homepage.css";
import homepageBackground from "../assets/Dark-Souls-III-PS4-Wallpapers-21.jpg";

const Homepage = () => {
  //JS code goes here--
  return (
    <div id="homepage-card">
      <img
        id="homepage-background"
        src={homepageBackground}
        alt="Dark Souls Ashes Wallpaper"
      />
    </div>
  );
};
export default Homepage;
