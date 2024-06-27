class Tweet {
    constructor(tweet) {
        this.id = tweet.id;
        this.authorTag = tweet.authorNickname;
        this.authorName = tweet.authorName;
        this.content = tweet.content;
        // this.date = new Date();
        this._tweetElement = createTweetElement(tweet); //после создания добавить див и класс для сабтвитов(реплайев)
        this._replyElementList = [];
    }
  
    GetTweetElement(){
        return this._tweetElement;
    }

    AddReply(tweetReply){
        this._replyElementList.push(tweetReply);
        this._tweetElement.appendChild(tweetReply.GetTweetElement());
    }
    
  }

// Пример данных твитов
const tweets = [
    {
        parent: "",
        id: "@shreksi_1",
        authorName: "Shrek_Ogr",
        authorNickname: "@shreksi",
        authorImage: "Мощная_ава.jpg",
        content: "Кто сказал, что огры не умеют твитить? Размышляю о жизни в болоте и понимаю, что главное – быть собой. #ОгрПравда #ЖизньВБолоте"
    },
    {
        parent: "",
        id: "@shreksi_2",
        authorName: "Shrek_Ogr",
        authorNickname: "@shreksi",
        authorImage: "Мощная_ава.jpg",
        content: "Осел опять пытается петь караоке... Уши уже вянут. Пора искать новое место для отдыха. #ОгрЖизнь #ОселНеПой"
    },

    {
        parent: "@shreksi",
        id: "@shreksi_@Oslik<3_1",
        authorName: "Oslik<3",
        authorNickname: "@papaAngelochkov",
        authorImage: "Icon_Osel.jpg",
        content: " Эй, @shreksi! Просто завидуешь моим вокальным талантам! Могу дать пару уроков, если захочешь."
    },
    
];

//шрек = 0 осел = 1 
var currentPageIndexGlobal = 0;

function AddReply(){

}

function GetAuthorNicknameBy(currentPageIndex){
    if (currentPageIndex == 0){
        return '@shreksi';
    }
    else if (currentPageIndex == 1){
        return '@papaAngelochkov';
    }
    return 'undefined';
}

function createTweetElement(tweet) {
    const tweetElement = document.createElement('div');
    tweetElement.classList.add('tweet');

    const authorElement = document.createElement('div');
    authorElement.classList.add('tweet-author');

    const authorImage = document.createElement('img');
    authorImage.src = tweet.authorImage;
    authorImage.alt = 'Фото ${tweet.authorName}';
    authorElement.appendChild(authorImage);

    const authorInfo = document.createElement('div');

    const authorName = document.createElement('div');
    authorName.classList.add('tweet-author-name');
    authorName.textContent = tweet.authorName;
    authorInfo.appendChild(authorName);

    const authorNickname = document.createElement('div');
    authorNickname.classList.add('tweet-author-nickname');
    authorNickname.textContent = tweet.authorNickname;
    authorInfo.appendChild(authorNickname);

    authorElement.appendChild(authorInfo);

    const contentElement = document.createElement('div');
    contentElement.classList.add('tweet-content');
    contentElement.textContent = tweet.content;

    tweetElement.appendChild(authorElement);
    tweetElement.appendChild(contentElement);

    return tweetElement;
}

var tweetObjectList = [];

function renderTweets(tweets) {    

    const tweetList = document.getElementById('tweetList');
    var currentPageauthorId = GetAuthorNicknameBy(currentPageIndexGlobal);
    tweets.forEach(tweet => {        
        if (tweet.authorNickname == currentPageauthorId && tweet.parent == "")
        {
            var tweetObject = new Tweet(tweet);
            tweetList.appendChild(tweetObject.GetTweetElement());
            tweetObjectList.push(tweetObject);
        }
    });
}

// Вызов функции для рендеринга твитов при загрузке страницы
renderTweets(tweets);

function GetTweetById(tweets, tweetId){
    return tweets.find(tweet => tweet.id === tweetId);
}

tweetObjectList[1].AddReply(new Tweet(GetTweetById(tweets, "@shreksi_@Oslik<3_1")));