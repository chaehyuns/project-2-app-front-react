# Madcamp App
**2022년 여름 몰입캠프 2주차 공통과제 프로젝트**





# 맛.z!p

# Contributors
ChaeHyun Jung
[chaehyuns][chaehyuns link]

[chaehyuns link]: https://github.com/chaehyuns

TaeChan An
[antaechan][antaechan link]

[antaechan link]: https://github.com/antaechan

# About
 카이스트의 맛집을 소개하고 어플리케이션

 → 매일 사용자의 PICK을 골라서 맛집을 추천받을 수 있다.
 
 → 사용자는 맛집 추천자를 follow 할 수있다.
 
 → 가볼 맛집을 메모로 저장하고 도장깨기에 도전할 수 있다.
 
 → 사용자의 Setting 화면에 연결하여 사용자의 정보를 수정할 수 있다.
 
 
 

## Development Environment

> **React Native (JavaScript, Typescript)**
>
>  * 서버 : Node.js
>  * 데이터베이스 : MongoDB
>  

## LOGIN & SIGN UP 

> 기본 로그인
> * 아이디와 비밀번호를 모두 입력해야 Login Button을 클릭할 수 있다.


//로그인, 회원가입 이미지

기본 회원가입
>* 로그인과 동일하게 모든 항목을 입력해야 SignUp button을 클릭할 수 있다.
>* 아이디는 이메일 형식으로 이메일 형식을 지켜야 회원가입이 가능하다.
>* 비밀번호는 영어 숫자 특수 문자가 섞인 8글자 이상 기입하여야 회원가입이 가능하다.
>




## Tab 1 : Today's PICK

> 네비게이션 탭 중 첫번째인 메인 화면은 오늘의 맛집을 추천해준다.
> 애니메이션 효과를 주어 다음 화면을 Swipe형식으로 넘길 수 있다.
> 

![111](https://user-images.githubusercontent.com/80222352/178474791-3b8b17b4-ad94-4239-b77f-fa333639080c.gif)



## Tab 2 : Show My Follwers  

 
> 내가 FOLLOW한 사람들의 목록을 FlatList로 보여준다.

<img width="243" alt="KakaoTalk_20220712_201232166_01" src="https://user-images.githubusercontent.com/80222352/178477409-57ec2ab7-8904-42f5-93c2-3d0caaba6833.png">



## Tab 3 : 도장 깨기 List  

> 도장 깨기 할 맛집을 저장하고 삭제하고 완료버튼을 사용하여 나만의 맛집 도장 깨기에 도전할 수 있다. 

<img width="230" alt="KakaoTalk_20220712_201232166_02" src="https://user-images.githubusercontent.com/80222352/178477411-b44bf56e-c4bb-48a2-8bbe-74ce973645f8.png"><img width="235" alt="KakaoTalk_20220712_201232166_04" src="https://user-images.githubusercontent.com/80222352/178477416-175348f9-ef54-41f3-be54-5850a0378902.png"><img width="230" alt="KakaoTalk_20220712_201236140" src="https://user-images.githubusercontent.com/80222352/178477421-2d8e17f0-5324-481d-a6ba-36df9598165a.png">

- 추가 버튼을 누르면 목록이 추가된다.
- x 버튼을 누르면 삭제 된다.
- 완료 버튼을 누르면 목록이 추가된다.



## Tab 4 : MY PROFILE Setting

> 나의 정보 및 이름/ 비밀번호 변경 
> 
> Log out / Sign Out 가능  

//프로필 세팅 이미지

- navigation drawer 상단에 있는 프로필을 클릭하면 개인 정보를 볼 수 있는 창으로 넘어감
- 이름 변경 버튼을 누르면 이름을 변경할 수 있고 바로 바뀐 모습을 볼 수 있음
- 비밀번호도 변경 가능함 
- Log out 하면 다시 로그인 화면으로 넘어감
- Sign out 하면 회원 탈퇴가 됨


