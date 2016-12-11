angular.module('common.netService', [])
    .constant("config",{
        host:"https://cnodejs.org"
    })
    .constant("apiUrl", {
        getTopic: '/api/v1/topics?callback=JSON_CALLBACK/get',
        searchTopic: '/api/v1/topics?callback=JSON_CALLBACK/search',
        addTopic: '/topic/add',
        deleteTopic: '/topic/delete'
    })
    .service('netService', function ($http, apiUrl,config) {
    var $this, fn, url;
    $this = this;
    fn = function (url) {
        return $this[url] = function (method, data) {
            var opts;
            if (method.toLowerCase() === 'get' || method === 'delete') {
                opts = {
                    method: method,
                    url: config.host+apiUrl[url],
                    params: data
                };
            } else if(method.toLowerCase()=='post'){
                opts = {
                    method: method,
                    url: config.host+apiUrl[url],
                    data: data
                };
            } else {
                opts ={
                    method:jsonp,
                    url:config.host+apiUrl[url],
                    params:{callback:'JSON_CALLBACK'}
                }
            }
            return $http(opts);
        };
    };
    for (url in apiUrl) {
        fn(url);
    }
});