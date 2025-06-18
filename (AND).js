db.collection.find({
  field1: "value1",
  field2: "value2",
  numericField: { $gt: 100 }
})
