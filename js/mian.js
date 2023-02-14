const __list = findElement("#card");
const __template = findElement("#product-temolate");
const searchInput = findElement("#search-input");
const $sort = findElement("#sort");

products.forEach((product) => {
  const productTemplate = __template.content.cloneNode(true);

  const __productName = findElement("#product__name", productTemplate);
  const __productEvalution = findElement(
    "#product__evaluation",
    productTemplate
  );
  const __productPrice = findElement("#product__price", productTemplate);
  const __productImg = findElement("img", productTemplate);
  const __productCategory = findElement("#category", productTemplate);

  __productName.textContent = product.name;
  __productEvalution.textContent = product.rating;
  __productPrice.textContent = product.price;
  __productCategory.textContent = product.category;

  __list.append(productTemplate);
});
