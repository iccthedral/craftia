define ["./module"], (module) ->
	return module.service "categoryPictures", [->
		{
			"Car": "car.jpg",
			"Caterers and event": "catering.jpg",
			"Computer and office service": "office.jpg",
			"Crafts and home construction": "homeConstruction.jpg",
			"Household and gardening": "gardening.jpg",
			"Learning and education": "education.jpg",
			"Money, tax, legal": "bookkeeping.jpg",
			"Pet care": "petCare.jpg",
			"Photo, design, internet": "design.jpg",
			"Style and wellness": "wellness.jpg",
			"Support and care": "support.jpg",
			"Transport and removals": "transport.jpg"
		}
	]
