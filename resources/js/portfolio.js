// Close button functionality
$(".closeButton").click(() => {
    $(".closeButton .icon").toggleClass("active");
    $(".description").slideToggle(500);
});

// Exit button functionality
$(".exitButton").click(() => {
    $(".tip").removeClass("view");
});

// Projects data
const projects = [
    {
        namePlate: "Project 1",
        Project_Name:"portfolio",
        project_brief: "A portfolio is a collection showcasing an individual's skills, work, and achievements.Portfolios demonstrate qualifications and are used in various fields to highlight professional capabilities.",
        project_link: "http://www.project1.com",
        image: [
            "resources/img/portfolios/port1.png",
            "resources/img/portfolios/port2.png",
            "resources/img/portfolios/port3.png",
        ],
    },
    {
        namePlate: "Project 2",
        Project_Name:"trade watch list",
        project_brief: "A trade watch list is a tool used by investors and traders to monitor potential opportunities in financial markets. It consists of a list of securities, such as stocks, currencies, commodities, or indices, that are of interest for potential trading or investment. Traders often use watch lists to track price movements, market trends, and news related to specific assets.",
        project_link: "http://www.project1.com",
        image: [
            "resources/img/portfolios/port1.png",
            "resources/img/portfolios/port2.png",
            "resources/img/portfolios/port3.png",
        ],
    },
        {
            namePlate: "Project 3",
            Project_Name:"weather app",
            project_brief: "A weather app provides real-time weather information and forecasts. It typically shows current conditions like temperature, humidity, and wind speed, along with hourly and daily forecasts. Many apps also offer severe weather alerts, interactive maps with radar and satellite imagery, and additional details such as UV index, air quality, and sunrise/sunset times.",
            project_link: "http://www.project1.com",
            image: [
                "resources/img/portfolios/port1.PNG",
                "resources/img/portfolios/port 2.PNG",
                "resources/img/portfolios/port 3.PNG",
            ],
        },
        {
            namePlate: "Project 4",
            Project_Name:"Currency converter",
            project_brief: "Currency converter is a tool designed to allow users to convert amounts from one currency to another, using real-time exchange rates to ensure accuracy. It supports a wide range of global currencies, enabling users to input an amount in one currency and see its equivalent in another. This functionality is essential for travelers, businesses, and anyone engaging in financial transactions across different currencies.",
            project_link: "http://www.project1.com",
            image: [
                "resources/img/portfolios/port1.PNG",
                "resources/img/portfolios/port 2.PNG",
                "resources/img/portfolios/port 3.PNG",
            ],
        },
        {
            namePlate: "Project 5",
            Project_Name:"Tic Tac Toe",
            project_brief: "Tic Tac Toe is a classic two-player game played on a 3x3 grid. Each player takes turns marking a cell in the grid with their symbol, either X or O. The objective is to be the first to align three of one's symbols horizontally, vertically, or diagonally. The game begins with an empty grid, and players alternate turns until one achieves a winning alignment or all cells are filled, resulting in a draw if no player has won.",
            project_link: "http://www.project1.com",
            image: [
                "resources/img/portfolios/port1.PNG",
                "resources/img/portfolios/port 2.PNG",
                "resources/img/portfolios/port 3.PNG",
            ],
        },
        {
            namePlate: "Project 6",
            Project_Name:"envelope",
            project_brief: "An envelope is a flat, usually paper, container designed for holding a letter, card, or document. It typically has a rectangular shape and is sealed by folding a flap over the opening and securing it, often with adhesive. Envelopes come in various sizes and styles to accommodate different types of contents, such as business letters, greeting cards, or invitations",
            project_link: "http://www.project1.com",
            image: [
                "resources/img/portfolios/port1.PNG",
                "resources/img/portfolios/port 2.PNG",
                "resources/img/portfolios/port 3.PNG",
            ],
        },
        {
            namePlate: "Project 7",
            Project_Name:"Curd API",
            project_brief: "A Curd API (Create, Update, Read, Delete API) is a type of web service or endpoint that allows developers to perform basic operations on data stored in a database or system. It provides standardized methods for creating new records (Create), updating existing records (Update), retrieving records (Read), and deleting records (Delete). These APIs are fundamental for applications that need to manage and manipulate data dynamically.",
            project_link: "http://www.project1.com",
            image: [
                "resources/img/portfolios/port1.PNG",
                "resources/img/portfolios/port 2.PNG",
                "resources/img/portfolios/port 3.PNG",
            ],
        },
        {
            namePlate: "Project 8",
            Project_Name:"login page",
            project_brief: "A login page is a web page or screen within an application that allows users to authenticate themselves before gaining access to secured or personalized content.",
            project_link: "http://www.project1.com",
            image: [
                "resources/img/portfolios/port1.PNG",
                "resources/img/portfolios/port 2.PNG",
                "resources/img/portfolios/port 3.PNG",
            ],
        },
];

// Function to populate portfolio details
function portfolioView(object) {
    $(".tip .allContent .description .pro_intro .nameplate h1").text(object.namePlate);
    $(".tip .allContent .description .pro_intro .pro_name span").text(object.Project_Name);
    $(".tip .allContent .description .pro_intro .other_text p").text(object.project_brief);
    $(".tip .allContent .description .pro_info .link a").attr("href", object.project_link);

    let swiper_wrapper = $(".tip .swiper-container-2 .swiper-wrapper");
    swiper_wrapper.empty(); // Clear existing images

    object.image.forEach(imgSrc => {
        swiper_wrapper.append(`<div class="swiper-slide"><img src="${imgSrc}" alt="Project Image"></div>`);
    });

    // Initialize or update Swiper after adding images
    if (swiper_wrapper.children().length > 0) {
        // Initialize Swiper if not initialized
        if (!swiper_wrapper.hasClass("swiper-container-initialized")) {
            var swiper = new Swiper(".swiper-container-2", {
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 1,
                effect: "cube",
                cubeEffect: {
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                },
                spaceBetween: 50,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: true,
                },
            });
        } else {
            // Update Swiper if already initialized
            swiper.update();
        }
    }
}

// Handle click events on portfolio cards
$(".mix").click(function () {
    let index = $(this).data("index");
    let project = projects[index];

    portfolioView(project);
    $(".tip").addClass("view");
});

// Handle click events on about_nav buttons
$(".about_nav a").click(function () {
    $(".about_nav a").removeClass("active");
    $(this).addClass("active");
});
