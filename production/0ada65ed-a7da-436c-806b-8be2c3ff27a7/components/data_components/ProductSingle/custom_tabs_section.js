const customTabsSection = {
  template: '#custom_tabs_section',
  props: ['productDescription', 'reviews'],
  methods: {
    updateReviews(newReviews) {
      this.$emit('update_reviews', newReviews);
    },
  },
  style: `
    <style scoped>
      .tab-buttons {
        display: flex;
        border-bottom: 1px solid #ddd;
        margin-bottom: 16px;
      }
      .tab-buttons button {
        padding: 10px 20px;
        font-size: 16px;
        color: #555;
        cursor: pointer;
        background: #f9f9f9;
        border: 1px solid #ddd;
        border-bottom: none;
        margin-right: 2px;
        border-radius: 4px 4px 0 0;
        transition: all 0.3s ease;
      }
      .tab-buttons button.active {
        background: #ffffff;
        font-weight: bold;
        color: #333;
        border-bottom: 1px solid #ffffff;
      }
      .tab-buttons button:hover {
        background: #f0f0f0;
      }
    </style>
  `,
};
