var EmployeeLogic = function(){
    this.emp_list = [];
this.addEmployee = function(emp){
    this.emp_list.push(emp);
    return true;
};
this.getEmployees = function(){
    return this.emp_list;
};
this.DelEmployees = function(value){
    console.log("++++++out+++",value)
    for (i=0;i<value.length;i++){
        console.log("+++++++++",value[i])
        this.emp_list.splice(value[i],1);
    }
    
};
this.UpdateEmployees = function(value){
    var emp_list = this.emp_list
    var set_flag = false
    for(var i=0; i< emp_list.length; i++) {
        console.log("+++++++@@@@@@@@++++",emp_list[i]['EmpNo'])
        if (emp_list[i]['EmpNo'] == value['EmpNo']){

            emp_list[i]['EmpName'] = value['EmpName']
            emp_list[i]['DeptName'] = value['DeptName']
            emp_list[i]['Salary'] = value['Salary']
            set_flag = true

        }
        
    }
    return set_flag
};

};