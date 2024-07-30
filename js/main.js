let newArrivalContainer = $.querySelector(".new-arrival-container");
let trendingNowContainer = $.querySelector(".trending-now-container");
let newCollectionContainer = $.querySelector(".new-collection-container");
let mostPopularContainer = $.querySelector(".most-popular-container");
let showAllProductBtn = $.querySelector(".show-all-product-btn");
let showBannerProductBtn = $.querySelector(".show-banner-product-btn");
let mainBoxesBtnArr = $.querySelectorAll(".main-boxes-btn");
let productContainerArr = $.querySelectorAll(".product-container");
let menCategory = $.querySelector(".men-category");
let womenCategory = $.querySelector(".women-category");

fetch(
  "https://api.backendless.com/E00D2420-4B94-448F-91C9-CD735A45C196/2360764B-B7DE-46FA-B8FB-8DEEF590B988/data/products?pagesize=100"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    newArrivalContainer.innerHTML = "";
    trendingNowContainer.innerHTML = "";
    newCollectionContainer.innerHTML = "";
    mostPopularContainer.innerHTML = "";
    data.forEach((product) => {
      if (product.collection) {
        product.collection.forEach((collectionItem) => {
          if (collectionItem == "new arrival") {
            if (!product.isAvail) {
              swiperItemsMakerNotAvail(
                newArrivalContainer,
                product.imgUrl[0],
                product.category,
                product.name
              );
            } else if (product.price[1]) {
              swiperItemsMakerWithOff(
                newArrivalContainer,
                product.imgUrl[0],
                enNumToPerNum(offPercent(product.price[0], product.price[1])),
                product.category,
                product.name,
                enNumToPerNum(product.price[0]),
                enNumToPerNum(product.price[1])
              );
            } else {
              swiperItemsMaker(
                newArrivalContainer,
                product.imgUrl[0],
                product.category,
                product.name,
                enNumToPerNum(product.price[0])
              );
            }
          }
          if (collectionItem == "trending now") {
            if (!product.isAvail) {
              swiperItemsMakerNotAvail(
                trendingNowContainer,
                product.imgUrl[0],
                product.category,
                product.name
              );
            } else if (product.price[1]) {
              swiperItemsMakerWithOff(
                trendingNowContainer,
                product.imgUrl[0],
                enNumToPerNum(offPercent(product.price[0], product.price[1])),
                product.category,
                product.name,
                enNumToPerNum(product.price[0]),
                enNumToPerNum(product.price[1])
              );
            } else {
              swiperItemsMaker(
                trendingNowContainer,
                product.imgUrl[0],
                product.category,
                product.name,
                enNumToPerNum(product.price[0])
              );
            }
          }
          if (collectionItem == "collection") {
            if (!product.isAvail) {
              swiperItemsMakerNotAvail(
                newCollectionContainer,
                product.imgUrl[0],
                product.category,
                product.name
              );
            } else if (product.price[1]) {
              swiperItemsMakerWithOff(
                newCollectionContainer,
                product.imgUrl[0],
                enNumToPerNum(offPercent(product.price[0], product.price[1])),
                product.category,
                product.name,
                enNumToPerNum(product.price[0]),
                enNumToPerNum(product.price[1])
              );
            } else {
              swiperItemsMaker(
                newCollectionContainer,
                product.imgUrl[0],
                product.category,
                product.name,
                enNumToPerNum(product.price[0])
              );
            }
          }
          if (collectionItem == "most popular") {
            if (!product.isAvail) {
              swiperItemsMakerNotAvail(
                mostPopularContainer,
                product.imgUrl[0],
                product.category,
                product.name
              );
            } else if (product.price[1]) {
              swiperItemsMakerWithOff(
                mostPopularContainer,
                product.imgUrl[0],
                enNumToPerNum(offPercent(product.price[0], product.price[1])),
                product.category,
                product.name,
                enNumToPerNum(product.price[0]),
                enNumToPerNum(product.price[1])
              );
            } else {
              swiperItemsMaker(
                mostPopularContainer,
                product.imgUrl[0],
                product.category,
                product.name,
                enNumToPerNum(product.price[0])
              );
            }
          }
        });
      }
    });
    let productNameArray = $.querySelectorAll(".product-name");
    isProductInWishlist(productNameArray);
    preLoaderDisappear()  
  });

showAllProductBtn.addEventListener("click", (e) => {
  switchToProductPage("collection", "all product", "همه محصولات");
});
showBannerProductBtn.addEventListener("click", (e) => {
  switchToProductPage("collection", "chvrsi", "CURB X CHVRSI");
});
mainBoxesBtnArr.forEach((mainBoxesBtn) => {
  mainBoxesBtn.addEventListener("click", (e) => {
    if((mainBoxesBtn.previousElementSibling.innerHTML.trim()).toLowerCase()=="new arrival"){
      switchToProductPage(
        "collection",
        `${(mainBoxesBtn.previousElementSibling.innerHTML.trim()).toLowerCase()}`,
        "محصولات جدید"
      ); 
    }else if((mainBoxesBtn.previousElementSibling.innerHTML.trim()).toLowerCase()=="trending now"){
      switchToProductPage(
        "collection",
        `${(mainBoxesBtn.previousElementSibling.innerHTML.trim()).toLowerCase()}`,
        "محبوب در این روزها"
      ); 
    }else if((mainBoxesBtn.previousElementSibling.innerHTML.trim()).toLowerCase()=="collection"){
      switchToProductPage(
        "collection",
        `${(mainBoxesBtn.previousElementSibling.innerHTML.trim()).toLowerCase()}`,
        "CURB X CHVRSI"
      ); 
    }else if((mainBoxesBtn.previousElementSibling.innerHTML.trim()).toLowerCase()=="most popular"){
      switchToProductPage(
        "collection",
        `${(mainBoxesBtn.previousElementSibling.innerHTML.trim()).toLowerCase()}`,
        "محبوب‌ترین ها"
      ); 
    }
  });
});
menCategory.addEventListener("click", (e) => {
  switchToProductPage("gender", "مرد", "مردانه");
});
womenCategory.addEventListener("click", (e) => {
  switchToProductPage("gender", "زن", "زنانه");
});
