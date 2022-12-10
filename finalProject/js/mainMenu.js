import Tournaments from './tournamentRoster.js';
import Players from './teamRoster.js';


// Render the Main Menu for the application
function showMainMenu () {
    const menuElements = document.getElementById("menu");
    menuElements.innerText = "";
}



export default class MainMenu {
    createTeamRosterButton() {
        const teamRosterBtn = document.createElement("button")
        teamRosterBtn.textContent ="Team Roster"
        teamRosterBtn.addEventListener('click', () => {
            let menu = new Players('menu')
            menu.showTeamRoster()
        });
        teamRosterBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            let menu = new Players('menu');
            menu.showTeamRoster();
        });
        return teamRosterBtn;
    }

    createTournamentButton() {
        const tournamentRosterBtn = document.createElement("button")
        tournamentRosterBtn.textContent = "Tournament Roster"
        tournamentRosterBtn.addEventListener('click', () => {});
            let menu = new Tournaments('menu');
            menu.showTournamentRoster();
        tournamentRosterBtn.addEventListener('touchend', (ev) => {
            ev.preventDefault();
            let menu = new Tournaments('menu');
            menu.showTournamentRoster();
        })
        return tournamentRosterBtn;
    }
    
    showMenu() {
        showMainMenu();
        menu.appendChild(this.createTeamRosterButton())
        menu.appendChild(this.createTournamentButton())
    }
}