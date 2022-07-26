const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  
  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park('Jurassic Park', 20, [])
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Raptor', 'carnivore', 30);
    dinosaur3 = new Dinosaur('Stegasaurus', 'herbivore', 40)
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur);
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, [dinosaur]);
  } );

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinoCollection;
    assert.deepStrictEqual(actual, []);
  });

  
// confused by this one
  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.checkGuestsPerDay();
    assert.strictEqual(actual, 't-rex');
  });


  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2); 
    park.addDinosaur(dinosaur3);
    const actual = park.checkSpecies();
    assert.strictEqual(actual, park.dinoSpecies);
  } );

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2); 
    park.addDinosaur(dinosaur3);
    const actual = park.totalGuestsPerDay();
    assert.strictEqual(actual, 120);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalGuestsPerYear();
    assert.strictEqual(actual, 43800);
  });


  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 876000);
  });

  it('should be able to remove a dinosaur of particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur);
    const actual = park.removeDinosaurOfSpecies();
    assert.strictEqual(actual, park.dinoSpecies)
  })

});
