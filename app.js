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
    console.log("clicked postOffice 🏤")

    foundPeople('🏤')

}

function hospital() {
    console.log("clicked hospital 🏥")
}

function circus() {
    console.log("clicked circus 🏭")
}

function hotel() {
    console.log("clicked hotel 🏢")
}

function bank() {
    console.log("click bank 🏣")
}

function drawPeople() {
    locations.forEach((location) => {
        console.log(location)
        let inLocation = people.filter((person) => person.location == location)
        console.log(inLocation)
        let personPicture = inLocation.map((person) => person.picture + person.name)
        console.log(personPicture)
        document.getElementById(location).innerText = personPicture.join(',')

    });
}

function foundPeople('🏤') {
    people.forEach((person) => {
        if (currentlocation == person.location) {
            person.picture = '🦇'
        }
    }

    )






}


drawPeople()