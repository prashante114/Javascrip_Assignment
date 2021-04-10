
var get_product_logic = function(){
    this.ProductDrag = function(){

        var buttons = document.getElementsByName('productRow');
        
        for(var i=0;i<buttons.length;i++){
            buttons[i].addEventListener('dragstart', function(evt){
                // set the 'id' of the element being dragged into data transfer so that it will be used when the 'drop' event is executed
                var transfer_id = evt.dataTransfer.setData('Text', evt.target.id);
                var elementData = evt.dataTransfer.getData("Text");

            },false);
        }

        // get the target element when the drop is done
        var dvtgt = document.getElementById("target_table");
        // subscribe to drop and dragover events for the target
        dvtgt.addEventListener('drop',function(evt){
            evt.preventDefault();
            var elementData = evt.dataTransfer.getData("Text");
            evt.target.appendChild(document.getElementById(elementData));
            
            var select_tr = document.getElementById(elementData);
            var td = select_tr.getElementsByTagName("td");
            var d = new Date();
            var date = d.getDate()
            var minute = d.getMinutes()
            var sec = d.getSeconds()
            var id = date+""+minute+""+sec
            
            var product_details = {
                "id":id,
                "ProductId1":td[0].innerHTML,
                "ProductName1":td[1].innerHTML,
                "Description1": td[2].innerHTML,
                "ProductPrice1": td[3].innerHTML,
                "Manufacturer1": td[4].innerHTML,
                "CategoryName1":td[5].innerHTML
            };
            saveData(product_details,"Ecommerce","ProductCart")
            

        },false);

        dvtgt.addEventListener('dragover',function(evt){
            // do not perform any other operations untill the drop has not takes place
            evt.preventDefault();
        },false)

    };
};
crateDatabase = function(){
        //create database work on onload
        mydb = window.indexedDB.open("Ecommerce", 1);
        mydb.onupgradeneeded = function(e){
        var dbRef = e.target.result; 
        tbl = dbRef.createObjectStore('ProductCart', {keyPath: "id"});
        var columnConstraints = {unique:false};
       
        tbl.createIndex("ProductId1","ProductId",columnConstraints);
        tbl.createIndex("ProductName1","ProductName",columnConstraints);
        tbl.createIndex("Description1","Description",columnConstraints);
        tbl.createIndex("ProductPrice1","ProductPrice",columnConstraints);
        tbl.createIndex("Manufacturer1","Manufacturer",columnConstraints);
        tbl.createIndex("CategoryName1","CategoryName",columnConstraints);

        //create table for billing
        tb2 = dbRef.createObjectStore('Bill', {keyPath: "id"});
        tb2.createIndex("BillDate1","BillDate",columnConstraints);
        tb2.createIndex("Total1","Total",columnConstraints);
        
        mydb.onsuccess = function(e){
           alert("Database is created successfully")
        };
        // for error
        mydb.onerror = function(e){
           alert("Database creation failed")
        }

    };
  
};
getProductDetails = function(productid){
    

}
saveData = function(product_details,db_name,table_name){
    console.log("+++++++++++",db_name,table_name)
    // get the indexedDB Database Reference
    mydb = window.indexedDB.open(db_name);
    // subscribe to onsuccess and perform operations
    if(mydb){
        mydb.onsuccess=function(e){
            var tx = e.target.result.transaction(table_name, "readwrite");
            tbl = tx.objectStore(table_name);

           // pass the object to the add() method
            var saveOperations = tbl.add(product_details);

            // subscribe to success on operations
            saveOperations.onsuccess = function(e){
                window.location.reload()
            };
            // subscribe to error on operations
            saveOperations.onerror = function(e){
                alert("Error")
            };

        }    
    }else {
        alert("'Error in Save Operation, may be database is not open")
    }
};

function LoadData(){
    var records = [];
    mydb = window.indexedDB.open("Ecommerce");
    if(mydb){
        mydb.onsuccess=function(e){
            var tx = e.target.result.transaction("ProductCart", "readwrite");
            tbl = tx.objectStore("ProductCart");

            tx.oncomplete = function(){
                table = ui.table(records)
                document.getElementById('target_table').innerHTML = table;

            }    
            var readCursor = tbl.openCursor();
            readCursor.onsuccess = function(e){
            var reader = e.target.result;
                if(reader){
                    record_val = reader.value
                    record_val['Remove'] = "<input type='checkbox' class='checkbox',name='Remove' value ="+reader.value['id']+'>'
                    records.push(JSON.stringify(record_val));
                    reader.continue();
                }
            };
            readCursor.onerror = function(e){
                document.getElementById('dvstatus').innerHTML += 'read operation failed';
            };
        } 
    }
    else {
        document.getElementById('dvstatus').innerHTML += 'Error in Save Operation, may be database is not open';
    }
};
function RemoveData(){
    mydb = window.indexedDB.open("Ecommerce");
    if(mydb){
        mydb.onsuccess=function(e){
            var tx = e.target.result.transaction("ProductCart", "readwrite");
            tbl = tx.objectStore("ProductCart");
            var inputElements = document.getElementsByClassName('checkbox')
            for(var i=0; inputElements[i]; ++i){
                if(inputElements[i].checked){
                    tbl.delete(inputElements[i].value);
                }
            }
            window.location.reload()
            
        } 
    }
    
};

function generateBill(){
    var records = [];
    mydb = window.indexedDB.open("Ecommerce");
    if(mydb){
        mydb.onsuccess=function(e){
            var tx = e.target.result.transaction("ProductCart", "readwrite");
            tbl = tx.objectStore("ProductCart");

            tx.oncomplete = function(){
                Bill_data = BillingCalculation(records)
                saveData(Bill_data,"Ecommerce","Bill")
            }    
            var readCursor = tbl.openCursor();
            readCursor.onsuccess = function(e){
            var reader = e.target.result;
                if(reader){
                    records.push(reader.value);
                    reader.continue();
                }
            };
            readCursor.onerror = function(e){
                document.getElementById('dvstatus').innerHTML += 'read operation failed';
            };
        } 
    }

}

function orderSummery(){
    var records = [];
    mydb = window.indexedDB.open("Ecommerce");
    if(mydb){
        mydb.onsuccess=function(e){
            var tx = e.target.result.transaction("Bill", "readwrite");
            tbl = tx.objectStore("Bill");

            tx.oncomplete = function(){
                table = ui.table(records)
                document.getElementById('bill_table').innerHTML = table;
            }    
            var readCursor = tbl.openCursor();
            readCursor.onsuccess = function(e){
            var reader = e.target.result;
                if(reader){
                    records.push(JSON.stringify(reader.value));
                    reader.continue();
                }
            };
            readCursor.onerror = function(e){
                document.getElementById('dvstatus').innerHTML += 'read operation failed';
            };
        } 
    }

}
function BillingCalculation(records){
    var d = new Date();
    var date = d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear()
    var id = d.getDate()+""+d.getMonth()+""+d.getFullYear()+""+d.getSeconds()
    final_bill = {}
    var total = 0
    for (i=0;i<records.length;i++){
        total += parseInt(records[i]['ProductPrice1'])
    }
    final_bill['id'] = id
    final_bill['Total1'] = total
    final_bill['BillDate1'] = date
    return final_bill
}
function LoadDatatable(){
    var data = [{'ProductId':'T-1101','ProductName':'Mobile','Description':'13MP Cammera','ProductPrice':'2000','Manufacturer':'Nokia','CategoryName':'ECT'},
                {'ProductId':'T-1102','ProductName':'Mobile','Description':'14MP Cammera','ProductPrice':'2000','Manufacturer':'Samsung','CategoryName':'ECT'},
                {'ProductId':'T-1103','ProductName':'Mobile','Description':'15MP Cammera','ProductPrice':'2000','Manufacturer':'RedMI','CategoryName':'ECT'}]
                table = ui.table(records)
                document.getElementById('data_table').innerHTML = table;
}
