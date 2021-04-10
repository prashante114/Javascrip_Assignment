var ValidateForm = function(){
    this.checkNumeric = function(value){
        if(!parseInt(value) && value.length){
            alert('Value must be number');
            return false
        }
        
    };
    this.UniqueValue = function(value,emp_list){
        set_flag = true
        if (parseInt(value) && value.length){
            if (emp_list.length == 0){
                return true
            }
            else if (emp_list.length > 0){
                for(var i=0; i< emp_list.length; i++) {
                    if (emp_list[i]['EmpNo'] == value){
                        return false
                    }
                }
            }
        }
        return set_flag

    };
    this.checkChar = function(value){
        if(!isNaN(value) && value.length){
            alert('Employee Name should be only character ');
        }
    };
    this.NotNegative = function(){
        if(!parseInt(value && value.length)){
            alert('Value must be number');
        }
        else if(value<0 && value.length){
            alert('Salary not be an negative');
        }
    };
    this.FormNonEmpty = function(value,empno){
        if(value && empno){
            return true;
        }
        else{
            return false;
        }
       
    };
};