/*
Edit Distance
Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, deletion, or substitution.
Challenge: Do this in O(m x n) time, where m and n are the respective lengths of str1 and str2.



editDistance("cat", "cut") // 1

editDistance("wednesday", "sunday") // 5

editDistance("hackerrank", "hackreactor") // 6

For more information check out this article: https://en.wikipedia.org/wiki/Levenshtein_distance
*/
function substitution(str,ndx1,ndx2) {
	str = str.slice(0,ndx1) + str[ndx2] + str.slice(ndx1+1, ndx2) + str[ndx1] + str.slice(ndx2 +1)
}

function insertion(str,ndx,char) {
	str[ndx] = char;
}

function deletion(str,ndx) {
	str.replace(str[ndx],"")
}


function editDistance(str1, str2) {
    // your code here...
}