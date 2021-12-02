import { Parallax } from "react-parallax";
import Space2 from '../img/space2.jpg'

const ImageTwo = ()=>{
    return (
    <Parallax className='image'  bgImage={Space2} strength={800}>
        <div className="content">
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
    )
};

export default ImageTwo;