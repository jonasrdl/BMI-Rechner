function calculate() {
    let bmi;
    const weight = document.bmiform.gewicht.value;
    const height = document.bmiform.groesse.value;
    const bmiSpan = document.getElementById('bmiSpan');
    const heightInput = document.getElementById('heightInput');
    const weightInput = document.getElementById('weightInput');

    if (weight < 10 || weight > 200) {
        alert('Falsches Gewicht. Bitte Daten erneut eingeben');

        return null;
    }
    if (height < 50 || height > 250) {
        alert('Falsche Größe. Bitte Daten erneut eingeben');

        return null;
    }

    bmi = Math.round(weight / (Math.pow((height / 100), 2)));
    bmiSpan.innerText = 'Dein BMI beträgt: ' + bmi;

    heightInput.value = '';
    weightInput.value = '';
}