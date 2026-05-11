let deathCount = 0;
let penisIntact = true;

const scenes = {

    bathroom_intro: {
        image: "images/bathroom_intro.png",

        text: `“Damn, how long was I out for?” Lil Noah said to no one as he awoke all alone on the bathroom floor.

The last thing he remembered was sitting on the toilet frantically masturbating. He thought it would be best to get one last ejaculation in before the creatures outside finally made their way through the last of his barricades.

But it appeared the loss of fluids was too much for his frail petite body and instead he fainted upon climax.

Lil Noah began to pull himself off the floor when he heard them again.

BLAM BLAM

A hand suddenly crashed through the window and reached for Lil Noah's head.

“Oh shit!” said Lil Noah as he ducked under the attempted grab and simultaneously pooped his pants.

CRASH CRASH

The zombie broke the rest of the glass and was now pulling himself into the house through the window.

What should Lil Noah do?`,

        choices: [
            {
                text: "Reach for the scissors on the counter and attempt to stab the zombie.",
                next: "scissors_death"
            },
            {
                text: "Run out of the bathroom, into the bedroom next door and hide in the dresser.",
                next: "placeholder_closet"
            },
            {
                text: "Run out of the bathroom, down the hallway, and into the kitchen.",
                next: "kitchen_scene"
            }
        ]
    },

    scissors_death: {
        image: "images/scissors_death.png",

        text: `Lil Noah grabbed the scissors from the counter with all of his might.

He watched the zombie slowly drag itself through the shattered bathroom window. Terrified beyond belief, Lil Noah waited for the perfect moment to strike.

“Grrrr…”

The zombie groaned as it pulled itself farther into the room.

“Now is my chance!” Lil Noah exclaimed.

The creature suddenly raised its head toward him, exposing its vulnerable eye socket.

Lil Noah pulled back his arm and delivered what he believed to be a perfect stab directly into the zombie’s eyeball.

Unfortunately, his weak and puny arms lacked the strength necessary to achieve any actual penetration.

The scissors lightly bounced off the zombie’s face.

“Hrrff… Hrrff…”

The zombie moaned in a way that sounded almost like laughter.

Before Lil Noah could react, the creature delivered a vicious backhand directly across his lil jaw, sending him crashing onto the bathroom floor.

The zombie climbed on top of him and began devouring his lil face.

As the world slowly faded to darkness, Lil Noah reflected on the many terrible decisions that had led him to this moment.

“I should have listened better when my friends talk…”`,

        choices: [
            {
                text: "Everything Goes Dark",
                death: true,
                tip: "PLAYER TIP: Lil Noah is not known for upper body strength."
            }
        ]
    },

    kitchen_scene: {
        image: "images/kitchen_scene.png",

        text: `Lil Noah narrowly escaped the zombie’s grasp and stumbled into the hallway.

Without thinking, he turned left toward the faint green glow of his microwave clock.

He burst into the kitchen and slammed the door behind him. For a brief moment, everything was quiet.

On the counter sat the old house phone Lil Noah kept strictly for emergencies.

Lil Noah stared at it.

“This is an emergency,” he thought. “I should call the sheriff!”

As he slowly approached the phone, another sound suddenly grabbed his attention.

HMMMMMMMMMMM…

The soft hum of the refrigerator filled the kitchen.

Lil Noah froze.

His stomach growled aggressively.

“But… I am hungry and parched,” Lil Noah muttered. “Maybe I should refuel first.”

What should Lil Noah do?`,

        choices: [
            {
                text: "Pick up the phone and call the sheriff.",
                next: "phone_scene"
            },
            {
                text: "Open the refrigerator.",
                next: "fridge_scene"
            }
        ]
    },

    phone_scene: {
        image: "images/phone_call_scene.png",

        text: `Lil Noah nervously grabbed the old house phone and quickly dialed 911.

The phone rang twice before an older cheerful voice answered.

“Evansville Sheriff’s Office, Sheriff Rusty speakin’.”

“Sheriff Rusty! It’s me! It’s Noah!”

“…Lil Noah?”

“…yes.”

Sheriff Rusty immediately groaned.

“Noah, I really ain’t got time for this tonight.”

“This ain’t a prank!” Lil Noah shouted. “There’s zombies outside my house!”

“Mhm.”

“I’m serious! One already busted through my bathroom window!”

“Noah, last week you called me sayin’ a possum stole your bike.”

“He DID steal it!”

CLICK.

Sheriff Rusty hung up the phone.

Lil Noah slowly lowered the receiver.

“Oh no…”

Then, somewhere deeper in the house:

CRASH.

What should Lil Noah do?`,

        choices: [
            {
                text: "Call Sheriff Rusty back.",
                next: "placeholder_phone_death"
            },
            {
                text: "Run to the bedroom and hide in the closet.",
                next: "placeholder_closet"
            }
        ]
    },

    fridge_scene: {
        image: "images/fridge_scene.png",

        text: `Lil Noah slowly pulled open the refrigerator door and peeked inside.

The pale refrigerator light illuminated his exhausted face.

Inside sat a depressing collection of sauces, condiments, expired fast food packets, and several old containers filled with mysterious broth.

Lil Noah immediately noticed two things.

The first was a white carton shoved awkwardly behind a jar of pickles.

The second was a container of leftover Chinese lo mein sitting on the middle shelf.

Lil Noah squinted at the lo mein.

“I think this is only like… four days old,” he muttered to himself. “That’s probably still good.”

His eyes slowly drifted back toward the white carton.

“Oh thank God,” Lil Noah whispered. “Almond milk.”

Lil Noah felt his stomach growl aggressively.

The zombies outside suddenly felt far less important than the leftovers in front of him.

What should Lil Noah do?`,

        choices: [
            {
                text: "Drink from the carton.",
                next: "milk_death"
            },
            {
                text: "Eat the leftover lo mein.",
                next: "lomein_death"
            },
            {
                text: "Close the refrigerator.",
                next: "fridge_cannot_close"
            }
        ]
    },

    fridge_cannot_close: {
        image: "images/fridge_scene.png",

        text: `Lil Noah slowly began closing the refrigerator door.

But just before it shut completely, he glanced back at the lo mein one final time.

The greasy noodles glistened beautifully beneath the refrigerator light.

Lil Noah froze.

“No…” he whispered weakly.

His stomach growled again.

Lil Noah reopened the refrigerator.`,

        choices: [
            {
                text: "DEVOUR THE LO MEIN",
                next: "lomein_death",
                className: "hangry-button"
            }
        ]
    },

    milk_death: {
        image: "images/milk_death_scene.png",

        text: `Lil Noah grabbed the white carton and took a massive gulp.

Almost immediately, his face twisted in confusion.

“Huh…”

The drink tasted strangely thick.

Lil Noah slowly lowered the carton and stared at it.

Then his eyes widened in horror.

The label simply said:

MILK.

“Oh no…”

A violent bubbling sensation erupted deep inside his stomach.

Lil Noah grabbed his abdomen as panic spread across his face.

“No no no no NO—”

KABOOM.

Lil Noah’s weak pathetic stomach exploded with catastrophic force.

The kitchen walls were forever changed.`,

        choices: [
            {
                text: "Everything Goes Dark",
                death: true,
                tip: "PLAYER TIP: Lil Noah’s weak pathetic body is highly vulnerable to dairy products."
            }
        ]
    },

    lomein_death: {
        image: "images/lomein_death_scene.png",

        text: `Lil Noah snatched the lo mein from the refrigerator and slammed the door shut behind him.

Without hesitation, he grabbed a fork from the kitchen drawer and collapsed into one of the dining room chairs.

The smell of cold greasy noodles filled the air.

Lil Noah’s eyes rolled back slightly.

“Ohhhh yeah…”

He began absolutely devouring the lo mein.

SLURRRRP.

MMMMMMPH.

SCHLORP.

The sounds echoing through the kitchen were horrifying.

Lil Noah moaned with grotesque satisfaction between enormous mouthfuls of noodles.

“MMMF… SO good…”

Unfortunately, every zombie within a two mile radius could also hear him eating.

Outside the house, the undead horde suddenly changed direction.

Toward Noah.

Toward the lo mein.

Lil Noah continued loudly scarfing noodles completely unaware as dozens of rotting figures closed in on the house.`,

        choices: [
            {
                text: "Everything Goes Dark",
                death: true,
                tip: "PLAYER TIP: Lil Noah is physically incapable of eating food quietly."
            }
        ]
    },

    placeholder_phone_death: {
        image: "images/phone_call_scene.png",

        text: `Lil Noah quickly grabbed the phone again and began dialing Sheriff Rusty back.

Before he could finish entering the number, a rotten set of teeth suddenly clamped down onto his lil neck from behind.

Lil Noah let out a pathetic choking noise as blood sprayed across the kitchen counter.

The zombies had finally made it inside the house.`,

        choices: [
            {
                text: "Everything Goes Dark",
                death: true,
                tip: "PLAYER TIP: Lil Noah sometimes struggles to recognize when people are ignoring him on purpose."
            }
        ]
    },

    placeholder_closet: {
        image: "images/kitchen_scene.png",

        text: `This path will be continued later.`,

        choices: [
            {
                text: "Start Over",
                next: "bathroom_intro"
            }
        ]
    }

};

const introScreen = document.getElementById("intro-screen");
const sceneScreen = document.getElementById("scene-screen");
const deathScreen = document.getElementById("death-screen");

const startButton = document.getElementById("start-click-area");
const restartButton = document.getElementById("restart-button");

const sceneImage = document.getElementById("scene-image");
const storyBox = document.getElementById("story-box");
const choicesBox = document.getElementById("choices");

const deathCountText = document.getElementById("death-count");
const penisStatusText = document.getElementById("penis-status");
const deathTipText = document.getElementById("death-tip");

startButton.addEventListener("click", () => {
    startNewRun();
});

restartButton.addEventListener("click", () => {
    deathScreen.style.display = "none";
    sceneScreen.style.display = "block";
    startNewRun();
});

function startNewRun() {
    penisIntact = true;

    introScreen.style.display = "none";
    deathScreen.style.display = "none";
    sceneScreen.style.display = "block";

    showScene("bathroom_intro");
}

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

        if (choice.className) {
            button.classList.add(choice.className);
        }

        button.textContent = choice.text;

        button.addEventListener("click", () => {

            if (choice.death) {
                showDeathScreen(choice.tip);
            } else {
                showScene(choice.next);
            }

            window.scrollTo(0, 0);
        });

        choicesBox.appendChild(button);
    });
}

function showDeathScreen(tip) {

    deathCount++;

    sceneScreen.style.display = "none";
    deathScreen.style.display = "block";

    deathCountText.textContent = `Deaths: ${deathCount}`;
    penisStatusText.textContent = `Penis Intact?: ${penisIntact ? "TRUE" : "FALSE"}`;
    deathTipText.textContent = tip;
}