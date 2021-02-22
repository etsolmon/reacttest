import React from 'react';
import './Solution.css';
import { FaBolt, FaShieldAlt, FaTruckLoading, FaMixcloud, FaFileSignature, FaRoad, FaUsers, FaHeadset } from 'react-icons/fa';

function Solution() {
  return (
    <>
      <div>
        <p class="ph11">Бидний давуу талууд</p>        
      </div>
      <div>
        <p class="ph12">Хүргэлтийн цогц шийдэл</p>
      </div>
      <div>
        <p class="ph13">Бид таны бизнесийн үр ашгийг нэмэгдүүлэх дараах давуу талуудыг санал болгож байна</p>
      </div>
      <div class="cards">
        <div class="card">
                <div className='iconcards'>
                  <FaBolt />
                </div>
                <p className='h2cards'>ХАМГИЙН ШУУРХАЙ ХҮРГЭЛТ</p>
                <p className='pcards'>Улаанбаатар хот дотор хамгийн хурдан шуурхай үйлчилгээ (2 - 8 цаг)-г бид санал болгож байна.</p>
        </div>
        <div class="card">
                <div className='iconcards'>
                  <FaShieldAlt />
                </div>
                <p className='h2cards'>НАЙДВАРТАЙ ҮЙЛЧИЛГЭЭ</p>
                <p className='pcards'>Хүргэлт тус бүрийг операторын хяналтын дор гүйцэтгэдэг тул таны бараа алга болох, буруу хаягаар хүргэгдэх эрсдэлгүй болно.</p>
        </div>
        <div class="card">
                <div className='iconcards'>
                  <FaMixcloud />
                </div>
                <p className='h2cards'>УДИРДЛАГЫН СИСТЕМ</p>
                <p className='pcards'>Захиалагч болон нийлүүлэгч тал хүргэлтийн захиалга бүртгэх болон хүргэлтийн явцыг нэгдсэн удирдлагын системээр хянах боломж.</p>
        </div>
        <div class="card">
                <div className='iconcards'>
                  <FaFileSignature />
                </div>
                <p className='h2cards'>ТУСГАЙ ЗӨВШӨӨРӨЛ</p>
                <p className='pcards'>"Ачаа тээвэр хүргэлтийн үйлчилгээ эрхлэх" тусгай зөвшөөрөлтэй тул цар тахлын үед таны барааг найдвартай хүргэнэ.</p>
        </div>
        <div class="card">
                <div className='iconcards'>
                  <FaRoad />
                </div>
                <p className='h2cards'>ОРОН НУТГИЙН ХҮРГЭЛТ</p>
                <p className='pcards'>Орон нутгийн ачаа дайварт хүргэлтийн барааг хүлээлгэн өгөх үйлчилгээ.</p>
        </div>
        <div class="card">
                <div className='iconcards'>
                  <FaUsers />
                </div>
                <p className='h2cards'>ТУРШЛАГАТАЙ ХАМТ ОЛОН</p>
                <p className='pcards'>2020 онд нийт 8000+ удаагийн хүргэлтийн үйлчилгээг амжилттай гүйцэтгэсэн хамт олон</p>
        </div>
        <div class="card">
                <div className='iconcards'>
                  <FaHeadset />
                </div>
                <p className='h2cards'>ОПЕРАТОРЫН ХЯНАЛТ</p>
                <p className='pcards'>Манай лавлах төв (7755-2211) операторууд нь харилцагч байгууллага болон хүргэлтийн үйлчилгээнд шаардлагатай мэдээллийг тогтмол өгч ажилладаг</p>
        </div>
        <div class="card">
                <div className='iconcards'>
                  <FaTruckLoading />
                </div>
                <p className='h2cards'>ХҮРГЭЛТИЙН ОЛОН СОНГОЛТ</p>
                <p className='pcards'>Энгийн хүргэлт (8 цаг), Шуурхай хүргэлт (2 цаг), Цаг заасан хүргэлт зэрэг хүргэлтийн сонголтуудыг танд санал болгож байна</p>
        </div>        
      </div>
    </>  
  );
}
export default Solution;
