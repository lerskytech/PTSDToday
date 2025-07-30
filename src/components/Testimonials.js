import React from 'react';
import Slider from 'react-slick';
import SoraImage from './SoraImage';

const testimonials = [
  {
    id: 1,
    quote: "Finding this community was a turning point. I finally realized I wasn't fighting this battle alone. The resources here gave me the language to understand what I was going through.",
    author: 'A.J., Veteran',
    image: '/images/20250729_1935_Empathetic Supportive Conversation_simple_compose_01k1c8h42nfe5r00jfsm6j4zms.png',
  },
  {
    id: 2,
    quote: "The breathing exercises are a lifesaver during moments of panic. Simple, effective, and something I can do anywhere. It's been a powerful tool in my daily healing process.",
    author: 'M.K., First Responder',
    image: '/images/20250729_1928_Supportive Gathering_simple_compose_01k1c86pvbexfa0jd4a8daxwpd.png',
  },
  {
    id: 3,
    quote: "Reading other people's stories made me feel seen. It's one thing to know the diagnosis, it's another to see your own experience reflected in someone else's words. Thank you.",
    author: 'S.P., Trauma Survivor',
    image: '/images/20250729_1956_Circle of Connection_simple_compose_01k1c9r2n1et5a092f0kfc9tk8.png',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    adaptiveHeight: true,
  };

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Stories & Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="relative text-white rounded-lg overflow-hidden shadow-xl">
                <SoraImage src={testimonial.image} alt="Abstract image representing a personal story" aspect="3:2" />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-8">
                  <p className="text-lg md:text-2xl italic mb-6 max-w-3xl">“{testimonial.quote}”</p>
                  <cite className="font-bold text-md not-italic">- {testimonial.author}</cite>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
