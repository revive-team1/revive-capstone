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
    name: "Drink water",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RzB9iTwqcap4fvSWC5y-L8Uz9kOGZEOYsZSKsZLDXW6gStgWZkXgXALLE-O43kmQiwc&usqp=CAUç",
    description: "Drink 72oz of water",
    article_url:
      "https://www.hsph.harvard.edu/nutritionsource/water/#:~:text=The%20National%20Academy%20of%20Medicine,exposed%20to%20very%20warm%20climates.",
  },
  {
    name: "Get sunlight",
    imgUrl: "https://sites.uci.edu/morningsignout/files/2021/08/Sunny-science.jpg",
    description: "Get 10-30 mins of sunlight per day",
    article_url:
      "https://www.healthline.com/nutrition/vitamin-d-from-sun#:~:text=Regular%20sun%20exposure%20is%20the,your%20skin%20is%20to%20sunlight.",
  },
  {
    name: "Regular exercise",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWR0nU22XW4OZUHtGcq5kx2hwTLg5pth8Nw&usqp=CAU",
    description: "Walk at least 30 minutes a day",
    article_url:
      "https://walkwithadoc.org/join-a-walk/why-walk/?gad_source=1&gclid=Cj0KCQiAn-2tBhDVARIsAGmStVlXrTu_H0byRakGVV4G6SPZ8D2FzeVKhY0wyOk7RrI2odkWc_we5g0aAlFCEALw_wcB",
  },
  {
    name: "Meditate",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JhJ37yidT3uCieBWDW9a1rV-yXcYdc6-rA&usqp=CAU",
    description: "Take a few minutes to relax and breathe.",
    article_url:
      "https://www.consequenceofhabit.org/meditation?gad_source=1&gclid=Cj0KCQiAn-2tBhDVARIsAGmStVkL1rIX1WGERteiauR5COWZcYo3jyaie5X4dX-IkSMtteVMg1Gy4CAaAh0AEALw_wcB",
  },
  {
    name: "Read",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCnXSpA47kRzV2vC37xC35ggu5nLPE3RhIMKVc_E3HFkYfoMB3Almo5y_pr-TSyd0ZFI&usqp=CAU",
    description: "Grab a book and read.",
    article_url:
      "https://rw-c.org/reading-habits/?gad_source=1&gclid=Cj0KCQiAn-2tBhDVARIsAGmStVmLE6b44Jbkm7_9q6b1R9ac-nHMxRCSTFzWqWlr8pCb_5u93Ahp3AIaApmLEALw_wcB",
  },
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
