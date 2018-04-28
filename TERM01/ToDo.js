var modal;
var formItemInModal; //  0:select DAY  1:Name  2:Contents
var monItem; var monIndex=0;
var tueItem; var tueIndex=0;
var wedItem; var wedIndex=0;
var thuItem; var thuIndex=0;
var friItem; var friIndex=0;
//var areaFri;
//var divItem;
var close;

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
  var itemName;
  formItemInModal=document.getElementsByClassName('formInner_inModal');
  switch (formItemInModal[0].value) {
    case "monday":
      var areaMon = document.getElementsByClassName('displayArea_mon');
      console.log(monIndex); //start expected 0
      makeDiv(this.monItem,itemName,areaMon[0]);
      this.monIndex= this.monIndex+1;

      //divItem.setAttribute("backgroundColor", "#cfe0e0");// 배경색부여
      break;

    case "tuesday":
    var areaTue = document.getElementsByClassName('displayArea_tue');
    makeDiv(this.tueItem,itemName,areaTue[0]);
    this.tueIndex= this.tueIndex+1;
      break;

    case "wednesday":
    var areaWed = document.getElementsByClassName('displayArea_wed');
    makeDiv(this.wedItem,itemName,areaWed[0]);
    this.wedIndex= this.wedIndex+1;
      break;

    case "thursday":
    var areaThu = document.getElementsByClassName('displayArea_thu');
    makeDiv(this.thuItem,itemName,areaThu[0]);
    this.thuIndex= this.thuIndex+1;
      break;

    case "friday":
    var areaFri = document.getElementsByClassName('displayArea_fri');
    makeDiv(this.friItem,itemName,areaFri[0]);
    this.friIndex= this.friIndex+1;
      break;

    default:
      break;
  }
closeModal();
  //formItemInModal[0].

}

function makeDiv(divItem,itemName,area){
  divItem = document.createElement('div');
  divItem.setAttribute("id", "divItem");//id부여

  //div에 index 속성을 부여하자! //failed

  //close를 divItem에 추가하자
  close = document.createElement('span');
  close.setAttribute("class", "close");//id부여
//  close.setAttribute("font-size"," 12px");
  close.innerHTML='&times;';
  divItem.appendChild(close);

  itemName = formItemInModal[1].value;//입력한 text
  var textDiv = document.createElement('div');
//  var text = document.createElement('span');
//  var text = document.createTextNode(itemName);
//  text.clear = "both";
  textDiv.setAttribute("class", "itemName");//id부여
  //text.innerHTML = itemName;
  textDiv.innerHTML = itemName;

  //text.setAttribute("clear","both");
  divItem.appendChild(textDiv);//div에 textdiv삽입
  // console.log(area);
  // console.log(area.className);
  // console.log(area.id);

  switch (area.className) {
    case "displayArea_mon":
    divItem.style.backgroundColor = "#cfe0e0";
      break;
    case "displayArea_tue":
    divItem.style.backgroundColor = "#e9b7b7";
      break;
    case "displayArea_wed":
    console.log("fuck");
    divItem.style.backgroundColor = "#cce0e0";
      break;
    case "displayArea_thu":
    divItem.style.backgroundColor = "#e2ddc0";
      break;
    case "displayArea_fri":
    divItem.style.backgroundColor = "skyblue";
      break;

    default:

  }
  area.appendChild(divItem); //areaMon은 어디서 초기화 시켜줄까?
}

/*
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}*/
