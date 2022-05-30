let m = document.getElementById("Addto");

function update()
{
    let tit = document.getElementById('title').value;
    let desc = document.getElementById('Description').value;
    ite = localStorage.getItem('itemsJSON');
    if (ite == null) 
    {
        itemJs = [];
        localStorage.setItem('itemsJSON', JSON.stringify(itemJs));
    } 
    else {
        item = localStorage.getItem('itemsJSON');
        itemJs = JSON.parse(item);
        if(tit!='' && desc!='')
        {itemJs.push([tit, desc]);
        }
        // itemJs.push([tit, desc]);
        localStorage.setItem("itemsJSON", JSON.stringify(itemJs));
    }
    getupdate();
}

function getupdate()
{
    tablebody = document.getElementById("tablebody");
    let str="";
    itemJs.forEach((element, index) => {
    str+=`
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>
    `
  });
  tablebody.innerHTML=str;
}

m.addEventListener("click", update);
update();


function deleted(index)
{
    item=localStorage.getItem('itemsJSON');
    itemJs=JSON.parse(item);
    itemJs.splice(index,1);
    console.log(index)
    localStorage.setItem('itemsJSON',JSON.stringify(itemJs));
    console.log(localStorage)
    getupdate();
}


function cleared()
{
    if(confirm("Do You want to clear all?"))
    {
        localStorage.clear();
        update();
    }
}