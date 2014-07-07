	var cs = require("coffee-script/register")
	, UserModel = require("./src/backend/models/User")
	, JobModel = require("./src/backend/models/Job")
	, JobCtrl = require("./src/backend/controllers/Job")
	, fs = require("fs")
	, bidOnJob = JobCtrl.bidOnJob
	, async = require("async")
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
	, DB = require("./src/backend/config/Database")
	, IMG_FOLDER = process.cwd() + "/www/img/"
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
		, randCity = cities[Math.round(Math.random())]
		;
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
	user.save(function(err, user) {
		fs.mkdir(IMG_FOLDER + user._id, function(err) {
			clb(err, user);
		});
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
	user.save(function(err, user) {
		fs.mkdir(IMG_FOLDER + user._id, function(err) {
			clb(err, user);
		});
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
		city: {
			name: city.name
		},
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
		//job.jobPhotos.push("img/" + jobPhotos[numPhotos] + ".jpg");
	}
	job.author = customer;
	jobInst = new JobModel(job);
	jobInst.save(clb);
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
	var createCatsAndCities = require("./src/backend/modules/ExportToDB.coffee");
	var create_ = function() {
		console.log(clb, "creating callbacks")
		createCatsAndCities(function(err, catsAndCities) {
			console.log("creating cats")
			if (err) {
				return clb(err, catsAndCities);
			}
			createUsers(function(err, users) {
				console.log("Created", users.length, "users");
				if (err) {
					return clb(err, users);
				}
				createJobs(createdCustomers, function(err, jobs) {
					console.log("Created", jobs.length, "jobs");
					bidOnJobs(jobs, createdCraftsmen, function(err, jobs) {
						clb(err, users.concat(jobs));
					})
				})
			})
		});
	};
	create_();
}

module.exports.customerNames = customerNames;
module.exports.craftsmanNames = craftsmanNames;
module.exports.createCustomer = createCustomer;
module.exports.createCraftsman = createCraftsman;
module.exports.createUsers = createUsers;
module.exports.createJob = createJob;
module.exports.createJobs = createJobs;
module.exports.create = create;