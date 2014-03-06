(function() {
  var mongoose, schema;

  mongoose = require("mongoose");

  schema = mongoose.Schema({
<<<<<<< HEAD
    title: {
=======
    category: {
>>>>>>> 42640eca0b165bcc4717941db63898b8a63fc386
      type: String,
      required: true
    },
    subcategories: {
      type: Array,
<<<<<<< HEAD
      "default": []
    }
  });

=======
      "default": [],
      required: true
    }
  });

  module.exports = mongoose.model("Category", schema);

>>>>>>> 42640eca0b165bcc4717941db63898b8a63fc386
}).call(this);
