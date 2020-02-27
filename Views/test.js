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
        return;

    } else {
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {

                let uic2 = document.getElementById("resultsSelectionBox2");
                let peopleNames = this.responseText.split(',');
                console.log(peopleNames);

                if (this.response != "no suggestions") {
                    uic2.innerHTML = "Suggestions:<br/>";
                    //console.warn(xmlhttp.responseText);

                    // let people = JSON.parse(this.responseText); // **** throwing an error ****
                    // console.log(people);
                    //
                    //
                    // people.forEach(function (obj) {
                    //     uic2.innerHTML += "<a href='#'><img src='" + obj.image + "'>" + obj.name + ": " + obj.location + "</a><br/>";
                    // })

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

