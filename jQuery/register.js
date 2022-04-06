/* ----- register.html form validation ----- */
/* ----- jQuery Validation Plug-in 사용 ----- */
$(function () {
  $("#signup").validate({
    // rules 정하기 - 유효성 검증 규칙 지정 (form 요소 name 사용)
    rules: {
      userid: {
        required: true,
        validId: true,
      },
      password: {
        required: true,
        validPw: true,
      },
      confirm_password: {
        required: true,
        validPw: true,
        equalTo: "#password", // 현재 요소가 어떤 요소랑 값이 같아야 하는가? (password == confirm_password)
      },
      gender: {
        required: true,
      },
      email: {
        required: true,
        email: true, // email 형식 규칙에 맞아야 함
      },
      phone: {
        required: true,
        validPhone: true,
      },
      hobby: {
        required: true, // checkbox (적어도 1개 이상 선택 必)
      },
    },

    // 규칙이 맞지 않을 경우 보여줄 메시지 작성
    messages: {
      userid: {
        required: "아이디는 필수 입력 요소입니다.",
      },
      password: {
        required: "비밀번호는 필수 입력 요소입니다.",
      },
      confirm_password: {
        required: "비밀번호는 필수 입력 요소입니다.",
        equalTo: "비밀번호가 다릅니다",
      },
      gender: {
        required: "성별은 필수 입력 요소입니다.",
      },
      email: {
        required: "이메일은 필수 입력 요소입니다.",
        email: "이메일 형식을 확인해 주세요",
      },
      phone: {
        required: "휴대폰 번호는 필수 입력 요소입니다.",
      },
      hobby: {
        required: "취미를 적어도 하나 이상 선택해 주세요",
      },
    },
  });
});

$.validator.addMethod(
  "validId",
  function (data) {
    const regId = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{6,12}$/;
    return regId.test(data);
  },
  "아이디는 영문자, 숫자 조합으로 6~12자리여야 합니다"
);

$.validator.addMethod(
  "validPw",
  function (data) {
    const regPw =
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[~!@#$%^&*])[A-Za-z0-9~!@#$%^&*]{6,12}$/;
    return regPw.test(data);
  },
  "비밀번호는 영문자, 숫자, 특수문자 조합으로 8~15자리여야 합니다"
);

$.validator.addMethod(
  "validPhone",
  function (data) {
    const regPhone = /^\d{3}\d{3,4}\d{4}$/;
    return regPhone.test(data);
  },
  "휴대폰 번호를 확인해 주세요 ( - 제외 )"
);
