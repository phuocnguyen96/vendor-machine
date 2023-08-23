var btnSubmit = callelements("#button")
var coCa = callelements("#coca")
var bayUp = callelements("#bay-up")
var nuocDua = callelements("#nc-dua")
var tangLuc = callelements("#energy")
var epDua = callelements("#ep-dua")
var snackNe = callelements("#snack")
var sandWich = callelements("#poca")
var showKetQua = callelements("#show-ket-qua")
var showTen = callelements("#show-ten")
var showGiaTien = callelements("#show-gia")
var tongTien = callelements("#tong-tien-sp")
var showTongTien = callelements("#tong-tien")
var sosanhHinhAnh;

coCa.addEventListener("click", hienthithongtin)
bayUp.addEventListener("click", hienthithongtin1)
nuocDua.addEventListener("click", hienthithongtin2)
tangLuc.addEventListener("click", hienthithongtin3)
epDua.addEventListener("click", hienthithongtin4)
snackNe.addEventListener("click", hienthithongtin5)
sandWich.addEventListener("click", hienthithongtin6)
btnSubmit.addEventListener("click", tongtien)

var vendormachine = [
    {
        name: 'coca',
        giatien: 10000,
        value: "loncoca",
    },
    {
        name: '7up',
        giatien: 10000,
        value: "lon7up",
    },
    {
        name: 'nuoc dua',
        giatien: 15000,
        value: "lonncdua",
    },
    {
        name: 'energy',
        giatien: 12000,
        value: "lonenergy",
    },
    {
        name: 'nuoc ep dua',
        giatien: 20000,
        value: "lonepdua",
    },
    {
        name: 'snack',
        giatien: 14000,
        value: "bichsnack",
    },
    {
        name: 'sandwich',
        giatien: 25000,
        value: "bichsandwich",
    }
]

function callelements(elements){
    var domElements = document.querySelector(elements)
    return domElements
}

function hienthithongtin(){
    for(var i = 0; i < vendormachine.length; i++){
        if(vendormachine[i].value == coCa.alt ){
            showTen.textContent = vendormachine[i].name;
            showGiaTien.textContent = vendormachine[i].giatien;
        } 
        }
        showKetQua.classList.toggle("truong-hop-1")
        showKetQua.classList.toggle("truong-hop-2")
    } 

function hienthithongtin1(){
        for(var i = 0; i < vendormachine.length; i++){
            if(vendormachine[i].value == bayUp.alt ){
                showTen.textContent = vendormachine[i].name;
                showGiaTien.textContent = vendormachine[i].giatien;
            } 
            }
        
            showKetQua.classList.toggle("truong-hop-1")
            showKetQua.classList.toggle("truong-hop-2")
        } 

function hienthithongtin2(){
        for(var i = 0; i < vendormachine.length; i++){
            if(vendormachine[i].value == nuocDua.alt ){
                showTen.textContent = vendormachine[i].name;
                showGiaTien.textContent = vendormachine[i].giatien;
            } 
            }
        showKetQua.classList.toggle("truong-hop-1")
        showKetQua.classList.toggle("truong-hop-2")
} 
    
function hienthithongtin3(){
    for(var i = 0; i < vendormachine.length; i++){
        if(vendormachine[i].value == tangLuc.alt ){
            showTen.textContent = vendormachine[i].name;
            showGiaTien.textContent = vendormachine[i].giatien;
        } 
        }
        showKetQua.classList.toggle("truong-hop-1")
        showKetQua.classList.toggle("truong-hop-2")
} 

function hienthithongtin4(){
    for(var i = 0; i < vendormachine.length; i++){
        if(vendormachine[i].value == epDua.alt ){
            showTen.textContent = vendormachine[i].name;
            showGiaTien.textContent = vendormachine[i].giatien;
        } 
        }
        showKetQua.classList.toggle("truong-hop-1")
        showKetQua.classList.toggle("truong-hop-2")
} 

function hienthithongtin5(){
    for(var i = 0; i < vendormachine.length; i++){
        if(vendormachine[i].value == snackNe.alt ){
            showTen.textContent = vendormachine[i].name;
            showGiaTien.textContent = vendormachine[i].giatien;
        } 
        }
        showKetQua.classList.toggle("truong-hop-1")
        showKetQua.classList.toggle("truong-hop-2")
} 

function hienthithongtin6(){
    for(var i = 0; i < vendormachine.length; i++){
        if(vendormachine[i].value == sandWich.alt ){
            showTen.textContent = vendormachine[i].name;
            showGiaTien.textContent = vendormachine[i].giatien;
        } 
        }
        showKetQua.classList.toggle("truong-hop-1")
        showKetQua.classList.toggle("truong-hop-2")
} 

function tongtien(){
    var tongGiaTien = 0
    for ( var i = 0; i < vendormachine.length; i++){
        tongGiaTien += vendormachine[i].giatien
    }

    tongTien.textContent = tongGiaTien

    showTongTien.classList.toggle("truong-hop-1")
    showTongTien.classList.toggle("truong-hop-2")
}
