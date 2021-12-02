import { Parallax } from "react-parallax";
import Space1 from '../img/space1.jpg'

const ImageOne = ()=>{
    return (
    <Parallax className='image'  bgImage={Space1} strength={800}>
        <div className="content">
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
    )
};

export default ImageOne;