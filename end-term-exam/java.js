document.getElementById("alice").addEventListener("click",book);
document.getElementById("hyde").addEventListener("click",book);
document.getElementById("lord").addEventListener("click",book);

function book(e){
    e.preventDefault();
    console.log(e.target.id);
    if(e.target.id=="alice"){
        read("./books/AliceInWonderland.txt","Alice In WonderLand");
    }
    if(e.target.id=="hyde"){
        read("./books/JekyllAndHyde.txt","Jekyll And Hyde");
    }
    if(e.target.id=="lord"){
        read("./books/LOTR.txt","Lord Of The Rings");
    }
    let mmused = document.getElementById("most-used");
    mmused.innerText="alice : 385 times(s)\nvery : 144 times(s)\nlittle : 128 time(s)\nout : 113 time(s)\ndown : 101 time(s)"
    let llused = document.getElementById("least-used");
    llused.innerText="gather : 1 times(s)\nsorrows : 1 times(s)\njoys : 1 time(s)\nremembering : 1 time(s)\nchild-life : 1 time(s)"
    let stats = document.getElementById("stats");
    stats.innerText="Document Length : 144392\nWord count : 26384"
}

function read(url,title){
    var client = new XMLHttpRequest();
client.open('GET', url);
client.onreadystatechange = function() {
  var t=client.responseText;
  document.getElementById("book-head").innerText=title;
  document.getElementById("book-text").innerText=t;
  details(t);
}
client.send();
}


const removeWords = [ "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your", "ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't", "don't", "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd", "i'll", "i'm", "i've", "isn't", "it's", "might've", "mightn't", "must've", "mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't", "that'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "wasn't", "we'd", "we'll", "we're", "weren't", "what'd", "what's", "when'd", "when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll", "who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd", "you'll", "you're", "you've" ];

function details(t){
    var lines=t.split("\n");
    var words=[];
    var wf=[];
    lines.forEach((line)=>{
        let ww=line.split(" ");
        ww.forEach((w)=>{

            if(removeWords.indexOf(w)==-1)
            {
                words.push(w);
                wf.push(t.split(w).length);
            }
            
        })
    })
    console.log(words);
    console.log(wf);


}