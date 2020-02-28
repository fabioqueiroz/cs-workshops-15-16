function onclickHandler(event) {
    document.getElementById('output').innerText = 'fetching...';
    fetch('../data.php').then(function (response) {
        return response.text(); }).then(function (data) {
        document.getElementById('output').innerText = data;
        console.log(data);
    }).catch(function (error) {
        document.getElementById('output').innerText ='Error: ' + error;
    });
}

document.getElementById('goButton').addEventListener('click', onclickHandler, false);

function showHint(str) {
    if (str.length === 0) {
        document.getElementById("txtHint").innerHTML = "";
        //document.getElementById("resultsSelectionBox").innerHTML = "";
        return;

    } else {
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                // var uic = document.getElementById("txtHint");
                // let uic = document.getElementById("resultsSelectionBox");
                // uic.innerHTML = this.responseText;

                let uic = document.getElementById("resultsSelectionBox");
                let names = this.responseText.split(',');

                var optionValues =[];
                for (var i = 0; i < names.length; i++) {
                    let opt = document.createElement('option');
                    opt.value = names[i];
                    opt.innerHTML = names[i];
                    uic.appendChild(opt);

                    // $('#resultsSelectionBox option').each(function(){
                    //     if($.inArray(this.value, optionValues) > -1){
                    //         $(this).remove()
                    //     }else{
                    //         optionValues.push(this.value);
                    //         //uic.appendChild(opt);
                    //     }
                    // });

                }
            }
        };

        xmlhttp.open("GET", "get-hint.php?q=" + str, true);
        xmlhttp.send();
    }
}

function showHint2(str) {
    if (str.length === 0) {
        document.getElementById("txtHint2").innerHTML = "";
        document.getElementById("txtHint2").style.border = "0px";
        return;

    } else {
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {

                let uic2 = document.getElementById("resultsSelectionBox2");
                let peopleNames = this.responseText.split(',');
                console.log(peopleNames);

                if (this.response != "no suggestions") {
                    uic2.innerHTML = "<br/>";
                    uic2.style.border = "1px solid #A5ACB2";
                    uic2.style.width = "205px";
                    uic2.style.marginTop = "-16px";

                    //console.warn(xmlhttp.responseText);

                    // let people = JSON.parse(this.responseText); // **** throwing an error without json_encode($peopleHint) ****
                    // console.log(people);

                    // people.forEach(function (obj) {
                    //     // uic2.innerHTML += "<a href='#'><img src='" + obj.image + "'>" + obj.name + ": " + obj.location + "</a><br/>";
                    //     uic2.innerHTML += obj.name;
                    // })

                    peopleNames.forEach(function (obj) {
                        console.log(obj);
                    });

                    for (let i = 0; i < peopleNames.length; i++) {
                        let opt = document.createElement('option');
                        opt.value = peopleNames[i];
                        opt.innerHTML = peopleNames[i];
                        uic2.appendChild(opt);

                    }
                }
            }
        };

        xmlhttp.open("GET", "people-hint.php?q=" + str, true);
        xmlhttp.send();
    }
}

