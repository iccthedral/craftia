	var cs = require("coffee-script/register")
	, DB = require("./src/backend/config/Database")
	, UserModel = require("./src/backend/models/User")
	, jobCtrl = require("./src/backend/controllers/Job")
	, saveJob = jobCtrl.saveJob
	, bidOnJob = jobCtrl.bidOnJob
	, async = require("async")
	, createCatsAndCities = require("./src/backend/modules/ExportToDB")
	, carCategory = require("./src/shared/resources/categories/car.json")
	, cities = require("./src/shared/resources/cities.json")
	, names = ["gogs", "sale", "doks", "roks", "moks"]
	, addresses = ["Kralja Petra 1", "Cara Dusana 1", "Mihajla Pupina 1"]
	, pics = ["no1", "no2", "no3"]
	, jobPhotos = ["quality", "master", "approved"]
	, createdCraftsmen = []
	, createdCustomers = []
	, jobMock = {
			title: "Job from ",
			description: "Very fine job from ",
			category: "Car",
			dateFrom: new Date(),
			status: "open",
			jobPhotos: []
		}
	, JOB_DATE_TO = 10
	;

function customerNames() {
	return names.map(function(name) { 
		return "cu" + name;
	});
}

function craftsmanNames() {
	return names.map(function (name) {
		return "cr" + name;
	});
}

function createCustomer(name, clb) {
	var out = {}
		, randCity = cities[Math.round(Math.random())];
	out.username = name;
	out.email = name + "@customer.com";
	out.password = "1234";
	out.name = name;
	out.surname = "Customerovic";
	out.type = "Customer";
	out.telephone = "333-333-333";
	out.address = {
		zip: randCity.zip,
		city: randCity.name,
		line1: addresses[Math.round(Math.random()*2)]
	};
	out.profilePic = "img/" + pics[Math.round(Math.random())] + ".jpg";
	var user = new UserModel(out);
	user.save(function(err, res) {
		clb(err, res);
	})

	createdCustomers.push(user);
};

function createCraftsman(name, clb) {
	var out = {}
		, randCity = cities[Math.round(Math.random())]
		;
	out.username = name;
	out.email = name + "@craftsman.com";
	out.password = "1234";
	out.name = name;
	out.surname = "Craftsmanovic";
	out.type = "Craftsman";
	out.telephone = "444-444-444";
	out.address = {
		zip: randCity.zip,
		city: randCity.name,
		line1: addresses[~~(Math.random()*addresses.length)]
	};
	out.profilePic = "img/" + pics[Math.round(Math.random())] + ".jpg";
	var user = new UserModel(out);
	user.save(function(err, res) {
		clb(err, res);
	})
	createdCraftsmen.push(user);
};

function createUsers(clb) {
	async.map(customerNames(), createCustomer, function(err, customers) {
		if (err) {
			return clb(err, customers);
		}
		async.map(craftsmanNames(), createCraftsman, function(err, craftsman) {
			clb(err, customers.concat(craftsman));
		});
	});
};

function createJob(customer, clb) {
	var job = JSON.parse(JSON.stringify(jobMock))
		, subcatLen = carCategory.subcategories.length
		, city = cities[~~(Math.random()*cities.length)]
		, addrLine = addresses[~~(Math.random()*addresses.length)]
		;

	job.address = {
		city: city.name,
		zip: city.zip,
		line1: addrLine
	};
	
	job.subcategory = carCategory.subcategories[~~(Math.random()*subcatLen)];
	job.dateTo = new Date(new Date().getTime() + (1000 * (~~(Math.random() * JOB_DATE_TO) + 1) * 60));
	job.materialProvider = ["Craftsman", "Customer"][Math.round(Math.random())];
	job.title += customer.username;
	job.description += customer.username;
	job.budget = ~~(Math.random() * 10000) + 9000;
	
	var numPhotos = ~~(Math.random() * jobPhotos.length);
	while (numPhotos-- > 0) {
		job.jobPhotos.push("img/" + jobPhotos[numPhotos] + ".jpg");
	}
	
	saveJob(customer, job, clb);
}

function createJobs(customers, clb) {
	async.map(customers, createJob, function(err, jobs) {
		if (err) {
			console.log("Error", err.toString());
		}
		clb(err, jobs);
	});
}

function bidOnJobs(jobs, craftsmen, clb) {
	var craftsmenClone = craftsmen.slice()

	function bid(job, clb) {
		console.log("JOBID", job.id, job._id.toString(), typeof job._id);
		bidOnJob(craftsmenClone.pop(), job.id, function(err, usr, jobId) {
			console.log("Craftsman", usr.username, "bidded on", job.title, jobId);
			clb(err, job, usr);
		});
	}

	async.map(jobs, bid, function(err, res) {
		clb(err, res);
	});
}

function create(clb) {
	createCatsAndCities(function(err, catsAndCities) {
		if (err) {
			DB.close();
			return clb(err, catsAndCities);
		}
		createUsers(function(err, users) {
			console.log("Created", users.length, "users");
			if (err) {
				DB.close();
				return clb(err, users);
			}
			createJobs(createdCustomers, function(err, jobs) {
				console.log("Created", jobs.length, "jobs");
				bidOnJobs(jobs, createdCraftsmen, function(err, jobs) {
					clb(err, users.concat(jobs));
				});
			});
		});
	});
}

module.exports.customerNames = customerNames;
module.exports.craftsmanNames = craftsmanNames;
module.exports.createCustomer = createCustomer;
module.exports.createCraftsman = createCraftsman;
module.exports.createUsers = createUsers;
module.exports.createJob = createJob;
module.exports.createJobs = createJobs;
module.exports.create = create;