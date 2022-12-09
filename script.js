function playSound(path) {
    var audio = new Audio(`./audio/${path}.m4a`);
    audio.play();
}

var sections = [
    {
        section: 'Food',
        phrases: [
            { text: 'Are you hungry?', file: 'hungry' },
            { text: 'Drink water', file: 'drink-water' },
            { text: 'Need to take medicine', file: 'medicine' },
        ],
    },
    {
        section: 'Movement',
        phrases: [
            { text: 'Don\'t leave the bed', file: 'dont-leave-bed' },
            { text: 'Do you need to go to the bathroom?', file: 'bathroom' },
            { text: 'Get up', file: 'get-up' },
            { text: 'Do you want to sit in the chair?', file: 'chair' },
            { text: 'Return to bed', file: 'return-to-bed' },
        ]
    },
    {
        section: 'Comfort',
        phrases: [
            {
                text: 'Does it hurt?', file: 'hurt'
            },
            { text: 'Are you cold?', file: 'cold' },
            { text: 'Are you hot?', file: 'hot' },
        ]
    },
    {
        section: 'Assurance',
        phrases: [
            {
                text: 'I will be back', file: 'be-back'
            },
            { text: 'Wait a moment', file: 'wait' },
            { text: 'Do you want to call family?', file: 'family' },
        ]
    }
];

var container = document.createElement('div');

for (let i = 0; i < sections.length; i++) {
    var section = document.createElement('div');
    var header = document.createElement("h2");
    header.innerHTML = sections[i].section;

    section.append(header);

    var phraseSection = document.createElement('div');
    phraseSection.style.display = 'flex';

    for (let j = 0; j < sections[i].phrases.length; j++) {
        var button = document.createElement("button");
        button.innerHTML = `<span>${sections[i].phrases[j].text}</span>`;
        button.classList.add("button");

        button.onclick = function () {
            playSound(sections[i].phrases[j].file);
        };

        phraseSection.append(button);
    }

    section.append(phraseSection);
    container.append(section);
}

document.body.appendChild(container);