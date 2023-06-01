// json 형식의 문자열
// json 형식의 문자열 + 배열
// [] 안에 json 형식의 문자열을 ,를 이용하여 연결
let jsonStr = `[
    {
        "name" : "도레미"
        , "major" : "컴퓨터공학"
        , "grade" : 2
    }
    , {
        "name" : "미파솔"
        , "major" : "동양화"
        , "grade" : 3
    }
    , {
        "name" : "솔라시"
        , "major" : "국어교육"
        , "grade" : 4
    }
]`;
// json 문자열을 자바스크립트 객체로 변환
let jsObj = JSON.parse(jsonStr);
// 자바스크립트 객체를 json 문자열로 변환
let jsonStr0 = JSON.stringify(jsObj);

window.onload = function(){
    let button = document.querySelector('button');
    button.addEventListener('click', function(e){
        e.preventDefault();
        // for(let i=0; i<jsObj.length; i++){
        //     let tr = document.createElement('tr');
        //     let tdName = document.createElement('td');
        //     let tdMajor = document.createElement('td');
        //     let tdGrade = document.createElement('td');
        //     tdName.innerHTML += jsObj[i].name;
        //     tdMajor.innerHTML += jsObj[i].major;
        //     tdGrade.innerHTML += jsObj[i].grade;
        //     tr.appendChild(tdName);
        //     tr.appendChild(tdMajor);
        //     tr.appendChild(tdGrade);
        //     let tbody = document.querySelector('tbody');
        //     tbody.appendChild(tr);
        // };
        for(obj of jsObj){
            let tr = document.createElement('tr');
            let tdName = document.createElement('td');
            let tdMajor = document.createElement('td');
            let tdGrade = document.createElement('td');
            tdName.innerHTML += obj.name;
            tdMajor.innerHTML += obj.major;
            tdGrade.innerHTML += obj.grade;
            tr.appendChild(tdName);
            tr.appendChild(tdMajor);
            tr.appendChild(tdGrade);
            let tbody = document.querySelector('tbody');
            tbody.appendChild(tr);
        };
    });
}