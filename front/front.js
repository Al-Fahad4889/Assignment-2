function fetchProducts() {
    fetch("http://localhost:5000/all-products")
      .then((res) => res.json())
      .then((data) => showData(data.products));
  }
  
  // function showData(response){
  //     const responseDiv = document.getElementById("response");
  //     responseDiv.innerHTML = `
  //     <h1>Status: ${response.status}</h1>
  //     <h1>Message: ${response.message}</h1>
  //     `
  // }
  
  function showData(response) {
    const productInfoContainer = document.getElementById(
      "product-info-container"
    );
    console.log(response);
  
    response.forEach((singleProduct) => {
      productInfoContainer.innerHTML += `
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure class="max-h-56"><img src=${singleProduct.thumbnail} alt="Laptop"  /></figure>
      <div class="card-body">
        <h2 class="card-title">${singleProduct.title}</h2>
   
        <div class="card-actions justify-end">
        <button onclick="fetchSingleData('${singleProduct.id}')" class="btn">Buy Now at ${singleProduct.price}$</button>
        </div>
      </div>
    </div>
          `;
    });
  }
  fetchProducts();
  
  function fetchSingleData(id) {
    fetch(`http://localhost:5000/single-product/${id}`)
      .then((res) => res.json())
      .then((data) => showDetails(data));
  }
  function showDetails(product){
    const detailContainer =document.getElementById("single-product-container");
    detailContainer.innerHTML = `
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure class="max-h-56"><img src=${product.thumbnail} alt="Laptop"  /></figure>
    <div class="card-body">
      <h2 class="card-title">${product.title}</h2>
      <p>${product.description}</p>
      <div class="card-actions justify-end">
      <button onclick="fetchSingleData('${product.id}')" class="btn">Buy Now at ${product.price}$</button>
      </div>
    </div>
  </div>
    `
  }