function calculate() {
    let bmi;
    const weight = document.bmiform.gewicht.value;
    const height = document.bmiform.groesse.value;
    const bmiSpan = document.getElementById('bmiSpan');
    const heightInput = document.getElementById('heightInput');
    const weightInput = document.getElementById('weightInput');

    bmi = Math.round(weight / (Math.pow((height / 100), 2)));
    bmiSpan.innerText = 'Dein BMI beträgt: ' + bmi;

    heightInput.value = '';
    weightInput.value = '';
}