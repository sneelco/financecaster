var q = require('q');
var hat = require('hat');
var fc = require('../../app');
var crypto = require('crypto');
var express = require('express');
var router = express.Router();
var messages = require('../messages').get;

/**
 * @api {get} /accounts List Accounts
 * @apiGroup Accounts
 * @apiPermission user
 *
 * @apiSuccess {Array} array
 * @apiSuccess {Integer} array.id
 * @apiSuccess {Integer} array.userId
 * @apiSuccess {String} array.name
 * @apiSuccess {Integer} array.forecast
 * @apiSuccess {Float} array.balance
 * @apiSuccess {DateTime} array.balance_date
 * @apiSuccess {Float} array.limit
 * @apiSuccess {DateTime} array.createdAt
 * @apiSuccess {DateTime} array.updatedAt
 * @apiSuccessExample Account List
 * [
 *   {
 *     "id": 1,
 *     "userId": 2,
 *     "name": "checking",
 *     "forecast": 365,
 *     "balance": 0,
 *     "balance_date" "2016-08-20T18:20:36.373Z",
 *     "limit": 0,
 *     "createdAt": "2016-08-20T18:20:36.373Z",
 *     "updatedAt": "2016-08-20T18:20:36.373Z"
 *   }
 * ]
 */
router.get('/', fc.isAuth, function (req, res) {

  fc.query('accounts', {
    'where': {'userId': req.auth.userId},
    'attributes': ['id', 'userId', 'name', 'forecast', 'balance', 'balance_date', 'limit', 'createdAt', 'updatedAt']
  }).then(function (results) {
    res.send(results);
  });

});

/**
 * @api {post} /accounts Create Account
 * @apiGroup Accounts
 * @apiPermission user
 *
 * @apiParam (Request Data) {String} name
 * @apiParam (Request Data) {Integer} forecast=365
 * @apiParam (Request Data) {Float} balance=0
 * @apiParam (Request Data) {DateTime} balance_date
 * @apiParam (Request Data) {Float} limit=0
 * @apiParamExample {json} Request Data Example
 * {
 *   "name" "Checking",
 *   "forecast" "60",
 *   "balance" "100.28",
 *   "balance_date" "2016-08-20T18:20:36.373Z",
 *   "limit" "0",
 * }
 *
 * @apiSuccess {Integer} id
 * @apiSuccess {String} message
 * @apiSuccessExample Success Example
 * {
 *     "id"
 *     "message": "Record Created Successfully"
 * }
 *
 * @apiError (Field Validation Error) {String} error Error Message
 * @apiError (Field Validation Error) {String} code Error Code
 * @apiError (Field Validation Error) {Array} fields
 * @apiError (Field Validation Error) {String} fields.message
 * @apiError (Field Validation Error) {String} fields.type
 * @apiError (Field Validation Error) {String} fields.path
 * @apiError (Field Validation Error) {String} fields.value
 * @apiErrorExample Field Validation Error Example
 *  {
 *    "error": "Field Validation Error",
 *    "code": "FC00010",
 *    "fields":
 *    [
 *      {
 *        "message": "email must be unique",
 *        "type": "unique violation",
 *        "path": "email",
 *        "value": "email@localhost"
 *      }
 *    ]
 *  }
 */
router.post('/', fc.isAuth, function (req, res) {

  req.body.owner = req.auth.userId;
  req.body.userId = req.auth.userId;

  fc.create('accounts', req.body, res).then(function (records) {
    msg = messages('RECORD_CREATED');

    res.status(msg.http_code).send({'id': records.id, 'message': msg.message});
  }, function (err) {
    var msg = messages('FIELD_VALIDATION_ERROR');
    res.status(msg.http_code).send({'error': msg.message, 'code': msg.code, 'fields': err.errors});
  });

});

/**
 * @api {get} /accounts/:id Get Account
 * @apiGroup Accounts
 * @apiPermission user
 *
 * @apiSuccess {Integer} id
 * @apiSuccess {Integer} userId
 * @apiSuccess {String} name
 * @apiSuccess {Integer} forecast
 * @apiSuccess {Float} balance
 * @apiSuccess {DateTime} balance_date
 * @apiSuccess {Float} limit
 * @apiSuccess {DateTime} createdAt
 * @apiSuccess {DateTime} updatedAt
 * @apiSuccessExample Success-Response:
 *   {
 *     "id": 1,
 *     "userId": 2,
 *     "name": "checking",
 *     "forecast": 365,
 *     "balance": 0,
 *     "balance_date" "2016-08-20T18:20:36.373Z",
 *     "limit": 0,
 *     "createdAt": "2016-08-20T18:20:36.373Z",
 *     "updatedAt": "2016-08-20T18:20:36.373Z"
 *   }
 *
 * @apiError {String} error Error Message
 * @apiError {String} code Error Code
 * @apiErrorExample
 *  HTTP/1.1 404 Not Found
 *  {
 *     "error": "Record Not Found",
 *     "code": "FC00007"
 *  }s
 */
router.get('/:id', fc.isAuth, function (req, res) {


  fc.get('accounts', {
      'where': {'id': req.params.id, 'userId': req.auth.userId},
      'attributes': ['id', 'userId', 'name', 'forecast', 'balance', 'balance_date', 'limit', 'createdAt', 'updatedAt'],
    }).then(function (results) {
    if (results) {
      res.send(results);
    } else {
      var msg = messages('RECORD_NOT_FOUND');
      res.status(msg.http_code).send({'error': msg.message, 'code': msg.code});
    }
  });

});

/**
 * @api {put} /accounts/:id Update Account
 * @apiGroup Accounts
 * @apiPermission user
 *
 * @apiParam (Request Data) {String} name
 * @apiParam (Request Data) {Integer} forecast=365
 * @apiParam (Request Data) {Float} balance=0
 * @apiParam (Request Data) {DateTime} balance_date
 * @apiParam (Request Data) {Float} limit=0
 * @apiParamExample {json} Request Data Example
 * {
 *   "name" "Checking",
 *   "forecast" "60",
 *   "balance" "100.28",
 *   "balance_date" "2016-08-20T18:20:36.373Z",
 *   "limit" "0",
 * }
 *
 * @apiSuccess {Integer} id
 * @apiSuccess {String} message
 * @apiSuccessExample Success Example
 * {
 *     "id"
 *     "message": "Record Updated Successfully"
 * }
 *
 * @apiError {String} error Error Message
 * @apiError {String} code Error Code
 * @apiError {Array} fields
 * @apiError String} fields.message
 * @apiError {String} fields.type
 * @apiError {String} fields.path
 * @apiError {String} fields.value
 * @apiErrorExample Field Validation Error Example
 * HTTP/1.1 400 Bad Request
 *  {
 *    "error": "Field Validation Error",
 *    "code": "FC00010",
 *    "fields":
 *    [
 *      {
 *        "message": "name must be unique",
 *        "type": "unique violation",
 *        "path": "name",
 *        "value": "Checking"
 *      }
 *    ]
 *  }
 *
 * @apiError {String} error Error Message
 * @apiError {String} code Error Code
 * @apiErrorExample Record Not Found Example
 * HTTP/1.1 404 Not Found
 *  {
 *     "error": "Record Not Found",
 *     "code": "FC00007"
 *  }
 */
router.put('/:id', fc.isAuth, function (req, res) {

  delete req.body.createdAt;
  delete req.body.updatedAt;

  fc.update('accounts', req.body, {'where': {'id': req.params.id, 'userId': req.auth.userId}}).then(function (results) {
    var msg;

    if (results > 0) {
      msg = messages('RECORD_UPDATED');
      res.status(msg.http_code).send({'message': msg.message});
    } else {
      msg = messages('RECORD_NOT_FOUND');
      res.status(msg.http_code).send({'error': msg.message, 'code': msg.code});
    }
  }, function (err) {
    var msg = messages('FIELD_VALIDATION_ERROR');
    res.status(msg.http_code).send({'error': msg.message, 'code': msg.code, 'fields': err.errors});
  });

});

/**
 * @api {delete} /accounts/:id Delete Account
 * @apiGroup Accounts
 * @apiPermissions user
 *
 * @apiSuccess {String} message
 * @apiSuccessExample
 * HTTP/1.1 200 OK
 *   {
 *     "message": "Record Deleted Successfully"
 *   }
 *
 * @apiError {String} error Error Message
 * @apiError {String} code Error Code
 * @apiErrorExample
 *  HTTP/1.1 404 Not Found
 *  {
 *     "error": "Record Not Found",
 *     "code": "FC00007"
 *  }
 */
router.delete('/:id', fc.isAuth, function (req, res) {

  fc.remove('accounts', {'where': {'id': req.params.id, 'userId': req.auth.userId}}).then(function (results) {
    var msg;

    if (results > 0) {
      msg = messages('RECORD_DELETED');
      res.status(msg.http_code).send({'message': msg.message});
      res.send(results);
    } else {
      msg = messages('RECORD_NOT_FOUND');
      res.status(msg.http_code).send({'error': msg.message, 'code': msg.code});
    }
  });

});

/**
 * @api {get} /accounts/:id/transactions List Account Transactions
 * @apiGroup Accounts
 * @apiPermission user
 *
 * @apiSuccess {Array} array
 * @apiSuccess {Integer} array.id
 * @apiSuccess {Integer} array.accountId
 * @apiSuccess {String} array.name
 * @apiSuccess {Float} array.amount
 * @apiSuccess {Integer} array.every_num
 * @apiSuccess {String} array.every_type
 * @apiSuccess {Integer} array.num_tansactions
 * @apiSuccess {DateTime} array.start
 * @apiSuccess {DateTime} array.createdAt
 * @apiSuccess {DateTime} array.updatedAt
 * @apiSuccessExample Account List
 * [
 *   {
 *     "id": 1,
 *     "accountId": 2,
 *     "name": "Pay Check",
 *     "amount": 2838.28,
 *     "every_num": 2,
 *     "every_type": "weeks",
 *     "num_tansactions": 0,
 *     "start": "2016-08-20T18:20:36.373Z",
 *     "createdAt": "2016-08-20T18:20:36.373Z",
 *     "updatedAt": "2016-08-20T18:20:36.373Z"
 *   }
 * ]
 */
router.get('/:id/transactions', fc.isAuth, function (req, res) {

  fc.query('transactions', {
    'include': [{
      'model': fc.schemas.accounts,
      'attributes': [],
      'where': {
        'userId': req.auth.userId,
      }
    }],
    'where': {'accountId': req.params.id},
  }).then(function (results) {

    res.send(results);
  });

});

/**
 * @api {post} /accounts/:id/transactions Create Account Transaction
 * @apiGroup Accounts
 */
router.post('/:id/transactions', fc.isAuth, fc.AuthObject('accounts'), function (req, res) {

  req.body.accountId = req.params.id;

  fc.create('transactions', req.body, res).then(function (records) {
    msg = messages('RECORD_CREATED');

    res.status(msg.http_code).send({'id': records.id, 'message': msg.message});
  }, function (err) {
    var msg = messages('FIELD_VALIDATION_ERROR');
    res.status(msg.http_code).send({'error': msg.message, 'code': msg.code, 'fields': err.errors});
  });

});

/**
 * @api {get} /accounts/:id/transactions/:transactionid Get Account Transaction
 * @apiGroup Accounts
 */
router.get('/:id/transactions/:transactionid', fc.isAuth, function (req, res) {

  fc.get('transactions', {
    'include': [{
      'model': fc.schemas.accounts,
      'attributes': [],
      'where': {
        'userId': req.auth.userId,
      }
    }],
    'where': {
      'id': req.params.transactionid,
      'accountId': req.params.id
    },
  }).then(function (results) {
    if (results) {
      res.send(results);
    } else {
      var msg = messages('RECORD_NOT_FOUND');
      res.status(msg.http_code).send({'error': msg.message, 'code': msg.code});
    }
  });

});

/**
 * @api {put} /accounts/:id/transactions/:transactionid Update Account Transaction
 * @apiGroup Accounts
 */
router.put('/:id/transactions/:transactionid', fc.isAuth, fc.AuthObject('accounts'), function (req, res) {

  delete req.body.createdAt;
  delete req.body.updatedAt;

  fc.get('transactions', {
      'include': [{
          'model': fc.schemas.accounts,
          'attributes': [],
          'where': {
            'userId': req.auth.userId,
          },
        }],
      'where': {
        'id': req.params.transactionid,
        'accountId': req.params.id
      },
    }).then(function (result) {

      if (!result) {
        msg = messages('RECORD_NOT_FOUND');
        res.status(msg.http_code).send({'error': msg.message, 'code': msg.code});
      } else {

        result.update(req.body).then(function (result) {
          msg = messages('RECORD_UPDATED');
          res.status(msg.http_code).send({'message': msg.message});
        }, function (err) {
          var msg = messages('FIELD_VALIDATION_ERROR');
          res.status(msg.http_code).send({'error': msg.message, 'code': msg.code, 'fields': err.errors});
        });

      }

  }, function () {
    msg = messages('RECORD_NOT_FOUND');
    res.status(msg.http_code).send({'error': msg.message, 'code': msg.code});
  });

});

/**
 * @api {delete} /accounts/:id/transactions/:transactionid Delete Account Transaction
 * @apiGroup Accounts
 */
router.delete('/:id/transactions/:transactionid', fc.isAuth, function (req, res) {

  fc.remove('transactions', {
    'where': {'id': req.params.transactionid}}).then(function (results) {
    if (results > 0) {
      msg = messages('RECORD_DELETED');
      res.status(msg.http_code).send({'message': msg.message});
      res.send(results);
    } else {
      msg = messages('RECORD_NOT_FOUND');
      res.status(msg.http_code).send({'error': msg.message, 'code': msg.code});
    }
  });

});

/**
 * @api {get} /accounts/:id/forecast View Forecast
 * @apiGroup Accounts
 *
 * @apiParam {Integer} id Account ID
 * @apiParamExample
 * GET /accounts/2837/forecast HTTP/1.1
 *
 * @apiSuccess {DateTime} date
 * @apiSuccess {Float} transactions_total
 * @apiSuccess {Float} balance
 * @apiSuccess {Array} transactions
 * @apiSuccess {id} transactions.id
 * @apiSuccess {id} transactions.name
 * @apiSuccess {id} transactions.num_transactions_total
 * @apiSuccess {id} transactions.num_transactions_current
 * @apiSuccess {id} transactions.amount
 */

router.get('/:id/forecast', fc.AuthObject('accounts'), fc.isAuth, function (req, res) {

  var zero_time = function (date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
  };

  var build_forecast = function (account) {

    //Set our current date and zeroout the time
    var now = new Date();
    zero_time(now);

    //Zero out the balance date
    zero_time(account.balance_date);

    //Build our hash structure
    var forecast = {
      'previous': [],
      'future': [],
      'high': account.balance,
      'high_date': account.balance_date,
      'low': account.balance,
      'low_date': account.balance_date,
      'today': 0.00
    };

    //Once we're done we'll send the results
    var finish = function () {

      forecast.high = Number(forecast.high.toFixed(2));
      forecast.low = Number(forecast.low.toFixed(2));
      res.send(forecast);
    };

    var increment_transactions = function (date) {
      account.transactions.forEach(function (transaction) {

        zero_time(transaction.start);

        //Skip one time transactions
        if (transaction.one_time) {
          return;
        }

        //If we have a transaction limit, set our counter to 1
        if (transaction.num_transactions) {
          transaction.transaction_num = transaction.transaction_num || 1;
        }

        //If the transaction date is before now, lets increment it
        while (transaction.start < date) {

          //If we have a transaction limit, increment our counter
          if (transaction.num_transactions > 0) {
            transaction.transaction_num += 1;
          }

          //Get our transaction date
          transaction.start = new Date(transaction.start.valueOf());

          //Increment our date based on every_type
          switch (transaction.every_type) {
            case 'day':
              transaction.start.setDate(transaction.start.getDate() + transaction.every_num);
              break;
            case 'week':
              transaction.start.setDate(transaction.start.getDate() + (7 * transaction.every_num));
              break;
            case 'month':
              transaction.start.setMonth(transaction.start.getMonth() + transaction.every_num);
              break;
            case 'year':
              transaction.start.setYear(transaction.start.getYear() +  transaction.every_num);
              break;
          }
        }
      });
    };

    //Function to get the transactions for the passed in date
    var get_day = function (current) {

      //Build our base day hash
      var day = {
        'date': current,
        'transactions_total': 0,
        'balance': account.balance,
        'transactions': []
      };


      //Increment Transactions
      increment_transactions(current);

      //Filter transactions for the current day
      todays = account.transactions.filter(function (transaction) {
        if (transaction.num_transactions && transaction.transaction_num > transaction.num_transactions) {
          return false;
        }
        return (transaction.start.valueOf() == current.valueOf());
      });

      //Lets process each transaction for the current day
      todays.forEach(function (transaction) {
        //Increment our balances
        day.balance = account.balance + transaction.amount;
        day.transactions_total += transaction.amount;
        account.balance += transaction.amount;

        //Push the transaction to the days transactions array
        day.transactions.push({
          'id': transaction.id,
          'name': transaction.name,
          'num_transactions_total': transaction.num_transactions,
          'num_transactions_current': transaction.transaction_num,
          'amount': transaction.amount,
          'every_num': transaction.every_num,
          'every_type': transaction.every_type,
          'one_time': transaction.one_time,
        });

      });

      day.balance = Number(day.balance.toFixed(2));
      day.transactions_total = Number(day.transactions_total.toFixed(2));

      //Check our high balance stat
      if (account.balance > forecast.high) {
        forecast.high = account.balance;
        forecast.high_date = current;
      }

      //Check our low balance stat
      if (account.balance < forecast.low) {
        forecast.low = account.balance;
        forecast.low_date = current;
      }

      //If currently processed date is before now, add to previous key
      if (day.transactions.length > 0 && current < now) {
        forecast.previous.push(day);
        forecast.today = day.balance;
      //Otherwise add it for our future key
      } else if (day.transactions.length > 0) {
        forecast.future.push(day);
      }

      //Increment the day
      next = new Date(current.valueOf());
      next.setDate(next.getDate() + 1);

      //If we've reached our forecast length, finish
      if ((next - now) >= (1000*60*60*24 * account.forecast)) {
        finish();

      //Otherwise get the next day
      } else {
        get_day(next);
      }
    };

    //Sort our transactions
    account.transactions.sort(function(a, b){
        var keyA = new Date(a.updated_at),
            keyB = new Date(b.updated_at);
        // Compare the 2 dates
        if(a.amount < b.amount) return -1;
        if(a.amount > b.amount) return 1;
        return 0;
    });

    //Initial Increment of Transactions
    increment_transactions(account.balance_date);


    //Get the details for the first day
    get_day(account.balance_date);
  };

  fc.get('accounts', {
    'where': {'id': req.params.id, 'userId': req.auth.userId},
    'include': [{
      'model': fc.schemas.transactions,
    }]
  }).then(function (result) {
    var msg;

    if (result) {
      build_forecast(result);
    } else {
      msg = messages('RECORD_NOT_FOUND');
      res.status(msg.http_code).send({'error': msg.message, 'code': msg.code});
    }
  });
});

module.exports = router;
