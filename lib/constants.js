module.exports ={ 
    STAGING: {
        connectionLimit     : 200, //increase limit for multiple connections
        waitForConnections  : true,
        queueLimit          : 150000, // resource dedication for particular query
        acquireTimeout      : 172800000, // pending query time out
        connectTimeout      : 172800000,// each connection life cycle time
        host                : 'localhost',
        user                : 'root',
        password            : '',
        database            : 'db_backend',
        dateStrings         : 'date',
        multipleStatements  : false,
        rejectUnauthorized  : true
    },
    PROD: {
        connectionLimit     : 200, //increase limit for multiple connections
        waitForConnections  : true,
        queueLimit          : 150000, // resource dedication for particular query
        acquireTimeout      : 172800000, // pending query time out
        connectTimeout      : 172800000,// each connection life cycle time
        host                : 'localhost',
        user                : 'root',
        password            : '',
        database            : 'db_backend',
        dateStrings         : 'date',
        multipleStatements  : false,
        rejectUnauthorized  : true
    }
};