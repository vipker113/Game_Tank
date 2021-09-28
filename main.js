let hp = 20;
document.getElementById("span0").style.display = "none";
document.getElementById("keyboard").style.display = "none";
document.getElementById("reload").style.display = "none";
document.getElementById("finish").style.display = "none";

function moveTank(e) {
    console.log(e.code);
    let keyCode = e.keyCode
    switch (keyCode) {
        case 38:
            moveUp();
            break;
        case 40:
            moveDown();
            break;
        case 37:
            moveLeft();
            break;
        case 39:
            moveRight();
            break;
    }
    // if (keyCode == 38) {
    //     moveUp()
    // }
    // else if (keyCode == 40) {
    //     moveDown()
    // }
    // else if (keyCode == 37) {
    //     moveLeft()
    // }
    // else if (keyCode == 39) {
    //     moveRight()
    // }
}

class Boom {
    constructor(image, width, height, top, left) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.top = top;
        this.left = left;
    }
    getTop() {
        return this.top;
    }

    getLeft() {
        return this.left;
    }

    getBoomElement() {
        return '<img width="' + this.width + '"' +
            ' height="' + this.height + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    moveBoom() {
        if (this.top >= 0 && this.top < 300) {
            this.top += 30
        } else if (this.top == 300) {
            this.top -= 300;
        }
    }
}

let boom1 = new Boom("boom.png", 30, 30, 0, 180);
let boom2 = new Boom("boom.png", 30, 30, 180, 270);
let boom3 = new Boom("boom.png", 30, 30, 90, 360);
let boom4 = new Boom("boom.png", 30, 30, 120, 450);
let boom5 = new Boom("boom.png", 30, 30, 60, 540);
let boom6 = new Boom("boom.png", 30, 30, 270, 630);
let boom7 = new Boom("boom.png", 30, 30, 30, 720);
let boom8 = new Boom("boom.png", 30, 30, 120, 810);
let boom9 = new Boom("boom.png", 30, 30, 30, 900);
let boom10 = new Boom("boom.png", 30, 30, 240, 990);
let boom11 = new Boom("boom.png", 30, 30, 150, 1080);
let boom12 = new Boom("boom.png", 30, 30, 210, 1170);

function moveBoomDown() {
    boom1.moveBoom();
    boom2.moveBoom();
    boom3.moveBoom();
    boom4.moveBoom();
    boom5.moveBoom();
    boom6.moveBoom();
    boom7.moveBoom();
    boom8.moveBoom();
    boom9.moveBoom();
    boom10.moveBoom();
    boom11.moveBoom();
    boom12.moveBoom();
    checkExplosion();
    checkFinish();
    document.getElementById("boom1").innerHTML = boom1.getBoomElement();
    document.getElementById("boom2").innerHTML = boom2.getBoomElement();
    document.getElementById("boom3").innerHTML = boom3.getBoomElement();
    document.getElementById("boom4").innerHTML = boom4.getBoomElement();
    document.getElementById("boom5").innerHTML = boom5.getBoomElement();
    document.getElementById("boom6").innerHTML = boom6.getBoomElement();
    document.getElementById("boom7").innerHTML = boom7.getBoomElement();
    document.getElementById("boom8").innerHTML = boom8.getBoomElement();
    document.getElementById("boom9").innerHTML = boom9.getBoomElement();
    document.getElementById("boom10").innerHTML = boom10.getBoomElement();
    document.getElementById("boom11").innerHTML = boom11.getBoomElement();
    document.getElementById("boom12").innerHTML = boom12.getBoomElement();
    setTimeout(moveBoomDown, 80);

    document.getElementById("start").style.display = "none";
}

// moveBoomDown();

function hitPoints() {
    let heath = document.getElementById("cayHp").style["width"]
    heath = parseInt(heath)
    heath -= 50;
    document.getElementById("cayHp").style["width"] = `${heath}px`;
    if (heath < 200 && heath > 150) {
        document.getElementById("cayHp").style["backgroundColor"] = "#adff2f"
    } else if (heath < 151 && heath > 100) {
        document.getElementById("cayHp").style["backgroundColor"] = "yellow"
    } else if (heath < 101 && heath > 50) {
        document.getElementById("cayHp").style["backgroundColor"] = "orange"
    } else if (heath < 51 && heath >= 0) {
        document.getElementById("cayHp").style["backgroundColor"] = "red"
    }
}

function getHit() {
    if (hp > 0) {
        hp -= 5;
    }
    document.getElementById("hp").innerText = hp
    if (hp <= 20 && hp > 15) {
        document.getElementById("hp").style["backgroundColor"] = "#adff2f"
        document.getElementById("span0").style.display = "none";
    } else if (hp < 16 && hp > 10) {
        document.getElementById("hp").style["backgroundColor"] = "yellow"
        document.getElementById("span0").style.display = "none";
    } else if (hp < 11 && hp >= 6) {
        document.getElementById("hp").style["backgroundColor"] = "orange"
        document.getElementById("span0").style.display = "none";
    } else if (hp < 6 && hp > 1) {
        document.getElementById("hp").style["backgroundColor"] = "red"
        document.getElementById("span0").style.display = "none";
    } else if (hp < 1) {
        document.getElementById("hp").style["backgroundColor"] = "#fff"
        document.getElementById("span0").style.display = "block";
        explosion();
        document.getElementById("reload").style.display = "block";
    }
    hitPoints();
}

function moveDown() {
    let top = document.getElementById("tank-img").style["top"];
    top = parseInt(top);
    if (top < 299) {
        top += 30;
        document.getElementById("tank-img").style["top"] = `${top}px`;
        document.getElementById("tank-img").style["transform"] = "rotate(180deg)"
    }
}

function moveUp() {
    let top = document.getElementById("tank-img").style["top"];
    top = parseInt(top);
    if (top > 0) {
        top -= 30;
        document.getElementById("tank-img").style["top"] = `${top}px`;
        document.getElementById("tank-img").style["transform"] = "rotate(0deg)"
    }
}

function moveLeft() {
    let left = document.getElementById("tank-img").style["left"];
    left = parseInt(left);
    if (left > 0) {
        left -= 30;
        document.getElementById("tank-img").style["left"] = `${left}px`;
        document.getElementById("tank-img").style["transform"] = "rotate(-90deg)"
    }
}

function moveRight() {
    let left = document.getElementById("tank-img").style["left"];
    left = parseInt(left);
    if (left < 1319) {
        left += 30;
        document.getElementById("tank-img").style["left"] = `${left}px`;
        document.getElementById("tank-img").style["transform"] = "rotate(90deg)"
    }
}

function explosion() {
    document.getElementById("tank-img").src = "explosion.png"
}

function checkExplosion() {
    let x = document.getElementById("tank-img").style["left"]
    x = parseInt(x)
    let y = document.getElementById("tank-img").style["top"]
    y = parseInt(y)
    let x2 = boom1.getLeft();
    let y2 = boom1.getTop();
    let x3 = boom2.getLeft();
    let y3 = boom2.getTop();
    let x4 = boom3.getLeft();
    let y4 = boom3.getTop();
    let x5 = boom4.getLeft();
    let y5 = boom4.getTop();
    let x6 = boom5.getLeft();
    let y6 = boom5.getTop();
    let x7 = boom6.getLeft();
    let y7 = boom6.getTop();
    let x8 = boom7.getLeft();
    let y8 = boom7.getTop();
    let x9 = boom8.getLeft();
    let y9 = boom8.getTop();
    let x10 = boom9.getLeft();
    let y10 = boom9.getTop();
    let x11 = boom10.getLeft();
    let y11 = boom10.getTop();
    let x12 = boom11.getLeft();
    let y12 = boom11.getTop();
    let x13 = boom12.getLeft();
    let y13 = boom12.getTop();
    if (x == x2 && y == y2 || x == x3 && y == y3 || x == x4 && y == y4 || x == x5 && y == y5 || x == x6 && y == y6 ||
        x == x7 && y == y7 || x == x8 && y == y8 || x == x9 && y == y9 || x == x10 && y == y10 || x == x11 && y == y11 ||
        x == x12 && y == y12 || x == x13 && y == y13) {
        getHit();
        // randomBoom();
        // document.getElementById("span0").style.display= "block";
    }
}

function openKB() {
    if (document.getElementById("keyboard").style.display == "none") {
        document.getElementById("keyboard").style.display = "block";
        document.getElementById("virtualKB").innerText = "Tắt Bàn Phím Ảo"
    } else if (document.getElementById("keyboard").style.display != "none") {
        document.getElementById("keyboard").style.display = "none";
        document.getElementById("virtualKB").innerText = "Bật Bàn Phím Ảo"
    }

}

function reload() {
    location.reload()
}

function checkFinish() {
    let x = document.getElementById("tank-img").style["left"]
    x = parseInt(x);
    if (x >= 1280) {
        document.getElementById("finish").style.display = "block";
        document.getElementById("reload").style.display = "block";

    }
}

function randomBoom() {
    document.getElementById("boom-img").style["left"] = (30 * Math.floor((Math.random() * 44)) + "px")
    document.getElementById("boom-img").style["top"] = (30 * Math.floor((Math.random() * 10)) + "px")

}