const custom_description = {
  props: {
      product_description: {
          type: String,
          required: true,
      },
  },
};

app.component('custom_description', {
  extends: custom_description,
  template: '#custom_description',
});
