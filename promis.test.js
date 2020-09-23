const SomeClass = require("./promise");

describe("testing promises",  () => {
   test("add Bassyouni to name shouw add bassyoun", async () => {
       expect.assertions(1);
       let mockNameFetcher = {
           fetchName() {
               return new Promise((resolve, reject) => {
                   resolve("Omar");
               })
           }
       }
       const someClass = new SomeClass(mockNameFetcher);

       return someClass.getName().then((name) => {
           expect(name).toEqual("Omar Bassyouni");
       })
   });
});