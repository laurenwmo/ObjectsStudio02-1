// Code your orbitCircumference function here:

function orbitCircumference(altitude) {
  return 2*Math.PI * altitude
}

// Code your missionDuration function here:

function missionDuration(numOrbits, orbitRad = 2000, orbitSpeed = 28000) {
  let duration = (orbitCircumference(orbitRad) / orbitSpeed) * numOrbits;

  return duration.toFixed(2);


}



// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];

}

function getCrew(arr) {
    let crew = [];
    
    while (crew.length < 3) {
      let candidate = selectRandomEntry(arr);
      if (!crew.includes(candidate)) {
        crew.push(candidate)
      }
    }
    return crew
}




// Code your oxygenExpended function here:

function oxygenExpended(obj, hrs) {
  let o2Used = obj.o2Used(hrs);
  return o2Used;
}



// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};



let allCrew = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let crew = getCrew(allCrew) 
console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`)

let distance = orbitCircumference(2000).toFixed(2);
let hours = missionDuration(3)
console.log(`The mission will travel ${distance} km around the planet, and it will take ${hours} hours to complete.`)


let spacewalker = selectRandomEntry(crew)
let oxygen = oxygenExpended(spacewalker, hours)
console.log(`${spacewalker.name} will perform the spacewalk, which will last ${hours} hours and require ${oxygen} kg of oxygen.`)

