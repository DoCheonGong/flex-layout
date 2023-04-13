let articles = document.querySelectorAll("article");
let aside = document.querySelector("aside");
let close = aside.querySelector("span");
console.log(articles);
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
    });

    // 클릭 시 이벤트
    el.addEventListener("click", function(e) {
        // 클릭 이벤트가 일어났을 때
        // 1. aside에 on이라는 활성화 class를 붙여주어
        // 화면에 띄워주는 일이 있어야 한다
        aside.classList.add("on");

        // 2. 클릭한 article의 h2, p, video의 경로를
        // 가지고와서 aside에 교체해야 한다
            // 2-1. 클릭한 article 안의
            // 내용 (h2, p, video)을 변수로 저장
            let art_h2 = e.currentTarget.querySelector("h2").innerText;
            // e.currentTarget 코드로 인해
            // 정확하게 몇 번째 article을 선택했고,
            // 가지고 올 article을 지정해서
            // 올바른 정보를 변수에 담을 수 있게 한다 
            let art_p = e.currentTarget.querySelector("p").innerText;
            let art_video_src = e.currentTarget.querySelector("video").getAttribute("src");
            console.log(art_video_src);
            // 2-2. 변수로 저장된 값을 aside에 교체
            aside.querySelector("h2").innerText = art_h2;
            aside.querySelector("p").innerText = art_p;
            aside.querySelector("video").setAttribute("src", art_video_src);
        // 3. 비디오가 플레이되어야 한다
        aside.querySelector("video").play();
    });

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

close.addEventListener("click", function() {
    aside.classList.remove("on");
    aside.querySelector("video").pause();
});
// 어떤 attribute를 쓰는 지 알기 때문에
// function에 e가 필요하지 않다