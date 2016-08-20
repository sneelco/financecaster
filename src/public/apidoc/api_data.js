define({ "api": [
  {
    "type": "get",
    "url": "/accounts",
    "title": "Get Accounts",
    "group": "Accounts",
    "version": "0.0.0",
    "filename": "./src/app/routes.js",
    "groupTitle": "Accounts",
    "name": "GetAccounts"
  },
  {
    "type": "delete",
    "url": "/auth",
    "title": "Log Out",
    "group": "Authentication",
    "version": "0.0.0",
    "filename": "./src/app/routes.js",
    "groupTitle": "Authentication",
    "name": "DeleteAuth"
  },
  {
    "type": "get",
    "url": "/auth",
    "title": "Get Auth Status",
    "group": "Authentication",
    "version": "0.0.0",
    "filename": "./src/app/routes.js",
    "groupTitle": "Authentication",
    "name": "GetAuth"
  },
  {
    "type": "get",
    "url": "/auth/tokens",
    "title": "Get Current Tokens",
    "group": "Authentication",
    "version": "0.0.0",
    "filename": "./src/app/routes.js",
    "groupTitle": "Authentication",
    "name": "GetAuthTokens"
  },
  {
    "type": "post",
    "url": "/auth",
    "title": "Log In",
    "group": "Authentication",
    "version": "0.0.0",
    "filename": "./src/app/routes.js",
    "groupTitle": "Authentication",
    "name": "PostAuth"
  },
  {
    "type": "get",
    "url": "/permissions",
    "title": "Get Permissions",
    "group": "Permissions",
    "version": "0.0.0",
    "filename": "./src/app/routes.js",
    "groupTitle": "Permissions",
    "name": "GetPermissions"
  },
  {
    "type": "get",
    "url": "/tokens",
    "title": "List all Tokens",
    "version": "0.0.1",
    "group": "Tokens",
    "description": "<p>List all Tokens</p>",
    "filename": "./src/app/routes.js",
    "groupTitle": "Tokens",
    "name": "GetTokens"
  },
  {
    "type": "get",
    "url": "/transactions",
    "title": "Get Accounts",
    "group": "Transactions",
    "version": "0.0.0",
    "filename": "./src/app/routes.js",
    "groupTitle": "Transactions",
    "name": "GetTransactions"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete User",
    "version": "0.0.1",
    "group": "Users",
    "filename": "./src/app/routes.js",
    "groupTitle": "Users",
    "name": "DeleteUsersId"
  },
  {
    "type": "delete",
    "url": "/users/:id/tokens/:tokenid",
    "title": "Delete Token",
    "version": "0.0.1",
    "group": "Users",
    "filename": "./src/app/routes.js",
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
    "filename": "./src/app/routes.js",
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
    "filename": "./src/app/routes.js",
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
    "filename": "./src/app/routes.js",
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
    "filename": "./src/app/routes.js",
    "groupTitle": "Users",
    "name": "GetUsersIdTokens"
  },
  {
    "type": "get",
    "url": "/users/:id/tokens/:tokenid",
    "title": "Get Token details",
    "version": "0.0.1",
    "group": "Users",
    "filename": "./src/app/routes.js",
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
    "filename": "./src/app/routes.js",
    "groupTitle": "Users",
    "name": "PostUsers"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update User",
    "version": "0.0.1",
    "group": "Users",
    "filename": "./src/app/routes.js",
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
    "group": "_home_scott_git_financecaster_new_src_public_apidoc_main_js",
    "groupTitle": "_home_scott_git_financecaster_new_src_public_apidoc_main_js",
    "name": ""
  }
] });