const assert = require("chai").assert;
const breedDetails = require("../syncBreeds");

describe("#breedDetails", () => {
  it("returns breed details for the Bombay breed", () => {
    const expected =
      "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";

    const actual = breedDetails("Bombay");
    assert.strictEqual(actual, expected);
  });

  it("returns breed details for the Balinese breed", () => {
    const expected =
      "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";

    const actual = breedDetails("Balinese");
    assert.strictEqual(actual, expected);
  });

  it("returns undefined for a breed with no details", () => {
    const expected = undefined;
    const actual = breedDetails("Pug");
    assert.strictEqual(actual, expected);
  });
});
