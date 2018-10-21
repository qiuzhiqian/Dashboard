$.ajax({
   url: "/data",//json文件位置
   type: "GET",//请求方式为get
   dataType: "json", //返回数据格式为json
   success: function(data) {//请求成功完成后要执行的方法 
       //each循环 使用$.each方法遍历返回的数据date
       addRow(data);
   }
})

/*
$(function(){
	console.log("abc");
	addRow();
})*/


function appendRow()
{
	var table = document.getElementById("tad");
    oneRow = table.insertRow();//插入一行  
    cell1= oneRow.insertCell();//单单插入一行是不管用的，需要插入单元格  
    cell2=oneRow.insertCell();  
    cell1.innerHTML = "sdf";   
    cell2.innerHTML="<a href='#'>retet</a>"; 
}
/*
function init(){
_table=document.getElementById ("table");
_table.border="1px";
_table.width="800px";


for(var i=1;i<10;i++){
　　var row=document.createElement ("tr");
　　row.id=i;
　　for(var j=1;j<6;j++){
　　　var cell=document.createElement ("td");
　　　cell.id =i+"/"+j;
　　　cell.appendChild(document.createTextNode ("第"+cell.id+"列"));
　　　row.appendChild (cell);
　　}
　　document.getElementById("newbody").appendChild (row);
　}
}*/

function addTd(ttr,name)
{
	var td=document.createElement("td");
　　td.appendChild(document.createTextNode(name));
	ttr.appendChild(td);
}
 
/*添加行，使用appendChild方法 写道*/
function addRow(data){
var length=document.getElementById("table").rows.length;
/*document.getElementById("newbody").insertRow(length);
　　document.getElementById(length+1).setAttribute("id",length+2);*/
	
	//console.log(data);
//
	//var   gettype=Object.prototype.toString
	//gettype.call(data)

	//console.log(data.length)
	var jsdata=JSON.parse(data)
	//console.log(jsdata.length)
	console.log(jsdata)
　　
　　
　　for(i=0;i<jsdata.length;i++){
		var tr=document.createElement("tr");
　　	tr.id=length+1;
		addTd(tr,""+jsdata[i].Index);
		addTd(tr,jsdata[i].Dtime);
		addTd(tr,jsdata[i].Vehiclesta);
		addTd(tr,jsdata[i].Chargesta);
		addTd(tr,jsdata[i].Runmod);
		addTd(tr,jsdata[i].Speed+"km/h");
		addTd(tr,jsdata[i].Mile+"km");
		addTd(tr,jsdata[i].Vol+"V");
		addTd(tr,jsdata[i].Cur+"A");
		addTd(tr,jsdata[i].Soc+"%");
		addTd(tr,jsdata[i].Dcdcsta);
		addTd(tr,jsdata[i].Gear);
		addTd(tr,jsdata[i].Ins+"KΩ");
		addTd(tr,jsdata[i].Acc+"%");
		addTd(tr,jsdata[i].Brake+"%");
		document.getElementById("newbody").appendChild (tr);
　　}
}
 
/*添加行的另一种方法insertRow 写道*/
function addRow_withInsert(){
　　　varrow=document.getElementById("table").insertRow( document.getElementById("table").rows.length);
　var rowCount =document.getElementById("table").rows.length;

　var countCell=document.getElementById("table").rows.item(0).cells.length;
　for(var i=0;i<countCell;i++){
　　　var cell=row.insertCell(i);

　　　cell.innerHTML="新"+(rowCount)+"/"+(i+1)+"列";
　　　cell.id=(rowCount)+"/"+(i+1);

　　}
}
 
/*删除行，采用deleteRow(row Index) 写道*/
/*删除行，采用deleteRow(row Index)*/
function removeRow(){
/* var row=document.getElementById("2");
　　var index=row.rowIndex;
　　alert(index);*/
　　　document.getElementById("newbody").deleteRow(document.getElementById(document.getElementById("table").rows.length).rowIndex);
}
 
/*添加列，采用insertCell(列位置)方法 写道*/
function addCell(){
/*document.getElementById("table").rows.item(0).cells.length
用来获得表格的列数
*/
for(var i=0;i<document.getElementById("table").rows.length;i++){
　　var cell=document.getElementById("table").rows[i].insertCell(2);
　　cell.innerHTML="第"+(i+1)+"/"+3+"列";

}
}
 
/*删除列，采用deleteCell(列位置)的方法 写道*/
/*删除列，采用deleteCell(列位置)的方法*/
function removeCell(){
　　for(var i=0;i<document.getElementById("table").rows.length;i++){
　　　　document.getElementById("table").rows[i].deleteCell(0);
　　}
}
 
/*合并单元格（未实现） 写道
我的代码有问题，主要是表格会乱掉，一直没有改好 ：*/
function rebulid(){
var beginRow=document.getElementById("beginRow").value;/*开始行*/
var endRow=document.getElementById("endRow").value;/*结束行*/

var beginCol=document.getElementById("beginCol").value;/*开始列*/
var endCol=document.getElementById("endCol").value;/*结束列*/

var tempCol=beginRow+"/"+beginCol;/*定位要改变属性的列*/
alert(tempCol);
var td=document.getElementById(tempCol);

/*删除要合并的单元格*/
for(var x=beginRow;x<=endRow;x++){
　　for(var i=beginCol;i<=endCol;i++){
　　　　if(x==beginRow){

　　　　　　document.getElementById("table").rows[x].deleteCell(i+1);

　　　　}
　　　　else{

　　　　　　document.getElementById("table").rows[x].deleteCell(i);

　　　　}

　　　}
　　}
　　　td.rowSpan=(endRow-beginRow)+1;
} 