let dataObject = {
  tweet: "",
  tweets: [],
  max_length: 200,
};

let methodsObject = {
  submitData() {
    if (this.tweet.length <= this.max_length) {
      this.tweets.unshift(this.tweet);
      this.tweet = "";
    }
  },
};

let computedObject = {
    maxCharsText: function(){
        return `Max: ${this.tweet.length} of ${this.max_length} characters`;
    },
    errorMessage: function(){
        return `Max char limit reached! excess chars: ${this.max_length - this.tweet.length}`
    }
};

let app = new Vue({
  // all options goes here
  el: "#app",
  data: dataObject,
  computed: computedObject,
  methods: methodsObject,
});
