const a = document.getElementById("a")
    let aAudio = new Audio();
    aAudio.src = "notes/A.mp3"
const b = document.getElementById("b")
    let bAudio = new Audio();
    bAudio.src = "notes/B.mp3"
const c = document.getElementById("c")
    let cAudio = new Audio();
    cAudio.src = "notes/C.mp3"
        const notesC = "cdefgab"
        const randomNoteC = notesC[Math.floor(Math.random() * notesC.length)]
        const randomNoteC1 = notesC[Math.floor(Math.random() * notesC.length)]
        const randomNoteC2 = notesC[Math.floor(Math.random() * notesC.length)]
        console.log ((randomNoteC))
        var randomNotePlay = randomNoteC + "Audio.play();"
        var randomNotePlay1 = randomNoteC1 + "Audio.play();"
        var randomNotePlay2 = randomNoteC2 + "Audio.play();"
        console.log(randomNotePlay)
const d = document.getElementById("d")
    let dAudio = new Audio();
    dAudio.src = "notes/D.mp3"
const e = document.getElementById("e")
    let eAudio = new Audio();
    eAudio.src = "notes/E.mp3"
const f = document.getElementById("f")
    let fAudio = new Audio();
    fAudio.src = "notes/F.mp3"
const g = document.getElementById("g")
    let gAudio = new Audio();
    gAudio.src = "notes/G.mp3"
    
    
    
a.addEventListener("click", function(){
    aAudio.play();
    
});
b.addEventListener("click", function(){
    bAudio.play();
    
});
c.addEventListener("click", function(){
    cAudio.play();
    setTimeout( () => {eval(randomNotePlay)},600);
    setTimeout( () => {eval(randomNotePlay1)},600 + 600);
    setTimeout( () => {eval(randomNotePlay2)},600 + 600 + 600);
    
    
});
d.addEventListener("click", function(){
    dAudio.play();
    
});
e.addEventListener("click", function(){
    eAudio.play();
    
});
f.addEventListener("click", function(){
    fAudio.play();
    
});
g.addEventListener("click", function(){
    gAudio.play();
    
});

//Create groups of notes that correspond to each key sig.
//melody notes should be random within the signature.
//timeout should be random but correspond to only half notes, 8th notes or 4 notes

//C group: C,D,E,F,G,A,B