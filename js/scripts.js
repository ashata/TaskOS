/*Changes color of the selected list item
 *gets the DOM element by class name and toggles color if selected
 **/
function change(){
    $('.list-item input:checkbox').click(function() {
        var selectedlistitem = $(this).parent('li');
        selectedlistitem.toggleClass('selected');
    });
}

/*If the remove image button is clicked for a list item, remove it from the task list*/
function rem(){
    $('#litem').live('click', function() {
    $(this).closest('li').remove();
});
}

/*Datepicker with minimum date - today. 
 *Task completion date can be today or a day in future
 *currently not working in ie9*/
$(document).ready(function(){
      $(function(){
        $('#date_input').datepicker({
            minDate: new Date(), 
            maxDate: ""
        });
    });
});
  
/*Displays the value of title attributes of textbox, 
 *input hint disappears on clicking the text box */  
$(document).ready(function() {
    $('input[title]').inputHints();
});

/*Checks all fields are filled and saves it
 *Task can be saved only when all fields are filled*/
function check()
{
    var tname = $('#taskName').val();
    var emptycheck = false;
    emptycheck = checkForText("What needs to be done",tname);
    if (!emptycheck)
        return;
    var asignd = $('#assignee').val();
    emptycheck = false;
    emptycheck = checkForText("By Whom",asignd);
    if (!emptycheck)
        return;
    var deadline = $('#date_input').val();
    emptycheck = false;
    emptycheck = checkForText("By When",deadline);
    if (!emptycheck)
        return;
    //If all fields are filled, save the task
    $('#resbody').append("<li class='list-item' id='litem"+tname+"'><input type='checkbox' name='cbox' onchange='change()' value='ON'/>"+ tname + "<input type='image' src='images/remove.jpg' style='width: 15px; height: 15px; margin-left: 20px;' onclick='rem()' id='litem' alt='remove'/><br /></li>");
}   

/*display error message(i.e., field name) if a field is empty*/
function checkForText(tbid, tbtitle)
{
    if (tbtitle == null || tbtitle == "" || tbtitle == tbid)
    {
        alert("Please fill out \"" + tbid + "\"!");
        return false;
    }
    return true;
}       