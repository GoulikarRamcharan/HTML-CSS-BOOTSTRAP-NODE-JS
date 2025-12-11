var fs = require("fs");

var emp = [{
    empid : 1001,
    empname : "Harry",
    edept : "IT",
    empsalary : 23000,
    },
    {
    empid : 1002,
    empname : "Saritha",
    edept : "Devoloper",
    empsalary : 20000,
    },
    {
    empid : 1003,
    empname : "Monika",
    edept : "Sales",
    empsalary : 30000,
    }
];

var empstr = "";
for(var i = 0;i < emp.length ; i++){
    empstr += emp[i].empid + " , " + emp[i].empname+" , "+emp[i].edept+" , "+emp[i].empsalary + "\n";

    console.log(empstr);
    
}

fs.writeFileSync("Dem.txt",empstr);
