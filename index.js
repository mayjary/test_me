const students= {
    23929: {name:"Mayjary", branch:"AN",amt:50},
    23926: {name:"Rishit", branch:"AE",amt:50},
    23907: {name:"Soham", branch:"TE",amt:50},
}

function dis_table() {
    

    const get_roll = document.getElementById("get_roll").value 
    const table_contain = document.getElementById("table_contain")
    const data_show = document.getElementById("data_show")
    
    data_show.innerHTML=' '



    if(students[get_roll]){
        const student = students[get_roll]

        const row = `<tr>
                    <td>${get_roll}</td>
                    <td>${student.name}</td>
                    <td>${student.branch}</td>
                    <td>₹${student.amt}</td>
                    <td>Unpaid</td>
                    </tr>`
        
        data_show.innerHTML = row

        table_contain.style.display = 'block'
    } else {
        alert("Roll number not found!")
        table_contain.style.display = 'none'
    }
}