var addModal; var modifyModal;
var formItemInAddModal; //  0:select DAY  1:Name  2:Contents
var monItem=[]; var monIndex=0;
var tueItem=[]; var tueIndex=0;
var wedItem=[]; var wedIndex=0;
var thuItem=[]; var thuIndex=0;
var friItem=[]; var friIndex=0;
//var areaFri;
//var divItem;

// AddToDo 클릭시 modalopen
function openAddModal() {
    addModal= document.getElementById("addModal");
    addModal.style.display = 'block';
}

// x표 누를시 modalclose
function closeAddModal() {
    addModal.style.display = 'none';
}

function addItem(){
  formItemInAddModal=document.getElementsByClassName('formInner_inAddModal');
  switch (formItemInAddModal[0].value) {
    case "monday":
      var areaMon = document.getElementsByClassName('displayArea_mon')[0];
      this.monItem[this.monIndex]=makeDiv(areaMon); // 배열로관리
      this.monIndex++;
      break;

    case "tuesday":
      var areaTue = document.getElementsByClassName('displayArea_tue')[0];
      this.tueItem[this.tueIndex]=makeDiv(areaTue);
      this.tueIndex++;
      break;

    case "wednesday":
      var areaWed = document.getElementsByClassName('displayArea_wed')[0];
      this.wedItem[this.wedIndex]=makeDiv(areaWed);
      this.wedIndex++;
      break;

    case "thursday":
      var areaThu = document.getElementsByClassName('displayArea_thu')[0];
      this.thuItem[this.thuIndex]=makeDiv(areaThu);
      this.thuIndex++;
      break;

    case "friday":
      var areaFri = document.getElementsByClassName('displayArea_fri')[0];
      this.friItem[this.friIndex]=makeDiv(areaFri);
      this.friIndex++;
      break;

    default:
      break;
  }
closeAddModal();
  //formItemInModal[0].
}

/***********makeDiv**********/
function makeDiv(area){
  var itemName = this.formItemInAddModal[1].value;
  var divItem = document.createElement('div');
  divItem.setAttribute("class","divItem");
  divItem.setAttribute("onclick","openModifyModal(this)");
  var close = document.createElement('img');
  close.setAttribute("class", "close");//id부여
  close.setAttribute("src","img/delete.png");
  close.setAttribute("onclick","removeItem(this,event)");
  divItem.appendChild(close);
  var textDiv = document.createElement('div');
  textDiv.setAttribute("class", "itemName");//id부여
  textDiv.innerHTML = itemName;
  divItem.appendChild(textDiv);
  area.appendChild(divItem);

  switch (area.className) {
    case "displayArea_mon":
      divItem.setAttribute("index",monIndex);
      divItem.style.backgroundColor = "#cfe0e0";
      break;

    case "displayArea_tue":
      divItem.setAttribute("index",tueIndex);
      divItem.style.backgroundColor = "#e9b7b7";
      break;

    case "displayArea_wed":
      divItem.setAttribute("index",wedIndex);
      divItem.style.backgroundColor = "#cce0e0";
      break;

    case "displayArea_thu":
      divItem.setAttribute("index",thuIndex);
      divItem.style.backgroundColor = "#e2ddc0";
      break;

    case "displayArea_fri":
      divItem.setAttribute("index",friIndex);
      divItem.style.backgroundColor = "skyblue";
      break;

    default:
      break;
  }
  return divItem;
}
/*
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}*/


/***********showDiv**********
function showItem(area){
  switch (area) {
    case "areaMon":

      break;
    default:

  }
}
*/
//***********deleteDiv***********//
function removeItem(obj,event){
  event.stopPropagation();
  switch (obj.parentNode.parentNode.className) {
    case "displayArea_mon":
      var target = obj.parentNode.getAttribute('index');
      this.monItem[target].remove();
      this.monItem.splice(target,1);
      this.monIndex--;
      indexSort(this.monItem);
      break;

    case "displayArea_tue":
      var target = obj.parentNode.getAttribute('index');
      this.tueItem[target].remove();
      this.tueItem.splice(target,1);
      this.tueIndex--;
      indexSort(this.tueItem);

      break;

    case "displayArea_wed":
      var target = obj.parentNode.getAttribute('index');
      this.wedItem[target].remove();
      this.wedItem.splice(target,1);
      this.wedIndex--;
      indexSort(this.wedItem);

      break;

    case "displayArea_thu":
      var target = obj.parentNode.getAttribute('index');
      this.thuItem[target].remove();
      this.thuItem.splice(target,1);
      this.thuIndex--;
      indexSort(this.thuItem);

      break;

    case "displayArea_fri":
      var target = obj.parentNode.getAttribute('index');
      this.friItem[target].remove();
      this.friItem.splice(target,1);
      this.friIndex--;
      indexSort(this.friItem);

      break;
    default:
      break;
  }
  console.log("removeItem 메소드 실행");
  console.log(obj.parentNode);
  //console.log(obj.parentNode.parentNode);
  console.log(monItem);
  console.log(monIndex);
  //obj.parentNode.parentNode.removeChild(obj.parentNode);
}

function indexSort(array){ // monItem 배열에 생성된 div의 index속성을 0부터 재배열
  for (var i = 0; i < array.length; i++) {
    array[i].setAttribute('index',i);
  }
}



// AddToDo 클릭시 modalopen
function openModifyModal() {
    modifyModal= document.getElementById("modifyModal");
    modifyModal.style.display = 'block';
}

// x표 누를시 modalclose
function closeModifyModal() {
    modifyModal.style.display = 'none';
}
