jQuery(document).ready (function () {

  // let userSentence= prompt("Type a sentence.");
  let userSentence = "lorem ipsum dolor sit amet?";
  let workingSentence = userSentence.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"");

  function scramble1 (text) {
    let sentenceLength = text.length;
    let sansOuterCharacters= text.slice(1,sentenceLength-1);
    let firstLetter = text.charAt(0);
    let firstLetterUpper = firstLetter.toUpperCase();
    let lastLetter = text.charAt(sentenceLength-1)
    let lastLetterUpper = lastLetter.toUpperCase();
    return firstLetterUpper + sansOuterCharacters + lastLetterUpper;
  }

  function scramble2 (text) {
    let sentenceLength = text.length;
    let firstLetter = text.charAt(0);
    let firstLetterUpper = firstLetter.toUpperCase();
    let lastLetter = text.charAt(sentenceLength-1)
    let lastLetterUpper = lastLetter.toUpperCase();
    return lastLetterUpper + firstLetterUpper;
  }

  function scramble3 (text) {
    return scramble1(text) + scramble2(text);
  }

  function scramble4 (text) {
    let midCutStart = text.length/2;
    let midCut = Math.floor(midCutStart);
    let slideText = text.charAt(midCut);
    return slideText + scramble3(text);
  }

  function scramble5 (text) {

  }

  var result = scramble4(workingSentence);

    // var sentenceLength = userSentence.length;
    // var minusOuterCharacters = userSentence.slice(1,sentenceLength-1)
    //
    // var firstLetter = userSentence.charAt(0);
    // var firstLetterUpper = firstLetter.toUpperCase();
    // var lastLetter = userSentence.charAt(sentenceLength-1);
    // var lastLetterUpper = lastLetter.toUpperCase();
    // var transform = firstLetterUpper + minusOuterCharacters + lastLetterUpper;

  alert(result);



});
