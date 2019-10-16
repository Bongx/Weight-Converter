//Convert Pounds
document.getElementById('lbsInput').addEventListener('input', function (e) {

    let lbs = e.target.value;
    document.getElementById('poundsOutput').innerHTML = lbs * 1;

    document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;

    document.getElementById('kgOutput').innerHTML = lbs / 2.2046;

    document.getElementById('ozOutput').innerHTML = lbs * 16;
});

//Convert grams
document.getElementById('gramsInput').addEventListener('input', function (e) {

    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs * 1;

    document.getElementById('kgOutput').innerHTML = lbs / 1000;

    document.getElementById('poundsOutput').innerHTML = lbs * 0.0022046;

    document.getElementById('ozOutput').innerHTML = lbs / 28.35;
});
//convert kilograms
document.getElementById('kgInput').addEventListener('input', function (e) {

    let lbs = e.target.value;
    document.getElementById('kgOutput').innerHTML = lbs * 1;

    document.getElementById('gramsOutput').innerHTML = lbs * 1000;

    document.getElementById('poundsOutput').innerHTML = lbs * 2.2046;

    document.getElementById('ozOutput').innerHTML = lbs * 35.274;
});

//convert oz
document.getElementById('ozInput').addEventListener('input', function (e) {

    let lbs = e.target.value;
    document.getElementById('ozOutput').innerHTML = lbs * 1;

    document.getElementById('gramsOutput').innerHTML = lbs * 28.35;

    document.getElementById('kgOutput').innerHTML = lbs / 35.274;

    document.getElementById('poundsOutput').innerHTML = lbs / 16;
});