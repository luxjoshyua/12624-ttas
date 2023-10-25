import Swiper from 'swiper'
import { Navigation, Keyboard, EffectCoverflow, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Keyboard, Pagination, EffectCoverflow]);
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const initSwiper1 = () => {
	// gold slider
	new Swiper('.swiper', {
		spaceBetween: 130,
		slidesPerView: 1,
		centeredSlides: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		breakpoints: {
			1024: {
				spaceBetween: 1500
			}
		},
		effect: "coverflow",
		coverflowEffect: {
		  rotate: 0,
		  scale: 0.85,
		  modifier: 1,
		  slideShadows: true,
		},
	})
}


// nappy products
const initSwiper2 = () => {
	const swiper2 = new Swiper('.swiper-2', {
		grabCursor: true,
		draggable: true,
		loop: true,
		centeredSlides: true,
		speed: 800,
		slidesPerView: 1,
		spaceBetween: 150,
		navigation: {
			nextEl: '.swiper-button-next-2',
			prevEl: '.swiper-button-prev-2'
		},
		breakpoints: {
			1280: {
				slidesPerView: 3,
			}
		},
		effect: "coverflow",
		coverflowEffect: {
		  rotate: 0,
		  scale: 0.85,
		  // depth: 180,
		  modifier: 1,
		  slideShadows: false,
		},
	})

}

// nappy infographic slider
const initSwiper3 = () => {
	const swiper2 = new Swiper('.swiper-3', {
		grabCursor: true,
		draggable: true,
		loop: true,
		centeredSlides: true,
		speed: 800,
		slidesPerView: 1,
		spaceBetween: 100,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpoints: {
			1024: {
				slidesPerView: 1,
			}
		},
		
	})

	document.getElementById("slideOne").addEventListener("click", () => goSlide(1));
	document.getElementById("slideTwo").addEventListener("click", () => goSlide(2));
	document.getElementById("slideThree").addEventListener("click", () => goSlide(3));
	document.getElementById("slideFour").addEventListener("click", () => goSlide(4));
	document.getElementById("slideFive").addEventListener("click", () => goSlide(5));
	document.getElementById("slideSix").addEventListener("click", () => goSlide(0));


	function goSlide(x) {
		swiper2.slideTo(x, 800)
	  }


}

export { initSwiper1, initSwiper2, initSwiper3 }



