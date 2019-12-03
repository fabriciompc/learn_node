'use strict';

exports.appTest = function(req, res) {
  console.log('Server On');
  res.json('Server On', Date.now);
};
