// =====================================================
// LIL NOAH AND THE ZOMBIE HORDE
// Scene data lives here.
// Future scenes can be added by copying this structure.
// =====================================================

const scenes = {
    bathroom_intro: {
        image: "images/bathroom_intro.png",

        text: `“Damn… how long was I out for?” Lil Noah muttered to no one as he slowly awoke on the bathroom floor.

The last thing he remembered was sitting on the toilet frantically masturbating.

He figured it would be best to get one last ejaculation in before the creatures outside finally smashed through the last of his barricades.

Unfortunately, the loss of fluids proved too much for his frail petite body, and Lil Noah had apparently fainted upon climax.

Groaning, he began pulling himself off the floor when he heard them again.

BLAM BLAM

A rotten hand suddenly burst through the bathroom window and reached directly for his head.

“Oh shit!”

Lil Noah ducked beneath the grab and simultaneously pooped his pants.

CRASH CRASH

The zombie shattered the rest of the glass and began dragging itself into the house through the broken window.

What should Lil Noah do?`,

        choices: [
            {
                text: "Reach for the scissors on the counter and attempt to stab the zombie.",
                next: "placeholder_scissors"
            },
            {
                text: "Run out of the bathroom, into the bedroom next door, and hide in the dresser.",
                next: "placeholder_dresser"
            },
            {
                text: "Run out of the bathroom, down the hallway, and into the powder room.",
                next: "placeholder_powder_room"
            }
        ]
    },

    // =====================================================
    // PLACEHOLDER OUTCOMES
    // Replace these later with real scenes or death screens.
    // =====================================================

    placeholder_scissors: {
        image: "images/bathroom_intro.png",
        text: `Lil Noah reaches for the scissors.

This path will be written later.`,
        choices: [
            {
                text: "Start over",
                next: "bathroom_intro"
            }
        ]
    },

    placeholder_dresser: {
        image: "images/bathroom_intro.png",
        text: `Lil Noah bolts toward the bedroom.

This path will be written later.`,
        choices: [
            {
                text: "Start over",
                next: "bathroom_intro"
            }
        ]
    },

    placeholder_powder_room: {
        image: "images/bathroom_intro.png",
        text: `Lil Noah runs down the hallway toward the powder room.

This path will be written later.`,
        choices: [
            {
                text: "Start over",
                next: "bathroom_intro"
            }
        ]
    }
};

// =====================================================
// Screen elements
// =====================================================

const introScreen = document.getElementById("intro-screen");
const sceneScreen = document.getElementById("scene-screen");
const startButton = document.getElementById("start-click-area");

const sceneImage = document.getElementById("scene-image");
const storyBox = document.getElementById("story-box");
const choicesBox = document.getElementById("choices");

// =====================================================
// Start game
// =====================================================

startButton.addEventListener("click", () => {
    introScreen.style.display = "none";
    sceneScreen.style.display = "block";
    showScene("bathroom_intro");
});

// =====================================================
// Reusable scene renderer
// This is the template all future scenes will use.
// =====================================================

function showScene(sceneId) {
    const scene = scenes[sceneId];

    if (!scene) {
        alert("Scene not found: " + sceneId);
        return;
    }

    sceneImage.src = scene.image;
    storyBox.textContent = scene.text;

    choicesBox.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.className = "choice-button";
        button.textContent = choice.text;

        button.addEventListener("click", () => {
            showScene(choice.next);
            window.scrollTo(0, 0);
        });

        choicesBox.appendChild(button);
    });
}