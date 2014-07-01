Yrf.Business = DS.Model.extend({
    // id: DS.attr('string'),
    name: DS.attr('string'),
    rating_img_url: DS.attr('image'),
    is_closed: DS.attr('boolean'),
    address1: DS.attr('string'),
    address2: DS.attr('string'),
    phone: DS.attr('string'),
    url: DS.attr('string'),
    photo_url: DS.attr('image')
 });




Yrf.Business.FIXTURES =

// [
// {
//   "message":{
//     "text":"OK",
//     "code":0,
//     "version":"1.1.1"
//   },
//   "businesses":[
    [{
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"xSKEe6upPy-pFkLAW1O5uw",
      "is_closed":false,
      "city":"Plano",
      "mobile_url":"http://m.yelp.com/biz/jin-mi-restaurant-plano",
      "review_count":103,
      "zip":"75075",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"2727 W 15th St",
      "address2":"",
      "address3":"",
      "phone":"9727698341",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"korean",
          "search_url":"http://www.yelp.com/search?cflt=korean\u0026find_desc=\u0026find_loc=2727+W+15th+St%2C+Plano+75075",
          "name":"Korean"
        }
      ],
      "photo_url":"http://media2.fl.yelpcdn.com/bpthumb/SDOkPl_25eR3bTK1Pr0-SA/ms",
      "distance":5.6499481201171875,
      "name":"Jin Mi Restaurant",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/jin-mi-restaurant-plano",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=2727+W+15th+St%2C+Plano+75075",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a6210baec261/ico/stars/v1/stars_small_2.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/nYM6qqFvEDgzbmR-ca1tMw/ss",
          "rating_img_url":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/b561c24f8341/ico/stars/v1/stars_2.png",
          "rating":2,
          "user_url":"http://www.yelp.com/user_details?userid=8v3aEuuHEJU_8h0OgmsfDA",
          "url":"http://www.yelp.com/biz/jin-mi-restaurant-plano?hrid=aP7txnjVr1KLv8N40pcQuw",
          "mobile_uri":"/biz/jin-mi-restaurant-plano?full=True\u0026hrid=aP7txnjVr1KLv8N40pcQuw",
          "text_excerpt":"After reading the reviews there were no surprises.\n\nThis was my first deep-dive into Korean food and can now safely say I don't care for it. Yes it was...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/nYM6qqFvEDgzbmR-ca1tMw/ms",
          "date":"2014-06-05",
          "user_name":"Rex M.",
          "id":"aP7txnjVr1KLv8N40pcQuw"
        }
      ],
      "photo_url_small":"http://media2.fl.yelpcdn.com/bpthumb/SDOkPl_25eR3bTK1Pr0-SA/ss"
    },
    {
      "rating_img_url":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "country_code":"US",
      "id":"bmasz3CYf7sZslgGcLNvrw",
      "is_closed":false,
      "city":"Dallas",
      "mobile_url":"http://m.yelp.com/biz/pera-turkish-kitchen-dallas",
      "review_count":125,
      "zip":"75252",
      "state":"TX",
      "rating_img_url_small":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "address1":"17479 Preston Rd",
      "address2":"",
      "address3":"",
      "phone":"9722674444",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"mediterranean",
          "search_url":"http://www.yelp.com/search?cflt=mediterranean\u0026find_desc=\u0026find_loc=17479+Preston+Rd%2C+Dallas+75252",
          "name":"Mediterranean"
        },
        {
          "category_filter":"turkish",
          "search_url":"http://www.yelp.com/search?cflt=turkish\u0026find_desc=\u0026find_loc=17479+Preston+Rd%2C+Dallas+75252",
          "name":"Turkish"
        },
        {
          "category_filter":"cafes",
          "search_url":"http://www.yelp.com/search?cflt=cafes\u0026find_desc=\u0026find_loc=17479+Preston+Rd%2C+Dallas+75252",
          "name":"Cafes"
        }
      ],
      "photo_url":"http://media4.fl.yelpcdn.com/bpthumb/HL3olS2h-iQI2irmdM7zhA/ms",
      "distance":6.0658454895019531,
      "name":"Pera Turkish Kitchen",
      "neighborhoods":[
        {
          "url":"http://www.yelp.com/search?exclude_start=True\u0026find_desc=\u0026find_loc=North+Dallas%2C+Dallas%2C+TX",
          "name":"North Dallas"
        }
      ],
      "url":"http://www.yelp.com/biz/pera-turkish-kitchen-dallas",
      "country":"USA",
      "avg_rating":4.5,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=17479+Preston+Rd%2C+Dallas+75252",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/PTR8arw_Tcg0-uBwQmszwg/ss",
          "rating_img_url":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
          "rating":5,
          "user_url":"http://www.yelp.com/user_details?userid=3ykyOaZ4x5h2hlsvq1Q8UQ",
          "url":"http://www.yelp.com/biz/pera-turkish-kitchen-dallas?hrid=hRm4cvTFKTh5FrfbsCbHqQ",
          "mobile_uri":"/biz/pera-turkish-kitchen-dallas?full=True\u0026hrid=hRm4cvTFKTh5FrfbsCbHqQ",
          "text_excerpt":"I stopped in for lunch today. Decor was nicely done and music was pleasant. \nThe lunch menu was succinct with a nice range of options. The bread outshines...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/PTR8arw_Tcg0-uBwQmszwg/ms",
          "date":"2014-06-18",
          "user_name":"Steve P.",
          "id":"hRm4cvTFKTh5FrfbsCbHqQ"
        }
      ],
      "photo_url_small":"http://media4.fl.yelpcdn.com/bpthumb/HL3olS2h-iQI2irmdM7zhA/ss"
    },
    {
      "rating_img_url":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "country_code":"US",
      "id":"CfDcp7LFygP-G4DM_RHHDQ",
      "is_closed":false,
      "city":"Frisco",
      "mobile_url":"http://m.yelp.com/biz/platia-greek-kouzina-frisco",
      "review_count":273,
      "zip":"75034",
      "state":"TX",
      "rating_img_url_small":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "address1":"2995 Preston Rd",
      "address2":"Ste 1590",
      "address3":"",
      "phone":"9723340031",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"greek",
          "search_url":"http://www.yelp.com/search?cflt=greek\u0026find_desc=\u0026find_loc=2995+Preston+Rd%2C+Frisco+75034",
          "name":"Greek"
        },
        {
          "category_filter":"desserts",
          "search_url":"http://www.yelp.com/search?cflt=desserts\u0026find_desc=\u0026find_loc=2995+Preston+Rd%2C+Frisco+75034",
          "name":"Desserts"
        }
      ],
      "photo_url":"http://media3.fl.yelpcdn.com/bpthumb/RG49DlDUxdJNvqe9dgh3DA/ms",
      "distance":1.8593763113021851,
      "name":"Platia Greek Kouzina",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/platia-greek-kouzina-frisco",
      "country":"USA",
      "avg_rating":4.5,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=2995+Preston+Rd%2C+Frisco+75034",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/la2BKIYVcXEMGylnZLlSpw/ss",
          "rating_img_url":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
          "rating":5,
          "user_url":"http://www.yelp.com/user_details?userid=dFeULy1bwDNuQgUEZ8Rj6g",
          "url":"http://www.yelp.com/biz/platia-greek-kouzina-frisco?hrid=0S_XKL56Bx0YJsw1HOBK-w",
          "mobile_uri":"/biz/platia-greek-kouzina-frisco?full=True\u0026hrid=0S_XKL56Bx0YJsw1HOBK-w",
          "text_excerpt":"Wow, this is great Greek food. I got their combo dish which was a perfect mix of popular Greek foods and dishes, in smaller portion sizes. Try the combo...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/la2BKIYVcXEMGylnZLlSpw/ms",
          "date":"2014-06-17",
          "user_name":"Matt J.",
          "id":"0S_XKL56Bx0YJsw1HOBK-w"
        }
      ],
      "photo_url_small":"http://media3.fl.yelpcdn.com/bpthumb/RG49DlDUxdJNvqe9dgh3DA/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"NJv8BeJRTYYQ9Yz2T23JaA",
      "is_closed":false,
      "city":"Plano",
      "mobile_url":"http://m.yelp.com/biz/densetsu-plano",
      "review_count":440,
      "zip":"75024",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"4152 W Spring Creek Pkwy",
      "address2":"Ste 176",
      "address3":"",
      "phone":"9729647874",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"japanese",
          "search_url":"http://www.yelp.com/search?cflt=japanese\u0026find_desc=\u0026find_loc=4152+W+Spring+Creek+Pkwy%2C+Plano+75024",
          "name":"Japanese"
        },
        {
          "category_filter":"sushi",
          "search_url":"http://www.yelp.com/search?cflt=sushi\u0026find_desc=\u0026find_loc=4152+W+Spring+Creek+Pkwy%2C+Plano+75024",
          "name":"Sushi Bars"
        }
      ],
      "photo_url":"http://media3.fl.yelpcdn.com/bpthumb/XvR7VRdhngoJOxxvhyYPNQ/ms",
      "distance":2.9287724494934082,
      "name":"Densetsu",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/densetsu-plano",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=4152+W+Spring+Creek+Pkwy%2C+Plano+75024",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/ZTuwpKGyfZbbokHv-Tmd0g/ss",
          "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
          "rating":4,
          "user_url":"http://www.yelp.com/user_details?userid=fsp_RUqvOgnoapBqVpyoOA",
          "url":"http://www.yelp.com/biz/densetsu-plano?hrid=CmdYLaCca46kX9xkr6sbXA",
          "mobile_uri":"/biz/densetsu-plano?full=True\u0026hrid=CmdYLaCca46kX9xkr6sbXA",
          "text_excerpt":"I've come here about 6 times now.   Not sure why I waited to try the Ahi Tower (actually I usually get the salmon tower).   Yum.\n\nI've tried the tower at a...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/ZTuwpKGyfZbbokHv-Tmd0g/ms",
          "date":"2014-06-17",
          "user_name":"Dave W.",
          "id":"CmdYLaCca46kX9xkr6sbXA"
        }
      ],
      "photo_url_small":"http://media3.fl.yelpcdn.com/bpthumb/XvR7VRdhngoJOxxvhyYPNQ/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"QSbsZxtmPrESGT0xwIC8NQ",
      "is_closed":false,
      "city":"Plano",
      "mobile_url":"http://m.yelp.com/biz/zo%C3%ABs-kitchen-plano-2",
      "review_count":130,
      "zip":"75093",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"1901 Preston Rd",
      "address2":"Ste 1000",
      "address3":"",
      "phone":"9722481010",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"greek",
          "search_url":"http://www.yelp.com/search?cflt=greek\u0026find_desc=\u0026find_loc=1901+Preston+Rd%2C+Plano+75093",
          "name":"Greek"
        },
        {
          "category_filter":"southern",
          "search_url":"http://www.yelp.com/search?cflt=southern\u0026find_desc=\u0026find_loc=1901+Preston+Rd%2C+Plano+75093",
          "name":"Southern"
        },
        {
          "category_filter":"mediterranean",
          "search_url":"http://www.yelp.com/search?cflt=mediterranean\u0026find_desc=\u0026find_loc=1901+Preston+Rd%2C+Plano+75093",
          "name":"Mediterranean"
        }
      ],
      "photo_url":"http://media2.fl.yelpcdn.com/bpthumb/xtaQAsXL8mL9gKyvI-2eQg/ms",
      "distance":3.8216507434844971,
      "name":"Zo\u00ebs Kitchen",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/zo%C3%ABs-kitchen-plano-2",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=1901+Preston+Rd%2C+Plano+75093",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/xMlGJ1_HILWdp8D8VffxbA/ss",
          "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
          "rating":4,
          "user_url":"http://www.yelp.com/user_details?userid=PLOYtrCMUFPHQe2IbYAd5g",
          "url":"http://www.yelp.com/biz/zo%C3%ABs-kitchen-plano-2?hrid=lNnKB_71VxFdQSvXD2l8ng",
          "mobile_uri":"/biz/zo%C3%ABs-kitchen-plano-2?full=True\u0026hrid=lNnKB_71VxFdQSvXD2l8ng",
          "text_excerpt":"I'm a big Zoe's fan \u0026 dearly wish we had this chain at home. I use them frequently for catering business lunches \u0026 it always gets a great response....",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/xMlGJ1_HILWdp8D8VffxbA/ms",
          "date":"2014-05-14",
          "user_name":"Joanna T.",
          "id":"lNnKB_71VxFdQSvXD2l8ng"
        }
      ],
      "photo_url_small":"http://media2.fl.yelpcdn.com/bpthumb/xtaQAsXL8mL9gKyvI-2eQg/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"jwKD_JV6LJCSq9Id9F_qoQ",
      "is_closed":false,
      "city":"Plano",
      "mobile_url":"http://m.yelp.com/biz/mama-pita-mediterranean-grill-plano",
      "review_count":138,
      "zip":"75024",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"5800 Legacy Dr",
      "address2":"Ste C6",
      "address3":"",
      "phone":"9724031609",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"mediterranean",
          "search_url":"http://www.yelp.com/search?cflt=mediterranean\u0026find_desc=\u0026find_loc=5800+Legacy+Dr%2C+Plano+75024",
          "name":"Mediterranean"
        }
      ],
      "photo_url":"http://media2.fl.yelpcdn.com/bpthumb/bpjyE9GBNV7N7XODPU63bg/ms",
      "distance":0.37096744775772095,
      "name":"Mama Pita Mediterranean Grill",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/mama-pita-mediterranean-grill-plano",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=5800+Legacy+Dr%2C+Plano+75024",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/yYzQrFObdpUpR-zjpQzBgw/ss",
          "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
          "rating":4,
          "user_url":"http://www.yelp.com/user_details?userid=SgqocLuiOoIP5jB46KKQIA",
          "url":"http://www.yelp.com/biz/mama-pita-mediterranean-grill-plano?hrid=FDH0-VGNk320RH7azHm2kA",
          "mobile_uri":"/biz/mama-pita-mediterranean-grill-plano?full=True\u0026hrid=FDH0-VGNk320RH7azHm2kA",
          "text_excerpt":"My wife and I had great lunch here. Lots of choices, friendly servers helped us on our first visit. We are not experts on Mediterranean food so their help...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/yYzQrFObdpUpR-zjpQzBgw/ms",
          "date":"2014-06-13",
          "user_name":"Dennis S.",
          "id":"FDH0-VGNk320RH7azHm2kA"
        }
      ],
      "photo_url_small":"http://media2.fl.yelpcdn.com/bpthumb/bpjyE9GBNV7N7XODPU63bg/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"9lrvggzIZerdOzQwt_WMGA",
      "is_closed":false,
      "city":"Addison",
      "mobile_url":"http://m.yelp.com/biz/la-spiga-bakery-addison",
      "review_count":50,
      "zip":"75001",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"4203 Lindbergh Dr",
      "address2":"",
      "address3":"",
      "phone":"9729348730",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"bakeries",
          "search_url":"http://www.yelp.com/search?cflt=bakeries\u0026find_desc=\u0026find_loc=4203+Lindbergh+Dr%2C+Addison+75001",
          "name":"Bakeries"
        },
        {
          "category_filter":"italian",
          "search_url":"http://www.yelp.com/search?cflt=italian\u0026find_desc=\u0026find_loc=4203+Lindbergh+Dr%2C+Addison+75001",
          "name":"Italian"
        }
      ],
      "photo_url":"http://media1.fl.yelpcdn.com/bpthumb/3Id4uvByDmnWqBZFIaUrnw/ms",
      "distance":8.3805580139160156,
      "name":"La Spiga Bakery",
      "neighborhoods":[
        {
          "url":"http://www.yelp.com/search?exclude_start=True\u0026find_desc=\u0026find_loc=Addison%2C+Dallas%2C+TX",
          "name":"Addison"
        }
      ],
      "url":"http://www.yelp.com/biz/la-spiga-bakery-addison",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=4203+Lindbergh+Dr%2C+Addison+75001",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/3rqAqSwIgrecN-dRrhnLYw/ss",
          "rating_img_url":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
          "rating":5,
          "user_url":"http://www.yelp.com/user_details?userid=5Jz5UC0h51PCtPFMV6EeAg",
          "url":"http://www.yelp.com/biz/la-spiga-bakery-addison?hrid=BycK6S5iismfhurKRZwLKg",
          "mobile_uri":"/biz/la-spiga-bakery-addison?full=True\u0026hrid=BycK6S5iismfhurKRZwLKg",
          "text_excerpt":"I'm one of those irritating people phasing away from bread so even though this is a bakery I can't comment on that side! This is a lunch place review. I can...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/3rqAqSwIgrecN-dRrhnLYw/ms",
          "date":"2014-05-03",
          "user_name":"Bill W.",
          "id":"BycK6S5iismfhurKRZwLKg"
        }
      ],
      "photo_url_small":"http://media1.fl.yelpcdn.com/bpthumb/3Id4uvByDmnWqBZFIaUrnw/ss"
    },
    {
      "rating_img_url":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "country_code":"US",
      "id":"EJReAsPTYnVrBaZNo7MOAQ",
      "is_closed":false,
      "city":"Plano",
      "mobile_url":"http://m.yelp.com/biz/the-latin-pig-plano-2",
      "review_count":113,
      "zip":"75075",
      "state":"TX",
      "rating_img_url_small":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "address1":"3131 Custer Rd",
      "address2":"Ste 165",
      "address3":"",
      "phone":"9729859760",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"cuban",
          "search_url":"http://www.yelp.com/search?cflt=cuban\u0026find_desc=\u0026find_loc=3131+Custer+Rd%2C+Plano+75075",
          "name":"Cuban"
        }
      ],
      "photo_url":"http://media4.fl.yelpcdn.com/bpthumb/8MEKxQXaXXju0Po2nBSlyA/ms",
      "distance":5.3928689956665039,
      "name":"The Latin Pig",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/the-latin-pig-plano-2",
      "country":"USA",
      "avg_rating":4.5,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=3131+Custer+Rd%2C+Plano+75075",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media3.fl.yelpcdn.com/assets/2/www/img/902abeed0983/ico/stars/v1/stars_small_3.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/o35tgmw_2de-ZZxMEMaHEw/ss",
          "rating_img_url":"http://s3-media3.fl.yelpcdn.com/assets/2/www/img/34bc8086841c/ico/stars/v1/stars_3.png",
          "rating":3,
          "user_url":"http://www.yelp.com/user_details?userid=OJ4omQBZhGHIyLQzFODGcw",
          "url":"http://www.yelp.com/biz/the-latin-pig-plano-2?hrid=Qpsmv1x509K8obIXPOvVng",
          "mobile_uri":"/biz/the-latin-pig-plano-2?full=True\u0026hrid=Qpsmv1x509K8obIXPOvVng",
          "text_excerpt":"I went there for lunch on my first date and as much as I would like to give this place a 4-star,  I can't say that I was in awe of the food.\n\nI got the...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/o35tgmw_2de-ZZxMEMaHEw/ms",
          "date":"2014-06-16",
          "user_name":"Jasmine T.",
          "id":"Qpsmv1x509K8obIXPOvVng"
        }
      ],
      "photo_url_small":"http://media4.fl.yelpcdn.com/bpthumb/8MEKxQXaXXju0Po2nBSlyA/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"JMn3caH18JpkxKdkZPQjqg",
      "is_closed":false,
      "city":"Plano",
      "mobile_url":"http://m.yelp.com/biz/zorbas-greek-cafe-plano",
      "review_count":183,
      "zip":"75093",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"1501 Preston Rd",
      "address2":"",
      "address3":"",
      "phone":"9722500002",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"greek",
          "search_url":"http://www.yelp.com/search?cflt=greek\u0026find_desc=\u0026find_loc=1501+Preston+Rd%2C+Plano+75093",
          "name":"Greek"
        },
        {
          "category_filter":"mediterranean",
          "search_url":"http://www.yelp.com/search?cflt=mediterranean\u0026find_desc=\u0026find_loc=1501+Preston+Rd%2C+Plano+75093",
          "name":"Mediterranean"
        }
      ],
      "photo_url":"http://media3.fl.yelpcdn.com/bpthumb/jiadgPpKsTcwvGbnpAOxTw/ms",
      "distance":4.2628030776977539,
      "name":"Zorba's Greek Cafe",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/zorbas-greek-cafe-plano",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=1501+Preston+Rd%2C+Plano+75093",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/l13ROr7vFlglW7PV08Af_w/ss",
          "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
          "rating":4,
          "user_url":"http://www.yelp.com/user_details?userid=KZ8YoW3FoRIiQwNiguF6FQ",
          "url":"http://www.yelp.com/biz/zorbas-greek-cafe-plano?hrid=EiGVouiC3LMAp9NnEv56lA",
          "mobile_uri":"/biz/zorbas-greek-cafe-plano?full=True\u0026hrid=EiGVouiC3LMAp9NnEv56lA",
          "text_excerpt":"This is a really solid Greek food restaurant. We always get the gyro plate (which is basically a platter of the lamb, veggies, and pita along with a cup of...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/l13ROr7vFlglW7PV08Af_w/ms",
          "date":"2014-04-20",
          "user_name":"Katie K.",
          "id":"EiGVouiC3LMAp9NnEv56lA"
        }
      ],
      "photo_url_small":"http://media3.fl.yelpcdn.com/bpthumb/jiadgPpKsTcwvGbnpAOxTw/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"q5RKKLU-4ao1OZEvn5NgNg",
      "is_closed":false,
      "city":"Dallas",
      "mobile_url":"http://m.yelp.com/biz/jens-place-dallas-2",
      "review_count":54,
      "zip":"75244",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"4455 Alpha Rd",
      "address2":"",
      "address3":"",
      "phone":"9729913663",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"sandwiches",
          "search_url":"http://www.yelp.com/search?cflt=sandwiches\u0026find_desc=\u0026find_loc=4455+Alpha+Rd%2C+Dallas+75244",
          "name":"Sandwiches"
        },
        {
          "category_filter":"catering",
          "search_url":"http://www.yelp.com/search?cflt=catering\u0026find_desc=\u0026find_loc=4455+Alpha+Rd%2C+Dallas+75244",
          "name":"Caterers"
        }
      ],
      "photo_url":"http://media4.fl.yelpcdn.com/bpthumb/LG3Mx1o0Up2bwv-rH3KDsg/ms",
      "distance":10.054471015930176,
      "name":"Jen's Place",
      "neighborhoods":[
        {
          "url":"http://www.yelp.com/search?exclude_start=True\u0026find_desc=\u0026find_loc=North+Dallas%2C+Dallas%2C+TX",
          "name":"North Dallas"
        }
      ],
      "url":"http://www.yelp.com/biz/jens-place-dallas-2",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=4455+Alpha+Rd%2C+Dallas+75244",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media3.fl.yelpcdn.com/assets/2/www/img/902abeed0983/ico/stars/v1/stars_small_3.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/z1krW9BW9RH9mxR95rvvEQ/ss",
          "rating_img_url":"http://s3-media3.fl.yelpcdn.com/assets/2/www/img/34bc8086841c/ico/stars/v1/stars_3.png",
          "rating":3,
          "user_url":"http://www.yelp.com/user_details?userid=IZMnP-UHqqB5pYhl_WyCUQ",
          "url":"http://www.yelp.com/biz/jens-place-dallas-2?hrid=OukTavfURbmIuY3PAPDVvA",
          "mobile_uri":"/biz/jens-place-dallas-2?full=True\u0026hrid=OukTavfURbmIuY3PAPDVvA",
          "text_excerpt":"I had half a Greek Chicken Wrap, a cup of chili, a peanut butter cookie and slice of strawberry cake. The Chicken Wrap was just OK although the chicken was...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/z1krW9BW9RH9mxR95rvvEQ/ms",
          "date":"2014-04-13",
          "user_name":"Evette S.",
          "id":"OukTavfURbmIuY3PAPDVvA"
        }
      ],
      "photo_url_small":"http://media4.fl.yelpcdn.com/bpthumb/LG3Mx1o0Up2bwv-rH3KDsg/ss"
    },
    {
      "rating_img_url":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
      "country_code":"US",
      "id":"MLZe3-XQjIKF6MarC36_XQ",
      "is_closed":false,
      "city":"Addison",
      "mobile_url":"http://m.yelp.com/biz/thai-star-addison-2",
      "review_count":360,
      "zip":"75001",
      "state":"TX",
      "rating_img_url_small":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
      "address1":"14833 Midway Rd",
      "address2":"",
      "address3":"",
      "phone":"9729916334",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"thai",
          "search_url":"http://www.yelp.com/search?cflt=thai\u0026find_desc=\u0026find_loc=14833+Midway+Rd%2C+Addison+75001",
          "name":"Thai"
        }
      ],
      "photo_url":"http://media2.fl.yelpcdn.com/bpthumb/K4BWc0iRACOdynSGvyVkuw/ms",
      "distance":8.9395475387573242,
      "name":"Thai Star",
      "neighborhoods":[
        {
          "url":"http://www.yelp.com/search?exclude_start=True\u0026find_desc=\u0026find_loc=Addison%2C+Dallas%2C+TX",
          "name":"Addison"
        }
      ],
      "url":"http://www.yelp.com/biz/thai-star-addison-2",
      "country":"USA",
      "avg_rating":4.5,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=14833+Midway+Rd%2C+Addison+75001",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/5QI11T_yGeJDMznDF9uFHQ/ss",
          "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
          "rating":4,
          "user_url":"http://www.yelp.com/user_details?userid=hXSzBUjnORNXkaxwA1j-vg",
          "url":"http://www.yelp.com/biz/thai-star-addison-2?hrid=mMwWR2CWkR6GUXL3ZPeGsA",
          "mobile_uri":"/biz/thai-star-addison-2?full=True\u0026hrid=mMwWR2CWkR6GUXL3ZPeGsA",
          "text_excerpt":"Thai Star is a Thai restaurant in Addison that serves up some delicious food in a quaint setting.  I can't believe it's taken me so long to discover Thai...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/5QI11T_yGeJDMznDF9uFHQ/ms",
          "date":"2014-06-19",
          "user_name":"Trinh T.",
          "id":"mMwWR2CWkR6GUXL3ZPeGsA"
        }
      ],
      "photo_url_small":"http://media2.fl.yelpcdn.com/bpthumb/K4BWc0iRACOdynSGvyVkuw/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"c-dFbpHUn5gRtWDypQYHNQ",
      "is_closed":false,
      "city":"Plano",
      "mobile_url":"http://m.yelp.com/biz/east-hampton-sandwich-co-plano",
      "review_count":59,
      "zip":"75024",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"7300 Lone Star Dr",
      "address2":"Ste C128",
      "address3":"",
      "phone":"4694671810",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"sandwiches",
          "search_url":"http://www.yelp.com/search?cflt=sandwiches\u0026find_desc=\u0026find_loc=7300+Lone+Star+Dr%2C+Plano+75024",
          "name":"Sandwiches"
        }
      ],
      "photo_url":"http://media3.fl.yelpcdn.com/bpthumb/KNWOQxMysl-7D5Nn-2Y93Q/ms",
      "distance":0.42732268571853638,
      "name":"East Hampton Sandwich Co.",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/east-hampton-sandwich-co-plano",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=7300+Lone+Star+Dr%2C+Plano+75024",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media3.fl.yelpcdn.com/assets/2/www/img/902abeed0983/ico/stars/v1/stars_small_3.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/RP6e3nnDONGqSLzYVkYz9A/ss",
          "rating_img_url":"http://s3-media3.fl.yelpcdn.com/assets/2/www/img/34bc8086841c/ico/stars/v1/stars_3.png",
          "rating":3,
          "user_url":"http://www.yelp.com/user_details?userid=acCm5TujfchuMQRio3aIcA",
          "url":"http://www.yelp.com/biz/east-hampton-sandwich-co-plano?hrid=Q8yRX8SgfshtIuULDlH0LA",
          "mobile_uri":"/biz/east-hampton-sandwich-co-plano?full=True\u0026hrid=Q8yRX8SgfshtIuULDlH0LA",
          "text_excerpt":"1st time visit - GOOD: excellent service; food seems fresh, fresh breads, free to sub out the hard overcooked chips for a choice of pasta/salads; cheesy...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/RP6e3nnDONGqSLzYVkYz9A/ms",
          "date":"2014-06-19",
          "user_name":"Keith B.",
          "id":"Q8yRX8SgfshtIuULDlH0LA"
        }
      ],
      "photo_url_small":"http://media3.fl.yelpcdn.com/bpthumb/KNWOQxMysl-7D5Nn-2Y93Q/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"30vvVCONHaHDXfoVsOHe_Q",
      "is_closed":false,
      "city":"Plano",
      "mobile_url":"http://m.yelp.com/biz/sea-breeze-fish-market-plano",
      "review_count":192,
      "zip":"75093",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"LakeSide Market Center",
      "address2":"4017 Preston Rd, Ste 530",
      "address3":"",
      "phone":"9724732722",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"seafood",
          "search_url":"http://www.yelp.com/search?cflt=seafood\u0026find_desc=\u0026find_loc=4017+Preston+Rd%2C+Ste+530%2C+Plano+75093",
          "name":"Seafood"
        },
        {
          "category_filter":"seafoodmarkets",
          "search_url":"http://www.yelp.com/search?cflt=seafoodmarkets\u0026find_desc=\u0026find_loc=4017+Preston+Rd%2C+Ste+530%2C+Plano+75093",
          "name":"Seafood Markets"
        }
      ],
      "photo_url":"http://media3.fl.yelpcdn.com/bpthumb/jAP46J0MTlcdDSHmDONNTA/ms",
      "distance":2.1574172973632812,
      "name":"Sea Breeze Fish Market",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/sea-breeze-fish-market-plano",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=4017+Preston+Rd%2C+Ste+530%2C+Plano+75093",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a6210baec261/ico/stars/v1/stars_small_2.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/ba0QC8n92G-T-ocs3GjJrQ/ss",
          "rating_img_url":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/b561c24f8341/ico/stars/v1/stars_2.png",
          "rating":2,
          "user_url":"http://www.yelp.com/user_details?userid=0iG_uwGjGzHrXV9FoxLCNg",
          "url":"http://www.yelp.com/biz/sea-breeze-fish-market-plano?hrid=eVR-hONV8SUZJ78EStjgJA",
          "mobile_uri":"/biz/sea-breeze-fish-market-plano?full=True\u0026hrid=eVR-hONV8SUZJ78EStjgJA",
          "text_excerpt":"I write this review with shame because everyone had SUCH great reviews on this place.. \n\nWe walked in and were quickly greeted.  The outdoor seating area is...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/ba0QC8n92G-T-ocs3GjJrQ/ms",
          "date":"2014-06-04",
          "user_name":"Mironda R.",
          "id":"eVR-hONV8SUZJ78EStjgJA"
        }
      ],
      "photo_url_small":"http://media3.fl.yelpcdn.com/bpthumb/jAP46J0MTlcdDSHmDONNTA/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"blYDk31rc6wJOjXJarU6Zg",
      "is_closed":false,
      "city":"The Colony",
      "mobile_url":"http://m.yelp.com/biz/cozy-thai-the-colony",
      "review_count":62,
      "zip":"75056",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"5333 Hwy 121",
      "address2":"Ste 119",
      "address3":"",
      "phone":"9726251114",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"thai",
          "search_url":"http://www.yelp.com/search?cflt=thai\u0026find_desc=\u0026find_loc=5333+Hwy+121%2C+The+Colony+75056",
          "name":"Thai"
        }
      ],
      "photo_url":"http://media4.fl.yelpcdn.com/bpthumb/iuOuonP7YpgutviFJSS6ww/ms",
      "distance":3.4427633285522461,
      "name":"Cozy Thai",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/cozy-thai-the-colony",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=5333+Hwy+121%2C+The+Colony+75056",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/x5snQE7vkhqfyplXDapd9A/ss",
          "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
          "rating":4,
          "user_url":"http://www.yelp.com/user_details?userid=gvpAq16BX25Svhyzwlu7EA",
          "url":"http://www.yelp.com/biz/cozy-thai-the-colony?hrid=dGHWREv1XqUpNEvI4W4hvQ",
          "mobile_uri":"/biz/cozy-thai-the-colony?full=True\u0026hrid=dGHWREv1XqUpNEvI4W4hvQ",
          "text_excerpt":"they came close to 5 stars, but my main knock is the chicken always tastes like it was frozen. however, the flavor of what they serve you is spot on. the...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/x5snQE7vkhqfyplXDapd9A/ms",
          "date":"2014-05-17",
          "user_name":"Jerry H.",
          "id":"dGHWREv1XqUpNEvI4W4hvQ"
        }
      ],
      "photo_url_small":"http://media4.fl.yelpcdn.com/bpthumb/iuOuonP7YpgutviFJSS6ww/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"nFiUoLcZysgxKOT9THoqUw",
      "is_closed":false,
      "city":"Plano",
      "mobile_url":"http://m.yelp.com/biz/freds-downtown-philly-plano",
      "review_count":93,
      "zip":"75075",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"2229 W 15th St",
      "address2":"",
      "address3":"",
      "phone":"9725961028",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"sandwiches",
          "search_url":"http://www.yelp.com/search?cflt=sandwiches\u0026find_desc=\u0026find_loc=2229+W+15th+St%2C+Plano+75075",
          "name":"Sandwiches"
        }
      ],
      "photo_url":"http://media2.fl.yelpcdn.com/bpthumb/8_cycxoRa_5_6CfwlFvsSg/ms",
      "distance":6.1215734481811523,
      "name":"Fred's Downtown Philly",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/freds-downtown-philly-plano",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=2229+W+15th+St%2C+Plano+75075",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/NnYqWpT6fW13rLffKPxzlw/ss",
          "rating_img_url":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
          "rating":5,
          "user_url":"http://www.yelp.com/user_details?userid=Yi8LctBGqLL2ZDfd2jcmqA",
          "url":"http://www.yelp.com/biz/freds-downtown-philly-plano?hrid=iqAZEKzG1yMe3T_sntiAZw",
          "mobile_uri":"/biz/freds-downtown-philly-plano?full=True\u0026hrid=iqAZEKzG1yMe3T_sntiAZw",
          "text_excerpt":"The Philly Cheesesteaks here are amazing, but the burgers are the best in town. You gotta try The Fat Fred... it's a Philly Cheesesteak on a cheeseburger,...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/NnYqWpT6fW13rLffKPxzlw/ms",
          "date":"2014-06-14",
          "user_name":"Floyd A.",
          "id":"iqAZEKzG1yMe3T_sntiAZw"
        }
      ],
      "photo_url_small":"http://media2.fl.yelpcdn.com/bpthumb/8_cycxoRa_5_6CfwlFvsSg/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"HeqS3ubwRtxOk0DEBrWqVg",
      "is_closed":false,
      "city":"Plano",
      "mobile_url":"http://m.yelp.com/biz/rusty-taco-plano",
      "review_count":120,
      "zip":"75025",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"8000 Coit Rd",
      "address2":"Ste 300A",
      "address3":"",
      "phone":"9722444047",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"mexican",
          "search_url":"http://www.yelp.com/search?cflt=mexican\u0026find_desc=\u0026find_loc=8000+Coit+Rd%2C+Plano+75025",
          "name":"Mexican"
        }
      ],
      "photo_url":"http://media3.fl.yelpcdn.com/bpthumb/tVj_GCeeHv0PJ88h4JxrIg/ms",
      "distance":2.6489400863647461,
      "name":"Rusty Taco",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/rusty-taco-plano",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=8000+Coit+Rd%2C+Plano+75025",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/eqDGa3iLwMuH2Ofg0J4H4g/ss",
          "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
          "rating":4,
          "user_url":"http://www.yelp.com/user_details?userid=pNBoP_WcUPUjk_d9busr_g",
          "url":"http://www.yelp.com/biz/rusty-taco-plano?hrid=x3IPAinMSWjAbj-8xZnFLA",
          "mobile_uri":"/biz/rusty-taco-plano?full=True\u0026hrid=x3IPAinMSWjAbj-8xZnFLA",
          "text_excerpt":"I've bookmarked Rusty's with the hope that I will one day be able to actually visit the physical restaurant but today will be writing my review based on the...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/eqDGa3iLwMuH2Ofg0J4H4g/ms",
          "date":"2014-06-18",
          "user_name":"Pamela A.",
          "id":"x3IPAinMSWjAbj-8xZnFLA"
        }
      ],
      "photo_url_small":"http://media3.fl.yelpcdn.com/bpthumb/tVj_GCeeHv0PJ88h4JxrIg/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"qGlb3gMpkJpITq2H3R7ang",
      "is_closed":false,
      "city":"Richardson",
      "mobile_url":"http://m.yelp.com/biz/cafe-max-richardson-richardson",
      "review_count":60,
      "zip":"75081",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"1600 Alma Rd",
      "address2":"",
      "address3":"",
      "phone":"9722315922",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"catering",
          "search_url":"http://www.yelp.com/search?cflt=catering\u0026find_desc=\u0026find_loc=1600+Alma+Rd%2C+Richardson+75081",
          "name":"Caterers"
        },
        {
          "category_filter":"newamerican",
          "search_url":"http://www.yelp.com/search?cflt=newamerican\u0026find_desc=\u0026find_loc=1600+Alma+Rd%2C+Richardson+75081",
          "name":"American (New)"
        }
      ],
      "photo_url":"http://media1.fl.yelpcdn.com/bpthumb/LlZyif1Vm6-IVF_pyv70UA/ms",
      "distance":9.4787530899047852,
      "name":"Cafe Max Richardson",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/cafe-max-richardson-richardson",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=1600+Alma+Rd%2C+Richardson+75081",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/OrSKSotqKEOFnY25mmPiBA/ss",
          "rating_img_url":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
          "rating":5,
          "user_url":"http://www.yelp.com/user_details?userid=tS_g0bYeyOfKg40RaWJcng",
          "url":"http://www.yelp.com/biz/cafe-max-richardson-richardson?hrid=YG1ml366oU9qVIG5AfGt-w",
          "mobile_uri":"/biz/cafe-max-richardson-richardson?full=True\u0026hrid=YG1ml366oU9qVIG5AfGt-w",
          "text_excerpt":"Caf\u00e9 Max is located in an office -industrial section of Richardson. Upon entering you will find a cafeteria type line where you will be served your order....",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/OrSKSotqKEOFnY25mmPiBA/ms",
          "date":"2014-03-20",
          "user_name":"Bill B.",
          "id":"YG1ml366oU9qVIG5AfGt-w"
        }
      ],
      "photo_url_small":"http://media1.fl.yelpcdn.com/bpthumb/LlZyif1Vm6-IVF_pyv70UA/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"2U22s-WADscty6hJzDWDCA",
      "is_closed":false,
      "city":"Plano",
      "mobile_url":"http://m.yelp.com/biz/shiro-sushi-plano-2",
      "review_count":35,
      "zip":"75093",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"3400 Preston Rd 220",
      "address2":"",
      "address3":"",
      "phone":"9725991213",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"sushi",
          "search_url":"http://www.yelp.com/search?cflt=sushi\u0026find_desc=\u0026find_loc=3400+Preston+Rd+220%2C+Plano+75093",
          "name":"Sushi Bars"
        }
      ],
      "photo_url":"http://media1.fl.yelpcdn.com/bpthumb/lgg8yyQEK0qP1R17xmxs9w/ms",
      "distance":2.6657915115356445,
      "name":"Shiro Sushi",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/shiro-sushi-plano-2",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=3400+Preston+Rd+220%2C+Plano+75093",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/VPwvkuItvaoDZr4JdcC_1A/ss",
          "rating_img_url":"http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
          "rating":5,
          "user_url":"http://www.yelp.com/user_details?userid=UHNuRT3u3HgLRArVW5-JxA",
          "url":"http://www.yelp.com/biz/shiro-sushi-plano-2?hrid=yh6EDkZC8PwrmbtJxE2dZQ",
          "mobile_uri":"/biz/shiro-sushi-plano-2?full=True\u0026hrid=yh6EDkZC8PwrmbtJxE2dZQ",
          "text_excerpt":"this place is awesome :D \nstaff is great \u0026 the sushi is interestingg and delish :D this is one of the very few sushi places I eat at when I'm craving sushi....",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/VPwvkuItvaoDZr4JdcC_1A/ms",
          "date":"2014-06-12",
          "user_name":"Monica L.",
          "id":"yh6EDkZC8PwrmbtJxE2dZQ"
        }
      ],
      "photo_url_small":"http://media1.fl.yelpcdn.com/bpthumb/lgg8yyQEK0qP1R17xmxs9w/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"hPrixjgLEA_7LOgCOSMa6g",
      "is_closed":false,
      "city":"Dallas",
      "mobile_url":"http://m.yelp.com/biz/olivers-eatery-dallas",
      "review_count":67,
      "zip":"75287",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"4727 Frankford Rd",
      "address2":"Ste 373",
      "address3":"",
      "phone":"9728185445",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"delis",
          "search_url":"http://www.yelp.com/search?cflt=delis\u0026find_desc=\u0026find_loc=4727+Frankford+Rd%2C+Dallas+75287",
          "name":"Delis"
        },
        {
          "category_filter":"newamerican",
          "search_url":"http://www.yelp.com/search?cflt=newamerican\u0026find_desc=\u0026find_loc=4727+Frankford+Rd%2C+Dallas+75287",
          "name":"American (New)"
        },
        {
          "category_filter":"sandwiches",
          "search_url":"http://www.yelp.com/search?cflt=sandwiches\u0026find_desc=\u0026find_loc=4727+Frankford+Rd%2C+Dallas+75287",
          "name":"Sandwiches"
        }
      ],
      "photo_url":"http://media3.fl.yelpcdn.com/bpthumb/OxtcXZ1VfenxhRHTVMZgXQ/ms",
      "distance":5.4644980430603027,
      "name":"Oliver's Eatery",
      "neighborhoods":[
        {
          "url":"http://www.yelp.com/search?exclude_start=True\u0026find_desc=\u0026find_loc=North+Dallas%2C+Dallas%2C+TX",
          "name":"North Dallas"
        }
      ],
      "url":"http://www.yelp.com/biz/olivers-eatery-dallas",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=4727+Frankford+Rd%2C+Dallas+75287",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a6210baec261/ico/stars/v1/stars_small_2.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/hsEtzX1GDkyZ7kyvwFmggQ/ss",
          "rating_img_url":"http://s3-media2.fl.yelpcdn.com/assets/2/www/img/b561c24f8341/ico/stars/v1/stars_2.png",
          "rating":2,
          "user_url":"http://www.yelp.com/user_details?userid=SeND6MXbxMe3b6msMAQZlw",
          "url":"http://www.yelp.com/biz/olivers-eatery-dallas?hrid=95HJEKjQCvN8-kpbrgJWaQ",
          "mobile_uri":"/biz/olivers-eatery-dallas?full=True\u0026hrid=95HJEKjQCvN8-kpbrgJWaQ",
          "text_excerpt":"Needed a quick lunch late in the day and wanted to check out something healthy-ish. The website and reviews made it sound like other nice lunch spots I've...",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/hsEtzX1GDkyZ7kyvwFmggQ/ms",
          "date":"2014-06-09",
          "user_name":"Leah L.",
          "id":"95HJEKjQCvN8-kpbrgJWaQ"
        }
      ],
      "photo_url_small":"http://media3.fl.yelpcdn.com/bpthumb/OxtcXZ1VfenxhRHTVMZgXQ/ss"
    },
    {
      "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
      "country_code":"US",
      "id":"38_FElG3Gx14JU9CnZHkKw",
      "is_closed":false,
      "city":"Plano",
      "mobile_url":"http://m.yelp.com/biz/kor-bq-plano-2",
      "review_count":238,
      "zip":"75093",
      "state":"TX",
      "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
      "address1":"6505 W Park Blvd",
      "address2":"Ste 314",
      "address3":"",
      "phone":"2143902850",
      "state_code":"TX",
      "categories":[
        {
          "category_filter":"korean",
          "search_url":"http://www.yelp.com/search?cflt=korean\u0026find_desc=\u0026find_loc=6505+W+Park+Blvd%2C+Plano+75093",
          "name":"Korean"
        },
        {
          "category_filter":"hotdogs",
          "search_url":"http://www.yelp.com/search?cflt=hotdogs\u0026find_desc=\u0026find_loc=6505+W+Park+Blvd%2C+Plano+75093",
          "name":"Fast Food"
        }
      ],
      "photo_url":"http://media1.fl.yelpcdn.com/bpthumb/n_46-H6Im23Hh8TuW7Ny1A/ms",
      "distance":3.7293586730957031,
      "name":"Kor-BQ",
      "neighborhoods":[

      ],
      "url":"http://www.yelp.com/biz/kor-bq-plano-2",
      "country":"USA",
      "avg_rating":4.0,
      "nearby_url":"http://www.yelp.com/search?find_desc=\u0026find_loc=6505+W+Park+Blvd%2C+Plano+75093",
      "reviews":[
        {
          "rating_img_url_small":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png",
          "user_photo_url_small":"http://media1.fl.yelpcdn.com/upthumb/DqmWkvOlZpFZ25nr6eRkhg/ss",
          "rating_img_url":"http://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png",
          "rating":4,
          "user_url":"http://www.yelp.com/user_details?userid=9oXfC6zHatmA8z7K0d6fng",
          "url":"http://www.yelp.com/biz/kor-bq-plano-2?hrid=5QYKAs-_96u7Dp9j178Uuw",
          "mobile_uri":"/biz/kor-bq-plano-2?full=True\u0026hrid=5QYKAs-_96u7Dp9j178Uuw",
          "text_excerpt":"Korean fusion done RIGHT. I love this place, had it 10+ times, and I still get it every once and a while. The owner is pretty funny and cool! Real genuine....",
          "user_photo_url":"http://media1.fl.yelpcdn.com/upthumb/DqmWkvOlZpFZ25nr6eRkhg/ms",
          "date":"2014-05-18",
          "user_name":"Kevin N.",
          "id":"5QYKAs-_96u7Dp9j178Uuw"
        }
      ],
      "photo_url_small":"http://media1.fl.yelpcdn.com/bpthumb/n_46-H6Im23Hh8TuW7Ny1A/ss"
    }
  ];
