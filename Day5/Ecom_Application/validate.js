var ValidateForm = function(){
    this.form_id = ['ProductId','ProductName','Description','ProductPrice'];
    this.field_validation = [
            {'ProductPrice':['IsNumeric','NonNegative']}

    ]
    
    this.FormNonEmpty = function(){
        var flag = 'true'
        for(i = 0; i < this.form_id.length; i++) {
            var from_val = document.getElementById(this.form_id[i]).value;
            if (!from_val.length){
                alert("Please Fill the filed-"+this.form_id[i])
                var flag = false
                break;
                
            }
        }
        return flag
    };
    this.ProductNameUnique = function(storage_key){
        var flag = 'true'
        var product_name = document.getElementById('ProductId').value;
        for(var i=0; i< storage_key.length;i++) {
           if((JSON.parse(localStorage.getItem(storage_key[i])))['ProductId'] == product_name){
            alert("Product Id Alredy Exixt-"+product_name)
            var flag = false
            break;

           }
        }
        return flag
    }
    // this.FieldValidation = function(){
    //     for(var i=0; i< this.field_validation.length;i++){
    //         for (var j=0 ;j<(this.field_validation[i][Object.keys(this.field_validation[i])[0]]).length;j++){
    //             var from_val = document.getElementById(Object.keys(this.field_validation[i])[0]).value;
    //            console.log("0000",(this.field_validation[i][Object.keys(this.field_validation[i])[0]])[j])
    //         }
    //     }

    // }
    this.IsNumeric = function(){
        var value = document.getElementById('ProductPrice').value;
        if(!parseInt(!isNaN(value) && value.length)){
            alert('Product Price must be number');
            document.getElementById('ProductPrice').value =''
        }
        
    };
   
};
