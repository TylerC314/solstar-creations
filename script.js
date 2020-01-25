function toggleNav() {
    if ($("nav").css("display") == "flex") {
        $("nav").css("display", "none");
    }
    else {
        $("nav").css("display", "flex");
    }
}

function displayProduct(productType) {
    $.getJSON(productType, json => {
        json.forEach(elem => {
            $(".container").append(`
        <div class="product-container">
            <img src="${elem.imgSrc}" alt="${elem.alt}" class="product-img">
            <div class="description-pricing-container">
                <p class="product-description">${elem.description}</p>
                <div class="pricing-container">
                    <p class="product-pricing pricing-text">$${elem.price}</p>
                    <p>Pricing does not include shipping and handling fees</p>
                </div>
            </div>
        </div>
    `)
        })
    })
}

function getProducts() {
    if(window.location.href.indexOf("drums") != -1){
        return "drums.json";
    }
    else if(window.location.href.indexOf("rattles") != -1){
        return "rattles.json";
    }
    else if(window.location.href.indexOf("glasswork" != -1)){
        return "glasswork.json";
    }
    else {
        return "";
    }
}

{displayProduct(getProducts())}