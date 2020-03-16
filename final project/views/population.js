$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


var schedule = { "freshman": { "quarter1": ["woop", "CS164"], "quarter2": ["CI102", "CS171"], "quarter3": ["CI103", "CS172"] }, "sophomore": { "quarter1": ["CS265", "CS270"], "quarter2": ["CS260", "CS375"] }, "pre-junior": { "quarter1": ["CS281", "SE310"], "quarter2": ["CS283", "CS360"] }, "junior": { "quarter1": ["SE181"], "quarter2": [] }, "senior": { "quarter1": ["CI491"], "quarter2": ["CI492"], "quarter3": ["CI493"] } };



var currentYear = "freshman";
var storedClass = "";

function load() {

    document.getElementById("Q1").style.display = "block";
    document.getElementById("Q2").style.display = "block";
    document.getElementById("Q3").style.display = "block";

    populateCore("freshman", 1);
    populateCore("freshman", 2);
    populateCore("freshman", 3);
}

function ChangeQuar() {
    if (document.getElementById("YearSelect").value == "Freshman") {
        clearTables();

        document.getElementById("Q1").style.display = "block";
        document.getElementById("Q2").style.display = "block";
        document.getElementById("Q3").style.display = "block";


        populateCore("freshman", 1);
        populateCore("freshman", 2);
        populateCore("freshman", 3);

        currentYear = "freshman";
    }
    if (document.getElementById("YearSelect").value == "Sophomore") {
        clearTables();

        document.getElementById("Q1").style.display = "block";
        document.getElementById("Q2").style.display = "block";
        document.getElementById("Q3").style.display = "none";

        populateCore("sophomore", 1);
        populateCore("sophomore", 2);

        currentYear = "sophomore";
    }
    if (document.getElementById("YearSelect").value == "Junior") {
        clearTables();

        document.getElementById("Q1").style.display = "block";
        document.getElementById("Q2").style.display = "block";
        document.getElementById("Q3").style.display = "none";

        populateCore("junior", 1);

        currentYear = "junior";
    }
    if (document.getElementById("YearSelect").value == "Pre-Junior") {
        clearTables();

        document.getElementById("Q1").style.display = "block";
        document.getElementById("Q2").style.display = "block";
        document.getElementById("Q3").style.display = "none";

        populateCore("pre-junior", 1);
        populateCore("pre-junior", 2);

        currentYear = "pre-junior";
    }
    if (document.getElementById("YearSelect").value == "Senior") {
        clearTables();

        document.getElementById("Q1").style.display = "block";
        document.getElementById("Q2").style.display = "block";
        document.getElementById("Q3").style.display = "block";

        populateCore("senior", 1);
        populateCore("senior", 2);
        populateCore("senior", 3);

        currentYear = "senior"
    }

}

function populateCore(year, qn) {
    var Qid = "Q" + qn + "body";
    var table = document.getElementById(Qid);
    var classes = getSchedule(year, qn);

    for (var r in classes) {
        for (var c = 0; c < 3; c++) {
            table.rows[r].cells[c + 1].innerHTML = classes[r][c];
        }
        var des = getDescription(classes[r][0])
        table.rows[r].title = classes[r][0] + ": " + des;
    }
}

function getSchedule(year, quarter) {
    var q = "quarter" + quarter;
    var y = schedule[year];
    var classList = y[q];
    var classArray = [];

    for (var i in classList) {
        var c = getClassInfo(classList[i]);
        classArray.push(c);
    }

    return classArray;
}

function addSearchRows(classes, searchName) {
    var table = document.getElementById("searchbody");

    var tr = document.createElement("tr");
    var th = document.createElement("th");
    th.colSpan = "3";
    th.innerHTML = searchName;
    tr.appendChild(th);
    table.appendChild(tr);

    for (r in classes) {
        var tr = document.createElement("tr");
        var pick = false;
        for (var c = 0; c < 3; c++) {
            if (c == 0 && classes[r][c] == "options") {
                var tr = document.createElement("tr");
                var th = document.createElement("th");
                th.colSpan = "3";
                th.innerHTML = "Pick " + classes[r][1] + " from below:";
                tr.appendChild(th);

                var options = classes[r][2];
                c = 3;
                pick = true;
            }
            else {
                var td = document.createElement("td");

                td.innerHTML = classes[r][c];
                tr.appendChild(td);
            }
        }
        if (pick != true) {
            tr.style.cursor = "pointer";
            tr.addEventListener("click", function () {
                storedClass = this.firstChild.innerHTML;
            });
            var c = tr.firstChild.innerHTML;

            tr["data-toggle"] = "tooltip";
            tr["data-placement"] = "top";

            var des = getDescription(c);
            tr.title = c + ": " + des;
        }
        //            tr.addEventListener("click",function{
        //                tr.style.color = "white";        
        //            });
        table.appendChild(tr);
    }

    for (i in options) {
        var tr = document.createElement("tr");
        for (var k = 0; k < 3; k++) {
            var td = document.createElement("td");
            td.innerHTML = options[i][k];
            tr.appendChild(td);
        }
        tr.style.cursor = "pointer";
        tr.addEventListener("click", function () {
            storedClass = this.firstChild.innerHTML;
        });

        var c = tr.firstChild.innerHTML;
        tr["data-toggle"] = "tooltip";
        tr["data-placement"] = "top";
        var des = getDescription(c);
        tr.title = c + ": " + des;

        table.appendChild(tr);
    }
}

function popSearch() {
    clearSearchTable();
    document.getElementById("Search").style.display = "block";
    var searchArray = [];

    if (document.getElementById("100level").checked) {
        addSearchRows(get100s(), "100 level classes");
    }
    if (document.getElementById("200level").checked) {
        addSearchRows(get200s(), "200 level classes");
    }
    if (document.getElementById("300level").checked) {
        addSearchRows(get300s(), "300 level classes");
    }
    if (document.getElementById("400level").checked) {
        addSearchRows(get400s(), "400 level classes");
    }
    var track = document.getElementById("ConcenSelect").value;
    if (track != "Track Selection") {
        var trackClasses = getTrack(track);
        addSearchRows(trackClasses, track);
    }
}

function addClass(row) {
    if (storedClass == "") {
        for (var i = 0; i < 3; i++) {
            row.cells[i + 1].innerHTML = "";
        }
    }
    else {
        var classInfo = getClassInfo(storedClass);

        for (var i = 0; i < 3; i++) {
            row.cells[i + 1].innerHTML = classInfo[i];
        }
        var des = getDescription(classInfo[0]);
        row.title = classInfo[0] + ": " + des;

        storedClass = "";
    }
}

function clearSearchTable() {
    var table = document.getElementById("searchbody");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}

function saveSchedule() {
    clearTables();
    var scheduleStr = JSON.stringify(schedule);
    let req = new XMLHttpRequest();
    req.open("POST", "/schedule", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(scheduleStr);
    //req.send(scheduleStr);
}

function clearTables() {
    for (t = 1; t <= 3; t++) {
        var classArray = [];
        var Qid = "Q" + t + "body";
        var qn = "quarter" + t;
        for (r = 0; r < 6; r++) {
            //var Qid = "Q" + t +"body";
            var table = document.getElementById(Qid);
            var className = table.rows[r].cells[1].innerHTML
            if (className != "") {
                classArray.push(className);
            }
            table.rows[r].cells[1].innerHTML = "";
            table.rows[r].cells[2].innerHTML = "";
            table.rows[r].cells[3].innerHTML = "";
        }
        schedule[currentYear][qn] = classArray;
    }
}

function reset() {
    clearTables();
    document.getElementById("Search").style.display = "none";

    document.getElementById("100level").checked = false;
    document.getElementById("200level").checked = false;
    document.getElementById("300level").checked = false;
    document.getElementById("400level").checked = false;

    document.getElementById("ConcenSelect").value = "Track Selection";

    for (year in schedule) {
        for (quarter in schedule[year]) {
            var coreClasses = [];
            var qn = quarter.substr(quarter.length - 1);
            var cores = getCore(year, qn);

            for (i in cores) {
                coreClasses.push(cores[i][0]);
            }

            schedule[year][quarter] = coreClasses;

            if (year == currentYear) {
                populateCore(year, qn);
            }
        }
    }
}