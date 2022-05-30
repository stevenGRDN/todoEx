function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

setTimeout(function(){
  document.querySelector("#dot-select").className="dot-selected";
}, 380);

// function load() {
//     console.log("cooking? 1");
//     var file = new XMLHttpRequest();
//     file.open("GET", "file:///C:\Files\Surface\Files\Websites\Routine 2\todoDiv.txt", true);
//     file.onreadystatechange = function() {
//       if (file.readyState === 4) {  // Makes sure the document is ready to parse
//         if (file.status === 200) {  // Makes sure it's found the file
//           text = file.responseText;
//           console.log("cooking?");
//           document.getElementById("week-divs").innerHTML = text;
//         }
//       }
//     }
// }
//
// window.onLoad = load();

  var shoppingPRBLM = 30;


  localStorage.setItem('shopping', shoppingPRBLM);


window.addEventListener('load', () => {


  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#routine-input");
  const input_colour = document.querySelector("#routine-colour-input");
  const input_time = document.querySelector("#routine-time-input");
  const input_hint = document.querySelector("#routine-hint-input");
  var input_hour = document.querySelector("#routine-hour-input");
  const input_minute = document.querySelector("#routine-minute-input");
  var routine_f_close = document.querySelector("#routine-full-f-mon");
  // const input_mon = document.querySelector("#routine-mon");
  // const input_tue = document.querySelector("#routine-tue");
  // const input_wed = document.querySelector("#routine-wed");
  // const input_thu = document.querySelector("#routine-thu");
  // const input_fri = document.querySelector("#routine-fri");
  // const input_sat = document.querySelector("#routine-sat");
  // const input_sun = document.querySelector("#routine-sun");

  var list_element = document.querySelector("#monday");
  // it can't be constant because it will change later
  // const x = input_tue.checked;

  // const todoForm = document.querySelector("#todoForm");
  const goalsPage = document.querySelector("#todo-page");
  const topPage = document.querySelector("#top-page");
  // const rightSide = document.querySelector("#rightSide");
  const rightSide1 = document.querySelector("#rightSide");
  const rightSide = document.querySelector("#rightSide").getBoundingClientRect();
  const goalsBox = document.querySelector("#cbox");
  const todoAdd = document.querySelector("#new-todo");
  const yearDiv = document.querySelector("#year-divs");
  const monthDiv = document.querySelector("#month-divs");
  const weekDiv = document.querySelector("#week-divs");
  const dayDiv = document.querySelector("#day-divs");
  const rememberDiv = document.querySelector("#remember-divs");
  const no_div = document.querySelector("#no-div");
  const todoRadioClose = document.querySelector("#todo-radio-close");
  const todoRadioCB = document.querySelector("#todo-radio-cb");

  let scrollPercentage = () => {
    // let pos = document.documentElement.scrollTop;
    // let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // let scrollValue = Math.round(pos * 100 / calcHeight);
    // console.log(scrollValue);

    let h = document.documentElement;
    let st = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;

    let percent = st / (sh - h.clientHeight) * 100;
    console.log(percent);
  }

    // console.log("yeye");

  rightSide1.onscroll = scrollPercentage;

  // var scrollTop = topPage.scrollTop();
  // var docHeight = rightSide.height();
  // var windowHeight = topPage.height();
  //
  // var scrollPercent = (scrollTop) / (docHeight - windowHeight);
  //
  // rightSide.onscroll = function(){
  //   console.log(scrollPercent);
  // }


  // goalsPage.addEventListener("mouseover", () =);

  // goalsPage.onmouseover = function(){
  //   goalsBox.checked = true;
  // };
  //
  // topPage.onmouseover = function(){
  //   goalsBox.checked = false;
  // };

  // todoAdd.addEventListener('click', () => {
  //   console.log("does this work?");
  //   weekDiv.appendChild(todoDiv).cloneNode(true);
  // });
  // todoForm.onclick = function(){
    // weekDiv.appendtodoDiv);
  // }
  // todoForm.addEventListener('submit', (e) =>{
  //   // e.preventDefault();
  //   weekDiv.append(todoDiv);
  //   // monthDiv.append(todoDiv);
  //   // weekDiv.insertBefore(todoDiv, no_div);
  // })



  // todoAdd.addEventListener('click', () =>{
    // const todoDiv = document.createElement('div');
    // todoDiv.classList.add("todo-div");
    //
    // weekDiv.appendChild(todoDiv);
  // });

  todoAdd.addEventListener('click', () =>{
    const routine_name = input.value;

    const input_tdg_checked = document.querySelector('input[name="todo"]:checked');

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo-div");

    const todoText = document.createElement('textarea');
    todoText.classList.add("todo-div-text");
    todoText.innerHTML = input.value;
    todoText.setAttribute("readonly", "readonly");


    const todoCB = document.createElement('input');
    todoCB.type = "checkbox";
    todoCB.classList.add("todo-div-cb");

    const todoHint = document.createElement('div');
    todoHint.classList.add("todo-hint");

    const todoHintArea = document.createElement('div');
    todoHintArea.classList.add("todo-hint-area");

    const todoP = document.createElement('p');
    todoP.innerHTML = input_hint.value;

    const todoInputText = document.createElement('textarea');
    todoInputText.innerHTML = input_hint.value;
    todoInputText.classList.add("todo-hint-text");
    todoInputText.type = "text";
    todoInputText.setAttribute("readonly", "readonly");

    const todoButtons = document.createElement('div');
    todoButtons.classList.add("todo-buttons");

    const todoEdit = document.createElement('div');
    todoEdit.classList.add("todo-edit");
    todoEdit.innerHTML = '<svg version="1.1" id="Layer_Edit" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M349.1,73.62L87.29,335.43c-1.32,1.32-2.19,3.02-2.5,4.86l-15,90.29c-0.99,5.94,4.05,11.14,10.01,10.34l93.08-12.43c1.95-0.26,3.75-1.15,5.14-2.54l261.7-261.7c3.5-3.5,3.5-9.16,0-12.66l-77.96-77.96C358.26,70.13,352.59,70.13,349.1,73.62zM153.51,396.01l-32.27,4.31c-5.97,0.8-11-4.4-10.01-10.34l5.19-31.17c0.31-1.84,1.18-3.54,2.5-4.86L289.17,183.7c3.5-3.5,9.16-3.5,12.66,0l26.97,26.97c3.5,3.5,3.5,9.16,0,12.66L158.66,393.47C157.27,394.86,155.46,395.75,153.51,396.01zM327.11,145.75l25.49-25.49c3.5-3.5,9.16-3.5,12.66,0l26.97,26.97c3.5,3.5,3.5,9.16,0,12.66l-25.49,25.49c-3.5,3.5-9.16,3.5-12.66,0l-26.97-26.97C323.61,154.92,323.61,149.25,327.11,145.75z"/></svg>';

    const todoDelete = document.createElement('div');
    todoDelete.classList.add("todo-delete");
    todoDelete.innerHTML = '<svg version="1.1" id="Layer_Delete" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M375.57,189.08L355.96,432.8c-0.38,4.63-4.24,8.2-8.89,8.2H148.69c-4.65,0-8.52-3.57-8.89-8.2l-19.61-243.72c-0.36-4.41,2.57-8.41,6.88-9.41l21.32-4.92c5.27-1.21,10.4,2.51,10.89,7.89l19.24,214.43c0.41,4.6,4.26,8.12,8.88,8.12h120.95c4.62,0,8.47-3.52,8.88-8.12l19.25-214.43c0.48-5.38,5.61-9.1,10.88-7.89l21.32,4.92C372.99,180.67,375.92,184.67,375.57,189.08z"/><path d="M395.8,118.74h-82.61c-2.41,0-4.34-2-4.25-4.41l1.44-38.92c0.08-2.41-1.85-4.41-4.26-4.41H189.63c-2.41,0-4.34,2-4.25,4.41l1.43,38.92c0.09,2.41-1.84,4.41-4.25,4.41H99.95c-2.35,0-4.25,1.91-4.25,4.26v24.31c0,2.35,1.9,4.25,4.25,4.25H395.8c2.35,0,4.25-1.9,4.25-4.25V123C400.05,120.65,398.15,118.74,395.8,118.74z M279.21,114.49c0,2.35-1.91,4.25-4.26,4.25H220.8c-2.35,0-4.25-1.9-4.25-4.25v-6.41c0-2.35,1.9-4.26,4.25-4.26h54.15c2.35,0,4.26,1.91,4.26,4.26V114.49z"/></svg>';

    const todoButtonEdit = document.createElement('input');
    todoButtonEdit.id = 'todo-button-edit';
    todoButtonEdit.type = 'button';
    todoButtonEdit.name = "todo-edit";
    todoButtonEdit.value = 'Edit';

    const todoButtonDelete = document.createElement('input');
    todoButtonDelete.id = 'todo-button-delete';
    todoButtonDelete.type = 'button';
    todoButtonDelete.name = "todo-delete";


    todoDiv.appendChild(todoText);
    todoDiv.appendChild(todoHint);
    todoHint.appendChild(todoCB);
    todoHint.appendChild(todoHintArea);
    todoHint.appendChild(todoButtons);
    todoHintArea.appendChild(todoP);
    todoHintArea.appendChild(todoInputText);
    todoButtons.appendChild(todoEdit);
    todoButtons.appendChild(todoDelete);
    todoButtons.appendChild(todoButtonEdit);
    todoButtons.appendChild(todoButtonDelete);

    // let tempo = document.getElementById()

    const todoRadio = document.createElement('input');
    todoRadio.classList.add("todo-radio");
    todoRadio.name = "todoDivs";
    todoRadio.type = "radio";

    // console.log(yearDiv.children.length);
    // var temp;




  // yearDiv
  // monthDiv
  // weekDiv
  // dayDiv
  // rememberDiv

    if (!routine_name){
      alert("Please fill in the task");
      return;
    }

    if(!input_tdg_checked && goalsBox.checked == true){
      alert("Please fill in the task");
      return;
    }

    var tempO;


    if(input_tdg_checked.value == "Year"){
      // temp = yearDiv.children.length - 1;
      // console.log(temp);
      // temp = temp / 2;
      // console.log(temp)
      // temp++;
      // console.log(temp)
      //
      // todoRadio.style.top =


      yearDiv.appendChild(todoRadio);
      yearDiv.appendChild(todoDiv);
      tempO = yearDiv;
    }
    else if(input_tdg_checked.value == "Mon"){
      monthDiv.appendChild(todoRadio);
      monthDiv.appendChild(todoDiv);
      tempO = monthDiv;
    }
    else if(input_tdg_checked.value == "Week"){
      weekDiv.appendChild(todoRadio);
      weekDiv.appendChild(todoDiv);
      tempO = weekDiv;
    }
    else if(input_tdg_checked.value == "Day"){
      dayDiv.appendChild(todoRadio);
      dayDiv.appendChild(todoDiv);
      tempO = dayDiv;
    }
    else if(input_tdg_checked.value == "Rem"){
      rememberDiv.appendChild(todoRadio);
      rememberDiv.appendChild(todoDiv);
      tempO = rememberDiv;
    }


    todoButtonEdit.addEventListener('click', () =>{
      //
      if(todoButtonEdit.value == "Edit" ){
        todoRadioCB.onclick = function(){
          alert("You haven't finished editing the routine");
        }
      }

      if(todoButtonEdit.value == "Edit"){
        // todoRadioClose.style.pointerEvents = "none";
        todoText.removeAttribute("readonly", "readonly");
        todoInputText.removeAttribute("readonly", "readonly");
        todoInputText.style.pointerEvents = "auto";
        todoButtonEdit.value = "Save";
        todoRadioClose.style.pointerEvents = "none";
        // todoRadioClose.onclick = function(){
        //   alert("You haven't finished editing the routine");
        // }


      }
      else if (todoButtonEdit.value == "Save") {
        todoText.setAttribute("readonly", "readonly");
        todoInputText.setAttribute("readonly", "readonly");
        todoButtonEdit.value = "Edit";
        todoInputText.style.pointerEvents = "none";
        // todoRadioClose.removeAttribute("disabled", "disabled");

        todoRadioClose.style.pointerEvents = "auto";

      }
    });

    todoButtonDelete.onclick = function(){
      tempO.removeChild(todoRadio);
      tempO.removeChild(todoDiv);
      todoRadioClose.checked = true;
    }

    var y = 1;
    todoInputText.addEventListener('keypress', function (e) {
      y = 2;
    });

    todoInputText.onfocus = function yeye(){
      // console.log("uhhh");

      var x = 2;

      if(y == 2){
        x = 1;
      }



      sleep(200).then(() => {
        while (x == 1){
              x = 2;
              // console.log("uhhh");
              todoInputText.innerHTML = todoInputText.value;
              todoP.innerHTML = todoInputText.innerHTML;
        }
        if( todoInputText === document.activeElement ){
          x = 1;
          yeye();
        }
        else{
          x = 2;
        }
      });

    }



    // console.log(input_tdg_checked.value);

  });



  // console.log(form);

  // This is the const form and it's in the 'load' window
  form.addEventListener('submit', (e) => {
    e.preventDefault();


    const input_radio_checked = document.querySelector('input[name="day"]:checked');
    const routine_name = input.value;
    const routine_time = input_time.value;
    // const a = routine_time / 60 * 1 / 0.19;
    const routine_hour = input_hour.value;
    const routine_minute = input_minute.value;
    const routine_colour = input_colour.value;




    if (!routine_name){
      alert("Please fill in the task");
      return;
    }
    // else{
    //   alert("Success");
    // }

    const routine_button = document.createElement('input');
    routine_button.type = 'radio';
    routine_button.name = 'routine-f';
    routine_button.id = 'routine-full-t';
    routine_button.value = 'Tru';
    routine_button.setAttribute("style", "--routineHeight: calc(" + routine_time + " / 60 * (100% / 19)); " + "--routineTop: calc(" + ((routine_hour - 4) + routine_minute / 60) + " * (100% / 19));");


    const routine_element = document.createElement("div");
    routine_element.classList.add("routine");
    routine_element.id = 'routine-id';
    routine_element.setAttribute("style", "--routineColour:" + routine_colour + "; " + "--routineHeight: calc(" + routine_time + " / 60 * (100% / 19)); " + "--routineTop: calc(" + ((routine_hour - 4) + routine_minute / 60) + " * (100% / 19));");
    // routine_element.setAttribute("style", "--routineColour:" + routine_colour + "; " + "--routineHeight:" + a + "% ;");




    const routine_back = document.createElement("div");
    routine_back.classList.add("routine-back");

    const routine_time_text = document.createElement("div");
    routine_time_text.classList.add("routine-time");
    // routine_time_text.style.opacity = "1";

    var am_pm = "AM";
    var am_pm_2 = "AM";
    var first_hour_time;
    var first_hour = input_hour.value;
    var first_minutes;
    var routine_hour_length;
    var second_hour;
    var second_minutes;

// hurhar

    console.log(input_minute.value);

    if (input_minute.value == 60){
      // first_hour.value = first_hour.value + 1;
      // console.log(first_hour.value);
      // Don't need ".value" because we use .value
      // for the inputs
      first_hour++;
      input_minute.value = 0;
    }

    // console.log(input_minute.value.length);
    // console.log(input_minute);
    // console.log(parseInt(input_minute.value));
    // DAMN ParseInt is actually cracked


    // if(input_minute.value.length > 2){
    //   input_minute.value.length = 2;
    // }

    input_minute.value = parseInt(input_minute.value);

    if (input_minute.value < 10 && input_minute.value >= 0 && input_minute.value.length == 1){
      input_minute.value = "0" + input_minute.value;
    }

    // NAH


    if(first_hour > 12){
      first_hour = first_hour - 12;
      am_pm = "PM";
    }
    else{
      am_pm = "AM";
    }

    if (input_minute.value != 0) {
      first_hour_time = first_hour + ":" + input_minute.value;
    }
    else{
      first_hour_time = first_hour;
    }

    second_minutes = parseInt(input_minute.value) + parseInt(input_time.value);
    // second_minutes = 35 + 30;
    // Without parseInt it would be 3530
    // With parseInt it is 65
    // There's also a parseFloat
    console.log("This is minutes added up " + second_minutes);

    if(second_minutes >= 60){
      // I did => which doesn't work LOL

      routine_hour_length = parseInt(second_minutes / 60);
      console.log("This is routine hour length " + routine_hour_length);
    }
    else{
      routine_hour_length = 0;
    }

    second_minutes = second_minutes - (60 * routine_hour_length);

    second_hour = parseInt(first_hour) + routine_hour_length;

    if(am_pm == "AM" && second_hour > 12){
      second_hour = second_hour - 12;
      am_pm_2 = "PM";
    }
    else if(am_pm == "PM"){
      am_pm_2 = "PM";
    }
    else{
      am_pm_2 = "AM";
    }


    console.log("Second hour " + second_hour);

    console.log("yeye " + routine_hour_length);

    console.log( "second minutes length" + second_minutes.toString().length);

    if(second_minutes.toString().length == 1){
      second_minutes = "0" + second_minutes;
    }

    console.log(second_minutes);

    if(second_minutes != 0){
      second_minutes = ":" + second_minutes;
    }
    else{
      second_minutes = "";
    }

// MOD is % in javascript
    // if(input_time.value % 60 != 0){
    //   first_minutes =
    // }

    routine_time_text.innerText = first_hour_time + am_pm + " - " + second_hour + second_minutes + am_pm_2;

    const routine_edit_time = document.createElement("div");
    routine_edit_time.classList.add("edit-time");
    routine_edit_time.style.display = "none";

    var edit_hour_input = document.createElement("input");
    edit_hour_input.id = 'edit-hour-input';
    edit_hour_input.type = 'number';
    // changes the width of the input
    edit_hour_input.min = '5';
    edit_hour_input.max = '22';
    edit_hour_input.value = routine_hour;
    edit_hour_input.classList.add("edited");

    const edit_minute_input = document.createElement("input");
    edit_minute_input.id = 'edit-minute-input';
    edit_minute_input.type = 'number';
    // changes the width of the input
    edit_minute_input.min = '0';
    edit_minute_input.max = '60';
    edit_minute_input.value = routine_minute;
    edit_minute_input.classList.add("edited");

    const edit_time_input = document.createElement("input");
    edit_time_input.id = 'edit-time-input';
    edit_time_input.type = 'number';
    // changes the width of the input
    edit_time_input.placeholder = 'Time amount (min)';
    edit_time_input.min = '0';
    edit_time_input.max = '1080';
    edit_time_input.value = routine_time;
    edit_time_input.classList.add("edited");
    // edit_time_input.setAttribute('size', edit_time_input.getAttribute('placeholder').length);

    routine_edit_time.appendChild(edit_hour_input);
    routine_edit_time.appendChild(edit_minute_input);
    routine_edit_time.appendChild(edit_time_input);

    const routine_top = document.createElement("div");
    routine_top.classList.add("r-top");

    const routine_hint = document.createElement("div");
    routine_hint.classList.add("routine-hint");

    const routine_hint_p = document.createElement("p");
    routine_hint_p.innerHTML = input_hint.value;

    const routine_hint_text = document.createElement("textarea");
    routine_hint_text.classList.add("routine-hint-input-text");
    routine_hint_text.innerHTML = input_hint.value;
    routine_hint_text.setAttribute("readonly", "readonly");
    routine_hint_text.style.pointerEvents = "none";


    routine_hint.appendChild(routine_hint_p);
    routine_hint.appendChild(routine_hint_text);


    const edit_icon = document.createElement("div");
    edit_icon.classList.add("routine-edit-icon");
    // edit_icon.id = "edit_icon";
    edit_icon.innerHTML = '<svg version="1.1" id="Layer_Edit" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M349.1,73.62L87.29,335.43c-1.32,1.32-2.19,3.02-2.5,4.86l-15,90.29c-0.99,5.94,4.05,11.14,10.01,10.34l93.08-12.43c1.95-0.26,3.75-1.15,5.14-2.54l261.7-261.7c3.5-3.5,3.5-9.16,0-12.66l-77.96-77.96C358.26,70.13,352.59,70.13,349.1,73.62zM153.51,396.01l-32.27,4.31c-5.97,0.8-11-4.4-10.01-10.34l5.19-31.17c0.31-1.84,1.18-3.54,2.5-4.86L289.17,183.7c3.5-3.5,9.16-3.5,12.66,0l26.97,26.97c3.5,3.5,3.5,9.16,0,12.66L158.66,393.47C157.27,394.86,155.46,395.75,153.51,396.01zM327.11,145.75l25.49-25.49c3.5-3.5,9.16-3.5,12.66,0l26.97,26.97c3.5,3.5,3.5,9.16,0,12.66l-25.49,25.49c-3.5,3.5-9.16,3.5-12.66,0l-26.97-26.97C323.61,154.92,323.61,149.25,327.11,145.75z"/></svg>';

    const delete_icon = document.createElement("div");
    delete_icon.classList.add("routine-delete-icon");
    delete_icon.innerHTML = '<svg version="1.1" id="Layer_Delete" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <path d="M375.57,189.08L355.96,432.8c-0.38,4.63-4.24,8.2-8.89,8.2H148.69c-4.65,0-8.52-3.57-8.89-8.2l-19.61-243.72c-0.36-4.41,2.57-8.41,6.88-9.41l21.32-4.92c5.27-1.21,10.4,2.51,10.89,7.89l19.24,214.43c0.41,4.6,4.26,8.12,8.88,8.12h120.95c4.62,0,8.47-3.52,8.88-8.12l19.25-214.43c0.48-5.38,5.61-9.1,10.887.89l21.32,4.92C372.99,180.67,375.92,184.67,375.57,189.08z"/><path d="M395.8,118.74h-82.61c-2.41,0-4.34-2-4.25-4.41l1.44-38.92c0.08-2.41-1.85-4.41-4.26-4.41H189.63c-2.41,0-4.34,2-4.25,4.41l1.43,38.92c0.09,2.41-1.84,4.41-4.25,4.41H99.95c-2.35,0-4.25,1.91-4.25,4.26v24.31c0,2.35,1.9,4.25,4.25,4.25H395.8c2.35,0,4.25-1.9,4.25-4.25V123C400.05,120.65,398.15,118.74,395.8,118.74z M279.21,114.49c0,2.35-1.91,4.25-4.26,4.25H220.8c-2.35,0-4.25-1.9-4.25-4.25v-6.41c0-2.35,1.9-4.26,4.25-4.26h54.15c2.35,0,4.26,1.91,4.26,4.26V114.49z"/></svg>';

    // const svg_edit = document.createElement("svg");

    const edit_button = document.createElement('input');
    edit_button.type = 'button';
    edit_button.id = 'button-edit';
    // edit_button.name = 'btn-edit';
    edit_button.value = "Edit";

    const delete_button = document.createElement('input');
    delete_button.type = 'button';
    delete_button.id = 'button-delete';
    delete_button.name = 'btn-delete';

    const routine_close_icon = document.createElement("div");
    routine_close_icon.classList.add("close-routine-icon");
    routine_close_icon.innerHTML = '<div class="left-x"></div><div class="right-x"></div>';

    const routine_close_div = document.createElement("div");
    routine_close_div.classList.add("close-routine-div");

    routine_close_icon.appendChild(routine_close_div);

    const routine_content_element = document.createElement("p");
    routine_content_element.style.opacity = "0";
    // routine_content_element.type = "text";
    // routine_content_element.classList.add("routine-p");
    // routine_content_element.innerHTML = routine_name;
    // routine_content_element.value = routine_content_element.name;
    // routine_content_element.style.pointerEvents = "none";
    //switching from routine_content_element.innerText = """task"""; to """routine_name"""

    const routine_p_text = document.createElement("textarea");
    routine_p_text.type = "text";
    routine_p_text.rows = "1";
    routine_p_text.classList.add("routine-p-text");
    routine_p_text.innerHTML = routine_name;
    routine_p_text.style.pointerEvents = "none";




    const colour_detector = document.createElement("div");
    colour_detector.classList.add("idkabouteeet");
    colour_detector.style.backgroundColor = routine_colour;


    list_element.appendChild(colour_detector);

    var bgCol = window.getComputedStyle(colour_detector, null).getPropertyValue("background-color");
    console.log("YEYEYEYE " + bgCol);



    // bgCol = bgCol.split("rgb(").pop();

    // gets rid of "rgb(" from rgb(255, 0, 0); so it's only 255, 0, 0)



    // bgCol = bgCol.slice(0, bgCol.length - 1);

    // gets rid of ")" from rgb(255, 0, 0); so with the previous it's only 255, 0, 0
    // this slices everything before "0" and everything after "bgCol.length - 1"



    // by learning how .slice works we can easily just do

    bgCol = bgCol.slice(4, bgCol.length - 1);
    console.log("YEYEYEYE " + bgCol);

    console.log(bgCol.replace(/\D/g, ''));

    // console.log(bgCol.split(",")[0]);
    // console.log(bgCol.split(",")[1]);
    // console.log(bgCol.split(",")[2]);
    var red = parseInt(bgCol.split(",")[0]);
    var green = parseInt(bgCol.split(",")[1]);
    var blue = parseInt(bgCol.split(",")[2]);

    console.log("Red is " + red);
    console.log("Green is " + green);
    console.log("Blue is " + blue);

    console.log("R + G + B = " + parseInt(red + green + blue));

    var rgbMax;
    var rgb2nd;
    var rgbMin;
    var rgbMax1;
    var rgb2nd1;
    var rgbMin1;
    var deSaturated = false;

    if(red == green && green == blue){
      deSaturated = true;
    }
    else{
      deSaturated = false;
    }

    console.log(deSaturated);

    if(red >= green){
      rgbMax = red;
      if(red > blue){
        rgbMax = red;
        if(blue > green){
          rgb2nd = blue;
          rgbMin = green;
        }
        else{
          rgb2nd = green;
          rgbMin = blue;
        }
      }
      else{
        rgbMax = blue;
        rgb2nd = red;
        rgbMin = green;
      }
    }
    else if(red < green){
      rgbMax = green;
      if(green > blue){
        rgbMax = green;
        if(blue > red){
          rgb2nd = blue;
          rgbMin = red;
        }
        else{
          rgb2nd = red;
          rgbMin = blue;
        }
      }
      else{
        rgbMax = blue;
        rgb2nd = green;
        rgbMin = red;
      }
    }

    console.log("RGB Max = " + rgbMax);
    console.log("RGB 2nd = " + rgb2nd);
    console.log("RGB Min = " + rgbMin);



    rgbMax1 = red;
    rgb2nd1 = green;
    rgbMin1 = blue;

    var tempRGB;

    if(rgbMax1 < rgb2nd1){
      tempRGB = rgb2nd1;
      rgb2nd1 = rgbMax1;
      rgbMax1 = tempRGB;
    }

    if(rgbMax1 < rgbMin1){
      tempRGB = rgbMin1;
      rgbMin1 = rgbMax1;
      rgbMax1 = tempRGB;
    }

    if(rgb2nd1 < rgbMin1){
      tempRGB = rgb2nd1;
      rgb2nd1 = rgbMin1;
      rgbMin1 = tempRGB;
    }

    console.log("RGB Max = " + rgbMax1);
    console.log("RGB 2nd = " + rgb2nd1);
    console.log("RGB Min = " + rgbMin1);




    var rgbHue = 0;
    var rgbPos = true;

    if(rgbMax == red && rgb2nd == green){
      rgbHue = 0;
      rgbPos = true;
    }
    else if(rgbMax == green && rgb2nd == red){
      rgbHue = 60;
      rgbPos = false;
    }
    else if(rgbMax == green && rgb2nd == blue){
      rgbHue = 120;
      rgbPos = true;
    }
    else if(rgbMax == blue && rgb2nd == green){
      rgbHue = 180;
      rgbPos = false;
    }
    else if(rgbMax == blue && rgb2nd == red){
      rgbHue = 240;
      rgbPos = true;
    }
    else if (rgbMax == red && rgb2nd == blue) {
      rgbHue = 300;
      rgbPos = false;
    }

    console.log("Starting hue is " + rgbHue);


    console.log(rgbMax + "-" + rgbMin + " =")
    rgbMax = rgbMax - rgbMin;
    console.log(rgbMax)

    console.log(rgb2nd + "-" + rgbMin + " =")
    rgb2nd = rgb2nd - rgbMin;
    console.log(rgb2nd)

    console.log(rgbMax + "/" + 255 + " =")
    rgbMax = rgbMax / 255;
    console.log(rgbMax)

    if(rgbPos == true){
      rgb2nd = rgb2nd / rgbMax;
    }
    else if(rgbPos == false){
      rgb2nd = rgb2nd / rgbMax;
      rgb2nd = 255 - rgb2nd;
    }

    rgb2nd = rgb2nd / 4.25;

    rgbHue = rgbHue + rgb2nd;


    console.log("The hue of the inputted colour is " + rgbHue);

    console.log(red);
    console.log(green);
    console.log(blue);
    // var match = bgCol.match(/\d+/);
    // console.log(parseInt(match[0], 10));

    routine_back.setAttribute("style", "background-color: hsl(" + rgbHue + ", 67%, 89%);");
    // routine_p_text.setAttribute("style", "background-color: hsl(" + rgbHue + ", 67%, 89%);");
    routine_top.setAttribute("style", "background-color: hsl(" + rgbHue + ", 67%, 89%) !important;");
    routine_hint.setAttribute("style", "background-color: hsl(" + rgbHue + ", 86%, 57%);");
    edit_icon.setAttribute("style", "background-color: hsl(" + rgbHue + ", 70%, 47%);");
    delete_icon.setAttribute("style", "background-color: hsl(" + rgbHue + ", 70%, 47%);");
    colour_detector.remove();

    edit_time_input.setAttribute('size', edit_time_input.getAttribute('placeholder').length);


    routine_element.appendChild(routine_back);
    routine_element.appendChild(routine_time_text);
    routine_element.appendChild(routine_content_element);
    routine_element.appendChild(routine_edit_time);
    routine_element.appendChild(routine_p_text);
    routine_element.appendChild(routine_top);
    routine_element.appendChild(routine_hint);
    routine_element.appendChild(edit_icon);
    routine_element.appendChild(delete_icon);
    routine_element.appendChild(edit_button);
    routine_element.appendChild(delete_button);

    routine_element.appendChild(routine_close_icon);

    // const svg_edit = document.getElementById('edit_icon');
    // svg_edit.outerHTML += '<svg version="1.1" id="Layer_Delete" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <path d="M375.57,189.08L355.96,432.8c-0.38,4.63-4.24,8.2-8.89,8.2H148.69c-4.65,0-8.52-3.57-8.89-8.2l-19.61-243.72c-0.36-4.41,2.57-8.41,6.88-9.41l21.32-4.92c5.27-1.21,10.4,2.51,10.89,7.89l19.24,214.43c0.41,4.6,4.26,8.12,8.88,8.12h120.95c4.62,0,8.47-3.52,8.88-8.12l19.25-214.43c0.48-5.38,5.61-9.1,10.887.89l21.32,4.92C372.99,180.67,375.92,184.67,375.57,189.08z"/><path d="M395.8,118.74h-82.61c-2.41,0-4.34-2-4.25-4.41l1.44-38.92c0.08-2.41-1.85-4.41-4.26-4.41H189.63c-2.41,0-4.34,2-4.25,4.41l1.43,38.92c0.09,2.41-1.84,4.41-4.25,4.41H99.95c-2.35,0-4.25,1.91-4.25,4.26v24.31c0,2.35,1.9,4.25,4.25,4.25H395.8c2.35,0,4.25-1.9,4.25-4.25V123C400.05,120.65,398.15,118.74,395.8,118.74z M279.21,114.49c0,2.35-1.91,4.25-4.26,4.25H220.8c-2.35,0-4.25-1.9-4.25-4.25v-6.41c0-2.35,1.9-4.26,4.25-4.26h54.15c2.35,0,4.26,1.91,4.26,4.26V114.49z"/></svg>';

    if(input_radio_checked.value == "Mon"){
      list_element = document.querySelector("#monday");
      routine_f_close = document.querySelector("#routine-full-f-mon");
    }
    else if (input_radio_checked.value == "Tue") {
      list_element = document.querySelector("#tuesday");
      routine_f_close = document.querySelector("#routine-full-f-tue");
    }
    else if (input_radio_checked.value == "Wed") {
      list_element = document.querySelector("#wednesday");
      routine_f_close = document.querySelector("#routine-full-f-wed");
    }
    else if (input_radio_checked.value == "Thu") {
      list_element = document.querySelector("#thursday");
      routine_f_close = document.querySelector("#routine-full-f-thu");
    }
    else if (input_radio_checked.value == "Fri") {
      list_element = document.querySelector("#friday");
      routine_f_close = document.querySelector("#routine-full-f-fri");
    }
    else if (input_radio_checked.value == "Sat") {
      list_element = document.querySelector("#saturday");
      routine_f_close = document.querySelector("#routine-full-f-sat");
    }
    else if (input_radio_checked.value == "Sun") {
      list_element = document.querySelector("#sunday");
      routine_f_close = document.querySelector("#routine-full-f-sun");
    }


    // const bgCol = window.getComputedStyle(routine_element, null).getPropertyValue("background-color");
    // console.log("YEYE " + bgCol);
    console.log(input_radio_checked.value);
    // list_element.appendChild(routine_button).before(routine_f_close);
    // list_element.appendChild(routine_element).after(routine_button)before(routine_f_close);
    list_element.insertBefore(routine_button, routine_f_close);
    list_element.insertBefore(routine_element, routine_f_close);


    // We have to add this after it is added so we can get the background colour
    // const bgCol = window.getComputedStyle("red", null);
    // const bgCol = window.getComputedStyle(routine_element, null).getPropertyValue("background-color");
    // console.log("YEYE " + bgCol);

    // list_element.appendChild(routine_button).before(routine_f_close);
    // list_element.appendChild(routine_element).before(routine_f_close);


    // routine_f_close = list_element.lastChild.innerHTML;
    // console.log("Submitted form!");
    // alert("Submitted form!");
    // document.querySelector("#routine-colour-input")



    console.log(routine_hint_text === document.activeElement);
    if( routine_hint_text === document.activeElement){
      console.log("input is focused?? OMG");
    }

    routine_p_text.addEventListener('paste', e => e.preventDefault());

    // routine_p_text.onfocus = function removeEnter(){
      routine_p_text.addEventListener('keypress', function (e) {
        if(e.keyCode === 13 || e.which === 13){
          e.preventDefault();
          return false;
        }
      });
    // }

    var y = 1;
    routine_hint_text.addEventListener('keypress', function (e) {
      y = 2;
    });

    routine_hint_text.onfocus = function yeye(){
      // console.log("uhhh");

      var x = 2;

      if(y == 2){
        x = 1;
      }



      sleep(200).then(() => {
        while (x == 1){
              x = 2;
              // console.log("uhhh");
              routine_hint_text.innerHTML = routine_hint_text.value;
              routine_hint_p.innerHTML = routine_hint_text.innerHTML;
        }
        if( routine_hint_text === document.activeElement ){
          x = 1;
          yeye();
        }
        else{
          x = 2;
        }
      });


      // sleep(200).then(() => {
      //   while (routine_hint_text === document.activeElement){
      //
      //         routine_hint_text.innerHTML = routine_hint_text.value;
      //         routine_hint_p.innerHTML = routine_hint_text.innerHTML;
      //   }
      // });
    }


    // while(routine_hint_text === document.activeElement){
    //   console.log("huh");
    //   sleep(2000).then(() => {
    //     console.log("uhhh");
    //   });
    // }

    //   console.log(x);
    // };
      // while( x == 1){
      //   console.log("happening in while")
      //   sleep(2000).then(() => {
      //     console.log("happening in s2k")
      //     x = 2;
      //     console.log("uhhh");
      //   });
      //   x = 1;
      // }


            // console.log("happening in s2k");
            // x = 2;





    edit_button.addEventListener('click', () => {
      // routine_hint_text.innerHTML = routine_hint_text.value;
      // // makes what we write when its in focus the actual innerHTML
      // routine_hint_p.innerHTML = routine_hint_text.innerHTML;
      // // takes the text area innerHTML and puts it in p so we can scale height
      // sleep(2000).then(() => {
      //   console.log("Pressing Edit");
      // });

      if(edit_button.value == "Edit" ){
        routine_close_div.onclick = function(){
          alert("You haven't finished editing the routine");
        }
      }

      if(edit_button.value == "Edit" ){
        routine_hint_text.removeAttribute("readonly");
        routine_hint_text.style.pointerEvents = "auto";
        // routine_content_element.style.pointerEvents = "auto";
        routine_p_text.style.pointerEvents = "auto";
        routine_f_close.style.pointerEvents = "none";
        // routine_close_div.addEventListener('click', () => {
        //   alert("You haven't finished editing the routine");
        // });

        routine_hint.classList.add("edited-after");
        routine_p_text.classList.add("edited");

        routine_time_text.style.display = "none";
        routine_edit_time.style.display = "flex";


        // NAH


        // if (am_pm == "PM") {
        //   // console.log("This is am_pm " + am_pm);
        //   // console.log("This is edit_hour_input " + parseInt(edit_hour_input.value));
        //   // // console.log(parseInt(edit_hour_input.value) + 12);
        //   edit_hour_input.value = parseInt(edit_hour_input.value) + 12;
        //   am_pm_2 = "PM";
        // }
        //
        // if(parseInt(edit_hour_input.value) < 13){
        //   am_pm = "AM";
        // }


        edit_button.value = "Save";
        // console.log("CMONMAN");
        // routine_content_element.removeAttribute("readonly");
        // routine_name.removeAttribute("readonly");
        // routine_name.focus();

      }
      else if(edit_button.value == "Save"){
        routine_hint_text.setAttribute("readonly", "readonly");
        // routine_content_element.name = routine_content_element.value;
        routine_p_text.innerHTML = routine_p_text.value;
        // routine_content_element.innerHTML = routine_p_text.innerHTML;
        // routine_p_text.innerHTML = routine_content_element.innerHTML;

        routine_hint_text.style.pointerEvents = "none";
        // routine_content_element.style.pointerEvents = "none";
        routine_p_text.style.pointerEvents = "none";
        routine_f_close.style.pointerEvents = "auto";

        routine_time_text.style.display = "block";
        routine_edit_time.style.display = "none";

        routine_button.setAttribute("style", "--routineHeight: calc(" + edit_time_input.value + " / 60 * (100% / 19)); " + "--routineTop: calc(" + ((edit_hour_input.value - 4) + edit_minute_input.value / 60) + " * (100% / 19));");
        routine_element.setAttribute("style", "--routineColour:" + routine_colour + "; " + "--routineHeight: calc(" + edit_time_input.value + " / 60 * (100% / 19)); " + "--routineTop: calc(" + ((edit_hour_input.value - 4) + edit_minute_input.value / 60) + " * (100% / 19));");


        if (edit_minute_input.value == 60){
          edit_hour_input.value++;
          edit_minute_input.value = 0;
        }

        if (parseInt(edit_minute_input.value) < 10 && parseInt(edit_minute_input.value) >= 0 && edit_minute_input.value.length == 1){
          edit_minute_input.value = "0" + edit_minute_input.value;
        }

        // NAH

        if(parseInt(edit_hour_input.value) > 12){
          edit_hour_input.value = parseInt(edit_hour_input.value) - 12;
          am_pm = "PM";
        }
        else{
          am_pm = "AM";
        }

        if (edit_minute_input.value != 0) {
          first_hour_time = edit_hour_input.value + ":" + edit_minute_input.value;
        }
        else{
          first_hour_time = edit_hour_input.value;
        }

        second_minutes = parseInt(edit_minute_input.value) + parseInt(edit_time_input.value);

        if(second_minutes >= 60){
          routine_hour_length = parseInt(second_minutes / 60);
        }
        else{
          routine_hour_length = 0;
        }

        second_minutes = second_minutes - (60 * routine_hour_length);

        second_hour = parseInt(edit_hour_input.value) + routine_hour_length;

        if(am_pm == "AM" && second_hour > 12){
          second_hour = second_hour - 12;
          am_pm_2 = "PM";
        }
        else if (am_pm == "PM") {
          am_pm_2 = "PM";
        }
        else{
          am_pm_2 = "AM";
        }

        if(second_minutes.toString().length == 1){
          second_minutes = "0" + second_minutes;
        }

        if(second_minutes != 0){
          second_minutes = ":" + second_minutes;
        }
        else{
          second_minutes = "";
        }


        if(am_pm == "PM"){
          edit_hour_input.value = parseInt(edit_hour_input.value) + 12;
        }

        routine_time_text.innerText = first_hour_time + am_pm + " - " + second_hour + second_minutes + am_pm_2;



        routine_hint.classList.remove("edited-after");
        routine_p_text.classList.remove("edited");
        // routine_hint_text.innerHTML = routine_hint_text.value;
        // routine_hint_p.innerHTML = routine_hint_text.innerHTML;


        edit_button.value = "Edit";
      }
    });

    delete_button.addEventListener('click', () => {
      list_element.removeChild(routine_element);
      // routine_content_element.removeAttribute("readonly", "readonly");

    })
  })

  // var buttn document.getElementById('button-delete');

  // document.getElementById('button-delete').onclick = function(){
  //   remove();
  // }
  // Without above, the page will refresh when Adding task / submitting form

});



// alert("kmsing");
