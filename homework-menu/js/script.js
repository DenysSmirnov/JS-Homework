(() => {
    'use strict';
    let app = document.getElementById('app');
    let menu = document.createElement('div');
    menu.className = 'context-menu';
    let btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerText = "I'm button";

    let link1 = document.createElement('a');
    link1.innerText = "link 1";
    link1.href = "Link1";
    let link2 = document.createElement('a');
    link2.innerText = "link 2";
    link2.href = "Link2";
    let link3 = document.createElement('a');
    link3.innerText = "link 3";
    link3.href = "Link3"
    let link4 = document.createElement('a');
    link4.innerText = "link 4";
    link4.href = "Link4";
    let link5 = document.createElement('a');
    link5.innerText = "link 5";
    link5.href = "Link5";
    let link6 = document.createElement('a');
    link6.innerText = "link 6";
    link6.href = "Link6";
    let link7 = document.createElement('a');
    link7.innerText = "link 7";
    link7.href = "Link7";
    let link8 = document.createElement('a');
    link8.innerText = "link 8";
    link8.href = "Link8";

    menu.addEventListener('click', (event) => {
        event.preventDefault();
        app.removeChild(menu);
        alert(event.target.innerText);
    });
    document.body.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });
    app.addEventListener('click', () => {
        let m = document.getElementsByClassName('context-menu');
        if (m.length !== 0) {
            app.removeChild(menu);
        }
    });

    btn.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        event.stopPropagation();
        menu.setAttribute(
            'style', `left:${event.x}px; top:${event.y}px;`
        );
        app.appendChild(menu);
        menu.appendChild(link1);
        menu.appendChild(link2);
        menu.appendChild(link3);
        menu.appendChild(link4);
        menu.appendChild(link5);
        menu.appendChild(link6);
        menu.appendChild(link7);
        menu.appendChild(link8);
    });
    app.appendChild(btn);

})();