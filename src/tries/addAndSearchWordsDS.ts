class TrieNode {
  charMap: Map<string, TrieNode>;
  isWord: boolean;
  constructor(isWord = false) {
    this.charMap = new Map();
    this.isWord = isWord;
  }
}
class WordDictionary {
  root: TrieNode | null;
  constructor() {
    this.root = new TrieNode();
  }
  addWord(word: string): void {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (cur.charMap.has(char)) {
        cur = cur.charMap.get(char);
      } else {
        const tempNode = new TrieNode();
        cur?.charMap.set(char, tempNode);
        cur = cur.charMap.get(char);
      }
      cur.isWord = cur.isWord || i === word.length - 1;
    }
  }
  search(word: string, cur = this.root): boolean {
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (char === ".") {
        return Array.from(cur.charMap).some((x) =>
          this.search( word.slice(i + 1),x[1]),
        );
      } else if (cur.charMap.has(char)) {
        cur = cur.charMap.get(char);
      } else {
        return false;
      }
    }
    return cur.isWord;
  }
}
const t = new WordDictionary();
t.addWord("bad");
t.addWord("dad");
t.addWord("mad");
console.log(t.search("pad"), "--");
console.log(t.search("bad"), "--");
console.log(t.search("..x"), "--");
