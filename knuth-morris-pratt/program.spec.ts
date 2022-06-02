import * as program from "./program";
import * as chai from "chai";

it("Test Case #1", function () {
  chai
    .expect(program.knuthMorrisPrattAlgorithm("aefoaefcdaefcdaed", "aefcdaed"))
    .to.deep.equal(true);
});

it("Test Case #2", function () {
  chai
    .expect(
      program.knuthMorrisPrattAlgorithm(
        "testwafwafawfawfawfawfawfawfawfa",
        "fawfawfawfawfa"
      )
    )
    .to.deep.equal(true);
});

it("Test Case #3", function () {
  chai
    .expect(
      program.knuthMorrisPrattAlgorithm(
        "tesseatesgawatewtesaffawgfawtteafawtesftawfawfawfwfawftest",
        "test"
      )
    )
    .to.deep.equal(true);
});

it("Test Case #4", function () {
  chai
    .expect(
      program.knuthMorrisPrattAlgorithm("aaabaabacdedfaabaabaaa", "aabaabaaa")
    )
    .to.deep.equal(true);
});

it("Test Case #5", function () {
  chai
    .expect(program.knuthMorrisPrattAlgorithm("abxabcabcaby", "abcaby"))
    .to.deep.equal(true);
});

it("Test Case #6", function () {
  chai
    .expect(program.knuthMorrisPrattAlgorithm("decadaafcdf", "daf"))
    .to.deep.equal(false);
});

it("Test Case #7", function () {
  chai
    .expect(
      program.knuthMorrisPrattAlgorithm("aefoaefcdaefcdaed", "aefcaefaeiaefcd")
    )
    .to.deep.equal(false);
});

it("Test Case #8", function () {
  chai
    .expect(
      program.knuthMorrisPrattAlgorithm(
        "aefcdfaecdaefaefcdaefeaefcdcdeae",
        "aefcdaefeaefcd"
      )
    )
    .to.deep.equal(true);
});

it("Test Case #9", function () {
  chai
    .expect(program.knuthMorrisPrattAlgorithm("bccbefbcdabbbcabfdcfe", "abc"))
    .to.deep.equal(false);
});
