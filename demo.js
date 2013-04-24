glimpse.data.initMetadata({});
glimpse.data.initData({
    method:  'Get',
    browser: '',
    clientId: 'Chrome 22.0',
    dateTime: '',
    requestId: '1234' + (window.location.search ? Math.round(new Date().getTime() / 1000) : ''),
    isAjax: false,
    uri: location.href,
    data: {
        "Request": {
            name: 'Request',
            data: {
                url: location.href,
                protocol: location.protocol,
                host: location.host,
                pathname: location.pathname,
                search: location.search,
                hash: location.hash
            }
        }
    }
});