let productThumb=new Swiper(".small-image",{loop:!0,spaceBetween:10,slidesPerView:3,freeMood:!0,watchSlidesProgress:!0,breakPoints:{481:{spaceBetween:32}}}),productBig=new Swiper(".big-image",{loop:!0,autoHeight:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:productThumb}});fsLightbox.props.type="image";