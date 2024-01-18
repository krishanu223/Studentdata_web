var i;
var studentlist = [];
var students;
let j;

function domfetch(task) {

    $('#studentdata').append("<li><span>&nbsp;&nbsp;Id:" + task.id + "&nbsp;&nbsp;</span> No:<span>&nbsp;&nbsp;" + task.roll + "&nbsp;&nbsp;</span>Name:<span>&nbsp;&nbsp;" + task.name + "&nbsp;&nbsp;&nbsp;&nbsp;</span>Marks:<span>&nbsp;&nbsp;" + task.marks + "&nbsp;&nbsp;</span>&nbsp;&nbsp;<div class=material-symbols-outlined id=" + task.id + ">cancel</div></li>")
}

function rander() {
    $('#studentdata').html("")
    for (let i = 0; i < studentlist.length; i++) {
        domfetch(studentlist[i])
    }
}
$(document).ready(function() {
    students = JSON.parse(localStorage.getItem('students'));
    if (students == null) {
        localStorage.setItem('students', JSON.stringify(students = []));
    }
    students = JSON.parse(localStorage.getItem('students'));
    studentlist = students;
    i = studentlist.length;
    rander();
})

$('button').on('click', function() {
    i = studentlist.length;
    var roll = $('#roll').val();
    var name = $("#name").val();
    var marks = $('#marks').val();
    var student = {
        'id': i,
        'roll': roll,
        'name': name,
        'marks': marks
    }
    if (roll && name && marks) {
        studentlist.push(student);
        rander();
    }

    students = studentlist;
    localStorage.setItem('students', JSON.stringify(students));
    students = JSON.parse(localStorage.getItem('students'));
    students = studentlist;

})

function deleteTask(taskId) {
    const newtask = students.filter((student) => {
        return student.id !== taskId;
    })
    students = newtask;

}

$(window).on('click', function(event) {
    if (event.target.id) {
        for (var i = students.length - 1; i >= 0; --i) {
            if (students[i].id == event.target.id) {
                students.splice(i, 1);
                //students = JSON.parse(localStorage.getItem('students'));
                localStorage.setItem('students', JSON.stringify(students));
                //students = studentlist;
            }
        }
    }
    rander();
})