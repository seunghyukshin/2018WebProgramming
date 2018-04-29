var modal;
var formItemInModal; //  0:select DAY  1:Name  2:Contents
var monItem=[]; var monIndex=0;
var tueItem=[]; var tueIndex=0;
var wedItem=[]; var wedIndex=0;
var thuItem=[]; var thuIndex=0;
var friItem=[]; var friIndex=0;
//var areaFri;
//var divItem;

// AddToDo 클릭시 modalopen
function openModal() {
    modal= document.getElementById("MyModal");
    modal.style.display = 'block';
}

// x표 누를시 modalclose
function closeModal() {
    modal.style.display = 'none';
}

function addItem(){
  formItemInModal=document.getElementsByClassName('formInner_inModal');
  switch (formItemInModal[0].value) {
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
closeModal();
  //formItemInModal[0].
}

/***********makeDiv**********/
function makeDiv(area){

  switch (area.className) {
    case "displayArea_mon":
      var itemName = this.formItemInModal[1].value;
      var divItem = document.createElement('div');
      divItem.setAttribute("id","divItem");
      divItem.setAttribute("index",monIndex);
      divItem.style.backgroundColor = "#cfe0e0";
      //console.log(monIndex); //start expected 0
      //div.setAttribute('index',this.monIndex);
      var close = document.createElement('span');
      close.setAttribute("class", "close");//id부여
      close.setAttribute("onclick","removeItem(this)");
      //  close.setAttribute("font-size"," 12px");
      close.innerHTML='&times;';
      divItem.appendChild(close);
      var textDiv = document.createElement('div');
      textDiv.setAttribute("class", "itemName");//id부여
      textDiv.innerHTML = itemName;
      divItem.appendChild(textDiv);
      area.appendChild(divItem);

      return divItem;
      break;


    case "displayArea_tue":
      var itemName = this.formItemInModal[1].value;
      var divItem = document.createElement('div');
      divItem.setAttribute("id","divItem");
      divItem.setAttribute("index",tueIndex);
      divItem.style.backgroundColor = "#e9b7b7";
      var close = document.createElement('span');
      close.setAttribute("class", "close");
      close.setAttribute("onclick","removeItem(this)");
      close.innerHTML='&times;';
      divItem.appendChild(close);
      var textDiv = document.createElement('div');
      textDiv.setAttribute("class", "itemName");
      textDiv.innerHTML = itemName;
      divItem.appendChild(textDiv);
      area.appendChild(divItem);

      return divItem;
      break;



    case "displayArea_wed":

      var itemName = this.formItemInModal[1].value;
      var divItem = document.createElement('div');
      divItem.setAttribute("id","divItem");
      divItem.setAttribute("index",wedIndex);
      divItem.style.backgroundColor = "#cce0e0";
      var close = document.createElement('span');
      close.setAttribute("class", "close");
      close.setAttribute("onclick","removeItem(this)");
      close.innerHTML='&times;';
      divItem.appendChild(close);
      var textDiv = document.createElement('div');
      textDiv.setAttribute("class", "itemName");
      textDiv.innerHTML = itemName;
      divItem.appendChild(textDiv);
      area.appendChild(divItem);

      return divItem;
      break;


    case "displayArea_thu":
      var itemName = this.formItemInModal[1].value;
      var divItem = document.createElement('div');
      divItem.setAttribute("id","divItem");
      divItem.setAttribute("index",thuIndex);
      divItem.style.backgroundColor = "#e2ddc0";
      var close = document.createElement('span');
      close.setAttribute("class", "close");
      close.setAttribute("onclick","removeItem(this)");
      close.innerHTML='&times;';
      divItem.appendChild(close);
      var textDiv = document.createElement('div');
      textDiv.setAttribute("class", "itemName");
      textDiv.innerHTML = itemName;
      divItem.appendChild(textDiv);
      area.appendChild(divItem);

      return divItem;
      break;


    case "displayArea_fri":
      var itemName = this.formItemInModal[1].value;
      var divItem = document.createElement('div');
      divItem.setAttribute("id","divItem");
      divItem.setAttribute("index",friIndex);
      divItem.style.backgroundColor = "skyblue";
      var close = document.createElement('span');
      close.setAttribute("class", "close");
      close.setAttribute("onclick","removeItem(this)");
      close.innerHTML='&times;';
      divItem.appendChild(close);
      var textDiv = document.createElement('div');
      textDiv.setAttribute("class", "itemName");
      textDiv.innerHTML = itemName;
      divItem.appendChild(textDiv);
      area.appendChild(divItem);

      return divItem;
      break;
    default:
      break;
  }

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
function removeItem(obj){
  console.log("removeItem 메소드 실행");
  console.log(obj.parentNode);
  console.log(obj.parentNode.parentNode);

  console.log(this.monItem);
  console.log(this.monIndex);
//  obj.parentNode.getAttribute('index');

  //monIndex--;
  switch (obj.parentNode.parentNode.className) {
    case "displayArea_mon":
      var target = obj.parentNode.getAttribute('index');
      this.monItem.splice(target,1);
      this.monIndex--;
      // sort 해주기
      indexSort(this.monItem);
      break;

    case "displayArea_tue":
      var target = obj.parentNode.getAttribute('index');
      this.tueItem.splice(target,1);
      this.tueIndex--;
      indexSort(this.tueItem);

      break;

    case "displayArea_wed":
      var target = obj.parentNode.getAttribute('index');
      this.wedItem.splice(target,1);
      this.wedIndex--;
      indexSort(this.wedItem);

      break;

    case "displayArea_thu":
      var target = obj.parentNode.getAttribute('index');
      this.thuItem.splice(target,1);
      this.thuIndex--;
      indexSort(this.thuItem);

      break;

    case "displayArea_fri":
      var target = obj.parentNode.getAttribute('index');
      this.friItem.splice(target,1);
      this.friIndex--;
      indexSort(this.friItem);

      break;
    default:
    break;
  }
  obj.parentNode.parentNode.removeChild(obj.parentNode);
}

function indexSort(array){ // monItem 배열에 생성된 div의 index를 0부터 재배열
  for (var i = 0; i < array.length; i++) {
    array[i].setAttribute('index',i);
  }
}
