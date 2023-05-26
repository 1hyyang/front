window.onload = function(){
    btn1.addEventListener('click', function(){
        let liNode1 = document.createElement('li');
        let liNode2 = document.createElement('li');
        let liNode3 = document.createElement('li');
        let liNode4 = document.createElement('li');
        let textNode1 = document.createTextNode('Java');
        let textNode2 = document.createTextNode('Oracle');
        let textNode3 = document.createTextNode('JSP/Servlet');
        let textNode4 = document.createTextNode('SPRING');
        liNode1.appendChild(textNode1);
        liNode2.appendChild(textNode2);
        liNode3.appendChild(textNode3);
        liNode4.appendChild(textNode4);
        let ul = document.querySelector('ul');
        let li0 = document.querySelectorAll('li')[0];
        ul.insertBefore(liNode1, li0);
        ul.insertBefore(liNode2, li0);
        ul.appendChild(liNode3);
        ul.appendChild(liNode4);
    })

    let pNode1 = document.createElement('p');
    let pNode2 = document.createElement('p');
    let pNode3 = document.createElement('p');
    let pNode4 = document.createElement('p');
    let textNode1 = document.createTextNode('Java');
    let textNode2 = document.createTextNode('Oracle');
    let textNode3 = document.createTextNode('JSP/Servlet');
    let textNode4 = document.createTextNode('SPRING');
    pNode1.appendChild(textNode1);
    pNode2.appendChild(textNode2);
    pNode3.appendChild(textNode3);
    pNode4.appendChild(textNode4);
    let body = document.querySelector('body');
    let p0 = document.querySelectorAll('p')[0];
    body.insertBefore(pNode1, p0);
    body.insertBefore(pNode2, p0);
    body.appendChild(pNode3);
    body.appendChild(pNode4);
}