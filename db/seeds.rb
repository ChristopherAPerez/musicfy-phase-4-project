puts "🏕 Seeding users..."
donald_glover = User.create(name: "Donald Glover", username: "troy_barnes", password: "abed", bio: "stay woke!", favorite_genre: "Hip-Hop", user_avatar: "https://m.media-amazon.com/images/M/MV5BNzUxNTU5ODkxNl5BMl5BanBnXkFtZTgwOTIyNjc5MDI@._V1_.jpg")
adam_met = User.create(name: "Adam Met", username: "bass_ajr", password: "lawyer", bio: "crazy nass man!", favorite_genre: "Pop", user_avatar: "https://i.scdn.co/image/ab6761610000e5ebd0f8fb5691ea660889d10eb1")
jack_met = User.create(name: "Jack Met", username: "vocal_ajr", password: "trapper_hat", bio: "stay woke!", favorite_genre: "Pop", user_avatar: "https://i.scdn.co/image/ab6761610000e5ebd0f8fb5691ea660889d10eb1")
ryan_met = User.create(name: "Ryan Met", username: "piano_ajr", password: "synesthesia", bio: "stay woke!", favorite_genre: "Pop", user_avatar: "https://i.scdn.co/image/ab6761610000e5ebd0f8fb5691ea660889d10eb1")
tyler_joseph = User.create(name: "Tyler Joseph", username: "mr_misty_eyes", password: "21pilots", bio: "deatch inspires me like a dog inspires a rabbit.", favorite_genre: "Hip-Hop", user_avatar: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2016/05/31/Style/Images/twentyonepilots.promo4-JabariJacobs2.jpg?t=20170517")
josh_dunn = User.create(name: "Josh Dunn", username: "josh_dunn", password: "drumsticks", bio: "JOSH DUNN!!", favorite_genre: "Rock", user_avatar: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2016/05/31/Style/Images/twentyonepilots.promo4-JabariJacobs2.jpg?t=20170517")

puts "🏕 Seeding albums..."

because_the_internet = Album.create(title: "Because The Internet",
                                    artist: "Childish Gambino",
                                    genre: "Hip-Hop",
                                    album_image: "https://media.pitchfork.com/photos/5929a4ce13d1975652138dc8/1:1/w_450%2Cc_limit/a61ee51a.jpg",
                                    hours: 0,
                                    minutes: 57,
                                    seconds: 52,
                                    likes: 8005)
                    
the_click = Album.create(title: "The Click",
                                    artist: "AJR",
                                    genre: "Pop",
                                    album_image: "https://upload.wikimedia.org/wikipedia/en/a/ae/AJR_The_Click.jpg",
                                    hours: 0,
                                    minutes: 48,
                                    seconds: 1,
                                    likes: 3212)

neotheater = Album.create(title: "Neotheater",
                                    artist: "AJR",
                                    genre: "Pop",
                                    album_image: "https://upload.wikimedia.org/wikipedia/en/5/5c/AJR_Neotheater.jpg",
                                    hours: 0,
                                    minutes: 44,
                                    seconds: 28,
                                    likes: 6896)

ok = Album.create(title: "OK Orchestra",
                                    artist: "AJR",
                                    genre: "Pop",
                                    album_image: "https://upload.wikimedia.org/wikipedia/en/b/bf/AJR_-_OK_Orchestra.png",
                                    hours: 0,
                                    minutes: 45,
                                    seconds: 48,
                                    likes: 5643)

blurryface = Album.create(title: "Blurryface",
                                    artist: "Twenty One Pilots",
                                    genre: "Alternative Pop",
                                    album_image: "https://upload.wikimedia.org/wikipedia/en/7/7d/Blurryface_by_Twenty_One_Pilots.png",
                                    hours: 0,
                                    minutes: 52,
                                    seconds: 23,
                                    likes: 8087)

vessel = Album.create(title: "Vessel",
                                    artist: "Twenty One Pilots",
                                    genre: "Alternative Pop",
                                    album_image: "https://upload.wikimedia.org/wikipedia/en/2/20/Vessel_by_Twenty_One_Pilots.jpg",
                                    hours: 0,
                                    minutes: 47,
                                    seconds: 44,
                                    likes: 10355)

puts "🏕 Seeding songs..."

sweatpants = Song.create(title: "IV.Sweatpants", feature: "Problem", hours: 0, minutes: 3, seconds: 1, streams: 9887, user_id: donald_glover.id, album_id: because_the_internet.id)
three_thousand_five = Song.create(title: "3005", feature: nil, hours: 0, minutes: 3, seconds: 55, streams: 3005, user_id: donald_glover.id, album_id: because_the_internet.id)
sweatpants = Song.create(title: "I. The Worst Guys", feature: "Chance The Rapper", hours: 0, minutes: 3, seconds: 42, streams: 5678, user_id: donald_glover.id, album_id: because_the_internet.id)
weak = Song.create(title: "Weak", feature: nil, hours: 0, minutes: 3, seconds: 1, streams: 3213, user_id: adam_met.id, album_id: the_click.id)
karma = Song.create(title: "Karma", feature: nil, hours: 0, minutes: 3, seconds: 1, streams: 9052, user_id: jack_met.id, album_id: neotheater.id)
ordinary_people = Song.create(title: "Ordinaryish People", feature: "Blue Man Group", hours: 0, minutes: 3, seconds: 1, streams: 2109, user_id: ryan_met.id, album_id: ok.id)
stressed_out = Song.create(title: "Stressed Out", feature: nil, hours: 0, minutes: 3, seconds: 1, streams: 15075, user_id: tyler_joseph.id, album_id: blurryface.id)
trees = Song.create(title: "Trees", feature: nil, hours: 0, minutes: 3, seconds: 1, streams: 14008, user_id: josh_dunn.id, album_id: vessel.id)



puts "✅ Done seeding!"

# {
#     "title": "Camp",
#     "artist": "Childish Gambino",
#     "genre": "Hip-Hop",
#     "album_image": "https://upload.wikimedia.org/wikipedia/en/e/e2/Childish-gambino-camp.jpg",
#     "hours": 0,
#     "minutes": 56,
#     "seconds": 6,
#     "likes": 8005,
#     "user_id": 1,
#     "song_id": 1
# }

# {
#     "title": "Bonfire",
#     "feature": "",
#     "hours": 0,
#     "minutes": 3,
#     "seconds": 42,
#     "streams": 9887,
#     "user_id": 1,
#     "album_id": 1
# }

# title: "The Click", artist: "AJR", genre: "Pop", album_image: "https://upload.wikimedia.org/wikipedia/en/a/ae/AJR_The_Click.jpg", hours: 0, minutes: 48, seconds: 1, likes: 3212, user_id: 1