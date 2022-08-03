import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='hero__textWrapper container'>
          <h1 className='textWrapper__heading'>İşinize uygun <span className='text-primary'>Tasarim</span> Ve <span className='text-primary'>Yazilimlar</span></h1>
          <p className='textWrapper__text'>360° dijital marka danişmanliği, web tasarim ve reklam ajansidir. İşletmelerin ihtiyaçlarina uygun web tasarim ve web yazilim hizmetleri sunmaktayiz.</p>
          <button className='textWrapper__btn btn btn-primary rounded-5'>Detayli İncele</button>
          <div className='hero__heroText'>
            <h2 className='heroText__heading'>Web sitesi ve Kurumsal Kimlik Tasarimlari</h2>
            <p className='heroText__text'>Online dünyadaki yüzünüz olan web sitelerinizi tasarlar. E-ticaret siteleri dahil olmak üzere tüm ihyitaçlariniza çözümler sunar.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;