const { default: axios } = require("axios")

module.exports = {
    name: "meme",
    description : "no ingpo",
    execute(msg, args){
        wancak = axios("http://api-1cak.herokuapp.com/post/{id}")
    }
}