function main(){
	raw_words={
		'witnesses':'These dudes I know',
		'witness':'Some dude I know',
		'allegedly':'kinda probably',
		'new study':'tumblr post',
		'rebuild':'avenge',
		'space':'spaaace',
		'google glass':'Virtual boy',
		'smart phone':'pokedex',
		'smartphone':'pokedex',
		'electric':'atomic',
		'senator':'Elf-Lord',
		'car':'cat',
		'election':'eating contest',
		'congressional leaders':'river spirits',
		'homeland security':'Homestar Runner',
		'could not be reached for comment':'is guilty and everyone knows it',
		'and':"n'"
	};
	words={};
	for (var word in raw_words){
		words[word]={};
		words[word]['regex'] = new RegExp("\\b" + word + "\\b","gi");
		words[word]['new_val'] = raw_words[word];
	}
	var title = document.getElementsByTagName('title')[0].text;
	var title2 = document.getElementsByTagName('title')[0].text;
	var temp;
	for( var word in raw_words){
		if (title2.match(words[word]['regex'])){
			temp = title.replace(words[word]['regex'],words[word]['new_val']);
		}	
	}
	document.getElementsByTagName('title')[0].text = temp;
	var allTextNodes = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),tmptxt,tmpnode;
	while (allTextNodes.nextNode()) {
		tmpnode = allTextNodes.currentNode;
		tmptxt = tmpnode.nodeValue;
		for( var word in raw_words){
			if (tmptxt.match(words[word]['regex'])){
				tmpnode.nodeValue = tmptxt.replace(words[word]['regex'],words[word]['new_val']);
			}	
		}
	}
}
main();
