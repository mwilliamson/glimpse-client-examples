glimpse.data.initData({
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