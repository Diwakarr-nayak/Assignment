function renderTable(data) {
  const tableDiv = document.getElementById('studentTable');

  if (data.length === 0) {
    tableDiv.innerHTML = '<p>No records found.</p>';
    return;
  }

  const table = document.createElement('table');
  table.border = '1';
  table.cellPadding = '10';

  const headers = `<tr>
    <th>#</th><th>Name</th><th>Course</th><th>Batch</th><th>Mobile</th>
    <th>Parent</th><th>Email</th><th>Address</th><th>Follow-up</th>
  </tr>`;

  const rows = data.map((student, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${student.student}</td>
      <td>${student.course}</td>
      <td>${student.batch}</td>
      <td>${student.mobile}</td>
      <td>${student.parent}</td>
      <td>${student.email}</td>
      <td>${student.address}</td>
      <td>${student.followup}</td>
    </tr>
  `).join('');

  table.innerHTML = headers + rows;
  tableDiv.appendChild(table);
}

fetch('/api/students')
  .then(res => res.json())
  .then(renderTable)
  .catch(err => {
    document.getElementById('studentTable').innerHTML = '<p>Error loading data.</p>';
    console.error(err);
  });
