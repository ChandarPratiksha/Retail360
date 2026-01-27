async function addCustomer() {
  await supabaseClient.from("customers").insert([{
    customer_name: custName.value,
    country: custCountry.value
  }]);

  alert("Customer added");
}
