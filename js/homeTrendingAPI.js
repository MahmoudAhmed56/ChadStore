let productsMiniOneDom=document.querySelector(".row.products.mini.ones"),productsMiniTowDom=document.querySelector(".row.products.mini.tow"),cartBody=document.querySelector(".cart-body"),cartHead=document.querySelector(".cart-head span"),itemNumber=document.querySelectorAll(".item-number-cart"),itemNumberFavorite=document.querySelectorAll(".item-number-favorite"),productsInCartLocalStorageString=localStorage.getItem("productsInCart"),productsInCartLocalStorageJson=JSON.parse(productsInCartLocalStorageString),noProductsDomCartMenu=document.querySelector(".mini-cart .no-products"),products=productTrendingMiniDB,cartNumber=document.querySelector(".cart-head span"),subTotal=document.querySelector(".subtotal p strong"),cartTotal=document.querySelector(".iscart .cart-total");function plural(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}let addedItems,drawProductsUI,drawProductsUIBigProduct,drawProductsUIMiniProduct,favoriteItem=localStorage.getItem("productsFavorite")?JSON.parse(localStorage.getItem("productsFavorite")):[],addedItem=productsInCartLocalStorageString?productsInCartLocalStorageJson:[],productsFeaturesDOMBigProduct=document.querySelector(".products.big");(drawProductsUIBigProduct=function(e=[]){let t=e.slice(0,1).map(e=>`\n    <div class="item">\n    <div class="offer">\n      <p>Offer ends at</p>\n      <ul class="flexCenter">\n        <li>1</li>\n        <li>15</li>\n        <li>27</li>\n        <li>60</li>\n      </ul>\n    </div>\n    <div class="media">\n      <div class="image">\n        <a \n          ><img\n            src="${e.imgUrl}"\n            alt="${e.title}"\n        /></a>\n      </div>\n      <div class="hover-able">\n      <ul>\n      <li class="active">\n        <a onclick="addedToFavoriteBig(${e.id})"><i class="ri-heart-${1==e.liked?"fill":"line"}"></i></a>\n      </li>\n      <li>\n      <a class="cart" data-fslightbox href="${e.imgUrl}" ><i class="ri-eye-line"></i></a>\n      </li>\n      <li>\n        <a onclick="addedToCart(${e.id})"><i class="ri-shopping-cart-line"></i></a>\n      </li>\n    </ul>\n      </div>\n      <div class="discount circle flexCenter">\n        <span>${e.discount}%</span>\n      </div>\n    </div>\n    <div class="content">\n      <div class="rating">\n        <div class="stars"></div>\n        <span class="mini-text">(${e.reviewsCount})</span>\n      </div>\n      <h3 class="main-links">\n        <a onclick="saveItemData(${e.id})">${e.title}</a>\n      </h3>\n      <div class="price">\n        <span class="current">$${e.price}</span\n        ><span class="normal mini-text">$${e.priceDashed}</span>\n      </div>\n      <div class="stock mini-text">\n        <div class="qty">\n          <span\n            >Stock:<strong class="qty-available"\n              >107</strong\n            ></span\n          ><span\n            >Sold:<strong class="qty-Sold">${e.Sold}</strong></span\n          >\n        </div>\n        <div class="bar"><div class="available"></div></div>\n      </div>\n    </div>\n  </div>\n        `);productsFeaturesDOMBigProduct.innerHTML=t.join("")})(JSON.parse(localStorage.getItem("products"))||products),(drawProductsUIMiniProduct=function(e=[]){let t=e.slice(1,7).map(e=>`\n        <div class="item">\n        <div class="media">\n          <div class="thumbnial object-cover">\n            <a>\n              <img\n                src="${e.imgUrl}"\n                alt="${e.title}"\n              />\n            </a>\n          </div>\n          <div class="hover-able">\n            <ul>\n              <li class="active">\n                <a class="cart" onclick="addedToFavoriteMini(${e.id})"><i class="ri-heart-${1==e.liked?"fill":"line"}"></i></a>\n              </li>\n              <li>\n                <a class="cart" data-fslightbox href="${e.imgUrl}" ><i class="ri-eye-line"></i></a>\n              </li>\n              <li>\n                <a  class="cart"\n                onclick="addedToCart(${e.id})">\n                <i class="ri-shopping-cart-line"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class="discount circle flexCenter">\n            <span>${e.discount}%</span>\n          </div>\n        </div>\n        <div class="content">\n          <h3 class="main-links">\n            <a onclick="saveItemData(${e.id})">${e.title}</a>\n          </h3>\n          <div class="rating">\n            <div class="stars"></div>\n            <span class="mini-text">(${e.reviewsCount})</span>\n          </div>\n          <div class="price">\n            <span class="current">$${e.price}</span>\n            <span class="normal mini-text">$${e.priceDashed}</span>\n          </div>\n          <div class="mini-text">\n            <p>${e.Sold} Sold</p>\n            <p>Free Shipping</p>\n          </div>\n        </div>\n      </div>\n        `);productsMiniOneDom.innerHTML=t.join("")})(JSON.parse(localStorage.getItem("products"))||products);let productsFeaturesDOM=document.querySelector(".products.main");function addedToCart(e){let t=(productTrendingMiniDB||productsInCartLocalStorageJson).find(t=>t.id===e);0===t.qty?Swal.fire({position:"center",icon:"success",title:"Added to cart",showConfirmButton:!1,timer:1500}):Swal.fire({title:"the item is already in cart",showClass:{popup:"\n          animate__animated\n          animate__fadeInUp\n          animate__faster\n        "},hideClass:{popup:"\n          animate__animated\n          animate__fadeOutDown\n          animate__faster\n        "}}),t.qty=1,addedItem.some(e=>e.id===t.id)?addedItem=addedItem.map(e=>(e.id===t.id&&(e.qty=1),e)):addedItem.push(t),cartBody.innerHTML="",addedItem.forEach(e=>{cartBody.innerHTML+=`\n    <ul class="products mini">\n      <li class="item">\n        <div class="thumbnail object-cover">\n          <a onclick="saveItemData(${e.id})"><img src="${e.imgUrl}" alt="${e.title}"></a>\n        </div>\n        <div class="item-content">\n          <p><a onclick="saveItemData(${e.id})">${e.title}</a></p>\n          <span class="price">\n            <span>$${e.price}</span>\n            <span class="fly-item"><span>${e.qty}x</span></span>\n          </span>\n        </div>\n        <a onclick="removeFromCart(${e.id})" class="item-remove"><i class="ri-close-line"></i></a>\n      </li>\n    </ul>`}),localStorage.setItem("productsInCart",JSON.stringify(addedItem));for(let e=0;e<itemNumber.length;e++)itemNumber[e].innerHTML=addedItem.length;0===addedItem.length?noProductsDomCartMenu.classList.add("show"):noProductsDomCartMenu.classList.remove("show"),cartNumber.innerHTML=addedItem.length;let n=[];addedItem.map(e=>n.push(e.price)),subTotal.innerHTML="$"+Math.round(plural(n)),cartTotal.innerHTML="$"+Math.round(plural(n))}function getUniqueArr(e,t){return e.map(e=>e[t]).map((e,t,n)=>n.indexOf(e)==t&&t).filter(t=>e[t]).map(t=>e[t])}function saveItemData(e){localStorage.setItem("productId",e),window.location="./page-single.html"}(drawProductsUI=function(e=[]){let t=e.slice(7,17).map(e=>`\n    <div class="item">\n    <div class="media">\n      <div class="thumbnial object-cover">\n        <a \n          ><img src="${e.imgUrl}" alt="${e.title}"\n        /></a>\n      </div>\n      <div class="hover-able">\n        <ul>\n          <li class="active">\n            <a onclick="addedToFavorite(${e.id})"><i class="ri-heart-${1==e.liked?"fill":"line"}"></i></a>\n          </li>\n          <li>\n          <a class="cart" data-fslightbox href="${e.imgUrl}" ><i class="ri-eye-line"></i></a>\n          </li>\n          <li>\n            <a onclick="addedToCart(${e.id})"><i class="ri-shopping-cart-line"></i></a>\n          </li>\n        </ul>\n      </div>\n      <div class="discount circle flexCenter"><span>${e.discount}%</span></div>\n    </div>\n    <div class="content">\n      <div class="rating">\n        <div class="stars"></div>\n        <span class="mini-text">(${e.reviewsCount})</span>\n      </div>\n      <h3 class="main-links">\n        <a onclick="saveItemData(${e.id})">${e.title}</a>\n      </h3>\n      <div class="price">\n        <span class="current">$${e.price}</span\n        ><span class="normal mini-text">$${e.priceDashed}</span>\n      </div>\n      <div class="footer">\n        <ul class="mini-text">\n          <li>Brand: ${e.information.BRAND}</li>\n          <li>Material: ${e.information.MATERIAL}</li>\n          <li>Gender: ${e.information.GENDER}</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n        `);productsFeaturesDOM.innerHTML=t.join("")})(JSON.parse(localStorage.getItem("products"))||products),(addedItems=function(){addedItem&&addedItem.map(e=>{cartBody.innerHTML+=`\n  <ul class="products mini">\n    <li class="item">\n      <div class="thumbnail object-cover">\n        <a onclick="saveItemData(${e.id})"><img src="${e.imgUrl}" alt="${e.title}"></a>\n      </div>\n      <div class="item-content">\n        <p><a onclick="saveItemData(${e.id})">${e.title}</a></p>\n        <span class="price">\n          <span>$${e.price}</span>\n          <span class="fly-item"><span>${e.qty}x</span></span>\n        </span>\n      </div>\n      <a onclick="removeFromCart(${e.id})" class="item-remove"><i class="ri-close-line"></i></a>\n    </li>\n  </ul>`});for(let e=0;e<itemNumber.length;e++)itemNumber[e].innerHTML=addedItem.length;for(let e=0;e<itemNumberFavorite.length;e++)itemNumberFavorite[e].innerHTML=favoriteItem.length;0===addedItem.length?noProductsDomCartMenu.classList.add("show"):noProductsDomCartMenu.classList.remove("show"),cartNumber.innerHTML=addedItem.length;let e=[];addedItem.map(t=>e.push(t.price)),subTotal.innerHTML="$"+Math.round(plural(e)),cartTotal.innerHTML="$"+Math.round(plural(e))})();let input=document.getElementById("searchInp");function search(e,t){let n=t.filter(t=>-1!==t.title.toLowerCase().indexOf(e.toLowerCase()));drawProductsUI(n)}function addedToFavorite(e){let t=products.find(t=>t.id===e);t.liked?Swal.fire({title:"the item is already in favorite",showClass:{popup:"\n          animate__animated\n          animate__fadeInUp\n          animate__faster\n        "},hideClass:{popup:"\n          animate__animated\n          animate__fadeOutDown\n          animate__faster\n        "}}):Swal.fire({position:"center",icon:"success",title:"Added to favorite",showConfirmButton:!1,timer:1500}),t.liked=!0;let n=getUniqueArr(favoriteItem=[...favoriteItem,t],"id");localStorage.setItem("productsFavorite",JSON.stringify(n)),products.map(e=>{e.id===t.id&&(e.liked=!0)}),localStorage.setItem("products",JSON.stringify(products)),drawProductsUI(products);for(let e=0;e<itemNumberFavorite.length;e++)itemNumberFavorite[e].innerHTML=n.length}function addedToFavoriteMini(e){let t=products.find(t=>t.id===e);t.liked?Swal.fire({title:"the item is already in favorite",showClass:{popup:"\n          animate__animated\n          animate__fadeInUp\n          animate__faster\n        "},hideClass:{popup:"\n          animate__animated\n          animate__fadeOutDown\n          animate__faster\n        "}}):Swal.fire({position:"center",icon:"success",title:"Added to favorite",showConfirmButton:!1,timer:1500}),t.liked=!0;let n=getUniqueArr(favoriteItem=[...favoriteItem,t],"id");localStorage.setItem("productsFavorite",JSON.stringify(n)),products.map(e=>{e.id===t.id&&(e.liked=!0)}),localStorage.setItem("products",JSON.stringify(products)),drawProductsUIMiniProduct(products);for(let e=0;e<itemNumberFavorite.length;e++)itemNumberFavorite[e].innerHTML=n.length}function addedToFavoriteBig(e){let t=products.find(t=>t.id===e);t.liked?Swal.fire({title:"the item is already in favorite",showClass:{popup:"\n          animate__animated\n          animate__fadeInUp\n          animate__faster\n        "},hideClass:{popup:"\n          animate__animated\n          animate__fadeOutDown\n          animate__faster\n        "}}):Swal.fire({position:"center",icon:"success",title:"Added to favorite",showConfirmButton:!1,timer:1500}),t.liked=!0;let n=getUniqueArr(favoriteItem=[...favoriteItem,t],"id");localStorage.setItem("productsFavorite",JSON.stringify(n)),products.map(e=>{e.id===t.id&&(e.liked=!0)}),localStorage.setItem("products",JSON.stringify(products)),drawProductsUIBigProduct(products);for(let e=0;e<itemNumberFavorite.length;e++)itemNumberFavorite[e].innerHTML=n.length}function removeFromCart(e){addedItem&&(addedItem=addedItem.filter(t=>t.id!==e),(addedItems=function(e){e&&(cartBody.innerHTML="",e.map(e=>{cartBody.innerHTML+=`\n          <ul class="products mini">\n          <li class="item">\n          <div class="thumbnail object-cover">\n          <a onclick="saveItemData(${e.id})"><img src="${e.imgUrl}" alt="${e.title}"></a>\n              </div>\n              <div class="item-content">\n                <p><a onclick="saveItemData(${e.id})">${e.title}</a></p>\n                <span class="price">\n                  <span>$${e.price}</span>\n                  <span class="fly-item"><span>${e.qty}x</span></span>\n                </span>\n              </div>\n              <a onclick="removeFromCart(${e.id})" class="item-remove"><i class="ri-close-line"></i></a>\n            </li>\n          </ul>`}));for(let t=0;t<itemNumber.length;t++)itemNumber[t].innerHTML=e.length;for(let e=0;e<itemNumberFavorite.length;e++)itemNumberFavorite[e].innerHTML=favoriteItem.length;0===e.length?noProductsDomCartMenu.classList.add("show"):noProductsDomCartMenu.classList.remove("show"),cartNumber.innerHTML=e.length;let t=[];e.map(e=>t.push(e.price)),subTotal.innerHTML="$"+Math.round(plural(t)),cartTotal.innerHTML="$"+Math.round(plural(t))})(addedItem),localStorage.setItem("productsInCart",JSON.stringify(addedItem)))}input.addEventListener("keyup",function(e){search(e.target.value,products),""===e.target.value.trim()&&drawProductsUI(products)});