async function addProduct() {
  await supabaseClient.from("products").insert([{
    product_name: prodName.value,
    price: prodPrice.value
  }]);

  alert("Product added");
}
