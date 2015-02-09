var assert = require('assert'),
	AmazonStorage = require('../../api/services/storage/AmazonStorage'),
	BaseStorage = require('../../api/services/storage/BaseStorage'),
	GCloudStorage = require('../../api/services/storage/GCloudStorage'),
	StorageFactory = require('../../api/services/storage/StorageFactory'),
	StorageService = require('../../api/services/StorageService');

describe('services:StorageService', function() {
	describe('AmazonStorage', function() {
		it("Should be a function", function() {
			assert(typeof AmazonStorage === 'function', 'AmazonStorage should be a function');			
		});
	});

	describe('BaseStorage', function() {
		assert(typeof BaseStorage === 'function', 'BaseStorage should be a function');
	});

	describe('GCloudStorage', function() {
		assert(typeof GCloudStorage === 'function', 'GCloudStorage should be a function');
	});

	describe('StorageFactory', function() {
		assert(typeof StorageFactory === 'function', 'StorageFactory should be a function');
	});

	describe('StorageService', function() {
		assert(typeof StorageService === 'object', 'StorageService should be a function');
	});
});