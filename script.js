// script.js

function startTest() {
    const studentId = document.getElementById('student-id').value;
    const classSelect = document.getElementById('class-select').value;

    if (!studentId || !classSelect) {
        alert('学籍番号とクラスを入力してください。');
        return;
    }

    // テストを開始
    generateTest(audioFiles);
}

// 音声ファイルのリスト（audioフォルダ内に配置）
const audioFiles = [
    "audio/abundant.mp3",
    "audio/acquisition.mp3",
    "audio/agony.mp3",
    "audio/aisle.mp3",
    "audio/alliance.mp3",
    "audio/allowance.mp3",
    "audio/bankruptcy.mp3",
    "audio/bribe.mp3",
    "audio/competent.mp3",
    "audio/conceal.mp3",
    "audio/contrary.mp3",
    "audio/convey.mp3",
    "audio/disguise.mp3",
    "audio/earnest.mp3",
    "audio/elastic.mp3",
    "audio/elderly.mp3",
    "audio/famine.mp3",
    "audio/fatigue.mp3",
    "audio/feast.mp3",
    "audio/garment.mp3",
    "audio/gleam.mp3",
    "audio/glimpse.mp3",
    "audio/hospitality.mp3",
    "audio/limestone.mp3",
    "audio/margin.mp3",
    "audio/moderate.mp3",
    "audio/nomination.mp3",
    "audio/optimistic.mp3",
    "audio/persistent.mp3",
    "audio/plague.mp3",
    "audio/plunge.mp3",
    "audio/portray.mp3",
    "audio/prominent.mp3",
    "audio/provoke.mp3",
    "audio/prudent.mp3",
    "audio/punctual.mp3",
    "audio/realm.mp3",
    "audio/remainder.mp3",
    "audio/render.mp3",
    "audio/resign.mp3",
    "audio/shiver.mp3",
    "audio/sneeze.mp3",
    "audio/soak.mp3",
    "audio/stern.mp3",
    "audio/strain.mp3",
    "audio/tenant.mp3",
    "audio/thoughtful.mp3",
    "audio/tolerate.mp3",
    "audio/transparent.mp3",
    "audio/vow.mp3"
];

function generateTest(questions) {
    document.getElementById('student-form').style.display = 'none';
    const testSection = document.getElementById('test-section');
    testSection.style.display = 'block';

    questions.forEach((audioSrc, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const playButton = document.createElement('button');
        playButton.textContent = `音声を再生 (${2}回まで)`;
        let playCount = 0;

        playButton.addEventListener('click', () => {
            if (playCount >= 2) {
                alert('この音声は2回までしか再生できません。');
                return;
            }
            playCount++;
            const audio = new Audio(audioSrc);
            audio.play();
        });

        questionDiv.appendChild(document.createTextNode(`問題 ${index + 1}: `));
        questionDiv.appendChild(playButton);
        questionDiv.appendChild(document.createElement('br'));

        testSection.appendChild(questionDiv);
        testSection.appendChild(document.createElement('hr'));
    });
}