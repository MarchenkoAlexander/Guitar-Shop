function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = []; 

fetch("server/catalog.json")
  .then(res => res.json())
  .then(body => {
    CATALOG = body;

    // setTimeout(function() {
    //   spinnerPage.handlerClear();
    //   render();
    // }, 1000);

    spinnerPage.handlerClear();
    render();
  })
  .catch(error => {
    spinnerPage.handlerClear();
    errorPage.render();
  });