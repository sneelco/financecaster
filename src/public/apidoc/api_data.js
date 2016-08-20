define({ "api": [
  {
    "type": "delete",
    "url": "/accounts/:id/transactions/:transactionid",
    "title": "Delete Account Transaction",
    "group": "Accounts",
    "version": "0.0.0",
    "filename": "./src/app/routes/accounts.js",
    "groupTitle": "Accounts",
    "name": "DeleteAccountsIdTransactionsTransactionid"
  },
  {
    "type": "get",
    "url": "/accounts",
    "title": "List Accounts",
    "group": "Accounts",
    "version": "0.0.0",
    "filename": "./src/app/routes/accounts.js",
    "groupTitle": "Accounts",
    "name": "GetAccounts"
  },
  {
    "type": "get",
    "url": "/accounts/:id",
    "title": "Get Account",
    "group": "Accounts",
    "version": "0.0.0",
    "filename": "./src/app/routes/accounts.js",
    "groupTitle": "Accounts",
    "name": "GetAccountsId"
  },
  {
    "type": "get",
    "url": "/accounts/:id/transactions",
    "title": "List Account Transactions",
    "group": "Accounts",
    "version": "0.0.0",
    "filename": "./src/app/routes/accounts.js",
    "groupTitle": "Accounts",
    "name": "GetAccountsIdTransactions"
  },
  {
    "type": "get",
    "url": "/accounts/:id/transactions/:transactionid",
    "title": "Get Account Transaction",
    "group": "Accounts",
    "version": "0.0.0",
    "filename": "./src/app/routes/accounts.js",
    "groupTitle": "Accounts",
    "name": "GetAccountsIdTransactionsTransactionid"
  },
  {
    "type": "post",
    "url": "/accounts",
    "title": "Create Account",
    "group": "Accounts",
    "version": "0.0.0",
    "filename": "./src/app/routes/accounts.js",
    "groupTitle": "Accounts",
    "name": "PostAccounts"
  },
  {
    "type": "post",
    "url": "/accounts/:id/transactions",
    "title": "Create Account Transaction",
    "group": "Accounts",
    "version": "0.0.0",
    "filename": "./src/app/routes/accounts.js",
    "groupTitle": "Accounts",
    "name": "PostAccountsIdTransactions"
  },
  {
    "type": "put",
    "url": "/accounts/:id",
    "title": "Delete Account",
    "group": "Accounts",
    "version": "0.0.0",
    "filename": "./src/app/routes/accounts.js",
    "groupTitle": "Accounts",
    "name": "PutAccountsId"
  },
  {
    "type": "put",
    "url": "/accounts/:id",
    "title": "Update Account",
    "group": "Accounts",
    "version": "0.0.0",
    "filename": "./src/app/routes/accounts.js",
    "groupTitle": "Accounts",
    "name": "PutAccountsId"
  },
  {
    "type": "put",
    "url": "/accounts/:id/transactions/:transactionid",
    "title": "Update Account Transaction",
    "group": "Accounts",
    "version": "0.0.0",
    "filename": "./src/app/routes/accounts.js",
    "groupTitle": "Accounts",
    "name": "PutAccountsIdTransactionsTransactionid"
  },
  {
    "type": "delete",
    "url": "/auth",
    "title": "Log Out",
    "group": "Authentication",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"success\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response Data": [
          {
            "group": "Response Data",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message stating if the log out attempt was successful</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/app/routes/auth.js",
    "groupTitle": "Authentication",
    "name": "DeleteAuth"
  },
  {
    "type": "delete",
    "url": "/auth/tokens/:id",
    "title": "Delete Token",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Token Deleted\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/routes/auth.js",
    "groupTitle": "Authentication",
    "name": "DeleteAuthTokensId"
  },
  {
    "type": "get",
    "url": "/auth",
    "title": "Get Auth Status",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "token_id",
            "description": "<p>Internal ID of the Token</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "expires",
            "description": "<p>Date and Time that the token will expire</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of the associated user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_token",
            "description": "<p>Token value for the Client</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the associated user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "admin",
            "description": "<p>Flag for whether or not the user is an admin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"token_id\": 3,\n  \"expires\": \"2016-08-21T01:53:05.525Z\",\n  \"userId\": 1,\n  \"client_token\": \"jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg=\",\n  \"name\": \"admin@localhost\",\n  \"admin\": true\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Access Denied": [
          {
            "group": "Access Denied",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error Message</p>"
          },
          {
            "group": "Access Denied",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Error Code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n   \"error\": \"Access Denied\",\n   \"code\": \"FC00006\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/routes/auth.js",
    "groupTitle": "Authentication",
    "name": "GetAuth"
  },
  {
    "type": "get",
    "url": "/auth/tokens",
    "title": "List Current Tokens",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "array",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "array.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "array.userId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.client_token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.ip",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.agent",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "array.expires",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "array.createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "array.updatedAt",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"client_token\": \"jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg=\",\n       \"auth_token\": \"96f58ac1c6f326ac0dc98e792f0b8301\",\n       \"ip\": \"127.0.0.1\",\n       \"agent\": \"Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0\",\n       \"expires\": \"2016-08-20T02:36:29.052Z\",\n       \"createdAt\": \"2016-08-19T02:36:29.059Z\",\n       \"updatedAt\": \"2016-08-19T02:36:29.059Z\",\n       \"userId\": 1\n   },\n   {\n       \"id\": 2,\n       \"client_token\": \"jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg=\",\n       \"auth_token\": \"9b28729f8175068488e9a16143dcdac3\",\n       \"ip\": \"127.0.0.1\",\n       \"agent\": \"Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0\",\n       \"expires\": \"2016-08-20T02:46:41.311Z\",\n       \"createdAt\": \"2016-08-19T02:46:41.313Z\",\n       \"updatedAt\": \"2016-08-19T02:46:41.313Z\",\n       \"userId\": 1\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/routes/auth.js",
    "groupTitle": "Authentication",
    "name": "GetAuthTokens"
  },
  {
    "type": "get",
    "url": "/auth/tokens/:id",
    "title": "Get Token",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "agent",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "expires",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "updatedAt",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"client_token\": \"jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg=\",\n  \"auth_token\": \"96f58ac1c6f326ac0dc98e792f0b8301\",\n  \"ip\": \"127.0.0.1\",\n  \"agent\": \"Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0\",\n  \"expires\": \"2016-08-20T02:36:29.052Z\",\n  \"createdAt\": \"2016-08-19T02:36:29.059Z\",\n  \"updatedAt\": \"2016-08-19T02:36:29.059Z\",\n  \"userId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Token Not Found": [
          {
            "group": "Token Not Found",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error Message</p>"
          },
          {
            "group": "Token Not Found",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Error Code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 404 Not Found",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"error\": \"Record Not Found\",\n   \"code\": \"FC00007\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/routes/auth.js",
    "groupTitle": "Authentication",
    "name": "GetAuthTokensId"
  },
  {
    "type": "post",
    "url": "/auth",
    "title": "Log In",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Post Data": [
          {
            "group": "Post Data",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username to attempt a log in with</p>"
          },
          {
            "group": "Post Data",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password to attempt a log in with</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post Data",
          "content": "{\n  \"username\": \"admin\",\n  \"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message stating if the log in attempt was successful</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_token",
            "description": "<p>Client token to be used to access the API</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Auth token to be used to access the API</p>"
          },
          {
            "group": "Success 200",
            "type": "DateTime",
            "optional": false,
            "field": "expires",
            "description": "<p>Date and time the token will expire</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"success\",\n  \"client_token\": \"jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg=\",\n  \"auth_token\": \"936b05f45b6e9d34d1c249297dba0793\",\n  \"expires\": \"2016-08-21T02:10:33.132Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Login Failed": [
          {
            "group": "Login Failed",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Error Message</p>"
          },
          {
            "group": "Login Failed",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Error Code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login Failed",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"error\": \"Login Failed\",\n   \"code\": \"FC00008\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/app/routes/auth.js",
    "groupTitle": "Authentication",
    "name": "PostAuth"
  },
  {
    "type": "get",
    "url": "/permissions",
    "title": "Get Permissions",
    "group": "Permissions",
    "version": "0.0.0",
    "filename": "./src/app/routes/permissions.js",
    "groupTitle": "Permissions",
    "name": "GetPermissions"
  },
  {
    "type": "get",
    "url": "/permissions/:id",
    "title": "Get Permissions",
    "group": "Permissions",
    "version": "0.0.0",
    "filename": "./src/app/routes/permissions.js",
    "groupTitle": "Permissions",
    "name": "GetPermissionsId"
  },
  {
    "type": "post",
    "url": "/permissions",
    "title": "Create Permissions",
    "group": "Permissions",
    "version": "0.0.0",
    "filename": "./src/app/routes/permissions.js",
    "groupTitle": "Permissions",
    "name": "PostPermissions"
  },
  {
    "type": "put",
    "url": "/permissions/:id",
    "title": "Delete Permissions",
    "group": "Permissions",
    "version": "0.0.0",
    "filename": "./src/app/routes/permissions.js",
    "groupTitle": "Permissions",
    "name": "PutPermissionsId"
  },
  {
    "type": "get",
    "url": "/tokens",
    "title": "List all Tokens",
    "version": "0.0.1",
    "group": "Tokens",
    "description": "<p>List all Tokens</p>",
    "filename": "./src/app/routes/tokens.js",
    "groupTitle": "Tokens",
    "name": "GetTokens"
  },
  {
    "type": "get",
    "url": "/tokens/:id",
    "title": "Get Tokens",
    "group": "Tokens",
    "version": "0.0.0",
    "filename": "./src/app/routes/tokens.js",
    "groupTitle": "Tokens",
    "name": "GetTokensId"
  },
  {
    "type": "post",
    "url": "/tokens",
    "title": "Create Tokens",
    "group": "Tokens",
    "version": "0.0.0",
    "filename": "./src/app/routes/tokens.js",
    "groupTitle": "Tokens",
    "name": "PostTokens"
  },
  {
    "type": "put",
    "url": "/tokens/:id",
    "title": "Delete Tokens",
    "group": "Tokens",
    "version": "0.0.0",
    "filename": "./src/app/routes/tokens.js",
    "groupTitle": "Tokens",
    "name": "PutTokensId"
  },
  {
    "type": "get",
    "url": "/tansactions/:id",
    "title": "Get Transactions",
    "group": "Transactions",
    "version": "0.0.0",
    "filename": "./src/app/routes/transactions.js",
    "groupTitle": "Transactions",
    "name": "GetTansactionsId"
  },
  {
    "type": "get",
    "url": "/transactions",
    "title": "Get Accounts",
    "group": "Transactions",
    "version": "0.0.0",
    "filename": "./src/app/routes/transactions.js",
    "groupTitle": "Transactions",
    "name": "GetTransactions"
  },
  {
    "type": "post",
    "url": "/tansactions",
    "title": "Create Transactions",
    "group": "Transactions",
    "version": "0.0.0",
    "filename": "./src/app/routes/transactions.js",
    "groupTitle": "Transactions",
    "name": "PostTansactions"
  },
  {
    "type": "put",
    "url": "/tansactions/:id",
    "title": "Delete Transactions",
    "group": "Transactions",
    "version": "0.0.0",
    "filename": "./src/app/routes/transactions.js",
    "groupTitle": "Transactions",
    "name": "PutTansactionsId"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete User",
    "version": "0.0.1",
    "group": "Users",
    "filename": "./src/app/routes/users.js",
    "groupTitle": "Users",
    "name": "DeleteUsersId"
  },
  {
    "type": "delete",
    "url": "/users/:id/tokens/:tokenid",
    "title": "Delete Token",
    "version": "0.0.1",
    "group": "Users",
    "filename": "./src/app/routes/users.js",
    "groupTitle": "Users",
    "name": "DeleteUsersIdTokensTokenid"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List Users",
    "version": "0.0.1",
    "group": "Users",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>List all users</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"Admin\",\n  \"username\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/app/routes/users.js",
    "groupTitle": "Users",
    "name": "GetUsers"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get User",
    "version": "0.0.1",
    "group": "Users",
    "description": "<p>Get details for a specific user by id</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Internal ID of the User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"username\": \"admin\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/app/routes/users.js",
    "groupTitle": "Users",
    "name": "GetUsersId"
  },
  {
    "type": "get",
    "url": "/users/:id/tokens",
    "title": "List Tokens for a User",
    "version": "0.0.1",
    "group": "Users",
    "description": "<p>List all tokens for a specific user</p>",
    "filename": "./src/app/routes/users.js",
    "groupTitle": "Users",
    "name": "GetUsersIdTokens"
  },
  {
    "type": "get",
    "url": "/users/:id/tokens",
    "title": "Get User Tokens",
    "version": "0.0.1",
    "group": "Users",
    "description": "<p>Get all active tokens for a specific user.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Internal ID of the User</p>"
          }
        ]
      }
    },
    "filename": "./src/app/routes/users.js",
    "groupTitle": "Users",
    "name": "GetUsersIdTokens"
  },
  {
    "type": "get",
    "url": "/users/:id/tokens/:tokenid",
    "title": "Get Token details",
    "version": "0.0.1",
    "group": "Users",
    "filename": "./src/app/routes/users.js",
    "groupTitle": "Users",
    "name": "GetUsersIdTokensTokenid"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create User",
    "version": "0.0.1",
    "group": "Users",
    "description": "<p>Create new User</p>",
    "filename": "./src/app/routes/users.js",
    "groupTitle": "Users",
    "name": "PostUsers"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update User",
    "version": "0.0.1",
    "group": "Users",
    "filename": "./src/app/routes/users.js",
    "groupTitle": "Users",
    "name": "PutUsersId"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./src/public/apidoc/main.js",
    "group": "_home_scott_Cloudstation_git_financecaster_new_src_public_apidoc_main_js",
    "groupTitle": "_home_scott_Cloudstation_git_financecaster_new_src_public_apidoc_main_js",
    "name": ""
  }
] });
