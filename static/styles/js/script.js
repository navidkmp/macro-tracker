const dropdown = document.getElementById('foodDropdown');
const trigger = document.getElementById('food-trigger');
const menu = document.getElementById('foodMenu');

const foodInput = document.getElementById('food');
const selectedLabel = document.getElementById('selectedFoodLabel');

const options = document.querySelectorAll('.dropdown-option');


function closeDropdown() {

    menu.classList.remove('show');
    trigger.classList.remove('active');

    trigger.setAttribute('aria-expanded', 'false');

}


function openDropdown() {

    menu.classList.add('show');
    trigger.classList.add('active');

    trigger.setAttribute('aria-expanded', 'true');

}


trigger.addEventListener('click', function () {

    if (menu.classList.contains('show')) {
        closeDropdown();
    } else {
        openDropdown();
    }

});


options.forEach(option => {

    option.addEventListener('click', function () {

        const value = this.dataset.value;
        const label = this.dataset.label;

        foodInput.value = value;
        selectedLabel.textContent = label;

        options.forEach(item => {

            item.classList.remove('selected');
            item.setAttribute('aria-selected', 'false');

        });

        this.classList.add('selected');
        this.setAttribute('aria-selected', 'true');

        closeDropdown();

        trigger.focus();

    });

});


document.addEventListener('click', function (event) {

    if (!dropdown.contains(event.target)) {
        closeDropdown();
    }

});


document.addEventListener('keydown', function (event) {

    if (event.key === 'Escape') {
        closeDropdown();
        trigger.focus();
    }

});


// =========================================
// CALCULATE TOTALS
// =========================================

const table = document.getElementById('table');

let carbs = 0;
let protein = 0;
let fats = 0;
let calories = 0;


// Skip table header and total row

for (let i = 1; i < table.rows.length - 1; i++) {

    carbs += parseFloat(table.rows[i].cells[1].innerText) || 0;

    protein += parseFloat(table.rows[i].cells[2].innerText) || 0;

    fats += parseFloat(table.rows[i].cells[3].innerText) || 0;

    calories += parseFloat(table.rows[i].cells[4].innerText) || 0;

}


// =========================================
// UPDATE TOTALS
// =========================================

document.getElementById('total_carbs').innerText =
    Math.trunc(carbs);

document.getElementById('total_protein').innerText =
    Math.trunc(protein);

document.getElementById('total_fats').innerText =
    Math.trunc(fats);


document.getElementById('total_carbs_table').innerText =
    Math.trunc(carbs);

document.getElementById('total_protein_table').innerText =
    Math.trunc(protein);

document.getElementById('total_fats_table').innerText =
    Math.trunc(fats);

document.getElementById('total_calories_table').innerText =
    Math.trunc(calories);

document.getElementById('total_calories_display').innerText =
    Math.trunc(calories);


// =========================================
// CALORIE PROGRESS
// =========================================

const goal = 2000;

const caloriePercent = Math.min((calories / goal) * 100, 100);

document.getElementById('calorie-progress').style.width =
    caloriePercent + '%';

document.getElementById('calorie-percent').innerText =
    Math.round(caloriePercent) + '% completed';

document.getElementById('calorie-remaining').innerText =
    Math.max(goal - Math.trunc(calories), 0);


// =========================================
// MACRO PERCENTAGES
// =========================================

const totalMacros = carbs + protein + fats;

const carbsPercentage = totalMacros
    ? Math.round((carbs / totalMacros) * 100)
    : 0;

const proteinPercentage = totalMacros
    ? Math.round((protein / totalMacros) * 100)
    : 0;

const fatsPercentage = totalMacros
    ? 100 - carbsPercentage - proteinPercentage
    : 0;


document.getElementById('carbs-percent').innerText =
    carbsPercentage + '%';

document.getElementById('protein-percent').innerText =
    proteinPercentage + '%';

document.getElementById('fats-percent').innerText =
    fatsPercentage + '%';


// =========================================
// DOUGHNUT CHART
// =========================================

const ctx = document.getElementById('myChart');

new Chart(ctx, {

    type: 'doughnut',

    data: {

        labels: ['Carbs', 'Protein', 'Fats'],

        datasets: [{

            data: [
                carbs,
                protein,
                fats
            ],

            backgroundColor: [
                '#38bdf8',
                '#a3e635',
                '#fb923c'
            ],

            borderWidth: 0,
            hoverOffset: 8,
            spacing: 4

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: true,

        cutout: '76%',

        plugins: {

            legend: {
                display: false
            }

        }

    }

});
