var p = document.getElementById('main');
var display = 0;

function hideShow(){
    if(display == 1){
        p.style.display = 'none';
        display = 0;
    }
    else {
        p.style.display = 'block';
        display = 1;
    }
}

var ul = document.getElementById('cont');
var display = 0;

function showCon(){
    if(display == 1){
        ul.style.display = 'none';
        display = 0;
    }
    else {
        ul.style.display = 'block';
        display = 1;
    }
}

var div = document.getElementById('edu');
var display = 0;

function showEdu(){
    if(display == 1){
        div.style.display = 'block';
        display = 0;
    }
    else {
        div.style.display = 'none';
        display = 1;
    }
}

var div1 = document.getElementById('skill');
var display = 0;

function showSkill(){
    if(display == 1){
        div1.style.display = 'block';
        display = 0;
    }
    else {
        div1.style.display = 'none';
        display = 1;
    }
}

var div2 = document.getElementById('project');
var display = 0;

function showProjects(){
    if(display == 1){
        div2.style.display = 'block';
        display = 0;
    }
    else {
        div2.style.display = 'none';
        display = 1;
    }
}

var div3 = document.getElementById('exper');
var display = 0;

function showExper(){
    if(display == 1){
        div3.style.display = 'block';
        display = 0;
    }
    else {
        div3.style.display = 'none';
        display = 1;
    }
}