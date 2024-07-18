function calculateBMI() {
    // Get the values from the form
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // Convert height from cm to meters

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Determine BMI status
    let status = '';
    if (bmi < 18.5) {
        status = 'LU KURUSSSS';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'NORMAL BIASA AJA';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'LU GENDUTAN DIKIT';
    } else {
        status = 'GENDUT BANGET LU';
    }

    // Display the result
    document.getElementById('bmi-value').innerText = bmi;
    document.getElementById('bmi-status').innerText = status;
}
