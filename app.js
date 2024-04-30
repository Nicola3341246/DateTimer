import ShowMessageBox from "./scripts/message.js";

function setAction(form) {
    console.log(form.date.value);
    let targetDate = new Date(form.date.value + "T" + form.time.value);
    if (targetDate == "Invalid Date") {
        alert("Invalid date and time");
        ShowMessageBox(
            "You forgot to set the date and time!🤔\nIf you enter it I can continue.",
            "",
            3,
            Document.getElementById("messagePlace")
        );
        return false;
    }

    let currentTime = new Date();
    if (targetDate < currentTime) {
        const random = Math.floor(Math.random() * 10);
        switch (random) {
            case 0:
                ShowMessageBox(
                    "I'm not dr. Emmet Brown, I can't help you with that!😢\nType in something after the current time."
                );
                break;

            default:
                ShowMessageBox("You can not travel back in time!🕰\nAt least not with this app.");
                break;
        }
        return false;
    }

    document.getElementsByClassName("InputContainer")[0].style.display = "none";
    document.getElementsByClassName("CountdownContainer")[0].style.display = "block";
    timer(targetDate);

    return false;
}

async function timer(targetDate) {
    let timeLeft = getTimeLeft(targetDate);
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "EXPIRED";
    } else {
        setTimeout(timer, 1000, targetDate);
    }
}

function getTimeLeft(targetDate) {
    current = new Date();
    target = new Date(targetDate);
    return target - current;
}
