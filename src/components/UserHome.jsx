import "bootstrap/dist/css/bootstrap.css";
import background from "../pictures/ShoppingBackground.png";
function Home() {
  return (
    <div
      className="bg"
      style={{
        height: "100vh", // Set the height to 100% of the viewport height
        background: `url(${background})`, // Use the background image
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Adjust to cover the entire container
        display: "flex", // Add flex display
        alignItems: "center", // Vertically center content
        justifyContent: "center", // Horizontally center content
      }}
    >
      {/* Content inside the background container */}
      {/* You can add other components or text here */}
    </div>
  );
}

export default Home;