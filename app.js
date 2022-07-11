$('.services-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
        breakpoint: 1288,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.products-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    rows:1,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
    {
        breakpoint: 1288,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.exp-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    rows:1,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
    {
        breakpoint: 1288,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })


  $('.outstanding-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    rows:1,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
    {
        breakpoint: 1288,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })
  