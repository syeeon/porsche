function joinForm(){
    var gender = document.getElementById('gender').options;
    var u_name = document.getElementById('u_name');
    var email = document.getElementById('email');
    var chk_all = document.getElementById('chk_all');
    var apply = document.getElementsByName('apply');
    var pwd = document.getElementsByName('pwd');

    if(!u_name.value){
        var err = document.getElementById('err_name');
        err.innerHTML = '이름을 입력하십시오'
        u_name.focus();
        return false;
    }

    if(!email.value){
        var err = document.getElementById('err_email');
        err.innerHTML = '이메일 주소를 입력하십시오'
        email.focus();
        return false;
    }

    if(!apply.checked){
        var err = document.getElementById('err_apply');
        err.innerHTML = '이는 필수 기재 필드입니다.'
        chk_all.focus();
        return false;
    }

    if(!gender.value == 'm' || !gender.value == 'y'){
        var err = document.getElementById('err_gender');
        err.innerHTML = '성별을 선택하십시오.'
        gender.focus();
        return false;
    }

    if(!pwd.value){
        var err = document.getElementById('err_pwd');
        err.innerHTML = '암호를 입력하십시오.'
        pwd.focus();
        return false;
    }

    location.href = "join_2step.html"

}



function chkAll(chkAll) {
    var checkboxes
    =
    document.getElementsByName('apply');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = chkAll.checked;
    });
};