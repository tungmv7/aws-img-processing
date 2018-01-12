/*global require, module */
var aws = require('aws-sdk');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

module.exports = function convert(bucket, fileKey, callback) {
	'use strict';
	// var s3 = new aws.S3(),
	// 	Transform = require('stream').Transform,
	// 	uppercase = new Transform({decodeStrings: false}),
	// 	stream;
	// uppercase._transform = function (chunk, encoding, done) {
	// 	done(null, chunk.toUpperCase());
	// };
	// stream = s3.getObject({
	// 	Bucket: bucket,
	// 	Key: fileKey
	// }).createReadStream();
	// stream.setEncoding('utf8');
	// stream.pipe(uppercase);
    //
	// s3.upload({
	// 	Bucket: bucket,
	// 	Key: fileKey.replace(/^in/, 'out'),
	// 	Body: uppercase,
	// 	ACL: 'private'
	// }, callback);
	let s3 = new aws.S3();
	let params = {
		Bucket: bucket,
		Key: fileKey
	}
	s3.getObject(params, function(err, data){
		console.log(err);
		console.log(data);
		// imagemin.buffer(data.Body, {
		// 	plugins: [
		// 		imageminJpegtran(),
		// 		imageminPngquant({quality: '65-80'})
		// 	],
		// 	use:[
		// 		imageminJpegtran(),
		// 		imageminPngquant({quality: '65-80'})
		// 	]
		// }).then(function(files){
		// 	console.log(files);
		// 	s3.upload({
		// 		Bucket: bucket,
		// 		Key: fileKey.replace(/^in/, 'out'),
		// 		Body: files,
		// 		ACL: 'private'
		// 	}, callback);
		// });
		// console.log('done');
	});
};
