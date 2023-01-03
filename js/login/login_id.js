function idChk(){
    var u_id = document.getElementById('u_id');

    if(!u_id.value){
        var err = document.getElementById('err_id');
        err.innerHTML = '이메일 주소를 입력하십시오'
        u_id.focus();
        return false;
    }
}