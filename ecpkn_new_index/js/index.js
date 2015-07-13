/**
 * Created by wungcq on 15/7/12.
 */
(function () {
    var target = $("#pic-bg");
    var arr = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg','img/4.png'];
    var index = 0;
    var pages = 3;

    function toUrl(str) {
        return 'url(' + str + ')';
    }

    function loadPics() {
        var pics = [];
        for (var i = 0; i < pages; i++) {
            pics[i] = new Image();
            pics[i].src = arr[index];
        }

    }

    loadPics();

    setInterval(function () {
            index = (index + 1) % pages;
            target.addClass('hide');
            setTimeout(function () {
                    target.removeClass('hide');
                    target.css('background-image', toUrl(arr[index]));
                }, 1000
            );
        }, 8000
    );
})();

(function () {
    var res = {
        "list": [{
            "first":true,
            "_id": "55850a4eacc2350300fbbaa4",
            "category": "news",
            "group": "default",
            "__v": 1,
            "updatedAt": "2015-06-20T06:45:27.975Z",
            "createdAt": "2015-06-20T06:38:06.439Z",
            "attachments": [],
            "images": [{
                "_id": "55850b22acc2350300fbbaa6",
                "originalName": "620",
                "name": "620",
                "extension": "",
                "path": "img/header-1.jpg",
                "dir": "/statics/uploads/images/",
                "url": "/statics/uploads/images/620",
                "source": "img/header-1.jpg",
                "__v": 0,
                "createdAt": "2015-06-20T06:41:38.843Z"
            }],
            "lang": "zh",
            "status": "sticked",
            "tags": [],
            "title": "中法十年"
        }, {
            "_id": "55804a085790df0300d68102",
            "category": "news",
            "group": "default",
            "__v": 0,
            "updatedAt": "2015-06-20T06:44:50.293Z",
            "createdAt": "2015-06-16T16:08:40.420Z",
            "attachments": [],
            "images": [{
                "_id": "55804a0c5790df0300d68103",
                "originalName": "620",
                "name": "620",
                "extension": "",
                "path": "/app/statics/uploads/images/620",
                "dir": "/statics/uploads/images/",
                "url": "/statics/uploads/images/620",
                "source": "http://i-zone.qiniudn.com/sai.jpg?imageView2/2/w/620",
                "__v": 0,
                "createdAt": "2015-06-16T16:08:44.662Z"
            }],
            "lang": "zh",
            "status": "sticked",
            "tags": [],
            "title": "2015中央电视台法语大赛启动仪式"
        }, {
            "_id": "558049c55790df0300d680fe",
            "category": "news",
            "group": "default",
            "__v": 1,
            "updatedAt": "2015-06-20T06:44:42.205Z",
            "createdAt": "2015-06-16T16:07:33.036Z",
            "attachments": [],
            "images": [{
                "_id": "55850bd6acc2350300fbbaa7",
                "originalName": "620",
                "name": "620",
                "extension": "",
                "path": "/app/statics/uploads/images/620",
                "dir": "/statics/uploads/images/",
                "url": "/statics/uploads/images/620",
                "source": "http://i-zone.qiniudn.com/bridge.jpg?imageView2/2/w/620",
                "__v": 0,
                "createdAt": "2015-06-20T06:44:38.418Z"
            }],
            "lang": "zh",
            "status": "sticked",
            "tags": [],
            "title": "中法工程师学院"
        }, {
            "_id": "55804ad15790df0300d68108",
            "category": "news",
            "group": "default",
            "__v": 0,
            "updatedAt": "2015-07-12T15:17:25.707Z",
            "createdAt": "2015-06-16T16:12:01.879Z",
            "attachments": [],
            "images": [{
                "_id": "55804ade5790df0300d68109",
                "originalName": "620",
                "name": "620",
                "extension": "",
                "path": "/app/statics/uploads/images/620",
                "dir": "/statics/uploads/images/",
                "url": "/statics/uploads/images/620",
                "source": "http://i-zone.qiniudn.com/bridge.jpg?imageView2/2/w/620",
                "__v": 0,
                "createdAt": "2015-06-16T16:12:14.269Z"
            }],
            "lang": "zh",
            "status": "sticked",
            "tags": [],
            "title": "新闻标题"
        }], "count": 4, "currentPage": 1, "pageCount": 1
    };
    var tmplt = $("#block-template").html();
    var html = juicer(tmplt,res);
    $("#news-container").html(html);
    $("#announcement-container").html(html);


})();

(function(){

})();