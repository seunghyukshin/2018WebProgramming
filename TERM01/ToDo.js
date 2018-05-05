var addModal; var modifyModal;
var formItemInAddModal; //  0:select DAY  1:Name  2:Contents
var monItem=[]; var monIndex=0;
var tueItem=[]; var tueIndex=0;
var wedItem=[]; var wedIndex=0;
var thuItem=[]; var thuIndex=0;
var friItem=[]; var friIndex=0;
var selectedDiv;
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
function closeModifyModal() {
    modifyModal.style.display = 'none';
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
  var itemContent = this.formItemInAddModal[2].value;
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
  var contentDiv = document.createElement('div');
  contentDiv.setAttribute("class","itemContent");
  contentDiv.innerHTML = itemContent;
  contentDiv.style.display = 'none';
  divItem.appendChild(contentDiv);
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



// 아이템 클릭시 modifymodalopen
function openModifyModal(obj) {
  console.log(obj);
    this.selectedDiv = obj;
    this.modifyModal= document.getElementById("modifyModal");
    this.modifyModal.style.display = 'block';

    //modal창에 클릭한 div정보 출력
    var valueInForm = document.getElementsByClassName('formInner_inModifyModal');
    switch (obj.parentNode.className) {
        case "displayArea_mon":
        valueInForm[0].value = "monday";
        break;
      case "displayArea_tue":
        valueInForm[0].value = "tuesday";
        break;
      case "displayArea_wed":
        valueInForm[0].value = "wednesday";
        break;
      case "displayArea_thu":
        valueInForm[0].value = "thursday";
        break;
      case "displayArea_fri":
        valueInForm[0].value = "friday";
        break;
      default:
        break;
    }
    valueInForm[1].value = (obj.getAttribute("index")*1)+1; // priority (index+1)
    valueInForm[2].value = obj.getElementsByClassName('itemName')[0].textContent; //itemName
    valueInForm[3].value = obj.getElementsByClassName('itemContent')[0].textContent; //itemContents

}

// x표 누를시 modalclose
function closeModifyModal() {
    this.modifyModal.style.display = 'none';
}

function modifyItem(obj){
  var valueInForm = obj.parentNode.getElementsByClassName('formInner_inModifyModal');
  var day = valueInForm[0];
  var priority = valueInForm[1]; //index = priority-1;
  var itemName = valueInForm[2];
  var itemContent = valueInForm[3];
//  var index = this.selectedDiv.getAttribute("index");

  var divItem = document.createElement('div');
  divItem.setAttribute("class","divItem");
  divItem.setAttribute("onclick","openModifyModal(this)");
  var close = document.createElement('img');
  close.setAttribute("class", "close");//close 넣고
  close.setAttribute("src","img/delete.png");
  close.setAttribute("onclick","removeItem(this,event)");
  divItem.appendChild(close);
  var textDiv = document.createElement('div');
  textDiv.setAttribute("class", "itemName");// name 넣고
  textDiv.innerHTML = itemName.value;
  divItem.appendChild(textDiv);
  var contentDiv = document.createElement('div');
  contentDiv.setAttribute("class","itemContent");
  contentDiv.innerHTML = itemContent.value;//content 넣고
  contentDiv.style.display = 'none';
  divItem.appendChild(contentDiv);
  console.log(divItem);
//  area.appendChild(divItem);

  //selectedDiv 삭제하고 splice로 중간에 divItem 추가해주고(insertbefore도 해주기) indexSort해주고 index도 증가시켜주기
  switch (day.value) {
    case "monday":
      var index = (priority.value*1)-1;
      //divItem.setAttribute("index",newIndex); //indexSort에서 해결
      divItem.style.backgroundColor = "#cfe0e0";
      monItem.splice(index,0,divItem);
      //removeIndex=this.selectedDiv.getAttribute("index");
      var area = document.getElementsByClassName('displayArea_mon')[0];
      area.insertBefore(divItem,area.childNodes[index]);
      indexSort(monItem);
      monIndex++;
      removeItem(this.selectedDiv.getElementsByClassName('close')[0],event); // 선택한div삭제, indexsort

      break;

    case "tuesday":
      var index = (priority.value*1)-1;

      divItem.style.backgroundColor = "#e9b7b7";
      tueItem.splice(index,0,divItem);

      var area = document.getElementsByClassName('displayArea_tue')[0];
      area.insertBefore(divItem,area.childNodes[index]);
      indexSort(tueItem);
      tueIndex++;
      removeItem(this.selectedDiv.getElementsByClassName('close')[0],event); // 선택한div삭제, indexsort

      break;

    case "wednesday":
      var index = (priority.value*1)-1;
      divItem.style.backgroundColor = "#cce0e0";
      wedItem.splice(index,0,divItem);

      var area = document.getElementsByClassName('displayArea_wed')[0];
      area.insertBefore(divItem,area.childNodes[index]);
      indexSort(wedItem);
      wedIndex++;
      removeItem(this.selectedDiv.getElementsByClassName('close')[0],event); // 선택한div삭제, indexsort
      break;

    case "thursday":
      var index = (priority.value*1)-1;
      divItem.style.backgroundColor = "#e2ddc0";
      thuItem.splice(index,0,divItem);

      var area = document.getElementsByClassName('displayArea_thu')[0];
      area.insertBefore(divItem,area.childNodes[index]);
      indexSort(thuItem);
      thuIndex++;
      removeItem(this.selectedDiv.getElementsByClassName('close')[0],event); // 선택한div삭제, indexsort

      break;

    case "friday":
      var index = (priority.value*1)-1;
      divItem.style.backgroundColor = "skyblue";
      friItem.splice(index,0,divItem);

      var area = document.getElementsByClassName('displayArea_fri')[0];
      area.insertBefore(divItem,area.childNodes[index]);
      indexSort(friItem);
      friIndex++;
      removeItem(this.selectedDiv.getElementsByClassName('close')[0],event); // 선택한div삭제, indexsort

      break;

    default:
      break;
  }
  closeModifyModal();
}

function searchItem(evt){
console.log("searchItem메소드 실행");
  var code = evt.which?evt.which:event.keyCode;
	if(code == 13){
    var searchDay = document.getElementsByClassName('formInner')[0].value;
    console.log(searchDay);
    switch (searchDay) {
      case "monday":
        filterInArray(this.monItem);
        allNoneDisplayExcepted(this.monItem);
        break;
      case "tuesday":
        filterInArray(this.tueItem);
        allNoneDisplayExcepted(this.tueItem);
        break;
      case "wednesday":
        filterInArray(this.wedItem);
        allNoneDisplayExcepted(this.wedItem);
        break;
      case "thursday":
        filterInArray(this.thuItem);
        allNoneDisplayExcepted(this.thuItem);
        break;
      case "friday":
        filterInArray(this.friItem);
        allNoneDisplayExcepted(this.friItem);
        break;
      default: // 전체검색
        filterInArray(this.monItem);
        filterInArray(this.tueItem);
        filterInArray(this.wedItem);
        filterInArray(this.thuItem);
        filterInArray(this.friItem);
      }
		return false;
	}
}

function filterInArray(array){
  // Add 할 때 textDiv를 innerHTML로 divItem에 넣어줬었다.
  // 이 div의 class는 itemName
  // 조건문에서는 itemName내부의 값과  #searchItem내부의 값을 비교해준다.
  var inputText = document.getElementsByClassName('formInner')[1].value;
  for (var i = 0; i < array.length; i++) {
    var itemName = array[i].getElementsByClassName('itemName')[0].textContent;
    if(itemName.match(inputText)){
      array[i].style.display = 'block';
      console.log("찾았다! 해냇다!");
    }else{
      array[i].style.display = 'none';
    }
  }
}

function allNoneDisplayExcepted(array){
  switch (array) {
    case this.monItem:
      for (var i = 0; i < this.tueItem.length; i++) {
        this.tueItem[i].style.display='none';
      }
      for (var i = 0; i < this.wedItem.length; i++) {
        this.wedItem[i].style.display='none';
      }
      for (var i = 0; i < this.thuItem.length; i++) {
        this.thuItem[i].style.display='none';
      }
      for (var i = 0; i < this.friItem.length; i++) {
        this.friItem[i].style.display='none';
      }
    break;
    case this.tueItem:
      for (var i = 0; i < this.monItem.length; i++) {
        this.monItem[i].style.display='none';
      }
      for (var i = 0; i < this.wedItem.length; i++) {
        this.wedItem[i].style.display='none';
      }
      for (var i = 0; i < this.thuItem.length; i++) {
        this.thuItem[i].style.display='none';
      }
      for (var i = 0; i < this.friItem.length; i++) {
        this.friItem[i].style.display='none';
      }
    break;
    case this.wedItem:
      for (var i = 0; i < this.tueItem.length; i++) {
        this.tueItem[i].style.display='none';
      }
      for (var i = 0; i < this.monItem.length; i++) {
        this.monItem[i].style.display='none';
      }
      for (var i = 0; i < this.thuItem.length; i++) {
        this.thuItem[i].style.display='none';
      }
      for (var i = 0; i < this.friItem.length; i++) {
        this.friItem[i].style.display='none';
      }
    break;
    case this.thuItem:
      for (var i = 0; i < this.tueItem.length; i++) {
        this.tueItem[i].style.display='none';
      }
      for (var i = 0; i < this.wedItem.length; i++) {
        this.wedItem[i].style.display='none';
      }
      for (var i = 0; i < this.monItem.length; i++) {
        this.monItem[i].style.display='none';
      }
      for (var i = 0; i < this.friItem.length; i++) {
        this.friItem[i].style.display='none';
      }
    break;
    case this.friItem:
      for (var i = 0; i < this.tueItem.length; i++) {
        this.tueItem[i].style.display='none';
      }
      for (var i = 0; i < this.wedItem.length; i++) {
        this.wedItem[i].style.display='none';
      }
      for (var i = 0; i < this.thuItem.length; i++) {
        this.thuItem[i].style.display='none';
      }
      for (var i = 0; i < this.monItem.length; i++) {
        this.monItem[i].style.display='none';
      }
    break;
    default:

  }
}
