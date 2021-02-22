import React from "react";
import { Carousel } from "react-responsive-carousel";
import './DemoCarousel.css';
import { FaQuoteLeft } from 'react-icons/fa';

export default () => (
    <Carousel autoPlay>
        <div key="slide1" style={{ padding: 20, height: 500 }}>
            <div className='iconquote'>
                  <FaQuoteLeft />
            </div>
            <div className='quotetext'>Babystore онлайн дэлгүүр маань Cargo Delivery хүргэлтийн үйлчилгээтэй хамтран ажиллаад жил гаруйн хугацаанд 4000+ хүргэлтийг хийлгэсэн байна. Хамгийн хурднаар, найдвартай хүргэлтийн үйлчилгээ үзүүлдэг танай хамт олонд баярлалаа.</div>
            <div>Б. Амартүвшин • Babystore</div>
        </div>
        
        <div key="slide2" style={{ padding: 20, height: 500 }}>
            <div>quote2</div>
            <div>Babystore онлайн дэлгүүр маань Cargo Delivery хүргэлтийн үйлчилгээтэй хамтран ажиллаад жил гаруйн хугацаанд 4000+ хүргэлтийг хийлгэсэн байна. Хамгийн хурднаар, найдвартай хүргэлтийн үйлчилгээ үзүүлдэг танай хамт олонд баярлалаа.</div>
            <div>Б. Амартүвшин • Babystore</div>
        </div>
        
        <div key="slide3" style={{ padding: 20, height: 500 }}>
            <div>quote3</div>
            <div>Babystore онлайн дэлгүүр маань Cargo Delivery хүргэлтийн үйлчилгээтэй хамтран ажиллаад жил гаруйн хугацаанд 4000+ хүргэлтийг хийлгэсэн байна. Хамгийн хурднаар, найдвартай хүргэлтийн үйлчилгээ үзүүлдэг танай хамт олонд баярлалаа.</div>
            <div>Б. Амартүвшин • Babystore</div>
        </div>
    </Carousel>
);
