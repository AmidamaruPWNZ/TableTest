async function getData() {
  const records = await fetch('https://dummyjson.com/users');
  const data = records.json();
  console.log(data);
  return data;
// return fetch('https://dummyjson.com/users')
// .then(res=>res.json())
// .then(res=>{
//   console.log(res);
//   return res;
// })

  let tab="";
  data.users||[].forEach(function(user) {
    tab += `<tr>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.age}</td>
    <td>${user.gender}</td>
    <td>${user.email}</td>
    </tr>`;
  });
  document.getElementById('tbody').innerHTML = tab;

  $('#userTable').DataTable({
    "data": data.users,
    "columns": [
      {"data": 'firstName'},
      {"data": 'lastName'},
      {"data": 'age'},
      {"data": 'gender'},
      {"data": 'email'},
    ]
  })

}
