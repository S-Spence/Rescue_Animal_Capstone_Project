// Endpoint testing
const {MongoClient} = require('mongodb');

// Connection and DB
let connection;
let db; 

/* Setup and teardown methods*/
// Connect to the database
beforeAll(async () => {
  connection = await MongoClient.connect(global.__MONGO_URI__, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = await connection.db();
});
// Reset the database
beforeEach(async () => {
  await db.collection('animals').deleteMany({});
});

// Disconnect from the database
afterAll(async () => {
  await connection.close();
});


// Insert tests
describe('insert', () => {
  
  // Test to insert an object to the database
  it('should insert a doc into collection', async () => {
    // Use the animal collection
    const animals = db.collection("animals");
    // Insert a mock animal into the database
    const mockAnimal = {name: 'Testing jest 1'};
    await animals.insertOne(mockAnimal);
    // Find the new animal in the database
    const insertedAnimal = await animals.findOne({name: 'Testing jest 1'});
    expect(insertedAnimal).toEqual(mockAnimal);
  });
});

// Delete tests
describe('delete', () => {
  
  // Test to delete an object from the database
  it('should delete a document from the collection', async () => {
    // Use the animals collections
    const animals = db.collection("animals");
    // Add a mock animal to the database
    const mockAnimal = {name: 'Testing jest 1'};
    await animals.insertOne(mockAnimal);
    // Delete the new animal
    await animals.deleteMany({name: "Testing jest 1"})
    // Check that the new animal was deleted
    const res = await animals.findOne({name: "Testing jest 1"});
    expect(res).toEqual(null);
  })
})
