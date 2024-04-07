import Carousel from "react-bootstrap/Carousel";
import { urlFor } from "../../client";

export default function ControlledCarousel({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={urlFor(image).url()}
            alt={`Slide ${index}`}
            height={300}
            style={{ objectFit: "contain", borderRadius: "10px" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
