var notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C_above'];
var trys = [];
var played_note = '';
var noteStreak = 0;
var failingStreak = 0;

function play_note(note){
  var audio = new Audio('notes/'+ note +'.mp3');
  audio.play();
}

function replay_note(){
  play_note(played_note);
}

function verifyNote(note) {
  play_note(note);
  if(played_note != ''){
    if(note == played_note){
      right_note();
    } else {
      wrong_note();
    }
  }
  document.getElementById("streak").innerHTML = noteStreak;
}

function right_note(){
  trys.push([failingStreak, played_note])
  var result = document.getElementById("result");
  result.innerHTML = "Sucesso!";
  result.classList.remove("failed");
  result.classList.add("success");
  noteStreak += 1;
  failingStreak = 0;
  setTimeout(play_random_note, 1000);
}

function wrong_note(){
  failingStreak += 1;
  var result = document.getElementById("result");
  result.innerHTML = "Errado!";
  result.classList.remove("success");
  result.classList.add("failed");
  noteStreak = 0;
}

function play_random_note(){
  var random = Math.floor(Math.random() * 8);
  if(played_note != notes[random]){
    played_note = notes[random];
    play_note(notes[random]);
  } else {
    play_random_note();
  }
}
