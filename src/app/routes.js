var q = require('q');
var hat = require('hat');
var fc = require('../app');
var crypto = require('crypto');
var express = require('express');
var router = express.Router();
var messages = require('./messages').get;

var isAdmin = function (req, res, next) {
	var now = new Date();

	if (req.auth && req.auth.admin && now < req.auth.expires) {
		next();
	} else {
		var msg = messages('ACCESS_DENIED');
		res.status(msg.http_code).send({'message': msg.message});
	}
};

var isAuth = function (req, res, next) {
	var now = new Date();

	if (req.auth && req.auth.admin && now < req.auth.expires) {
		next();
	} else {
		var msg = messages('ACCESS_DENIED');
		res.status(msg.http_code).send({'message': msg.message});
	}
};

var query = function (schema, req, options) {

	return fc.schemas[schema].findAll(options);

};

var get = function (schema, req, options) {

	return fc.schemas[schema].find(options);

};

var create = function (schema, data) {
	var defer = q.defer();

	fc.schemas[schema].create(data).then(function (record) {
		defer.resolve(record)
	}, function (err) {
		delete err.name;

		defer.reject(err);
	});

	return defer.promise;
};

var remove = function (schema, options) {
	var defer = q.defer();

	fc.schemas[schema].destroy(options).then(function (response) {
		defer.resolve(response);
	});

	return defer.promise;
};

router.get('/', function (req, res) {
	var msg = messages('API_WELCOME');
	res.status(msg.http_code).send({'message': msg.message});
});

router.get('/users', isAdmin, function (req, res) {

	query('users', req, res, {'include': [fc.schemas.tokens]}).then(function (results) {
		if (results) {
			res.send(results);
		} else {
			res.status(404).send({'message': 'Record not found'});
		}
	});

});

router.get('/users/:id', isAdmin, function (req, res) {


	get('users', req, {'where': {'id': req.params.id}}).then(function (results) {
		if (results) {
			res.send(results);
		} else {
			res.status(404).send({'message': 'Record not found'});
		}
	});

});

router.get('/users/:id/tokens', isAdmin, function (req, res) {


	query('tokens', req, res, {'where': {'userId': req.params.id}}).then(function (results) {
		if (results) {
			res.send(results);
		} else {
			res.status(404).send({'message': 'Record not found'});
		}
	});

});

router.get('/users/:id/tokens/:tokenid', isAdmin, function (req, res) {


	get('tokens', req, {'where': {'userId': req.params.id, 'id': req.params.tokenid}}).then(function (results) {
		if (results) {
			res.send(results);
		} else {
			res.status(404).send({'message': 'Record not found'});
		}
	}, function () {
	});

});

router.post('/users', isAdmin, function (req, res) {

	if (req.body.password) {
		req.body.password = crypto.createHmac('sha512', fc.config.salt).update(req.body.password).digest('base64');
	}

	create('users', req.body, res).then(function (records) {
		res.status(200).send(records);
	}, function (err) {
		res.status(400).send(err);
	});

});

router.get('/tokens', isAdmin, function (req, res) {


	query('tokens', req, res, {'include': [fc.schemas.users]}).then(function (results) {
		res.send(results);
	});

});

router.get('/accounts', isAdmin, function (req, res) {

	var where = {
		'userId': req.auth.userId
	};

	if (req.auth.admin) {

	}
	query('accounts', req, {'where': where}).then(function (results) {
		res.send(results);
	});

});

router.get('/tansactions', isAdmin, function (req, res) {

	query('tansactions', req).then(function (results) {
		res.send(results);
	});

});

router.get('/permissions', isAdmin, function (req, res) {

	query('permissions', req).then(function (results) {
		res.send(results);
	});

});

router.get('/auth', isAuth, function (req, res) {

	res.send(req.auth);

});

router.delete('/auth', isAuth, function (req, res) {

	remove('tokens', {'where': {'id': req.auth.token_id}}).then(function (response) {
		res.send({'message': 'success'});
	});

});

router.get('/auth/tokens', isAuth, function (req, res) {

	query('tokens', req, {'where': {'userId': req.auth.userId}}).then(function (results) {
		if (results) {
			res.send(results);
		} else {
			var msg = messages('RECORD_NOT_FOUND');
			res.status(msg.http_code).send({'message': msg.message});
		}
	});

});

router.post('/auth', function (req, res) {

	fc.schemas.users.find({'where': {
		'username': req.body.username,
		'password': crypto.createHmac('sha512', fc.config.salt).update(req.body.password).digest('base64')
	}}).then(function (record) {
		if (record) {

			var token_expiration = new Date();
			token_expiration.setDate(token_expiration.getDate() + 1);

			fc.schemas.tokens.create({
				'client_token': crypto.createHash('sha256').update(req.body.username).digest('base64'),
				'auth_token': hat(),
				'ip': req.connection.remoteAddress,
				'agent': req.headers['user-agent'],
				'expires': token_expiration,
				'userId': record.id
			}).then(function (token) {
				res.status(200).send({'message': 'success', 'client_token': token.client_token, 'auth_token': token.auth_token, 'expires': token_expiration})
			}, function (err) {
				console.log(err);
				res.status(400).send({'message': 'Authentication succeeded but an authentication token could not be obtained'});
			})

		} else {
			res.status(400).send({'message': 'failed'})
		}
	});

});

module.exports = router;