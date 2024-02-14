class TrieNode {
  charMap: Map<string, TrieNode>;
  isWord: boolean;
  constructor(isWord = false) {
    this.charMap = new Map();
    this.isWord = isWord;
  }
}
class Trie {
  root: TrieNode | null;
  constructor() {
    this.root = new TrieNode();
  }
  insert(word: string): void {
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
  search(word: string): boolean {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (cur.charMap.has(char)) {
        cur = cur.charMap.get(char);
      } else {
        return false;
      }
    }
    return cur.isWord;
  }

  startsWith(prefix: string): boolean {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (cur.charMap.has(char)) {
        cur = cur.charMap.get(char);
      } else {
        return false;
      }
    }
    return true;
  }
}
const t = new Trie();
t.insert("app");
t.insert("apple");
t.insert("beer");
t.insert("add");
t.insert("jam");
t.insert("rental");
console.log(t.search("apps"));
console.log(t.search("app"));
