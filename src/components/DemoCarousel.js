import React from "react";
import { Carousel } from "react-responsive-carousel";
import './DemoCarousel.css';
import { FaQuoteLeft } from 'react-icons/fa';

export default () => (
    <>
    <div className='lightbg'>
        <p class="ph11">Үнэлгээ</p>        
        <p class="ph12">Харилцагчийн сэтгэгдэл</p>
        <p class="ph13">Бид харилцагч байгууллагуудын бизнесийн үйл ажиллагаанд ахиц дэвшил авчрах хүргэлтийн үйлчилгээг санал болгож байна</p>
      </div>
    <Carousel autoPlay>
        <div key="slide1" style={{ padding: 20, height: 500 }}>
            
            <div className='quotetext'>
                <div className='iconquote'>
                    <FaQuoteLeft />
                </div>
                <p><i>Babystore онлайн дэлгүүр маань Cargo Delivery хүргэлтийн үйлчилгээтэй хамтран ажиллаад жил гаруйн хугацаанд 4000+ хүргэлтийг хийлгэсэн байна. Хамгийн хурднаар, найдвартай хүргэлтийн үйлчилгээ үзүүлдэг танай хамт олонд баярлалаа.</i></p>
                <p id="profile"><img src='images/baby-store.jpg' alt='BabyStore.mn' /> <b>Б. Амартүвшин</b> - <i>Babystore</i></p>
            </div>
        </div>
        
        <div key="slide2" style={{ padding: 20, height: 500 }}>
            <div className='quotetext'>
                <div className='iconquote'>
                    <FaQuoteLeft />
                </div>
                <p><i>Cargo Delivery компанийн хамт олонтой 2020 оны 11 сараас эхлэн хамтран ажиллаж байна. Хөл хорионы дэглэмийн үед хэрэглэгчдэд маань захиалсан бүтээгдэхүүнийг нь хурдан шуурхай, найдвартай хүргэх боломж олгож, халдвар хамгааллын дэглэмийг чанд мөрдөн чин сэтгэлээсээ үйлчилж байгаа танай хамт олонд баярлалаа. </i></p>
                <p id="profile"><img src='images/baigal-house.jpg' alt='Baigal House' /> <b>Ц. Асралт</b> - <i>Байгал Хаус</i></p>
            </div>    
        </div>
        
        <div key="slide3" style={{ padding: 20, height: 500 }}>
            <div className='quotetext'>
                <div className='iconquote'>
                    <FaQuoteLeft />
                </div>
                <p><i>Онлайн худалдааны жижиг бизнес эрхлэгч бид нарт тулгардаг хүндрэлтэй асуудлын нэг болох хүргэлтийн үйлчилгээгээ танай хамт олонд бүрэн даатгаснаар бусад үйл ажиллагаандаа илүү анхаарал хандуулах боломжтой болсондоо маш их баяртай байгаа. Танай хамт олон ажлын амжилт хүсье.</i></p>
                <p id="profile"><img src='images/hibeauty.jpg' alt='Hibeauty.mn' /> <b>С. Бадамханд</b> - <i>Hibeauty</i></p>
            </div>
        </div>
    </Carousel>
    </>
);
