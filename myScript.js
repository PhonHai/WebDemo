// 数组
var cars = new Array();
cars[0] = 155856;
cars[1] = 478548;
cars[2] = 789654;
// 数组
var carsName = new Array("benzi干干干", "benchi", "dazhong");
var timerTask


function functionChangeText()
{
    var str="<template v-for='aodo in aodos'><li class='mui-table-view-cell' v-bind:fundcodeli='aodo.assetCode'><span class='column-a' v-text='aodo.assetName.substring(0,6)'></span><span class='column-b' v-text='aodo.setupDate.substring(0,4)"+'+"-"+'+"aodo.setupDate.substring(4,6)"+'+"-"+'+"aodo.setupDate.substring(6,8)'></span><span class='column-c' v-text='aodo.investType.substring(0, aodo.investType.length - 2)'></span><span class='column-d mui-icon mui-icon-closeempty'></span></li></template>";
    document.getElementById("demo").innerHTML= carsName[0] + ":" + cars[0];
}

function resetText(a,b) {
    document.getElementById("demo").innerHTML= getSum(a, b);
}

function getSum(a, b) {
    if(a<3) {
        alert("a<3不会操作")
        return a+b;
    }else{
        return a+b+"";
    }
    
}

function validate_required(field, alerttxt) {
    with(field) {
        if(value == null || value == "") {
            alert(alerttxt);
            return false;
        }else{
            return true;
        }
    }
}

function validate_form(thisForm) {
    with(thisForm) {
        if(validate_required(email, "Email must be filled out!") == false) {
            email.focus();
            return false;
        }
    }
}

function confirmClick() {
    var flag = confirm('嘻嘻')
    if(flag) {
        alert("点击了确定")
    } else {
        alert("点击了取消")
    }
}

function promptClick() {
    clearTimeout(timerTask)
    prompt('对与错', "对")
}


var timertask2
var c=0
function timerClock() {
    document.getElementById("timerclockTask").innerHTML = c
    c = c + 1
    if(c >= 6) {
        clearTimeout(timertask2)
        // document.getElementById("timerclockTask").innerHTML =0
    } else{
        timertask2 = setTimeout("timerClock()", 1000)
    }
}

/**
 * @param {*名字} name 
 * @param {*密码} value 
 * @param {*登录日期} expriedays 
 */
function saveUserDataToCookie(name, value, expiredays) {
    name = document.getElementById("name").value
    value = document.getElementById("password").value

    var today = new Date()
    var year = today.getFullYear()
    var month = today.getMonth() + 1
    var day = today.getDate()

    var hh=today.getHours();//通过日期对象的getHours方法返回小时   
    var mm=today.getMinutes();//通过日期对象的getMinutes方法返回分钟   
    var ss=today.getSeconds();//通过日期对象的getSeconds方法返回秒   

    expiredays = year + "-"+month + "-" + day + " " + hh + ":" + mm + ":" + ss

    today.setTime(today.getTime() + 60 * 60 * 1000);

    // var a = name + "=" + escape(name) + ";expires=" + today.toGMTString();
    // document.cookie = a;

    // document.cookie = "name=1";
    // console.log(document.cookie)
    document.cookie = "name=1";
    console.log(document.cookie);
}

function getUserDataFromCookie() {
    if(document.cookie.length > 0) {
        // var users = document.cookie.split("=")
        var content = document.getElementById("userdata").innerHTML
        var myCookie = document.cookie;
        document.getElementById("userdata").innerHTML = content +  myCookie   
        escape
    } else {
        return "";
    }
}