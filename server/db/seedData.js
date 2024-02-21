const exercises = [
  {
    name: "Jumping Jacks",
    description: "jump in jack",
    imgUrl:
      "no-image.jpeg",
    difficulty: "beginner",
  },

  {
    name: "Reverse Lunge",
    description:
      "facing forward, step backward with one foot and lower your hips until the front thigh is parallel to the ground, then push back to the starting position.",
    imgUrl: "no-image.jpeg",
    difficulty: "beginner",
  },

  {
    name: "Burpee",
    description:
      "dropping to a squat, kicking the feet back to a plank position, doing a push-up, returning to the squat, and jumping up with arms overhead.",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },

  {
    name: "Cleans",
    description:
      "start by standing over the barbell with your feet shoulder-width apart, bending at the hips and knees while keeping your back straight to grip the bar slightly wider than shoulder width. Explosively lift the barbell by extending your hips and knees, keeping the bar close to your body, and as the bar reaches your thighs, shrug your shoulders and pull yourself under the bar, catching it at shoulder level with elbows forward. Finally, stand up straight by extending your hips and knees to the full upright position, completing the clean.",
    imgUrl: "no-image.jpeg",
    difficulty: "high-level",
  },

  {
    name: "Pull Ups",
    description:
      "hang from a pull-up bar with your hands slightly wider than shoulder-width apart, then pull yourself up until your chin is over the bar, and lower yourself back down with control.",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Bear Crawls",
    description:
      "to be filled...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Dumbbell Renegade Row",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Wall-Sit",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "beginner",
  },
  {
    name: "Single Leg Hops",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "beginner",
  },
  {
    name: "Pistol Squat",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "high-level",
  },
  {
    name: "Push-Ups",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "beginner",
  },
  {
    name: "Step Ups",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Skater",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Two Arm Row",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Cable Pull Down",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Bicep Curl",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Glute Bridges",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "beginner",
  },
  {
    name: "Bulgarian Split Squat",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Back Fly",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Dips",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Bench Press",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Shoulder External Rotation",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Shoulder Internal Rotation",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Lateral Raise",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Curtsy Lunge",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Goblet Squat",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
  {
    name: "Leg Extension",
    description:
      "blah blah...",
    imgUrl: "no-image.jpeg",
    difficulty: "intermediate",
  },
];

const users = [
  {
    firstname: "Cheyenne",
    lastname: "P",
    username: "Cheyenne",
    password: "password1",
    email: "user1@gmail.com",
  },
  {
    firstname: "Sophie",
    lastname: "S",
    username: "Sophie",
    password: "password2",
    email: "user2@gmail.com",
  },
  {
    firstname: "Caroline",
    lastname: "T",
    username: "Caroline",
    password: "password3",
    email: "user3@gmail.com",
  },
  {
    firstname: "Melissa",
    lastname: "C",
    username: "Melissa",
    password: "password4",
    email: "user4@gmail.com",
  },
];

const selfCare = [
  {
    name: "Drink water regularly",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RzB9iTwqcap4fvSWC5y-L8Uz9kOGZEOYsZSKsZLDXW6gStgWZkXgXALLE-O43kmQiwc&usqp=CAUç",
    description: "Drinking 72oz of water a day for women or 104oz of water a day for men is generally suggested to maintain a healthly level of hydration",
    article_url:
      "https://www.hsph.harvard.edu/nutritionsource/water/#:~:text=The%20National%20Academy%20of%20Medicine,exposed%20to%20very%20warm%20climates.",
  },
  {
    name: "Get sunlight everday",
    imgUrl: "https://sites.uci.edu/morningsignout/files/2021/08/Sunny-science.jpg",
    description: "Getting 10-30 mins of sunlight per day gives you your daily dose of vitamin D and can lead to stronger bones and a better nights sleep",
    article_url:
      "https://www.healthline.com/nutrition/vitamin-d-from-sun#:~:text=Regular%20sun%20exposure%20is%20the,your%20skin%20is%20to%20sunlight.",
  },
  {
    name: "Get regular exercise",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWR0nU22XW4OZUHtGcq5kx2hwTLg5pth8Nw&usqp=CAU",
    description: "Walking at least 30 minutes a day or getting 150 minutes of aerobic activity a week offers several health benefits but can also just be fun and social",
    article_url:
      "https://walkwithadoc.org/join-a-walk/why-walk/?gad_source=1&gclid=Cj0KCQiAn-2tBhDVARIsAGmStVlXrTu_H0byRakGVV4G6SPZ8D2FzeVKhY0wyOk7RrI2odkWc_we5g0aAlFCEALw_wcB",
  },
  {
    name: "Meditate each day",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JhJ37yidT3uCieBWDW9a1rV-yXcYdc6-rA&usqp=CAU",
    description: "Take a few minutes a day to relax and unwind whenever you have some spare time",
    article_url:
      "https://www.consequenceofhabit.org/meditation?gad_source=1&gclid=Cj0KCQiAn-2tBhDVARIsAGmStVkL1rIX1WGERteiauR5COWZcYo3jyaie5X4dX-IkSMtteVMg1Gy4CAaAh0AEALw_wcB",
  },
  {
    name: "Enjoy a book",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCnXSpA47kRzV2vC37xC35ggu5nLPE3RhIMKVc_E3HFkYfoMB3Almo5y_pr-TSyd0ZFI&usqp=CAU",
    description: "Reading a book can help reduce stress, improve memory and even help you get a better nights sleep",
    article_url:
      "https://rw-c.org/reading-habits/?gad_source=1&gclid=Cj0KCQiAn-2tBhDVARIsAGmStVmLE6b44Jbkm7_9q6b1R9ac-nHMxRCSTFzWqWlr8pCb_5u93Ahp3AIaApmLEALw_wcB",
  },
  {
    name: "Get adequate sleep",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxO6zHQMjcHT6AX7NhYah2gBs_juJuCIWrg&usqp=CAU",
    description: "Gettting a steady eight hours of sleep each night can help improve mood and energy throughout the day",
    article_url: "https://newsinhealth.nih.gov/2013/04/benefits-slumber#:~:text=Throughout%20the%20night%2C%20your%20heart,can%20affect%20your%20body%20weight.",
  },
  {
    name: "Healthy meal prep",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDjKh-_cq1wkumDJvrasOmW-HtykmzCHLyw&usqp=CAU",
    description: "Eating healthy is for more than just self-control. It can help improve your energy in your day to day and offer numerous health benefits",
    article_url: "https://www.hsph.harvard.edu/nutritionsource/meal-prep/",
  },
  {
    name: "Spend time with friends",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37uLP4nMYTIZ3SHaJeduk6_gi3HOXOySkVg&usqp=CAU",
    description: "Spending time with your friends or family can help relieve stress and improve mood",
    article_url: "https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/friendships/art-20044860",
  },
  {
    name: "Start a morning routine",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CC-L5_tYyjyoFnJWqE9p3op3qHcjHMVCSQ&usqp=CAU",
    description: "Taking time to develop a morning routine for yourself can help you start the day off right, alleviate stress and be more productive throughout the day",
    article_url: "https://www.verywellmind.com/morning-routine-4174576#:~:text=The%20morning%20routine%20helps%20us,%2C%20ultimately%2C%20increase%20our%20productivity.",
  },
  {
    name: "Find a new playlist or podcast",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8SNwiiX--nJ_QjyH958blr4u6k6g36pWZg&usqp=CAU",
    description: "Incorporating music into your daily routine can help improve memory and make you feel more centered and grounded",
    article_url: "https://www.chnola.org/news-blog/2023/april/world-music-therapy-week-how-to-incorporate-musi/",
  },
  {
    name: "Donate your time",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSEzUH-AwKSM7oqLBOlERQraOxPSe3pejag&usqp=CAU",
    description: "Giving back to others can not only help ohers but can also help improve your self-esteem and satisfaction in life",
    article_url: "https://www.ef.com/wwen/blog/efacademyblog/importance-giving-back-to-your-community/",
  },
  {
    name: "Pamper yourself",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNcrm-dFpK4thmuPHr06xu8gxKsXXI1ytaw&usqp=CAU",
    description: "Taking a moment to pamper yourself periodically can increase happiness and even physical health",
    article_url: "https://www.tomsofmaine.com/good-matters/healthy-feeling/how-pampering-yourself-makes-you-healthier",
  },
  {
    name: "Plan a getaway",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykfm0tz0EWTAYX3vVyJgHw-L0YYMmzjtXnQ&usqp=CAU",
    description: "Taking the time to plan a getaway can allow you to keep yourself physically and mentally fit and healthy",
    article_url: "https://whyttmagazine.com/all/reasons-why-travel-is-an-essential-form-of-self-care#:~:text=It%20helps%20to%20keep%20you%20physically%20and%20mentally%20fit%20and%20healthy&text=Whatever%20it%20is%2C%20travel%20acts,remain%20as%20healthy%20as%20possible.",
  },
  {
    name: "Take a new class",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUe1XBTDJp77pgAAyHz4bAwh4B0Y_v8qUrTA&usqp=CAU",
    description: "Dealing with stress is complicated, but learning something new can have significant mental health benefits such as making your brain healthier and creating healthier habits",
    article_url: "https://tutor.id/blog/learning-as-self-care/",
  },
  {
    name: "Start a journal",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_7f26y1YKgR6s55E55GDrjv32yw_m5o1Bw&usqp=CAU",
    description: "Starting a journal can help you work through things going on in your life and help you become more self-aware",
    article_url: "https://dayoneapp.com/blog/self-care-journal/",
  },
  {
    name: "Start a nighttime routine",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6mz8dvsI2INfMTMJvJ5cysQADQoZszs3uQ&usqp=CAU",
    description: "Developing a nighttime can help you unwind from hectic day and lead to a more restful and higher-quality sleep",
    article_url: "https://familyserviceregina.com/create-a-nighttime-routine-for-better-mental-health/",
  },
  {
    name: "Breathe essential oils",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rQDg6MxCkH0xTcTQbG7a90zFk-lW96PZmw&usqp=CAU",
    description: "Using essential oils in differnt situations can have many positive benefits such as boosting your mood or improving job performance by reducing stress and anxiety",
    article_url: "https://health.clevelandclinic.org/essential-oils-101-do-they-work-how-do-you-use-them",
  },
  {
    name: "Take a relaxing bath",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_5Mj9cMzufZDGQYOtZZ33hM5Xrl2JPIjOQ&usqp=CAU",
    description: "Putting some time aside to take a bath can improve your mental and emotional health by taking your mind off things that might be negatively affecting you",
    article_url: "https://health.clevelandclinic.org/reasons-to-take-a-bath",
  }
];

const recipes = [
  {
    name: "Quinoa Salad",
    difficulty: "Medium",
    recipe_yield: 8,
    imgUrl: "https://cookieandkate.com/images/2017/08/best-quinoa-salad-recipe-3.jpg",
    description: "Boil water and rinse 1 cup quinoa. Cook quinoa uncovered until all water is absorbed. Remove from heat and cover, letting it rest for 5 minutes. Combine 1 can chickpeas, 1 chopped cucumber, 1 chopped red bell pepper, 3/4 cup chopped red onion, and a cup of parsley in a large bowl. Combine 1/4 cup olive oil, 1/4 cup lemon juice, 1 tablespoon red wine vinegar, 2 cloves minced garlic, and salt in a small bowl. When quinoa is cool, toss with vegetables and dressing. Season with salt and pepper to taste.  (Recipe by cookieandkate.com)",
  },
  {
    name: "Grilled Salmon with Asparagus",
    difficulty: "Easy",
    recipe_yield: 4,
    imgUrl: "https://hips.hearstapps.com/del.h-cdn.co/assets/16/21/1600x900/hd-aspect-1464200367-delish-grilled-salmon-foil-pack.jpg?resize=1200:*",
    description: "On foil, place asparagus and top with 2 salmon fillet, a tablespoon of butter and 2 lemon slices. Loosely wrap in the foil and heat on the grill until salmon is cooked through, about 10 minutes. Garnish with dill, and salt and pepper to taste. (Recipe by delish.com)",
  },
  {
    name: "Vegetarian Stir-Fry",
    difficulty: "Medium",
    recipe_yield: 4,
    imgUrl: "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-2.jpg",
    description:
      "Slice carrots, broccoli florets, baby corn, and red peppers. In a skillet, add oil and the sliced vegetables, cooking them for about 3 minutes or until the vegetables are tender. Add butter, 3 garlic cloves, and 2 teaspoons of ginger, then cook until fragrant. In a separate bowl, combine a quarter cup of chicken broth, half a teaspoon of cornstarch, 3 tablespoons of low sodium soy sauce, and 2 tablespoons of honey. Adding a quarter teaspoon of hot sauce is optional. Pour the stir fry sauce over the vegetables and stir. Cook for 3-4 more minutes until sauce is thick and vegetables are tender. (Recipe from natashaskitchen.com)",
  },
  {
    name: "Mango Avocado Salsa",
    difficulty: "Easy",
    recipe_yield: 5,
    imgUrl: "https://natashaskitchen.com/wp-content/uploads/2016/06/Mango-Avocado-Salsa-Recipe-7.jpg",
    description: "Dice a mango and an avocado. Finely chop 1/2 a red onion and 1/2 a bunch of fresh cilantro. In a medium bowl, combine the mango, avocado, red onion, and cilantro. Squeeze 2 tablespoons of lime juice over the top, toss gently to combine, then serve and enjoy. (Recipe from natashaskitchen.com)",
  },
  {
    name: "Quinoa Stuffed Bell Peppers",
    difficulty: "Medium",
    recipe_yield: 6,
    imgUrl: "https://feelgoodfoodie.net/wp-content/uploads/2017/03/Quinoa-Stuffed-Peppers-12.jpg",
    description: "Rinse 1 cup quinoa and drain. In a medium saucepan, boil quinoa in 2 cups vegetable broth. Lower heat to simmer and cover saucepan. Cook about 15 minutes until all liquid is absorbed and then let rest for 5 minutes, still covered. Preheat oven to 375 F. Cut the peppers in half lengthwise, removing the seeds and membrane, then place in a baking dish cut side up. Pour enough water around the peppers to cover the bottom of the pan. In a skillet over medium heat, sauté onions in olive oil until they soften, then add 2 cloves minced garlic and cook until fragrant. Stir in cooked quinoa, 15oz canned diced tomatoes, 15oz canned black beans, and 1 cup corn. Season with1 teaspoon cumin, 1 teaspoon paprika, salt and pepper. Reduce heat to low, cooking for 5 more minutes and stirring frequently. Spoon mixture into sliced peppers, sprinkling cheese over the top. Bake uncovered for about 30-35 minutes. Serve hot. (Recipe from feelgoodfoodie.net)",
  },
  {
    name: "Greek Yogurt Parfait",
    difficulty: "Easy",
    recipe_yield: 1,
    imgUrl: "https://foolproofliving.com/wp-content/uploads/2017/12/Greek-Yogurt-Parfait-Recipe.jpg",
    description: "Mix 3/4 cup Greek yogurt with 1 tablespoon honey or maple syrup until combined. Place half of the yogurt at the bottom of a jar or bowl. Top off yogurt layer with half of the 1/4 cup berries and granola. Cover with the rest of the yogurt and top off with the rest of the fruit and granola. Finish off with a drizzle of honey and serve. (Recipe from foolproofliving.com)",
  },
  {
    name: "Roasted Vegetable Medley",
    difficulty: "Medium",
    recipe_yield: 6,
    imgUrl: "https://www.allrecipes.com/thmb/rrplCGJkonMYNIkhRtw1NrXKEww=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/165649roasted-vegetable-medley-DDMFS-001-4x3-f9c51738278e4c92aa53d51250f4ed10.jpg",
    description: "Gather 1 yam, 1 parsnip, 1 cup of baby carrots, 1 zucchini, 1 bunch fresh asparagus, 1/2 cup of red peppers,, 1/4 cup basil, 2 cloves garlic, salt and pepper. Preheat oven to 425 F and grease two baking sheets with 1/2 tablespoon of olive oil. Wash and dice yam and parsnip, then place onto the baking sheets with baby carrots. Bake for 30 minutes, then add washed and diced zucchini as well as the asparagus. Drizzle with 1 tablespoon of olive oil and continue baking until vegetables are tender (about 30 more minutes) then remove from oven and allow to cool 30 minutes. Toss roasted peppers with the basil, garlic, salt and pepper then add the roasted vegetables and toss to mix. (Recipe from allrecipes.com)",
  },
  {
    name: "Baked Chicken Breast",
    difficulty: "Medium",
    recipe_yield: 4,
    imgUrl: "https://thestayathomechef.com/wp-content/uploads/2019/12/Easy-Lemon-Herb-Baked-Chicken-Breast-7.jpg",
    description: "Place boneless, skinless chicken breasts in a gallon sized resealable bag and pour in 1/2 cup lemon juice, 2 tablespoons olive oil, 2 teaspoons lemon pepper, 1 teaspoon dried basil, 1 teaspoon dried oregano, and 1/4 teaspoon salt. Let marinate from anywhere between 30 minutes and 8 hours. Preheat oven to 450 F and place chicken in a 9x13 pan, discarding any remaining marinade. Top chicken with lemon slices and cook for 18-20 minutes until the chicken has reached an internal temperature of 165 F. Serve hot and garnish with fresh parsley. (Recipe from thestayathomechef.com)",
  },
  {
    name: "Sweet Potato Burrito Bowl",
    difficulty: "Hard",
    recipe_yield: 4,
    imgUrl: "https://eatwithclarity.com/wp-content/uploads/2020/05/burrito-bowl-6.jpg",
    description: "Preheat oven to 400 F. Peel and chop sweet potato then add to a bowl with with 1 tablespoon of olive oil, 1 teaspoon paprika, 1/2 teaspoon garlic powder, and 1/2 teaspoon of salt. Slice onion and peppers into thin strips. Add sweet potato, onions and peppers to baking tray lined with parchment paper and drizzle with a teaspoon of olive oil. Bake for 30 minutes. During final 5 minutes, drain a can of black beans then sauté them in a pan with 1 teaspoon of chili powder and salt. Remove veggies from the oven. Top a bowl of rice with the vegetables and beans, as well as a cup of cooked corn and avocado slices. For the dressing, whisk together a 1/2 cup of tahini, 1/4 cup of water, 1-2 tablespoons hot sauce, 1/2 a teaspoon of garlic powder, lemon juice, and salt. Drizzle on top and enjoy. (Recipe from eatwithclarity.com)",
  },
  {
    name: "Spinach and Feta Stuffed Chicken",
    difficulty: "Hard",
    recipe_yield: 4,
    imgUrl: "https://feelgoodfoodie.net/wp-content/uploads/2017/03/Spinach-_-Feta-Stuffed-Chicken-11.jpg",
    description: "Preheat oven to 400 F. Pat chicken dry with a paper towel and make a horizontal slit in the thickest part of the breast to create a pocket. Do not cut all the way through. In a bowl, combine 2 teaspoons paprika, 1 teaspoon oregano, 1 teaspoon garlic powder, 1/2 teaspoon of onion powder, 1/2 teaspoon salt, and 1/4 teaspoon pepper. Use the mixture to season both sides of the chicken. In another bowl. combine 5 oz chopped spinach, 1/2 crumbled feta, 1/4 cup ricotta, 2 tablespoons chopped scallions, 2 cloves minced garlic, and 1/2 teaspoon dried dill. Stuff mixture evenly into the chicken breast pocket and use toothpicks to close each pocket. In a large oven-safe skillet, sear chicken in olive oil until lightly golden brown (about 3-4 minutes per side), then transfer skillet into the oven to bake for 15-18 minutes. (Recipe from feelgoodfoodie.net)",
  },
  {
    name: "Chickpea and Vegetable Curry",
    difficulty: "Hard",
    recipe_yield: 6,
    imgUrl: "https://www.cookwithmanali.com/wp-content/uploads/2021/09/Vegetable-Chickpea-Coconut-Curry-500x500.jpg",
    description: "In a pot, heat oil on medium heat, add 1.5 inches chopped ginger, 1/2 a jalapeño chopped, and 1 medium red onion, chopped. Cook until onion softens, then stir in 14.5oz can of diced tomatoes.  Cover the pot with a. lid and let cook for 4-5 minutes on medium heat. Next, add 1 teaspoon of coriander powder, 1/2 teaspoon cumin powder, 1/2 teaspoon smoked paprika, 1/2 teaspoon turmeric and a dash of salt.Stir and cook one more minute.Add 2 cups cauliflower florets, 1 and 1/4 cup diced sweet potatoes, and a 15.5 oz can of chickpeas (drained). Stir until everything is well coated with spices. Add a cup of water and a 13.5 oz can of coconut milk. Stir, cover, and let cook for 10 minutes, stirring occasionally. Remove lid and add 1 red pepper, sliced. Cover again and let simmer for 5 minutes. Add 1 tablespoon of chopped cilantro and squeeze in fresh lime juice from 1/2 a lime.Turn off heat and sprinkle in 1/4 teaspoon of garam masala. Serve with rice of your choice. (Recipe from cookwithmanali.com)",
  },
  {
    name: "Shrimp and Broccoli Stir-Fry",
    difficulty: 'Medium',
    recipe_yield: 4,
    imgUrl: "https://feelgoodfoodie.net/wp-content/uploads/2021/09/Shrimp-_-Broccoli-Stir-Fry-11.jpg",
    description: "In a small bowl, whisk together 3 tablespoons soy sauce, 1 tablespoon rice wine vinegar, 1 tablespoon dark brown sugar, 1 tablespoon toasted sesame oil, 2 teaspoons Sriracha, 2 teaspoons cornstarch, 4 large cloves of garlic(grated), 1 knob of ginger(grated), and the juice of 1 lime.Set aside.Pat shrimp dry with a paper towel and season with salt and pepper.In a large skillet, heat 1 tablespoon of olive oil on high heat.Add broccoli florets from 1 head of broccoli and most of the chopped scallions from one bunch of scallions(save some for serving).When lightly charred, lower heat to medium high and add 1 tablespoon of oil.Add shrimp and cook until they are pink and cooked through, about 3 - 4 minutes.Add in the soy sauce mixture, toss with shrimp, broccoli, and scallions, and cook until sauce has thickened.Remove from heat, garnish with remaining scallions, and serve over brown rice. (Recipe from feelgoodfoodie.net)",
  },
  {
    name: "Mushroom and Spinach Quiche",
    difficulty: 'Medium',
    recipe_yield: 6,
    imgUrl: "https://www.eatingwell.com/thmb/uGsXYzeLLpq9eYyFK_aWGkqNTas=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SpinachMushroomQuiche_103-1-21192c2554ac4c4697280ce26874b835.jpg",
    description: "Preheat oven to 375 F and coat a 9 - inch pie pan with cooking spray.In a large nonstick skillet over medium high heat, add 2 tablespoons extra virgin olive oil.Cook 8 ounces of fresh sliced mushrooms until browned and tender.Add 1.5 cups sliced sweet onion and 1 tablespoon thinly sliced garlic then stir.Cook until softened and tender then add 5 ounces of coarsely chopped fresh baby spinach and cook until wilted.Remove from heat.Whisk 6 large eggs, 1 / 4 cups whole milk, 1 / 4 cup half and half, 1 tablespoon dijon mustard, 1 tablespoon fresh thyme, and 1 / 4 teaspoon of salt and pepper in a large bowl.Fold in 1.5 cups shredded gruyere cheese and the mushroom mixture.Spoon all ingredients into the prepared pie pan and bake about 30 minutes until golden brown.Let stand for 10 minutes before slicing, garnishing with thyme and serving. (Recipe from eatingwell.com)",
  },
  {
    name: 'Green Soup',
    difficulty: "Medium",
    recipe_yield: 6,
    imgUrl: "https://www.gimmesomeoven.com/wp-content/uploads/2018/02/Green-Goddess-Soup-with-Broccoli-Cauliflower-and-Spinach-3.jpg",
    description: "Chop 1 onion and 2 cloves garlic.In a large saucepan, soften the onion and garlic in 2 tablespoons olive oil.Add 4 cups low sodium chicken broth, 2 cups of broccoli cut into florets, and 2 cups fresh asparagus, chopped.Bring to a boil and simmer uncovered for 15 minutes.Add 4 cups of fresh spinach and simmer for one minute.In a blender, puree the soup until it is smooth then strain it.Add Better than Bouillon to taste and a 1 / 2 cup of half and half.Heat through and enjoy."
  },
{
    name: 'Tomato Watermelon Gazpacho',
    difficulty: 'Medium',
    recipe_yield: 12,
    imgUrl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/1/FNM_090112-Tomato-and-Watermelon-Gazpacho-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371606900127.jpeg",
    description: "Chop 4 medium tomatoes, 1 peeled cucumber, and 1 shallot.Dice 4 cups of seedless watermelon.In a blender, add the tomatoes, watermelon, cucumber, shallot, 1 / 3 cup basil and mint along with 1.5 teaspoons of salt and pepper.Add 1 / 3 cup extra virgin olive oil and 2 tablespoons champagne vinegar.Puree in a blender then strain through a fine mesh sieve into a bowl, pressing to extract any liquid; discard the solids and season with salt and pepper.Cover and refrigerate until chilled, about 1 hour.To serve, top the soup with a drizzle of olive oil and small mint and basil leaves."
  }
];

const calendars = [
  {
    user_id: 1,
    activity_date: "02/28/2024",
    activity_name: "Cook breakfast",
    activity_time: "10:00am",
    activity_description: "making a spanish omelet",
    activity_link: "https://www.youtube.com/watch?v=epIdjMaHa_w",
  },
];

const favoriteRecipes = [
  {
    user_id: 1,
    recipe_id: 2,
  },
  {
    user_id: 1,
    recipe_id: 4,
  },
  {
    user_id: 2,
    recipe_id: 3,
  },
  {
    user_id: 3,
    recipe_id: 4,
  },
  {
    user_id: 4,
    recipe_id: 5,
  },
];

const workouts = [
  {
    workout_name: "Full Body Endurance", 
    workout_description: 'Perform 2-3 rounds of each superset. Fully complete the 2-3 rounds of a superset before moving on to the next superset. Each exercise within a superset will be anywhere from 8-12 reps. If something is for time, it will be noted in the exercise. There are 3 Supersets within this workout, which means you will be hitting 9 rounds total. After each exercise rest for 30-60 seconds.'
  },
  {
    workout_name: "Pull Workout",
    workout_description: 'Perform 2-3 rounds of each superset. Fully complete the 2-3 rounds of a superset before moving on to the next superset. Each exercise within a superset will be anywhere from 8-12 reps. If something is for time, it will be noted in the exercise. There are 3 Supersets within this workout, which means you will be hitting 9 rounds total. After each exercise rest for 30-60 seconds.'
  },
  {
    workout_name: "Push Workout",
    workout_description: 'Perform 2-3 rounds of each superset. Fully complete the 2-3 rounds of a superset before moving on to the next superset. Each exercise within a superset will be anywhere from 8-12 reps. If something is for time, it will be noted in the exercise. There are 3 Supersets within this workout, which means you will be hitting 9 rounds total. After each exercise rest for 30-60 seconds.'
  },
];

const workoutExercises = [
  {
    workout_id: 1,
    exercises: [6, 7, 8, 9, 10, 11, 12, 13]
  },
  {
    workout_id: 2,
    exercises: [5, 14, 15, 16, 17, 18, 2, 19]
  },
  {
    workout_id: 3,
    exercises: [20, 21, 22, 23, 24, 25, 26, 27]
  }
]

const favoriteWorkoutExercises = [
  {
    user_id: 1,
    workout_id: 2,
  },
  {
    user_id: 1,
    workout_id: 1,
  },
  {
    user_id: 2,
    workout_id: 3,
  },
  {
    user_id: 3,
    workout_id: 2,
  },
  {
    user_id: 4,
    workout_id: 1,
  },
];

const favoriteSelfCare = [
  {
    user_id: 1,
    selfCare_id: 2,
  },
  {
    user_id: 1,
    selfCare_id: 4,
  },
  {
    user_id: 2,
    selfCare_id: 3,
  },
  {
    user_id: 3,
    selfCare_id: 4,
  },
  {
    user_id: 4,
    selfCare_id: 5,
  },
];

module.exports = {
  exercises,
  users,
  selfCare,
  recipes,
  calendars,
  workouts,
  favoriteRecipes,
  favoriteWorkoutExercises,
  favoriteSelfCare, 
  workoutExercises
};
