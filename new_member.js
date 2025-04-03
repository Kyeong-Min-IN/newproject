var id;
var pw;
var pwC;
var na;
var email;
var sex;
var birth_y, birth_m, birth_d;
var tel, tel2, tel3;
var str_id = "";
var str_pw = "";
var str_pwC = "";
var str_na = "";
var str_em = "";
var str_s = "";
var int_by, int_bm, int_bd;
var str_t = "";
var str_t2 = "";
var str_t3 = "";
window.onload = function () {
    str_id = document.getElementById("id");
    str_pw = document.getElementById("pw");
    str_pwC = document.getElementById("pw_re");
    str_na = document.getElementById("user_name");
    str_em = document.getElementById("email");
    str_s = document.getElementsByName("sex");
    int_by = document.getElementById("birth_y");
    int_bm = document.getElementById("birth_m");
    int_bd = document.getElementById("birth_d");
    str_t = document.getElementById("tel1");
    str_t2 = document.getElementById("tel2");
    str_t3 = document.getElementById("tel3");
}
function CI() {
    if (id.length >= 6 && id.length <= 12) {
        return true;
    } else {
        return false;
    }
}
function CP() {
    if (pw.length >= 6 && pw.length <= 15) {
        return true;
    } else {
        return false;
    }
}
function CPC() {
    if (pw == pwC) {
        return true;
    } else {
        return false;
    }
}
function CN() {
    if (na.length >= 2 && na.length <= 20) {
        return true;
    } else {
        return false;
    }
}
function CE() {
    if (email.length >= 11) {
        return true;
    } else {
        return false;
    }
}
function CT() {
    if (tel.length == 3 && tel2.length == 4 && tel3.length == 4) {
        return true;
    } else {
        return false;
    }
}
function CreatAccount() {
    id = str_id.value;
    pw = str_pw.value;
    pwC = str_pwC.value;
    na = str_na.value;
    email = str_em.value;
    birth_y = int_by.value;
    birth_m = int_bm.value;
    birth_d = int_bd.value;
    tel = str_t.value;
    tel2 = str_t2.value;
    tel3 = str_t3.value;
    for (var i = 0; i < str_s.length; i++) {
        if (str_s[i].checked == true) {
            sex = str_s[i].value;
        }

    }
    if (CI() && CP() && CPC() && CE() && CN() && CT()) {
        alert("id:" + id + "\n" + "PW:" + pw + "\n" + "이름:" + na + "\n" + "성별:" + sex + "\n" + "이메일:" + email + "\n" +
            "생년월일:" + birth_y + "년" + birth_m + "월" + birth_d + "일" + "\n" + "전화번호:" + tel + "-" + tel2 + "-" + tel3);
    } else {
        alert("다시 입력해주세요");
    }
}
