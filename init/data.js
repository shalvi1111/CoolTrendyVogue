const SampleProducts = [
    
        {
          "title": "Classic White T-Shirt",
          "description": "A timeless white t-shirt made from 100% organic cotton. Soft, breathable, and perfect for everyday wear.",
          "image": "https://unsplash.com/photos/a-woman-standing-next-to-a-window-with-her-hand-on-her-head-f_3lWARmMOE",
          "price": 25.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Denim Jacket",
          "description": "A rugged denim jacket with a vintage wash and comfortable fit. Ideal for layering in cooler weather.",
          "image": "https://www.istockphoto.com/photo/beautiful-woman-gm1383833466-443512279",
          "price": 65.00,
          "sizes": ["M", "L", "XL"]
        },
        {
          "title": "Floral Summer Dress",
          "description": "Light and breezy summer dress featuring a vibrant floral pattern. Perfect for warm days and casual outings.",
          "image": "https://unsplash.com/photos/woman-walking-on-road-m5fyTKffvAw",
          "price": 45.00,
          "sizes": ["XS", "S", "M"]
        },
        {
          "title": "Black Slim Fit Jeans",
          "description": "Sleek and stylish slim fit jeans with just the right amount of stretch. Great for casual or smart-casual outfits.",
          "image": "https://unsplash.com/photos/a-woman-standing-in-front-of-a-large-industrial-building-CR0VdYuxauU",
          "price": 50.00,
          "sizes": ["S", "M", "L", "XL", "XXL"]
        },
        {
          "title": "Leather Ankle Boots",
          "description": "High-quality leather ankle boots with a durable sole and modern design. Perfect for day-to-night looks.",
          "image": "https://unsplash.com/photos/brown-leather-lace-up-boots-PdO0sdaLcdw",
          "price": 120.00,
          "sizes": [6, 7, 8, 9, 10]
        },
        {
          "title": "Cozy Knit Sweater",
          "description": "A chunky knit sweater made from a wool blend. It’s warm, comfortable, and ideal for chilly days.",
          "image": "https://unsplash.com/photos/woman-in-gray-sweater-uAfjZu--U2g",
          "price": 40.00,
          "sizes": ["S", "M", "L"]
        },
        {
          "title": "Graphic Hoodie",
          "description": "Comfortable oversized hoodie featuring a bold graphic print on the front. Made from premium cotton.",
          "image": "https://www.istockphoto.com/photo/blank-hooded-sweatshirt-mockup-with-zipper-in-front-side-and-back-views-gm1354548867-429339829?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhoodie&utm_medium=affiliate&utm_source=unsplash&utm_term=hoodie%3A%3Areduced-affiliates%3Aquarter",
          "price": 35.00,
          "sizes": ["M", "L", "XL"]
        },
        {
          "title": "Plaid Button-Up Shirt",
          "description": "A classic plaid button-up shirt that’s perfect for casual wear or a night out.",
          "image": "plaid-shirt.jpg",
          "price": 30.00,
          "sizes": ["M", "L", "XL", "XXL"]
        },
        {
          "title": "Red Midi Skirt",
          "description": "A vibrant red midi skirt with a pleated design. Made for casual or dressy occasions.",
          "image": "red-midi-skirt.jpg",
          "price": 45.00,
          "sizes": ["XS", "S", "M", "L"]
        },
        {
          "title": "High-Waisted Shorts",
          "description": "High-waisted denim shorts with a frayed hem. Perfect for summer days.",
          "image": "high-waisted-shorts.jpg",
          "price": 30.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Basic Black Leggings",
          "description": "Stretchy and comfortable black leggings that are ideal for workouts or casual wear.",
          "image": "black-leggings.jpg",
          "price": 20.00,
          "sizes": ["XS", "S", "M", "L", "XL"]
        },
        {
          "title": "Trench Coat",
          "description": "A stylish trench coat with a belted waist and button closure. A classic piece for any wardrobe.",
          "image": "trench-coat.jpg",
          "price": 90.00,
          "sizes": ["M", "L", "XL"]
        },
        {
          "title": "Vintage Band T-Shirt",
          "description": "A soft cotton t-shirt featuring a vintage band logo. Perfect for music lovers.",
          "image": "band-tshirt.jpg",
          "price": 25.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Linen Shorts",
          "description": "Lightweight linen shorts with a relaxed fit. Ideal for warm weather and casual days.",
          "image": "linen-shorts.jpg",
          "price": 35.00,
          "sizes": ["S", "M", "L"]
        },
        {
          "title": "Polka Dot Blouse",
          "description": "A chic blouse with a polka dot print and a relaxed fit. Perfect for the office or casual outings.",
          "image": "polka-dot-blouse.jpg",
          "price": 40.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Cargo Pants",
          "description": "Comfortable and durable cargo pants with multiple pockets. A functional and stylish option for outdoor activities.",
          "image": "cargo-pants.jpg",
          "price": 55.00,
          "sizes": ["M", "L", "XL", "XXL"]
        },
        {
          "title": "Checked Wool Coat",
          "description": "A checked wool coat with a tailored fit. A warm and fashionable outerwear option for the colder months.",
          "image": "checked-coat.jpg",
          "price": 100.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Sport Joggers",
          "description": "Lightweight and comfortable joggers made from breathable fabric. Ideal for workouts or lounging.",
          "image": "sport-joggers.jpg",
          "price": 45.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Wrap Dress",
          "description": "A flowy wrap dress with a flattering fit. Suitable for casual or semi-formal events.",
          "image": "wrap-dress.jpg",
          "price": 50.00,
          "sizes": ["S", "M", "L"]
        },
        {
          "title": "Bomber Jacket",
          "description": "A classic bomber jacket with a modern fit. Great for layering during cool evenings.",
          "image": "bomber-jacket.jpg",
          "price": 70.00,
          "sizes": ["M", "L", "XL", "XXL"]
        },
        {
          "title": "Striped Maxi Skirt",
          "description": "A flowing maxi skirt with a striped design. Perfect for casual or beach days.",
          "image": "striped-maxi-skirt.jpg",
          "price": 40.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Leather Belt",
          "description": "A classic leather belt with a metal buckle. A versatile accessory for any wardrobe.",
          "image": "leather-belt.jpg",
          "price": 25.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Puffer Vest",
          "description": "A lightweight puffer vest that adds warmth without bulk. Great for layering during cooler weather.",
          "image": "puffer-vest.jpg",
          "price": 60.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Cotton Pajama Set",
          "description": "Soft and breathable cotton pajama set with a relaxed fit. Perfect for a cozy night's sleep.",
          "image": "pajama-set.jpg",
          "price": 35.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Faux Fur Coat",
          "description": "A luxurious faux fur coat with a full-length design. Stay warm and stylish during the winter.",
          "image": "faux-fur-coat.jpg",
          "price": 110.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Leather Gloves",
          "description": "Elegant leather gloves with a soft lining. A sophisticated accessory for cold weather.",
          "image": "leather-gloves.jpg",
          "price": 45.00,
          "sizes": ["S", "M", "L"]
        },
        {
          "title": "Denim Overalls",
          "description": "Casual and comfortable denim overalls with adjustable straps. A stylish choice for everyday wear.",
          "image": "denim-overalls.jpg",
          "price": 55.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Turtleneck Sweater",
          "description": "A cozy turtleneck sweater with a relaxed fit. Ideal for layering during the colder months.",
          "image": "turtleneck-sweater.jpg",
          "price": 40.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Wide-Leg Trousers",
          "description": "Chic wide-leg trousers with a high waist and relaxed fit. Great for both formal and casual looks.",
          "image": "wide-leg-trousers.jpg",
          "price": 50.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Embroidered Tunic",
          "description": "A boho-inspired tunic with detailed embroidery. A perfect statement piece for your wardrobe.",
          "image": "embroidered-tunic.jpg",
          "price": 55.00,
          "sizes": ["S", "M", "L"]
        },
        {
          "title": "Biker Leather Jacket",
          "description": "A classic biker leather jacket with metal accents and a slim fit. Adds edge to any outfit.",
          "image": "biker-jacket.jpg",
          "price": 150.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Chunky Sneakers",
          "description": "Bold and comfortable chunky sneakers with a unique design. Perfect for streetwear looks.",
          "image": "chunky-sneakers.jpg",
          "price": 90.00,
          "sizes": [6, 7, 8, 9, 10]
        },
        {
          "title": "Off-Shoulder Blouse",
          "description": "A feminine off-shoulder blouse with delicate ruffle details. Ideal for summer outings.",
          "image": "off-shoulder-blouse.jpg",
          "price": 35.00,
          "sizes": ["S", "M", "L"]
        },
        {
          "title": "Fitted Blazer",
          "description": "A tailored blazer with a modern fit. Perfect for both office wear and smart-casual occasions.",
          "image": "fitted-blazer.jpg",
          "price": 80.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Skinny Jeans",
          "description": "Slim-fit skinny jeans with a classic five-pocket design. A versatile staple for any wardrobe.",
          "image": "skinny-jeans.jpg",
          "price": 45.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Sequin Party Dress",
          "description": "A dazzling sequin party dress with a fitted silhouette. Perfect for special occasions.",
          "image": "sequin-dress.jpg",
          "price": 95.00,
          "sizes": ["S", "M", "L"]
        },
        {
          "title": "Sports Bra",
          "description": "A high-impact sports bra with moisture-wicking fabric. Perfect for workouts or yoga.",
          "image": "sports-bra.jpg",
          "price": 30.00,
          "sizes": ["S", "M", "L"]
        },
        {
          "title": "Printed Swim Shorts",
          "description": "Quick-drying swim shorts with a vibrant tropical print. Perfect for beach vacations.",
          "image": "swim-shorts.jpg",
          "price": 35.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Cashmere Scarf",
          "description": "A luxurious cashmere scarf that’s soft to the touch. A timeless accessory for any outfit.",
          "image": "cashmere-scarf.jpg",
          "price": 70.00,
          "sizes": ["One Size"]
        },
        {
          "title": "Silk Camisole",
          "description": "A delicate silk camisole with a relaxed fit. Perfect for layering or wearing on its own.",
          "image": "silk-camisole.jpg",
          "price": 55.00,
          "sizes": ["S", "M", "L"]
        },
        {
          "title": "High-Waisted Bikini Set",
          "description": "A retro-inspired high-waisted bikini set with a flattering fit. Perfect for poolside lounging.",
          "image": "bikini-set.jpg",
          "price": 50.00,
          "sizes": ["S", "M", "L"]
        },
        {
          "title": "Bohemian Maxi Dress",
          "description": "A flowy bohemian maxi dress with a bold print. Great for festivals or summer days.",
          "image": "boho-maxi-dress.jpg",
          "price": 65.00,
          "sizes": ["S", "M", "L", "XL"]
        },
        {
          "title": "Denim Skirt",
          "description": "A casual denim skirt with a button-up front. Perfect for pairing with t-shirts and sandals.",
          "image": "denim-skirt.jpg",
          "price": 35.00,
          "sizes": ["S", "M", "L"]
        }
      ]
      


 module.exports = {data : SampleProducts}