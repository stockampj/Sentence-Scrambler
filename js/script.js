jQuery(document).ready (function () {

    var userSentence= prompt("Type a sentence.");
    // var userSentence = "lorem ipsum dolor sit amet" ;

    var sentenceLength = userSentence.length;
    var minusOuterCharacters = userSentence.slice(1,sentenceLength-1)

    var firstLetter = userSentence.charAt(0);
    var firstLetterUpper = firstLetter.toUpperCase();
    var lastLetter = userSentence.charAt(sentenceLength-1);
    var lastLetterUpper = lastLetter.toUpperCase();
    var transform = firstLetterUpper + minusOuterCharacters + lastLetterUpper;

alert(transform);



});
