let customers = [];
let products = [];

window.onload = async () => {
  await loadCustomers();
  await loadProducts();
};

async function loadCustomers() {
  const { data } = await supabaseClient.from("customers").select("*");
  customers = data;
  renderCustomers(data);
}

function renderCustomers(data) {
  const select = document.getElementById("customerSelect");
  select.innerHTML = "";
  data.forEach(c => {
    select.innerHTML += `<option value="${c.customer_id}">${c.customer_name}</option>`;
  });
}

function filterCustomers() {
  const search = document.getElementById("customerSearch").value.toLowerCase();
  const filtered = customers.filter(c =>
    c.customer_name.toLowerCase().includes(search)
  );
  renderCustomers(filtered);
}

async function loadProducts() {
  const { data } = await supabaseClient.from("products").select("*");
  products = data;

  const select = document.getElementById("productSelect");
  select.innerHTML = "";
  data.forEach(p => {
    select.innerHTML += `
      <option value="${p.product_id}" data-price="${p.price}">
        ${p.product_name}
      </option>`;
  });
}

function calculateTotal() {
  const product = document.getElementById("productSelect");
  const price = product.selectedOptions[0].dataset.price;
  const qty = document.getElementById("quantity").value || 0;
  document.getElementById("totalAmount").value = price * qty;
}

async function addSale() {
  await supabaseClient.from("sales").insert([{
    customer_id: customerSelect.value,
    product_id: productSelect.value,
    purchase_date: saleDate.value,
    quantity: quantity.value,
    total_amount: totalAmount.value
  }]);

  alert("Sale recorded successfully");
}
