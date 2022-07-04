let speakList = [];
let speakExecutionList = {};
let loketStatus = {};
let selectedVoice = '';
const socket = io(baseUrl);

const player = videojs('videojs');
window.onload = () => {
    player.src( {type: 'video/mp4', src: '/public_template/audio/notification.mp4'} );
    setTimeout(() => {
        document.getElementById('webSpeechConfirm').checked = true
    }, 2000);
}

if ("speechSynthesis" in window) {
    globalThis.antrianSynth = window.speechSynthesis;
}

const getVoices = async () => {
    const voices = await antrianSynth.getVoices()
    return voices
}

socket.on("nextAntrian", async function (msg) {
    try {
        const noLoket = $(`.loket${msg.loketId}`).data("numb");
        $(`.loket${msg.loketId} .loket-numb`).html(msg.noAntrian);
        callClient(msg.noAntrian, noLoket);
    } catch (err) {
        console.log(err);
    }
});

socket.on("callFromAdmin", async (msg) => {
    try{
        const hash = generateHash();
        const noLoket = await $(`.loket${msg.loketId}`).data("numb");
        $(`.loket${msg.loketId} .loket-numb`).html(msg.noAntrian);
        callClient(msg.noAntrian, noLoket, hash);
    }catch(err){
        console.log(err)
    }
});

$(".speak-confirm").on("click", function () {
    $(".confirm-overlay").addClass("visually-hidden");
});

const callClient = async (_noAntrianText, _noLoket, hash) => {

    noAntrianReplace = _noAntrianText;
    noAntrianReplace = noAntrianReplace.replace("-", "!, ");

    const speakListObject = {
        hash,
        noLoket: _noLoket,
        noAntrian: _noAntrianText,
        speak : `Nomor, antrian, ${noAntrianReplace}. Di loket. ${_noLoket}`
    }
    speakList.push(speakListObject);
};

const setActiveLoket = (noLoket, noAntrianText) => {
    $('.noloket-modal').html(noLoket);
    $('.noantrian-modal').html(noAntrianText);
    document.getElementById('modalToggle').checked = true
}

let antrianOnCall = '';
let currentHash = '';

setInterval(() => {
    let isSpeaking = antrianSynth.speaking ? true : false;
    if(player.paused()){
        if(!isSpeaking && speakList.length > 0){
            if(antrianOnCall != speakList[0].noAntrian){
                calling(speakList)
            }else{
                if(typeof speakList[0].hash != 'undefined' && speakList[0].hash != currentHash){
                    calling(speakList)
                }else{
                    speakList.shift();
                    document.getElementById('modalToggle').checked = false
                }
            }
        }
    }
},500)

const calling = async (speakList) => {
    if(player.paused()){
        player.play();
        const speak = new SpeechSynthesisUtterance(speakList[0].speak);
        if(selectedVoice == ''){
            const voices = await getVoices();
            const voiceId = await voices.filter(val => val.lang === 'id-ID');
            speak.voice = voiceId[0]
        }
        const {noLoket, noAntrian} = speakList[0];
        speak.rate = 0.85;
        speak.lang = "id-ID";
        antrianOnCall = speakList[0].noAntrian;
        currentHash = speakList[0].hash;
        player.one('ended', () => {
            setActiveLoket(noLoket, noAntrian)
            speechSynthesis.speak(speak);
        })
    }
}

  