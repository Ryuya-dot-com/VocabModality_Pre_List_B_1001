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
    "prominent.mp3",
    "fatigue.mp3",
    "garment.mp3",
    "realm.mp3",
    "elastic.mp3",
    "margin.mp3",
    "strain.mp3",
    "elderly.mp3",
    "sneeze.mp3",
    "gleam.mp3",
    "aisle.mp3",
    "limestone.mp3",
    "famine.mp3",
    "optimistic.mp3",
    "nomination.mp3",
    "prudent.mp3",
    "acquisition.mp3",
    "render.mp3",
    "agony.mp3",
    "provoke.mp3",
    "abundant.mp3",
    "shiver.mp3",
    "vow.mp3",
    "resign.mp3",
    "stern.mp3",
    "tolerate.mp3",
    "tenant.mp3",
    "conceal.mp3",
    "glimpse.mp3",
    "hospitality.mp3",
    "convey.mp3",
    "alliance.mp3",
    "plunge.mp3",
    "remainder.mp3",
    "soak.mp3",
    "portray.mp3",
    "moderate.mp3",
    "competent.mp3",
    "bankruptcy.mp3",
    "allowance.mp3",
    "contrary.mp3",
    "plague.mp3",
    "transparent.mp3",
    "punctual.mp3",
    "disguise.mp3",
    "bribe.mp3",
    "persistent.mp3",
    "thoughtful.mp3",
    "earnest.mp3",
    "feast.mp3"
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
