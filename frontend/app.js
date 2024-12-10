document.getElementById("toggleQuestAGreedy").addEventListener("click", function () {
    const requestData = {
        method: "greedy",
        abilities_needed: ["Healing", "Flying", "Animal Communication", "Sword Fighting", "Tree Climbing", "Mind Control", "Telekinesis", "Time Manipulation", "Invisibility", "Shapeshifting"],
        friends: {
            Rosa: ["Healing", "Flying", "Animal Communication", "Shapeshifting"],
            Em: ["Tree Climbing", "Mind Control", "Telekinesis"],
            Bily: ["Mind Control", "Telekinesis", "Time Manipulation", "Invisibility"],
            Lily: ["Shapeshifting", "Sword Fighting"],
            Sam: ["Time Manipulation", "Invisibility", "Sword Fighting"]
        }
    };

    fetch("http://127.0.0.1:5000/solve", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("toggleQuestAGreedyContentp").innerText = `Greedy Approach Result: ${data.result}`;
        document.getElementById("toggleQuestAGreedyContentp").style.display = "block";
    })
    .catch(error => console.error("Error:", error));
});

document.getElementById("toggleQuestABF").addEventListener("click", function () {
    const requestData = {
        method: "brute_force",
        abilities_needed: ["Healing", "Flying", "Animal Communication", "Sword Fighting", "Tree Climbing", "Mind Control", "Telekinesis", "Time Manipulation", "Invisibility", "Shapeshifting"],
        friends: {
            Rosa: ["Healing", "Flying", "Animal Communication", "Shapeshifting"],
            Em: ["Tree Climbing", "Mind Control", "Telekinesis"],
            Bily: ["Mind Control", "Telekinesis", "Time Manipulation", "Invisibility"],
            Lily: ["Shapeshifting", "Sword Fighting"],
            Sam: ["Time Manipulation", "Invisibility", "Sword Fighting"]
        }
    };

    fetch("http://127.0.0.1:5000/solve", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    })
    .then(response => response.json())
    .then(data => {
        document.querySelector(".toggleQuestABFContent").innerText = `Brute Force Result: ${data.result}`;
        document.querySelector(".toggleQuestABFContent").style.display = "block";
    })
    .catch(error => console.error("Error:", error));
});
