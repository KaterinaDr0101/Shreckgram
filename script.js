// Пример данных твитов
const tweets = [
    {
        authorName: "Shreck_Ogr",
        authorNickname: "@shrecksy",
        authorImage: "Мощная_ава.jpg",
        content: "Текст твита 1. Здесь содержится основное содержание твита."
    },
    {
        authorName: "Shreck_Ogr",
        authorNickname: "@1shrecksy",
        authorImage: "Мощная_ава.jpg",
        content: "Текст твита 2. Здесь содержится основное содержание твита."
    },


    
];

var currentPageIndexGlobal = 0;

function GetAuthorNicknameBy(currentPageIndex){
    if (currentPageIndex == 0){
        return '@shrecksy';
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

function renderTweets(tweets) {
    const tweetList = document.getElementById('tweetList');
    var authorId = GetAuthorNicknameBy(currentPageIndexGlobal);
    tweets.forEach(tweet => {        
        if (tweet.authorNickname == authorId)
        {
            const tweetElement = createTweetElement(tweet);
            tweetList.appendChild(tweetElement);
        }
    });
}

// Вызов функции для рендеринга твитов при загрузке страницы
renderTweets(tweets);