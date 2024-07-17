const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const scoreDisplay = document.querySelector('.score');
const btn=document.querySelector('.btn');
let play=false;
let new_word = "";
let random_word = "";
let score =0;
let Words = ['JOYOUS','BLISS','DELIGHT','GUEST','SPOUSE',
    'EASE','PARK','NAIVE','RAIN','ZEST','CHEER',
    ,'PEACE','TRAIN','GLEE','THEME',
    'PIVOT','PLEASURE'];

const createNewWords =()=>{
    let random_num=Math.floor(Math.random() * Words.length);
    let temp_word = Words[random_num];
    console.log(temp_word);
    return temp_word;
}
const scramble = (arr) =>{
    for(let i =arr.length-1;i>0;i--)
        {
            let temp = arr[i];
            let j = Math.floor(Math.random()*(i+1));
            arr[i] = arr[j];
            arr[j] = temp;            
        }
    return arr.join("");
}
const reset_game =() =>
    {
        play =false;
        score = 0;
        scoreDisplay.innerHTML = `Score: ${score}`;
        btn.innerHTML = "Start";
        guess.classList.add('hidden');
        msg.innerHTML = "Oops!! Restart";
        guess.value = "";
    }
btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.innerHTML="Guess";
        guess.classList.toggle('hidden');
        new_word=createNewWords();
        random_word = scramble(new_word.split(""));
        msg.innerHTML=random_word;
    }
    else{
        let user_word = guess.value;
        if(user_word === new_word)
            {
                score = score+10;
                scoreDisplay.innerHTML = `Score: ${score}`;
                new_word = createNewWords();
                random_word = scramble(new_word.split(""));
                msg.innerHTML = `Yes you guessed it right! its ${new_word}`;
                msg.innerHTML = random_word;
                guess.value = "";
            }
            else {
                // console.log('incorrect');
                msg.innerHTML = 'Oops you guessed it wrong';
                setTimeout(() => {
                    msg.innerHTML = `Congratulations! Your total score is ${score}. Would you like to restart? <button class="restart-btn">Restart</button>`;
                    const restartBtn = document.querySelector('.restart-btn');
                    restartBtn.addEventListener('click', () => {
                        reset_game();
                    });
                }, 1000); 
            }
    }
});