var friendsNames = ["ross", "rachel", "monica", "chandler", "joey", "phoebe", "gunther"];

module.exports = {
	friendsNames: friendsNames,
}

//Couldn't get word constructors to work

//var friendsNames = [];
//
//function Word(name) {
//	this.name = name;
//}
//
//function addWord(name) {
//	var w = new Word(name);
//	friendsNames.push(w);
//}
//
//addWord("ross");
//addWord("rachel");
//addWord("monica");
//addWord("chandler");
//addWord("joey");
//addWord("phoebe");
//addWord("gunther");
//
//var wordExport = Object.keys(friendsNames).map(function (key) {
//	return [Number(key), friendsNames[key]];
//});
//
//console.log(wordExport);
