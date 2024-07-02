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
        content: "Не будьте как дома, вам тут официально не рады. Это факт."
    },
    {
        parent: "",
        id: "@shreksi_2",
        authorName: "Shrek_Ogr",
        authorNickname: "@shreksi",
        authorImage: "Мощная_ава.jpg",
        content: "Может быть, есть веская причина, по которой ослы не должны говорить"
    },

    /*{
        parent: "@shreksi",
        id: "@shreksi_@Oslik<3_1",
        authorName: "Oslik<3",
        authorNickname: "@papaAngelochkov",
        authorImage: "Icon_Osel.jpg",
        content: " Грубиян"
    },*/

    {
        parent: "",
        id: "@shreksi_1",
        authorName: "Shrek_Ogr",
        authorNickname: "@shreksi",
        authorImage: "Мощная_ава.jpg",
        content: "Живу на болоте. Натыкал табличек. Я огромный и злобный. Этого мало, чтобы добиться уединения?!",
        photoContent: ""
    },

    {
        parent: "",
        id: "@shreksi_1",
        authorName: "Shrek_Ogr",
        authorNickname: "@shreksi",
        authorImage: "Мощная_ава.jpg",
        content: "Людоеды — они как лук"
    },

    {
        parent: "",
        id: "@shreksi_1",
        authorName: "Shrek_Ogr",
        authorNickname: "@shreksi",
        authorImage: "Мощная_ава.jpg",
        content: "Когда-нибудь я отплачу тебе тем же. Если, конечно, смогу тебя найти… или не забуду"
    },
    
    {
        parent: "",
        id: "@shreksi_1",
        authorName: "Shrek_Ogr",
        authorNickname: "@shreksi",
        authorImage: "Мощная_ава.jpg",
        content: "Мне нравится мое уединение"
    },

    {
        parent: "",
        id: "@shreksi_1",
        authorName: "Shrek_Ogr",
        authorNickname: "@shreksi",
        authorImage: "Мощная_ава.jpg",
        content: "Работаешь упорно или упорно не работаешь?"
    },

    {
        parent: "",
        id: "@Oslik<3_1",
        authorName: "Oslik<3",
        authorNickname: "@papaAngelochkov",
        authorImage: "Icon_Osel.jpg",
        content: "В некоторых культурах ослов почитают как самых умных животных"
    },

    {
        parent: "",
        id: "@Oslik<3_1",
        authorName: "Oslik<3",
        authorNickname: "@papaAngelochkov",
        authorImage: "Icon_Osel.jpg",
        content: "Белый цветок на красной ножке. Белый цветок на красной ножке. Белый на красном. Все было бы намного проще, если бы я не был дальтоником! Белый красном"
    },

    {
        parent: "",
        id: "@Oslik<3_1",
        authorName: "Oslik<3",
        authorNickname: "@papaAngelochkov",
        authorImage: "Icon_Osel.jpg",
        content: "Извините, место назойливого говорящего животного уже занято"
    },

    {
        parent: "",
        id: "@Oslik<3_1",
        authorName: "Oslik<3",
        authorNickname: "@papaAngelochkov",
        authorImage: "Icon_Osel.jpg",
        content: "Прежде чем это закончится, мне понадобится серьезная терапия. У меня дергается глаз"
    },

    {
        parent: "",
        id: "@Oslik<3_1",
        authorName: "Oslik<3",
        authorNickname: "@papaAngelochkov",
        authorImage: "Icon_Osel.jpg",
        content: "Ненавижу, когда кто-то маячит у тебя перед носом, ты пытаешься намекнуть, а он не уходит, и тогда наступает неловкое молчание, понимаешь?"
    },

    {
        parent: "",
        id: "@Oslik<3_1",
        authorName: "Oslik<3",
        authorNickname: "@papaAngelochkov",
        authorImage: "Icon_Osel.jpg",
        content: "Все слышали? Я благородный рысак... Я жеребец!.. "
    },

    {
        parent: "",
        id: "@PrinceCharrrming",
        authorName: "Charming",
        authorNickname: "@PrinceCharrrming",
        authorImage: "Charming.jpg",
        content: "Я снесу его голову с плеч! Я поражу его на месте! ОН ПОЖАЛЕЕТ О ТОМ САМОМ ДНЕ, КОГДА УКРАЛ У МЕНЯ КОРОЛЕВСТВО!",

    },

    {
        parent: "",
        id: "@PrinceCharrrming",
        authorName: "Charming",
        authorNickname: "@PrinceCharrrming",
        authorImage: "Charming.jpg",
        content: "К вашему сведению. Это не моя вина!",

    },

    {
        parent: "",
        id: "@PrinceCharrrming",
        authorName: "Charming",
        authorNickname: "@PrinceCharrrming",
        authorImage: "Charming.jpg",
        content: "",
        photoContent: "Photo1.jpg",

    },

    {
        parent: "",
        id: "@PrinceCharrrming",
        authorName: "Charming",
        authorNickname: "@PrinceCharrrming",
        authorImage: "Charming.jpg",
        content: "То, что так сделано, не означает, что так и должно быть сделано. Или что-то в этом роде.",

    },

    {
        parent: "",
        id: "@PrinceCharrrming",
        authorName: "Charming",
        authorNickname: "@PrinceCharrrming",
        authorImage: "Charming.jpg",
        content: "",
        photoContent: "Photo2.jpg",

    },

    {
        parent: "",
        id: "@PrinceCharrrming",
        authorName: "Charming",
        authorNickname: "@PrinceCharrrming",
        authorImage: "Charming.jpg",
        content: "",
        photoContent: "Photo3.jpg",

    },

    {
        parent: "",
        id: "@PrinceCharrrming",
        authorName: "Charming",
        authorNickname: "@PrinceCharrrming",
        authorImage: "Charming.jpg",
        content: "",
        photoContent: "Photo4.jpg",

    },

   
];

//шрек = 0 осел = 1 charming = 2
var currentPageIndexGlobal = 2;

function AddReply(){

}

function GetAuthorNicknameBy(currentPageIndex){
    if (currentPageIndex == 0){
        return '@shreksi';
    }
    else if (currentPageIndex == 1){
        return '@papaAngelochkov';
    }
    else if (currentPageIndex == 2){
        return '@PrinceCharrrming';
    }
    return 'undefined';
}

function GetPageIndexByAuthorNickname(authorNickname){
    if (authorNickname == '@shreksi'){
        return 0;
    }
    else if (authorNickname == '@papaAngelochkov'){
        return 1;
    }
    else if (authorNickname == '@PrinceCharrrming'){
        return 2;
    }
    return -1;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const registerButton = document.getElementById('registerButton');

    registerButton.onclick = function() {        
        window.location.href = 'file:///C:/Users/user/Desktop/Shreckgramm/reg_form.html';        
    };

    const searchButton = document.getElementById('searchButton');
    searchButton.onclick = function(){        
        const value = document.getElementById('searchInput').value;
        const index = GetPageIndexByAuthorNickname(value);
        if (index !== -1){      
            
            currentPageIndexGlobal = index;
            var tweetList = document.getElementById('tweetList');
            tweetList.innerHTML = '';
            renderTweets(tweets);
        }
        else{
            alert('page is not found');
        }
    };

});

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

    if (tweet.photoContent){        
        const photoContent = document.createElement('div');
        const photo = document.createElement('img');
        photo.src = tweet.photoContent;
        photo.style.width = "250px"; // Устанавливаем ширину изображения
        photo.style.height = "250px"; // Устанавливаем высоту изображения
        photo.style.objectFit = "cover"; // Это поможет изображению сохранить пропорции и заполнить контейнер без искажения
        photoContent.appendChild(photo);
        contentElement.appendChild(photoContent);
    }

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

tweetObjectList[1].AddReply(new Tweet(GetTweetById(tweets, "@shreksi_@Oslik<3_1"))); //шаблон создания подтвитов