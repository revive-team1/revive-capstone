const exercises = [
    {
        name: 'Jumping Jacks',
        description: 'jump in jack',
        difficulty: 'beginner',
        imgUrl: 'https://www.spotebi.com/wp-content/uploads/2014/10/jumping-jacks-exercise-illustration.jpg'
    },

    {
        name: 'Reverse Lunge',
        description: 'facing forward, step backward with one foot and lower your hips until the front thigh is parallel to the ground, then push back to the starting position.', 
        difficulty: 'beginner',
        imgUrl: 'no-image.jpeg'
    },

    {
        name: 'Burpee', 
        description: 'dropping to a squat, kicking the feet back to a plank position, doing a push-up, returning to the squat, and jumping up with arms overhead.',
        difficulty: 'intermediate',
        imgUrl: 'no-image.jpeg'
    },

    {
        name: 'Cleans',
        description: 'start by standing over the barbell with your feet shoulder-width apart, bending at the hips and knees while keeping your back straight to grip the bar slightly wider than shoulder width. Explosively lift the barbell by extending your hips and knees, keeping the bar close to your body, and as the bar reaches your thighs, shrug your shoulders and pull yourself under the bar, catching it at shoulder level with elbows forward. Finally, stand up straight by extending your hips and knees to the full upright position, completing the clean.',
        difficulty: 'high-level',
        imgUrl: 'no-image.jpeg'
    },

    {
        name: 'Pull Ups',
        description: 'hang from a pull-up bar with your hands slightly wider than shoulder-width apart, then pull yourself up until your chin is over the bar, and lower yourself back down with control.',
        difficulty: 'intermediate',
        imgUrl: 'no-image.jpeg'
    }
]

const users = [
    {firstname: 'Cheyenne',
        lastname: 'P',
        username: 'Cheyenne',
        password: 'password1',
        email: 'user1@gmail.com'
    },
    {firstname: 'Sophie',
        lastname: 'S',
        username: 'Sophie',
        password: 'password2',
        email: 'user2@gmail.com'
    },
    {firstname: 'Caroline',
        lastname: 'T',
        username: 'Caroline',
        password: 'password3',
        email: 'user3@gmail.com'
    },
    {firstname: 'Melissa',
        lastname: 'C',
        username: 'Melissa',
        password: 'password4',
        email: 'user4@gmail.com'
    },
]

const selfcare = [
    {
        name: 'Drink water',
        description: 'Drink 72oz of water',
        article_url: 'https://www.hsph.harvard.edu/nutritionsource/water/#:~:text=The%20National%20Academy%20of%20Medicine,exposed%20to%20very%20warm%20climates.'
    },
    {
        name: 'Get sunlight',
        description: 'Get 10-30 mins of sunlight per day',
        article_url: 'https://www.healthline.com/nutrition/vitamin-d-from-sun#:~:text=Regular%20sun%20exposure%20is%20the,your%20skin%20is%20to%20sunlight.'
    },
    {
        name: 'Exercise',
        description: 'Walk 30 minutes a day',
        article_url: 'https://walkwithadoc.org/join-a-walk/why-walk/?gad_source=1&gclid=Cj0KCQiAn-2tBhDVARIsAGmStVlXrTu_H0byRakGVV4G6SPZ8D2FzeVKhY0wyOk7RrI2odkWc_we5g0aAlFCEALw_wcB'
    },
    {
        name: 'Meditate',
        description: 'Take a few minutes to relax and breathe.',
        article_url: 'https://www.consequenceofhabit.org/meditation?gad_source=1&gclid=Cj0KCQiAn-2tBhDVARIsAGmStVkL1rIX1WGERteiauR5COWZcYo3jyaie5X4dX-IkSMtteVMg1Gy4CAaAh0AEALw_wcB'
    },
    {
        name: 'Read',
        description: 'Grab a book and read.',
        article_url: 'https://rw-c.org/reading-habits/?gad_source=1&gclid=Cj0KCQiAn-2tBhDVARIsAGmStVmLE6b44Jbkm7_9q6b1R9ac-nHMxRCSTFzWqWlr8pCb_5u93Ahp3AIaApmLEALw_wcB'
    }
]

const recipes = [
    {
        name: "Peanut Butter & Jelly Sandwich",
        difficulty: "Easy",
        recipe_yield: 2,
        imgUrl: "no-image.jpeg",
        description: "Two pieces of bread, peanut butter, and jelly."

    },
    {
        name: "Salad",
        difficulty: "Medium",
        recipe_yield: 4,
        imgUrl: "no-image.jpeg",
        description: "Chopped lettuce, tomatoes, and cucumbers with dressing."  
    },
    {
        name: "Grilled Cheese",
        difficulty: "Medium",
        recipe_yield: 1,
        imgUrl: "no-image.jpeg",
        description: "Two pieces of cheese in between two pieces of bread, heated on stove until bread is browned and cheese is melted."  
    },
    {
        name: "Buttered Noodles",
        difficulty: "Easy",
        recipe_yield: 4,
        imgUrl: "no-image.jpeg",
        description: "Cooked noodles with butter."  
    },
    {
        name: "Pizza",
        difficulty: "Hard",
        recipe_yield: 1,
        imgUrl: "no-image.jpeg",
        description: "Pizza crust with tomato sauce and cheese."  
    }
]

const calendar = [ 
    {
        user_id: 1,
        activity_date: "02/30/2024",
        activity_name: "Cook breakfast",
        activity_time: "10:00am",
        activity_description: "making a spanish omelet",
        activity_link: "https://www.youtube.com/watch?v=epIdjMaHa_w"
    }
       
    
]

const favoriteRecipes = [
    {
        user_id: 1,
        recipe_id: 2,
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
    }

]

const favoriteExercises = [
    {
        user_id: 1,
        exercise_id: 2,
    },
    {
        user_id: 2, 
        exercise_id: 3,
    },
    {
        user_id: 3,
        exercise_id: 4,
    },
    {
        user_id: 4,
        exercise_id: 5,
    }

]

module.exports= { exercises, users, selfcare, recipes, calendar, favoriteRecipes, favoriteExercises }