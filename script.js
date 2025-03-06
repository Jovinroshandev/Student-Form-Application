
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector(".container");
    document.querySelector('.submit').addEventListener('click', function (event) {
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let course = document.getElementById('course').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;
        let email = document.getElementById('email').value;
        console.log(name)
        console.log(age)
        console.log(course)
        console.log(gender)
        console.log(email)
        let table_content = document.querySelector('.data-table')
        table_content.insertAdjacentHTML('beforeend',
            `<tr>
                <td>${name}</td>
                <td>${age}</td>
                <td>${course}</td>
                <td>${gender}</td>
                <td>${email}</td>
                <td>
                    <button class='delete-btn'>Delete</button>
                </td>
            </tr>`
        );
        form.reset();

    });
    // Event Delegation for delete button
    document.querySelector('.data-table').addEventListener('click', function (event) {
        event.target.closest('tr').remove(); // Remove the closest row
    });
    
});