var get_product_logic = function(){
    this.form_id = ['ProductId','ProductName','Description','ProductPrice'];
    this.radio_name = ['Manufacturer','CategoryName'];
    this.product_key = []
    this.product_last_key
    this.storage_key = []
    this.product_info = {}
    this.getFormValue = function(){
        for(i = 0; i < this.form_id.length; i++) {
            var from_val = document.getElementById(this.form_id[i]).value;
            this.product_info[this.form_id[i]] = from_val
        }
        for(i = 0; i < this.radio_name.length; i++) {
            var ele = document.getElementsByName(this.radio_name[i]);
            for(j = 0; j < ele.length; j++) {
                if(ele[j].checked){
                    this.product_info[this.radio_name[i]] = ele[j].value 
                }
            }
        }
        return this.product_info
    };
    this.getStorageLastKey = function(){
       for(var i=0; i<localStorage.length;i++) {
            this.product_key.push(parseInt((localStorage.key(i)).replace("PRD-", "")));
        }
        if (this.product_key.length == 0){
            this.product_last_key = 100
        }
        else{
            this.product_key.sort()
            this.product_last_key = this.product_key[this.product_key.length-1]+1
        }
        
        return this.product_last_key
    };
    this.getStorageAllKey = function(){
        for(var i=0; i<localStorage.length;i++) {
             this.storage_key.push((localStorage.key(i)));
         }
         this.storage_key.sort()
         return this.storage_key
     };
     this.delProduct = function(){
        remove_list = []
        var inputElements = document.getElementsByClassName('checkbox')
        for(var i=0; inputElements[i]; ++i){
            if(inputElements[i].checked){
                remove_list.push(inputElements[i].value);
                localStorage.removeItem(inputElements[i].value)
            }
        }
        window.location.reload()
     };
     this.SearchProduct = function(value){
         var local_data = this.getLocalStoragedata()
         var searched_list = []
         if(value.length){
                for(var i=0; i< local_data.length;i++){
                    var data = JSON.parse(local_data[i])
                    if(data['ProductName'] == value || data['Description'] == value || data['Manufacturer'] == value || data['CategoryName'] == value){
                        searched_list.push(JSON.stringify(data));
                    }
                  
                } 
                return
         }
         else{
             window.location.reload()
             return local_data
         }
         
       
     };
     this.getLocalStoragedata = function(){
        var data = []
        var storage_key = this.getStorageAllKey ()
        var searched_list = []
        for(var i=0; i< storage_key.length;i++) {
            var record_dict = JSON.parse(localStorage.getItem(storage_key[i]))
            record_dict['ProductKey'] = storage_key[i]
            record_dict['Delete'] = "<input type='checkbox' class='checkbox' value ="+storage_key[i]+'>'
            data.push(JSON.stringify(record_dict));
        }
      return data
    };
};