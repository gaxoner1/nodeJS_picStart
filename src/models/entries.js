const mongoose from ('mongoose');

const { Schema } = mongoose;



const entriesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String, // String is shorthand for {type: String}
  comments:   String,
  rating: {
    type: Number,
    min:0,
    max:10,
    default: 0,
  },
  image: String,
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  dateCreated: defaultDate,
  dateUpdated: defaultDate,
  visitDate: {
    required: true,
    type: Date,
  },
}, {
  timestamps:true
});

const entry = mongoose.model('Entry', entriesSchema);

module.exports = entry;
