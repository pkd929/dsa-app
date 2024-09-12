const chapters = [
    {
        id: 1,
        topicId: 1,
        title: 'Introduction to DSA',
        videoUrl: 'https://www.youtube.com/watch?v=1yrh60og6qc',
        problems: [
            { name: 'Problem 1 Easy', url: 'https://leetcode.com/discuss/study-guide/2009997/How-to-get-started-with-DSA-and-practice-Leetcode-Efficiently' },
            { name: 'Problem 2 Medium', url: 'https://leetcode.com/explore/featured/card/leetcodes-interview-crash-course-data-structures-and-algorithms/706/stacks-and-queues/' },
            { name: 'Problem 3 Tough', url: 'https://leetcode.com/problems/sudoku-solver/description/?envType=problem-list-v2&envId=array' },
        ],
        resources: {
            youtube: 'https://www.youtube.com/watch?v=1yrh60og6qc',
            leetcode: 'https://leetcode.com/',
            article: 'https://www.sciencedirect.com/topics/computer-science/data-structure',
            difficulty: 'Easy',
        },
    },
    {
        id: 2,
        topicId: 2,
        title: 'Introduction to Data Base Management Systems',
        videoUrl: 'https://www.youtube.com/watch?v=1yrh60og6qc',
        problems: [
            { name: 'Problem 1 Easy', url: 'https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=array' },
            { name: 'Problem 2 Medium', url: 'https://leetcode.com/problems/3sum-closest/description/?envType=problem-list-v2&envId=array' },
            { name: 'Problem 3 Tough', url: 'https://leetcode.com/problems/sudoku-solver/description/?envType=problem-list-v2&envId=array' },
        ],
        resources: {
            youtube: 'https://www.youtube.com/watch?v=1yrh60og6qc',
            leetcode: 'https://leetcode.com/',
            article: 'https://www.sciencedirect.com/topics/computer-science/data-structure',
            difficulty: 'Easy',
        },
    },
    {
        id: 3,
        topicId: 3,
        title: 'Array ',
        videoUrl: 'https://www.youtube.com/watch?v=Dxu7GKtdbnA',
        problems: [
            { name: 'Problem 1 Easy', url: 'https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=array' },
            { name: 'Problem 2 Medium', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/?envType=problem-list-v2&envId=array' },
            { name: 'Problem 3 Tough', url: 'https://leetcode.com/problems/container-with-most-water/?envType=problem-list-v2&envId=array' },
        ],
        resources: {
            youtube: 'https://www.youtube.com/watch?v=1yrh60og6qc',
            leetcode: 'https://leetcode.com/',
            article: 'https://www.sciencedirect.com/topics/computer-science/data-structure',
            difficulty: 'Easy',
        },
    },
    {
        id: 4,
        topicId: 4,
        title: 'Introduction to String',
        videoUrl: 'https://www.youtube.com/watch?v=1yrh60og6qc',
        problems: [
            { name: 'Problem 1 Easy', url: 'https://leetcode.com/problems/roman-to-integer/description/?envType=problem-list-v2&envId=string' },
            { name: 'Problem 2 Medium', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=problem-list-v2&envId=string' },
            { name: 'Problem 3 Tough', url: 'https://leetcode.com/problems/regular-expression-matching/description/?envType=problem-list-v2&envId=string' },
        ],
        resources: {
            youtube: 'https://www.youtube.com/watch?v=1yrh60og6qc',
            leetcode: 'https://leetcode.com/',
            article: 'https://www.sciencedirect.com/topics/computer-science/data-structure',
            difficulty: 'Easy',
        },
    },
    {
        id: 5,
        topicId: 5,
        title: 'Two pointers',
        videoUrl: 'https://www.youtube.com/watch?v=1yrh60og6qc',
        problems: [
            { name: 'Problem 1 Easy', url: 'https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150' },
            { name: 'Problem 2 Medium', url: 'https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150' },
            { name: 'Problem 3 Tough', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150' },
        ],
        resources: {
            youtube: 'https://www.youtube.com/watch?v=1yrh60og6qc',
            leetcode: 'https://leetcode.com/',
            article: 'https://www.sciencedirect.com/topics/computer-science/data-structure',
            difficulty: 'Easy',
        },
    },
    {
        id: 6,
        topicId: 6,
        title: 'Introduction to Linklist',
        videoUrl: 'https://www.youtube.com/watch?v=1yrh60og6qc',
        problems: [
            { name: 'Problem 1 Easy', url: 'https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=array' },
            { name: 'Problem 2 Medium', url: 'https://leetcode.com/problems/3sum-closest/description/?envType=problem-list-v2&envId=array' },
            { name: 'Problem 3 Tough', url: 'https://leetcode.com/problems/sudoku-solver/description/?envType=problem-list-v2&envId=array' },
        ],
        resources: {
            youtube: 'https://www.youtube.com/watch?v=1yrh60og6qc',
            leetcode: 'https://leetcode.com/',
            article: 'https://www.sciencedirect.com/topics/computer-science/data-structure',
            difficulty: 'Easy',
        },
    },
    {
        id: 7,
        topicId: 7,
        title: 'Introduction to Graph',
        videoUrl: 'https://www.youtube.com/watch?v=1yrh60og6qc',
        problems: [
            { name: 'Problem 1 Easy', url: 'https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=array' },
            { name: 'Problem 2 Medium', url: 'https://leetcode.com/problems/3sum-closest/description/?envType=problem-list-v2&envId=array' },
            { name: 'Problem 3 Tough', url: 'https://leetcode.com/problems/sudoku-solver/description/?envType=problem-list-v2&envId=array' },
        ],
        resources: {
            youtube: 'https://www.youtube.com/watch?v=1yrh60og6qc',
            leetcode: 'https://leetcode.com/',
            article: 'https://www.sciencedirect.com/topics/computer-science/data-structure',
            difficulty: 'Easy',
        },
    },
    {
        id: 8,
        topicId: 8,
        title: 'Introduction to Binary',
        videoUrl: 'https://www.youtube.com/watch?v=1yrh60og6qc',
        problems: [
            { name: 'Problem 1 Easy', url: 'https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=array' },
            { name: 'Problem 2 Medium', url: 'https://leetcode.com/problems/3sum-closest/description/?envType=problem-list-v2&envId=array' },
            { name: 'Problem 3 Tough', url: 'https://leetcode.com/problems/sudoku-solver/description/?envType=problem-list-v2&envId=array' },
        ],
        resources: {
            youtube: 'https://www.youtube.com/watch?v=1yrh60og6qc',
            leetcode: 'https://leetcode.com/',
            article: 'https://www.sciencedirect.com/topics/computer-science/data-structure',
            difficulty: 'Easy',
        },
    },
];


export default chapters;
