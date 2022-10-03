function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;

}
const scooter = new Scooter(2020, 'purple', 'any thing')


function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;

}
const driver = new Driver('bob', 30, '3 years')

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}

const pickupLocation = new PickupLocation('empire', 'erbil')