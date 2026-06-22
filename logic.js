document.getElementById('calculate-btn').addEventListener('click', function() {
    const creditsArray = document.querySelectorAll('.credits');
    const gradesArray = document.querySelectorAll('.grade');
    
    let totalPoints = 0;
    let totalCredits = 0;
    
    // Cleaned up loop to iterate accurately through all rows
    for (let i = 0; i < creditsArray.length; i++) {
        let creditVal = parseFloat(creditsArray[i].value);
        let gradeVal = parseFloat(gradesArray[i].value);
        
        // Ensure both credit and grade are valid numbers before calculating
        if (!isNaN(creditVal) && !isNaN(gradeVal)) {
            totalPoints += (creditVal * gradeVal);
            totalCredits += creditVal;
        }
    }
    
    let finalGPA = totalCredits > 0 ? (totalPoints / totalCredits) : 0;
    document.getElementById('gpa-display').innerText = finalGPA.toFixed(2);
});

// Logic to add a new row with the correct CIT/Anna University 10-point scale
document.getElementById('add-course-btn').addEventListener('click', function() {
    const rowContainer = document.getElementById('course-rows');
    const newRow = document.createElement('div');
    newRow.classList.add('course-row');
    newRow.innerHTML = `
        <input type="text" placeholder="Course Name (Optional)" class="course-name">
        <input type="number" placeholder="Credits" class="credits" min="1">
        <select class="grade">
            <option value="10.0">O (Outstanding)</option>
            <option value="9.0">A+</option>
            <option value="8.0">A</option>
            <option value="7.0">B+</option>
            <option value="6.0">B</option>
            <option value="0.0">RA / F (Fail)</option>
        </select>
    `;
    rowContainer.appendChild(newRow);
});
