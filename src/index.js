module.exports = function check(str, bracketsConfig) {
	var br=bracketsConfig;
	var arr=[];
	out: for(var i=0; i<str.length; i++) {
			for (var j=0; j<br.length; j++){
				if (str[i]==br[j][0]){
					if (br[j][0]!=br[j][1]){
						arr.push(str[i]);
}
					else if (arr[arr.length-1]==br[j][0]) {
						arr.pop();
}
						else {
							arr.push(str[i]);
}
}
				else if (str[i]==br[j][1]){
					if (arr[arr.length-1]==br[j][0]){
						arr.pop();
}
					else {
						arr.push(str[i]);
						break out;
}
}

}
}
	if (arr.length>0){
		return (false);
}
	else {
		return (true);
}
}
