import "./styles.css";
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'

export default function App() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1022/1000/600/",
      thumbnail: "https://picsum.photos/id/1022/250/150/",
    },
    {
      original: "https://picsum.photos/id/1028/1000/600/",
      thumbnail: "https://picsum.photos/id/1028/250/150/",
    },
  ];

  return (
    <div className="App">
      <h1>Image Viewer</h1>
      <h2>Few images are here!</h2>
      <ImageGallery items={images} 
        showPlayButton = {true}
        showFullscreenButton = {false}
        slideInterval = {300}
        slideOnThumbnailOver = {true}
        showIndex = {true}
        onPlay = {()=>{
          alert("Slides is now playing!")
        }}
      />;
    </div>
  );
}



