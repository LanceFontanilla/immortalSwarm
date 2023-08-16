const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤'
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤'
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤'
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥'
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
}
]


function postOffice() {
    //  console.log("clicked postOffice 🏤")
    swarm('🏤')
}

function hospital() {
    //  console.log("clicked hospital 🏥")
    swarm('🏥')
}

function circus() {
    // console.log("clicked circus 🏭")
    swarm('🏭')

}

function hotel() {
    // console.log("clicked hotel 🏢")
    swarm('🏢')
}

function bank() {
    // console.log("click bank 🏣")
    swarm('🏣')
}

let hoursLeft = 6

function drawPeople() {
    locations.forEach((location) => {
        //  console.log(location)
        let inLocation = people.filter((person) => person.location == location)
        //  console.log(inLocation)
        let personPicture = inLocation.map((person) => person.picture + person.name)
        // console.log(personPicture)
        document.getElementById(location).innerText = personPicture.join(',')

    });
}

function swarm(location) {
    let foundPeople = people.filter((person) => person.location == location)
    foundPeople.filter((person) => person.picture = '🦇')

    movePeople()
    win()
    drawPeople()


}

function win() {
    let bats = people.filter(person => person.picture == '🦇')
    let win = true
    hoursLeft = hoursLeft - 1;
    //console.log(hoursLeft)
    document.getElementById('hoursLeft').innerText = hoursLeft

    if (bats.length == people.length) {
        window.alert('You have Won!')
    }
}

function movePeople() {
    people.forEach((person) => {
        let randomIndex = Math.floor(Math.random() * locations.length)
        //console.log(randomIndex)
        person.location = locations[randomIndex]
    })
}


drawPeople()