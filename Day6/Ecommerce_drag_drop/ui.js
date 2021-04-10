function generateUI(){
    return {
        table:function(dataSource){
           
            if(dataSource === undefined){
                return '<div>Invalid Data Source</div>';
            }
            if(dataSource.length === 0 ){
                return '<div>No Records</div>';
            }

            // logic for generating the table
            var table="";
            // get all keys for the 0th record
            var headers = Object.keys(JSON.parse(dataSource[0]));

            table+= "<table class='table table-bordered'>";
            table += "<thead><tr>"
            for(var c=0;c<headers.length;c++){
                table+= "<th>"+headers[c]+"</th>"; 
            }    
            table+="</tr></thead>";
            table+="<tbody>";
            for(var row=0;row<dataSource.length;row++){
                table+="<tr id='dvtgt'>"; // each row is a JSON object from JSON Array
                for(var d=0;d<headers.length;d++){
                    table+= "<td>"+(JSON.parse(dataSource[row]))[headers[d]]+"</td>";
                }  
                table+="</tr>";
            }
            table+="</tbody>";
            table+="</table>";
            return table;
        }
    };
}