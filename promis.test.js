const SomeClass = require("./promise");

describe("testing promises",  () => {
   test("get Name, adds bassyouni to it 1", async () => {
       expect.assertions(1);
       const someClass = makeSUT();

       return someClass.getName().then((name) => {
           expect(name).toEqual("Omar Bassyouni");
       })
   });

   function makeSUT() {
       let mockNameFetcher = {
           fetchName() {
               return new Promise((resolve, reject) => {
                   resolve("Omar");
               })
           }
       }
       return new SomeClass(mockNameFetcher);
   }
});