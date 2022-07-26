const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];

}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinoCollection.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    this.dinoCollection.splice(dinosaur)
}

// confused by this one
Park.prototype.checkGuestsPerDay = function () {
    for (const dinosaur of this.dinoCollection) {
        if (dinosaur.guestsAttractedPerDay > 30) {
            return dinosaur.species
        }

    }
}

Park.prototype.checkSpecies = function (species) {
    let dinoSpecies = []
    for (const dinosaur of this.dinoCollection) {
        if (dinosaur.species === species)
        this.dinoSpecies.push(dinosaur)
    }
}

Park.prototype.totalGuestsPerDay = function () {
    let total = 0 
    for (const dinosaur of this.dinoCollection) {
        total += dinosaur.guestsAttractedPerDay;
    }

    return total;
}


Park.prototype.totalGuestsPerYear = function () {
    let totalPerDay = this.totalGuestsPerDay();
    let totalPerYear = totalPerDay * 365;
    return totalPerYear;
}



Park.prototype.totalRevenuePerYear = function () {
    const totalGuestsPerYear = this.totalGuestsPerYear();
    revenue = totalGuestsPerYear * this.ticketPrice;
    return revenue
}


Park.prototype.removeDinosaurOfSpecies = function (species) {
    for (const dinosaur of this.dinoCollection) {
        if (dinosaur.species === species);
        this.dinoCollection.splice(dinosaur);
    }
}

     
module.exports = Park