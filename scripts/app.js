// eslint-disable-next-line no-undef
const p = new Promise((resolve) => {
    const name = 'javascript';
    resolve(name);
});
p.then(res=>console.log(res));


fetch (`https://reqres.in/api/users`)
.then(response => response.json())
.then(data => {
    console.log(data.data);
});


//used to find any one arry list
fetch (`https://reqres.in/api/users`)
 .then(response => response.json())
 .then(result => {
    result.data.forEach(result => {
        console.log(result.email);
    });    
    });


// used to list full array
fetch (`https://reqres.in/api/users`)
 .then(response => response.json())
  .then(result => { 
    console.log(result.data);      
     });   
     

 const tbody = document.getElementById(`target`);
 fetch (`https://reqres.in/api/users`)
  .then(response => response.json())
  .then(result => {
    const users = result.data;
    users.forEach(user=> {
       const row=`
      <tr>
        <td>${user.id}</td>
        <td>
            <img src="${user.avatar}" height="50"></td>
            <td>${user.first_name} ${user.last_name}</td>
           <td> ${user.email}</td>
      </tr>`;
      tbody.innerHTML +=row;
    });
    


  
}
 

  );