// MongoDB CRUD Operations

// 1. Insert a single document
db.collection.insertOne({
  field1: "value1",
  field2: "value2",
  field3: 123
});

// 2. Insert multiple documents
db.collection.insertMany([
  { field1: "value1", field2: "valueA" },
  { field1: "value2", field2: "valueB" },
  { field1: "value3", field2: "valueC" }
]);

// 3. Find all documents
db.collection.find();

// 4. Find documents where field equals a value
db.collection.find({ fieldName: "specificValue" });

// 5. Find documents where numeric field > value
db.collection.find({ numericField: { $gt: value } });

// 6. Find documents where numeric field < value
db.collection.find({ numericField: { $lt: value } });

// 7. Find documents with multiple conditions (AND)
db.collection.find({
  field1: "value1",
  field2: "value2",
  numericField: { $gt: 100 }
});
