function changePerson() {
    const alexBtn = document.getElementById("alex_btn");
    const abigailBtn = document.getElementById("abigail_btn");
    const elliottBtn = document.getElementById("elliott_btn");
    const alex = document.getElementById("alex");
    const abigail = document.getElementById("abigail");
    const elliott = document.getElementById("elliott");
    let personsBtn = [alexBtn, abigailBtn, elliottBtn];
    let personsWind = [alex, abigail, elliott];

    return (
        function changeAlex() {
            alex.classList.add("d_flex");
            for (let i = 0; i <= personsWind.length; i++) {
                if (personsWind[i] == alex) {
                    alex.classList.add("d_flex");
                } else {
                    personsWind[i].classList.remove("d_flex");
                }
            }
        },
        function changeAbigail() {
            abigail.classList.add("d_flex");
            for (let i = 0; i <= personsWind.length; i++) {
                if (personsWind[i] == abigail) {
                    abigail.classList.add("d_flex");
                } else {
                    personsWind[i].classList.remove("d_flex");
                }
            }
        },
        function changeElliott() {
            elliott.classList.add("d_flex");
            for (let i = 0; i <= personsWind.length; i++) {
                if (personsWind[i] == elliott) {
                    elliott.classList.add("d_flex");
                } else {
                    personsWind[i].classList.remove("d_flex");
                }
            }
        },
        function alexF() {
            for (let i = 0; i < personsBtn.length; i++) {
                if (personsBtn[i].classList.contains("click_btn")) {
                    personsBtn[i].classList.remove("click_btn");
                }
            }

            alexBtn.classList.add("click_btn");
            changeAlex();
        },
        function abigailF() {
            for (let i = 0; i < personsBtn.length; i++) {
                if (personsBtn[i].classList.contains("click_btn")) {
                    personsBtn[i].classList.remove("click_btn");
                }
            }
            abigailBtn.classList.add("click_btn");
            changeAbigail();
        },
        function elliottF() {
            for (let i = 0; i < personsBtn.length; i++) {
                if (personsBtn[i].classList.contains("click_btn")) {
                    personsBtn[i].classList.remove("click_btn");
                }
            }
            elliottBtn.classList.add("click_btn");
            changeElliott();
        }
    );
}

export default changePerson;