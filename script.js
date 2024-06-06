// script.js

let currentSidebar = null;

function toggleNav(sidebarId) {
    if (currentSidebar !== sidebarId) {
        if (currentSidebar) {
            closeNav(currentSidebar);
        }
        openNav(sidebarId);
        currentSidebar = sidebarId;
    } else {
        closeNav(sidebarId);
        currentSidebar = null;
    }
}

function openNav(sidebarId) {
    document.getElementById(sidebarId).style.width = "300px";
    document.getElementById("main").style.transition = "margin-left 0.5s, margin-right 0.5s";
    document.getElementById("main").style.marginLeft = sidebarId === 'wall-sidebar' ? "300px" : "0";
    document.getElementById("main").style.marginRight = sidebarId === 'floor-sidebar' ? "300px" : "0";
}

function closeNav(sidebarId) {
    document.getElementById(sidebarId).style.width = "0";
    document.getElementById("main").style.transition = "margin-left 0.5s, margin-right 0.5s";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.marginRight = "0";
}


function updateFloor(imageSrc) {
    const floorImage = document.getElementById("floor");
    floorImage.src = imageSrc;
    closeNav('floor-sidebar');
}

function updateWall(imageSrc) {
    const wallImage = document.getElementById("wall");
    wallImage.src = imageSrc;
    closeNav('wall-sidebar');
}
