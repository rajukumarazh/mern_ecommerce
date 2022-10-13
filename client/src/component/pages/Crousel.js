import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Crousel() {
	var settings = {
		dots: true,
		infinite: true,
		className: `bg-gray-500`,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		autoplay: true,
		// pauseOnHover: true,
		speed: 300,
		height: 400,
	
	};
	return (
		<Slider {...settings} className="">
			<div className=" h-50">
				<img src="./sale.jpg" style={{ height: '290px', width: '100%' }} />
				{/* <img src="./crousel3.png" style={{ height: '290px', width: '100%' }} /> */}
			</div>
			<div className=" h-50">
				<img src="./crousel1.png" style={{ height: '290px', width: '100%' }} />
			</div>
			<div className=" h-50">
				<img src="./crousel2.png" style={{ height: '290px', width: '100%' }} />
			</div>
			<div className=" h-50">
				<img src="./shoe.jpg" style={{ height: '290px', width: '100%' }} />
			</div>
			<div className=" h-50">
				<img
					src="./coming_soon.jpg"
					style={{ height: '290px', width: '100%' }}
				/>
			</div>
		</Slider>
	);
}
