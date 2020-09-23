const evaluateRegex = require("./regex");

describe("Regex underStanding", () => {
    test("[a-c] should match a b and c", () => {
        const stringToEvaluate = "ajshdjkhjbaakdA213 .c . .*";
        const regex = "[a-c]";
        expect( evaluateRegex(regex, stringToEvaluate) ).toBe("abaac")
    });

    test("special symbols: [^.\\+*]. should match all.", () => {
        const stringToEvaluate = "special symbols: [^.\\+*]. should match all";
        const regex = "[\\[\\]\\^\\.\\\\\\+\\*]";
        expect(evaluateRegex(regex, stringToEvaluate)).toBe("[^.\\+*].");
    });

    test(".* should match all characters", () => {
        const stringToEvaluate = "ajshdjkhjakdA213 . . .*";
        const regex = ".*";
        expect( evaluateRegex(regex, stringToEvaluate) ).toBe(stringToEvaluate)
    });

    // test("will match both 'he' or 'she'", () => {
    //     const stringToEvaluate = "'he' and 'she'";
    //     const regex = "s?";
    //     expect(evaluateRegex(regex, stringToEvaluate)).toBe(stringToEvaluate)
    // });

    test("\\s should match all spaces", () => {
        const stringToEvaluate = "asd ad s. . .*";
        const regex = "\\s";
        expect( evaluateRegex(regex, stringToEvaluate) ).toBe("    ")
    });

    test("\\s should match all spaces", () => {
        const stringToEvaluate = "asd ad s. . .*";
        const regex = "\\s";
        expect( evaluateRegex(regex, stringToEvaluate) ).toBe("    ")
    });

    test("^\\w+ should match first word in each line", () => {
        const stringToEvaluate = "My soul is wrought to sing of forms transformed";
        const regex = "^\\w+";
        expect( evaluateRegex(regex, stringToEvaluate) ).toBe("My")
    });

     test("\\w+$ should match last word in each line", () => {
         const stringToEvaluate = "My soul is wrought to sing of forms transformed";
         const regex = "\\w+$";
         expect( evaluateRegex(regex, stringToEvaluate) ).toBe("transformed")
     });

    test("\\w{3,} should match 3 or more chars", () => {
        const stringToEvaluate = "My soul is wrought";
        const regex = "\\w{3,}";
        expect( evaluateRegex(regex, stringToEvaluate) ).toBe("soulwrought")
    });

    test("\\w{3,5 should match from 3 to 5 chars", () => {
        const stringToEvaluate = "My soul is wrought";
        const regex = "\\w{3,5}";
        expect( evaluateRegex(regex, stringToEvaluate) ).toBe("soulwroug")
    });
})