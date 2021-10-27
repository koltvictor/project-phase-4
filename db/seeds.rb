# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)



   
# puts "🌱 Seeding spices..."

# # Seed your database here

# world = Book.create(title:"World Travel: An Irreverent Guide", image_url:"https://images-na.ssl-images-amazon.com/images/I/51DZ9FcZqFS._SX329_BO1,204,203,200_.jpg", isbn:"0062802798",description:"A guide to some of the world’s most fascinating places, as seen and experienced by writer, television host, and relentlessly curious traveler Anthony Bourdain",publisher:"Ecco")
# kitchen = Book.create(title:"Kitchen Confidential: Adventures in the Culinary Underbelly", image_url:"https://m.media-amazon.com/images/I/51yu7UKqHsL.jpg", isbn:"158234082X",description:"Kitchen Confidential reveals what Bourdain calls 'twenty-five years of sex, drugs, bad behavior and haute cuisine.'",publisher:"Bloomsbury USA")
# sankofa = Book.create(title:"Sankofa: A Novel", image_url:"https://m.media-amazon.com/images/I/51yj2J1rqZL.jpg", isbn:"1646220838",description:"A woman wondering who she really is goes in search of a father she never knew—only to find something far more complicated than she ever expected",publisher:"Catapult")
# lagos = Book.create(title:"Welcome to Lagos: A Novel", image_url:"https://m.media-amazon.com/images/I/51J1JbH-8bL.jpg", isbn:"1936787806",description:"When army officer Chike Ameobi is ordered to kill innocent civilians, he knows it is time to desert his post. ",publisher:"Catapult")
# spider = Book.create(title:"The Spider King's Daughter", image_url:"https://images-na.ssl-images-amazon.com/images/I/51ji4nk+uTL._SX315_BO1,204,203,200_.jpg", isbn:"0571268919",description:"Seventeen-year-old Abike Johnson is the favourite child of her wealthy father.",publisher:"Faber and Faber")
# vivaldi = Book.create(title:"The Vivaldi Cipher (Vatican Secret Archive Thrillers)", image_url:"https://images-na.ssl-images-amazon.com/images/I/51NWakMif9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", isbn:"195412306X",description:"During the election of a new Pope in the mid-18th century, famed violinist Antonio Vivaldi learns of a ring of art forgers who are replacing the Vatican's priceless treasures with expertly-painted fakes.",publisher:"Empraxis LLC")
# hope = Book.create(title:"Harvest for Hope: A Guide to Mindful Eating", image_url:"https://images-na.ssl-images-amazon.com/images/I/51nb1rkS72L._SX331_BO1,204,203,200_.jpg", isbn:"0446698210",description:"From world-renowned scientist Jane Goodall, as seen in the new National Geographic documentary Jane, comes a provocative look into the ways we can positively impact the world by changing our eating habits.",publisher:"Grand Central Publishing")
# animal = Book.create(title:"Hope for Animals and Their World: How Endangered Species Are Being Rescued from the Brink", image_url:"https://images-na.ssl-images-amazon.com/images/I/51Uh7PRnJNL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", isbn:"044658178X",description:"From world-renowned scientist Jane Goodall, as seen in the new National Geographic documentary Jane, comes an inspiring message about the future of the animal kingdom.",publisher:"Grand Central Publishing")

# anthony = Author.create(name:"Anthony Bourdain",image_url:"https://images-na.ssl-images-amazon.com/images/I/610rLzx8b3L._SX450_.jpg",description:"Chef, author, and raconteur Anthony Bourdain is best known for traveling the globe on his TV show Anthony Bourdain: Parts Unknown.")
# laurie = Author.create(name:"Laurie Woolever",image_url:"https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/53pdo7pm7cmu5svkbhoqvmca6v._SX450_.jpg",description:"I’m a writer and editor, and for nearly a decade, worked as the lieutenant to the late Anthony Bourdain.")
# chibundu = Author.create(name:"Chibundu Onuzo",image_url:"https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/gjb84ivjuf742kq5ss9g4qffns._SX450_.jpg",description:"Chibundu Onuzo was born in Lagos, Nigeria and lives in London. A Fellow of the Royal Society of Literature and regular contributor to The Guardian, she is the winner of a Betty Trask Award")
# jane = Author.create(name:"Jane Goodall",image_url:"https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/5058ldlo95i8b5er1r8j57u56b._SX450_.jpg",description:"Dr. Jane Goodall, DBE, founder of the Jane Goodall Institute and UN Messenger of Peace, is an iconic voice for holistic, compassionate, and sustainable solutions.")
# gary = Author.create(name:"Gary McAvoy",image_url:"https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/4captdkkb5s8sseutakfqvnps._SX450_.jpg",description:"A native Californian transplanted to the Pacific Northwest, Gary McAvoy began writing early in life, first for a small-town newspaper and regional Southern California magazines, then in corporate communications for his own businesses and client projects, and on to published nonfiction books.")
# gail = Author.create(name:"Gail Hudson",image_url:"https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/pfud6qnjfe7nmfepi6bg80jlm1._SX450_.jpg",description:"Gail Hudson is an international bestselling writer who writes about the power of human relationships to heal the world.")

# AuthorBook.create(author:anthony,book:world)
# AuthorBook.create(author:laurie,book:world)
# AuthorBook.create(author:anthony,book:kitchen)
# AuthorBook.create(author:chibundu,book:sankofa)
# AuthorBook.create(author:chibundu,book:lagos)
# AuthorBook.create(author:chibundu,book:spider)
# AuthorBook.create(author:jane,book:hope)
# AuthorBook.create(author:gary,book:hope)
# AuthorBook.create(author:gail,book:hope)
# AuthorBook.create(author:gary,book:vivaldi)
# AuthorBook.create(author:jane,book:animal)
# AuthorBook.create(author:gail,book:animal)


# puts "✅ Done seeding!"

User.create(username: 'test', name: 'name', email:'email', password: 'password', password_confirmation: 'password')