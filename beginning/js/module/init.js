const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', './data/employees.json');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let employees = xhr.response;
        let tbody = document.createElement('tbody');
           for (let employee of employees) {
        tbody.innerHTML += 
        `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.ext}</td>
            <td><a href="mailto:${employee.email}">${employee.email}</a></td>
            <td>${employee.dept}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
        }
        empTable.appendChild(tbody);

    }
});
xhr.onerror = (e) => {console.error(e.message)};
