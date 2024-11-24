Vue.component("tab-section", {
    template: "#tab-section",
    props: {
      productDescription: {
        type: String,
        required: true,
      },
      reviews: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        activeTab: "description", // Default tab
      };
    },
    methods: {
      addReview(review) {
        this.$emit("add-review", review);
      },
    },
  });
  