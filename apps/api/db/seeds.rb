# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "time"

Event.destroy_all
User.destroy_all

users = User.create!([{
    name: "Daphne Sullivan",
    email: "dsullivan@gmail.com",
    is_admin: true
},{
    name: "Tanya McQuoid-Hunt",
    email: "tanya@yahoo.com",
    is_admin: false
}, 
{
    name: "Ethan Spiller",
    email: "espiller@startup.io",
    is_admin: true
},{
    name: "Harper Spiller",
    email: "harperspiller@eeocprotector.com",
    is_admin: false
},{
    name: "Kelsey Roy",
    email: "kelseytylerroy@gmail.com",
    is_admin: true
},{
    name: "Merle Self",
    email: "merleself@gmail.com ",
    is_admin: true
},{
    name: "Bryan Clark",
    email: "bryanhclark@gmail.com",
    is_admin: true
}
])

users

p "Created #{User.count} users"

Event.create!([{
    title: "Dog Park and Chill",
    description: "Come meet new friends and hang out in prospect park! Both dogs and humans welcome.",
    blurb: "Dogs and Humans welcome at this Prospect Park hang.",
    start: Time.now.beginning_of_hour.prev_day,
    end: Time.now.end_of_hour.prev_day,
    address: "Prospect Park, Brooklyn, NY",
    user_id: users[0].id
}, 
{
    title: "Hike the Watkins Glen State Park Gorge Trail",
    description: "Come meet new friends and hike the Watkins Glen State Park Gorge Trail.",
    blurb: "Join us for a hike!",
    start: Time.now.beginning_of_hour.next_month,
    end: Time.now.end_of_hour.next_month,
    address: "Watkins Glen, NY",
    user_id: users[1].id
},
{
    title: "Axe Throwing",
    description: "Come meet new friends and throw some axes at Kick Axe Throwing!",
    blurb: "Throw some axes! Meet new Friends",
    start: Time.now.beginning_of_hour,
    end: Time.now.end_of_hour,
    address: "New York, NY",
    user_id: users[2].id
},
{
    title: "Axe Throwing",
    description: "Come meet new friends and throw some axes at Kick Axe Throwing!",
    blurb: "Throw some axes! Meet new Friends",
    start: Time.now.beginning_of_hour.next_month,
    end: Time.now.end_of_hour.next_month,
    address: "New York, NY",
    user_id: users[3].id
},
{
    title: "Uncut Gems Cosplay",
    description: "Get together with a bunch of uncut gems superfans and evaluate the price of beautiful raw gemstones!",
    blurb: "Gems! We got em.",
    start: Time.new(2023, 10, 31, 2, 2, 2),
    end: Time.new(2023, 10, 31, 3, 3, 3),
    address: "New York, NY",
    user_id: users[6].id
},
{
    title: "Coffee Shop Crawl in Portland",
    description: "Come join us for a coffee shop crawl of Portland's finest java! the event will take us around Portland for the day, so be sure to contact the organizer ahead of time to ensure you have a carpool arranged",
    blurb: "Visit Portland's best Coffee Shops",
    start: Time.new(2023, 2, 2, 2, 2, 2),
    end: Time.new(2023, 3, 3, 3, 3, 3),
    address: "Portland, OR",
    user_id: users[4].id
},
{
    title: "Stich and Bitch",
    description: "Come joing the Stich and Bitch Knitting Circle where we will in fact we stichin and bitchin",
    blurb: "Stich and Bitch Knitting Circle",
    start: Time.new(2023, 3, 3, 6, 0, 0),
    end: Time.new(2023, 3, 3, 7, 0, 0),
    address: "Portland, OR",
    user_id: users[5].id
}]) 

p "Created #{Event.count} events"