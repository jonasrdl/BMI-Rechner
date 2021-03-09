function calculate() {
    let bmi;
    const weight = document.bmiform.gewicht.value;
    const height = document.bmiform.groesse.value;
    const bmiSpan = document.getElementById('bmiSpan');
    const heightInput = document.getElementById('heightInput');
    const weightInput = document.getElementById('weightInput');

    bmi = Math.round(weight / (Math.pow((height / 100), 2)));
    bmiSpan.innerText = 'Dein BMI beträgt: ' + bmi;

    if (weight < 10 || weight > 600) {
        swal('Ungültiges Gewicht. Bitte Daten erneut eingeben');

        heightInput.value = '';
        weightInput.value = '';

        return;
    }

    if (height < 50 || height > 400) {
        swal('Ungültige Größe. Bitte Daten erneut eingeben');

        heightInput.value = '';
        weightInput.value = '';

        return;
    }

    heightInput.value = '';
    weightInput.value = '';
}