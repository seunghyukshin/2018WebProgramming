var modal;
var formItemInModal; //  0:select DAY  1:Name  2:Contents
var areaMon; var monIndex=0;
 //temp
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
  var divItem;
  var itemName;
  formItemInModal=document.getElementsByClassName('formInner_inModal');
  switch (formItemInModal[0].value) {
    case "monday":
      areaMon = document.getElementsByClassName('displayArea_mon');
      makeDiv(divItem,itemName,areaMon[monIndex]);
      this.divItem.style.backgroundColor = "#cfe0e0";

      break;

    case "tuesday":
      break;
    case "wednesday":
      break;
    case "thursday":
      break;
    case "friday":
      break;

    default:
      break;
  }
  //formItemInModal[0].

  closeModal();
}

function makeDiv(divItem,itemName,area){
  divItem = document.createElement('div');
  divItem.setAttribute("id", "divItem");//id부여
  itemName = formItemInModal[1].value;//입력한 text
  var text = document.createTextNode(itemName);
  divItem.appendChild(text);//div에 text삽입
  area.appendChild(divItem); //areaMon은 어디서 초기화 시켜줄까?

  monIndex=monIndex+1;
}

/*
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}*/
