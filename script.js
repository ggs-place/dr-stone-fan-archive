const seasons = [
  {
    number: "01",
    title: "Stone World",
    count: "24 Episodes",
    episodes: [
      ["01", "Stone World", "A mysterious flash petrifies humanity. Senku awakens thousands of years later and begins rebuilding civilization with science."],
      ["02", "King of the Stone World", "Senku and Taiju revive Tsukasa, the strongest primate high-schooler, to survive a dangerous encounter with lions."],
      ["03", "Weapons of Science", "Senku and Tsukasa clash over the future of humanity while Taiju and Yuzuriha work to protect Senku’s plan."],
      ["04", "Fire the Smoke Signal", "Senku creates gunpowder, but the explosion reveals his location and exposes the existence of another human settlement."],
      ["05", "Stone World the Beginning", "Senku’s group is separated, and Taiju and Yuzuriha try to survive while Tsukasa begins his new-world vision."],
      ["06", "Two Nations of the Stone World", "Senku is secretly revived and encounters Kohaku, a powerful fighter from a nearby village."],
      ["07", "Where Two Million Years Have Gone", "Senku learns about Ishigami Village and promises to create medicine for Kohaku’s seriously ill sister."],
      ["08", "Stone Road", "The Kingdom of Science begins producing iron and planning the difficult process of creating antibiotics."],
      ["09", "Let There Be the Light of Science", "Senku develops electricity and light, giving the village a glimpse of modern technology."],
      ["10", "A Flimsy Alliance", "Senku and Chrome search for materials while Gen Asagiri becomes a key part of the Kingdom of Science."],
      ["11", "Clear World", "The village receives glass technology, allowing Senku to improve medicine and create useful scientific tools."],
      ["12", "Buddies Back to Back", "Senku and Chrome enter a dangerous cave to collect sulfur while the village prepares for the Grand Bout."],
      ["13", "Masked Warrior", "The village tournament begins, and Senku uses strategy to advance while searching for a way to save Ruri."],
      ["14", "Master of Flame", "Kohaku faces powerful competitors, and Senku’s scientific preparations become essential to the tournament."],
      ["15", "The Culmination of Two Million Years", "The tournament reaches its climax as Senku races to secure leadership and deliver the cure."],
      ["16", "A Tale for the Ages", "Ruri is cured, and the village’s mysterious origins begin to connect with Senku’s own family history."],
      ["17", "A Hundred Nights and a Thousand Skies", "The story of Byakuya and the astronauts reveals how Ishigami Village survived the petrification event."],
      ["18", "Stone Wars", "Tsukasa’s army approaches, forcing Senku’s village to develop weapons and defensive strategies."],
      ["19", "To Modernity", "The Kingdom of Science builds communication technology while preparing for a direct conflict with Tsukasa."],
      ["20", "The Age of Energy", "Senku develops a generator and uses modern energy production to strengthen the village."],
      ["21", "Spartan Crafts Club", "The scientific team prepares for war by creating advanced tools, weapons, and communication equipment."],
      ["22", "The Treasure", "Senku and his allies put their plan into action while the battle with Tsukasa’s army draws closer."],
      ["23", "Wave of Science", "The Kingdom of Science launches its counterattack using technology, teamwork, and psychological tactics."],
      ["24", "Voices Over the Endless Distance", "The cell phone project succeeds, allowing the Kingdom of Science to communicate across enemy territory."]
    ]
  },
  {
    number: "02",
    title: "Stone Wars",
    count: "11 Episodes",
    episodes: [
      ["01", "Stone Wars Beginning", "Senku’s group prepares for the final confrontation with Tsukasa while Gen attempts to manipulate enemy intelligence."],
      ["02", "Hotline", "The Kingdom of Science begins its communications operation and sets a plan in motion to divide Tsukasa’s forces."],
      ["03", "Call from the Dead", "Chrome is imprisoned but uses science and observation to search for a way to escape."],
      ["04", "Full Assault", "Senku launches a bold attack using vehicles and technology against Tsukasa’s heavily guarded base."],
      ["05", "Steam Gorilla", "The Kingdom of Science’s automobile becomes central to a high-speed assault on the Empire of Might."],
      ["06", "Prisoners of War", "Chrome attempts to convert allies inside Tsukasa’s empire while Senku’s team prepares a rescue."],
      ["07", "Secret Mission", "The scientific team infiltrates enemy territory and relies on deception to protect its larger strategy."],
      ["08", "Final Battle", "Senku and Tsukasa finally face the consequences of their opposing visions for civilization."],
      ["09", "To Destroy and to Save", "The battle ends, but Hyoga’s betrayal creates a new threat for the exhausted survivors."],
      ["10", "Humanity’s Strongest Tag Team", "Senku and Tsukasa cooperate against Hyoga, proving that science and strength can work together."],
      ["11", "Prologue of Dr. Stone", "The two factions unite, and a mysterious signal from across the world points the Kingdom of Science toward a new expedition."]
    ]
  },
  {
    number: "SP",
    title: "Ryusui Special",
    count: "1 Special",
    episodes: [
      ["S01", "Ryusui", "The Kingdom of Science revives the ambitious sailor Ryusui Nanami and builds a ship to begin exploring the world."]
    ]
  },
  {
    number: "03",
    title: "New World",
    count: "22 Episodes",
    episodes: [
      ["01", "New World Map", "Senku’s team begins its ocean voyage and prepares to cross the Pacific in search of the source of the petrification."],
      ["02", "Greed Equals Justice", "Ryusui’s ambition and sailing expertise help the Kingdom of Science navigate its first major expedition."],
      ["03", "Science Wars", "The crew uses science to solve problems at sea while discovering that the journey will be more dangerous than expected."],
      ["04", "Eyes of Science", "The team develops new methods of observation and encounters a signal connected to the petrification mystery."],
      ["05", "Science Vessel Perseus", "The Perseus reaches an island where strange threats and valuable clues await the explorers."],
      ["06", "Treasure Island", "The crew investigates the island and learns that its inhabitants possess powerful petrification weapons."],
      ["07", "Science War", "Senku’s allies fight to survive while the Kingdom of Science searches for a way to counter the enemy’s weapon."],
      ["08", "The Kingdom of Science’s Counterattack", "A tactical counterattack begins as the team combines engineering, deception, and courage."],
      ["09", "Beautiful Science", "The group uses refined scientific tools and new inventions to turn the battle in its favor."],
      ["10", "Science Wars", "The conflict escalates, revealing more about the island’s history and the origin of its strange technology."],
      ["11", "The Kingdom of Science Strikes Back", "Senku’s team executes a high-risk plan to reclaim its captured friends and obtain the petrification device."],
      ["12", "With This Fist, a Miracle", "The island battle reaches a decisive turning point through cooperation and an unexpected sacrifice."],
      ["13", "Science Wars", "The Kingdom of Science studies the petrification weapon and prepares to pursue the signal’s true source."],
      ["14", "The Medusa’s True Face", "The nature of the petrification device becomes clearer, changing the group’s understanding of the enemy."],
      ["15", "Science Wars", "The team processes its discoveries and creates a new plan to continue its worldwide investigation."],
      ["16", "First Contact", "The source of the mysterious communication finally becomes a central target for Senku’s global mission."],
      ["17", "Joker", "The expedition moves forward using clever engineering and a risky plan to reach the next destination."],
      ["18", "Beautiful Science", "New technology and unexpected allies help the Kingdom of Science continue its journey."],
      ["19", "Last Battle", "The current conflict approaches its conclusion as Senku’s group protects the future of humanity."],
      ["20", "Medusa’s Final Moment", "The team makes an important breakthrough involving the petrification technology."],
      ["21", "Treasure Island", "The survivors consolidate their knowledge and prepare for the next stage of the global journey."],
      ["22", "Beyond the New World", "The Kingdom of Science sets its sights beyond the island and toward the final mystery."]
    ]
  },
  {
    number: "04",
    title: "Science Future",
    count: "37 Episodes",
    episodes: [
      ["01", "Ryusui vs. Senku", "The Kingdom of Science continues its global journey and debates the best route toward the moon mission."],
      ["02", "Science Future", "Senku’s team begins converting its discoveries into the infrastructure needed for humanity’s next great leap."],
      ["03", "The Strongest Tool", "Engineering, negotiation, and scientific creativity help the group overcome a major obstacle."],
      ["04", "The Lab in the New World", "The Kingdom of Science establishes new research capabilities while continuing to investigate the petrification signal."],
      ["05", "Science Wars", "A new confrontation tests the crew’s inventions and their ability to cooperate under pressure."],
      ["06", "The Power of Science", "Senku applies accumulated knowledge to solve a problem that threatens the entire expedition."],
      ["07", "The Truth of the Petrification", "The mystery surrounding the petrification phenomenon advances through new evidence and experiments."],
      ["08", "The Scientific Method", "The team gathers data, tests hypotheses, and turns uncertainty into a practical plan."],
      ["09", "The Road to the Moon", "The moon mission becomes more concrete as the Kingdom of Science expands its manufacturing capabilities."],
      ["10", "The New Frontier", "The expedition reaches another stage of its journey and faces unfamiliar technical challenges."],
      ["11", "Humanity’s Future", "The group reflects on its goal while preparing for increasingly ambitious scientific construction."],
      ["12", "Science Future", "The first major phase of the final journey ends with new information about the enemy."],
      ["13", "Beyond the Horizon", "The Kingdom of Science advances into a new territory and begins another high-stakes operation."],
      ["14", "A New Rival", "A powerful opponent challenges Senku’s plans and forces the team to rethink its strategy."],
      ["15", "The Ultimate Invention", "The scientists combine multiple technologies to create a tool capable of changing the expedition."],
      ["16", "Science and Humanity", "Cooperation becomes essential as the group faces a problem no single specialist can solve."],
      ["17", "The Final Expedition", "The team prepares for the most dangerous section of its journey."],
      ["18", "The Answer", "Long-running questions about the petrification event begin receiving definitive answers."],
      ["19", "The Kingdom of Science", "Senku’s allies unite around a shared future and defend the achievements built since the beginning."],
      ["20", "What I Once Sought to Destroy", "A former enemy confronts the consequences of the past and chooses a different path."],
      ["21", "Our Dr. Stone", "The characters recognize that science belongs to everyone willing to learn, build, and protect others."],
      ["22", "Until We Meet Again", "The team reaches an emotional turning point before its final mission begins."],
      ["23", "Scientist, All Alone", "Senku faces the burden of the final plan and must rely on the strength of the people around him."],
      ["24", "Whole New World", "A new world opens before humanity as the Kingdom of Science pushes beyond previous limits."],
      ["25", "Future Engine", "The team develops the technology needed to move closer to its ultimate destination."],
      ["26", "Fire", "A dangerous technical challenge forces the scientists to protect their work and each other."],
      ["27", "The Universe Is Written in the Language of Mathematics", "Mathematical reasoning becomes central to solving an otherwise impossible problem."],
      ["28", "The Dawn of Computers", "The Kingdom of Science enters a new technological era with the creation of advanced computing."],
      ["29", "The Truth About Rockets", "The science of spaceflight becomes a practical reality as the team confronts the difficulties of rocketry."],
      ["30", "Stone to Space", "Humanity’s restored technology reaches beyond Earth in a major step toward the moon."],
      ["31", "Unknown Known", "The mission encounters information that changes how the characters understand their long struggle."],
      ["32", "Challengers of Science", "The Kingdom of Science meets its greatest intellectual and technological challenge."],
      ["33", "Wanting Everything", "The desire to save everyone drives the team to attempt an extraordinary solution."],
      ["34", "COUNT DOWN", "The final operation enters its most urgent phase as every part of the plan must work perfectly."],
      ["35", "GIANT STEP", "Humanity takes a historic step forward through courage, planning, and scientific achievement."],
      ["36", "WHYMAN", "The mystery behind the petrification phenomenon reaches its decisive confrontation."],
      ["37", "Ushers of an Exhilarating Future", "The story concludes with humanity looking toward a future shaped by curiosity, cooperation, and science."]
    ]
  }
];

const seasonList = document.getElementById("seasonList");
const expandAllButton = document.getElementById("expandAll");

function renderSeasons() {
  seasonList.innerHTML = seasons.map((season, seasonIndex) => `
    <article class="season ${seasonIndex === 0 ? "open" : ""}">
      <button class="season-header" aria-expanded="${seasonIndex === 0}">
        <span class="season-number">${season.number}</span>
        <span>
          <span class="season-title">${season.title}</span>
          <span class="season-count">${season.count}</span>
        </span>
        <span class="chevron">⌄</span>
      </button>

      <div class="episodes">
        ${season.episodes.map((episode) => `
          <div class="episode-card">
            <div class="episode-number">EP ${episode[0]}</div>

            <div>
              <div class="episode-title">${episode[1]}</div>
              <p class="episode-description">${episode[2]}</p>
            </div>

            <span class="episode-tag">Science</span>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function setupSeasonButtons() {
  document.querySelectorAll(".season-header").forEach((button) => {
    button.addEventListener("click", () => {
      const season = button.closest(".season");
      const isOpen = season.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

let allExpanded = false;

expandAllButton.addEventListener("click", () => {
  allExpanded = !allExpanded;

  document.querySelectorAll(".season").forEach((season) => {
    season.classList.toggle("open", allExpanded);

    const button = season.querySelector(".season-header");
    button.setAttribute("aria-expanded", String(allExpanded));
  });

  expandAllButton.textContent = allExpanded ? "Collapse All" : "Expand All";
});

renderSeasons();
setupSeasonButtons();
