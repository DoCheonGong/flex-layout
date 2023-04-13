let articles = document.querySelectorAll("article");
let aside = document.querySelector("aside");
let close = aside.querySelector("span");

// 유사배열로 반환된 articles를 반복으로 돌리면서
// 각각의 article 개별로 이벤트를 걸어주어야 한다
// 따라서 반복문으로 만든다

for (let el of articles) {
    // 이벤트 - 마우스가 들어가면 비디오 재생
    // hover를 js로 하게 되면 두 가지 이벤트로 작성
    
    // mouseenter와 mouseleave 이벤트 두 가지를
    // 모두 걸어야 hover처럼 작동
    el.addEventListener("mouseenter", function(e) {
        e.currentTarget.querySelector("video").play();
    });
    el.addEventListener("mouseleave", function(e) {
        e.currentTarget.querySelector("video").pause();
    })

    /*
    currentTarget은 이벤트 리스너가 붙어지는 대상을 의미
    지금 상황에서는 마우스를 엔터한 article을 의미

    만약 3-index article에 마우스를 올렸다면
    currentTarget은 3-index article이 된다
    */

    /*
    event = {
        이벤트가 발생한 대상,
        어떤 이벤트가 발생했는지
        정보들이 객체의 형태로 생성된다

        이벤트가 발생하는 시점에,
        이벤트 객체에 해당 이벤트에 대한
        내용이 생성된다
    }
    */
    // 이벤트 - 마우스가 빠지면 비디오 정지

    // 이벤트 - article 클릭
}