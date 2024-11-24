const custom_reviews = {
  props: {
      reviews: {
          type: Array,
          default: () => [],
      },
  },
  data() {
      return {
          newReview: {
              author: '',
              rating: '',
              content: '',
          },
      };
  },
  methods: {
      submitReview() {
          if (this.newReview.author && this.newReview.rating && this.newReview.content) {
              const review = {
                  id: Date.now(),
                  author: this.newReview.author,
                  rating: this.newReview.rating,
                  content: this.newReview.content,
              };

              this.$emit('review_added', [...this.reviews, review]); // Emit updated reviews
              this.newReview = { author: '', rating: '', content: '' }; // Reset form
          }
      },
  },
};

app.component('custom_reviews', {
  extends: custom_reviews,
  template: '#custom_reviews',
});
