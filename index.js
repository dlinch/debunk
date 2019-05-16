var destupidify = require("destupidify")

function whatIsARandomItemFromTheCollection(collection) {
  return collection[Math.floor(Math.random()*collection.length)];
}

module.exports = {
  whatDoesThreeEqual: function() {
    return 3;
  },
  whatDoesNotContainThree: function() {
    noThree = Math.floor((Math.random()*1000000)).toString().replace(/3/g, '1');
    return parseInt(noThree);
  },
  whatDoesSeventeenEqual: function() {
    return 17;
  },
  whatProbablyDoesNotEqualSeventeen: function(){
    return Math.floor((Math.random()*1000)+1);
  },
  whatDoesSeventeenNotEqual: function(){
    var notSeventeen = 0;
    do {
      notSeventeen = Math.floor(Math.random() * 100);
    } while (notSeventeen === 17);
    return notSeventeen;
  },
  whatDoesShibleyHaveToSay: function() {
    var shibleyIsms = [
      "Sorry i'm late, guys!",
      "Dude! Fresh Starbucks food!!!",
      "Have you guys ever thought about the implications of strong AI coming to fruition in our lifetime? Such superintelligence would not be just another technological development; it would be the most important invention ever made, and would lead to explosive progress in all scientific and technological fields, as the superintelligence would conduct research with superhuman efficiency! To the extent that ethics is a cognitive pursuit, a superintelligence could also easily surpass humans in the quality of its moral thinking!!! Fuck!",
      "We're all wizards. No, seriously.",
      "Right on.",
      "Check out these comics!"
    ]
    return whatIsARandomItemFromTheCollection(shibleyIsms);
  },
  whosGoingToBeTheNextPresident: function(){
    var candidates = ["Hillary", "Bernie", "Donald Trump", "Jill Stein", "Marco Rubio", "Ted Cruz"]
    return whatIsARandomItemFromTheCollection(candidates);
  },
  doesItEqualThree: function(input){
    if(input === 3) {
      return destupidify.destupidifyAffirmativeVal("yes");
    } else {
      return destupidify.destupidifyNegativeVal("no");
    }
  },
  doesItEqualSeventeen: function(input){
    if(input === 17) {
      return destupidify.destupidifyAffirmativeVal("yes");
    } else {
      return destupidify.destupidifyNegativeVal("no");
    }
  }
};
