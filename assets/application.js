// Put your applicaiton javascript here
$(document).ready(function() {
  $(document).on('change', '#variant-id', function() {
    let variantId = this.value;
    let variantImage = $(
      '.single-product-image[data-variant="' + variantId + '"]'
    );
    variantImage
      .show()
      .siblings(':visible')
      .hide();
  });
});
