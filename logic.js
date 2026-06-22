document.getElementById('calculate-btn').addEventListener('click', function() {
    const creditsArray = document.querySelectorAll('.credits');
    const gradesArray = document.querySelectorAll('.grade');
    
    let totalPoints = 0;
    let totalCredits = 0;
    
    for (let i = 0; i < creditsArray.value || i < creditsArray.length; i++) {
        let creditVal = parseFloat(creditsArray[i].value);
        let gradeVal = parseFloat(gradesArray[i].value);
        
        if (!isNaN(creditVal)) {
            totalPoints += (creditVal * gradeVal);
            totalCredits += creditVal;
        }
    }
    
    let finalGPA = totalCredits > 0 ? (totalPoints / totalCredits) : 0;
    document.getElementById('gpa-display').innerText = finalGPA.toFixed(2);
});

// Logic to add a new row
document.getElementById('add-course-btn').addEventListener('click', function() {
    const rowContainer = document.getElementById('course-rows');
    const newRow = document.createElement('div');
    newRow.classList.add('course-row');
    newRow.innerHTML = `
        <input type="text" placeholder="Course Name (Optional)" class="course-name">
        <input type="number" placeholder="Credits" class="credits" min="1">
        <select class="grade">
            <option value="4.0">O (Outstanding)</option>
            <option value="4.0">A+</option>
            <option value="3.5">A</option>
            <option value="3.0">B+</option>
            <option value="2.5">B</option>
            <option value="0.0">F (Fail)</option>
        </select>
    `;
    rowContainer.appendChild(newRow);
});