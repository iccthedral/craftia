cs = require "coffee-script/register"
JobCtrl = require "./backend/controllers/Job"
DB = require "./config/Database"
UserModel = require "./backend/models/User"
JobModel = require "./backend/models/Job"

bidOnJob = JobCtrl.bidOnJob
pickWinner = JobCtrl.pickWinner

getJobByTitle = (title, clb) ->
	JobModel.findOne title:title, clb

getUserByUsername = (username, clb) ->
	UserModel.findOne username:username, clb

chooseWinner = (username, title) ->
	getUserByUsername username, (err, user) ->
		getJobByTitle title, (err, job) ->
			console.log user.id, job.id
			pickWinner user.id, job.id, (err, job) ->
				throw err if err?
				console.log "Winner is #{username}", job.title
				DB.close()

chooseWinner "crgogs", "Job from cumoks"
cancelBid "crgogs", "Job from cumoks"

# {
#     "_id" : ObjectId("53a31c0b2da9ca7c1d266fa1"),
#     "username" : "cudoks",
#     "email" : "cudoks@customer.com",
#     "password" : "$2a$10$g8TSbGFhl4Jx8FOzEXU/buE8MoY8CqYk/xWdPFZvh9.5koxdk8BlC",
#     "name" : "cudoks",
#     "surname" : "Customerovic",
#     "type" : "Customer",
#     "telephone" : "333-333-333",
#     "inbox" : {
#         "sent" : [],
#         "received" : []
#     },
#     "notif" : [ 
#         ObjectId("53a31c112da9ca7c1d266fb0"), 
#         ObjectId("53a31c608cbf82441019c428")
#     ],
#     "profilePic" : "img/no1.jpg",
#     "rating" : {
#         "avgRate" : 0,
#         "totalVotes" : 0,
#         "comments" : []
#     },
#     "address" : {
#         "zip" : "21000",
#         "city" : "Novi Sad",
#         "line1" : "Cara Dusana 1"
#     },
#     "__v" : 2
# }

# {
#     "_id" : ObjectId("53a31c112da9ca7c1d266fac"),
#     "title" : "Job from curoks",
#     "category" : "Car",
#     "dateFrom" : ISODate("2014-06-19T17:21:15.147Z"),
#     "subcategory" : "Auto Tuning",
#     "dateTo" : ISODate("2014-06-19T17:22:21.670Z"),
#     "materialProvider" : "Customer",
#     "budget" : 15557,
#     "jobPhotos" : [],
#     "bidders" : [ 
#         {
#             "__v" : 0,
#             "username" : "crsale",
#             "email" : "crsale@craftsman.com",
#             "password" : "$2a$10$k89Cm/z8/2qCpj74Hdh0pO4c.eJDPyctVn19P4deNH1BtOXX5oOCO",
#             "name" : "crsale",
#             "surname" : "Craftsmanovic",
#             "type" : "Craftsman",
#             "telephone" : "444-444-444",
#             "_id" : ObjectId("53a31c0e2da9ca7c1d266fa5"),
#             "inbox" : {
#                 "sent" : [],
#                 "received" : []
#             },
#             "notif" : [],
#             "profilePic" : "img/no2.jpg",
#             "rating" : {
#                 "avgRate" : 0,
#                 "totalVotes" : 0,
#                 "comments" : []
#             },
#             "address" : {
#                 "zip" : "21000",
#                 "city" : "Novi Sad",
#                 "line1" : "Kralja Petra 1"
#             }
#         }
#     ],
#     "author" : {
#         "id" : "53a31c0b2da9ca7c1d266fa2",
#         "username" : "curoks"
#     },
#     "status" : "finished",
#     "address" : {
#         "city" : "Beograd",
#         "zip" : "11000",
#         "line1" : "Kralja Petra 1"
#     },
#     "description" : "Very fine job from curoks",
#     "__v" : 1
# }