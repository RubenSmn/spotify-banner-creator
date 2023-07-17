const allSolidList = [
  "adjust",
  "ambulance",
  "american-sign-language-interpreting",
  "anchor",
  "ankh",
  "apple-alt",
  "archive",
  "archway",
  "atlas",
  "atom",
  "award",
  "baby",
  "baby-carriage",
  "backward",
  "bacon",
  "bahai",
  "balance-scale",
  "band-aid",
  "baseball-ball",
  "basketball-ball",
  "bath",
  "battery-empty",
  "battery-full",
  "bed",
  "beer",
  "bell",
  "bell-slash",
  "bible",
  "bicycle",
  "biking",
  "binoculars",
  "biohazard",
  "birthday-cake",
  "blind",
  "bolt",
  "bomb",
  "bone",
  "bong",
  "book",
  "bookmark",
  "book-reader",
  "brain",
  "bread-slice",
  "broom",
  "brush",
  "bug",
  "building",
  "bullhorn",
  "bullseye",
  "bus-alt",
  "calendar-alt",
  "camera",
  "camera-retro",
  "campground",
  "candy-cane",
  "cannabis",
  "capsules",
  "car",
  "carrot",
  "cat",
  "cheese",
  "chess",
  "chess-bishop",
  "chess-king",
  "chess-knight",
  "chess-pawn",
  "chess-queen",
  "chess-rook",
  "child",
  "church",
  "city",
  "clock",
  "cloud-download-alt",
  "cloud-moon",
  "cloud-rain",
  "cloud-sun",
  "cloud-upload-alt",
  "cocktail",
  "code",
  "code-branch",
  "coffee",
  "comment",
  "comments",
  "compact-disc",
  "compass",
  "concierge-bell",
  "cookie",
  "couch",
  "cross",
  "crosshairs",
  "crow",
  "crown",
  "crutch",
  "cube",
  "cut",
  "dharmachakra",
  "dice",
  "dice-one",
  "dice-six",
  "divide",
  "dna",
  "dog",
  "dollar-sign",
  "dolly",
  "dot-circle",
  "dove",
  "dragon",
  "dumbbell",
  "dumpster",
  "dungeon",
  "egg",
  "envelope",
  "equals",
  "ethernet",
  "euro-sign",
  "eye",
  "eye-slash",
  "fan",
  "fast-backward",
  "fast-forward",
  "faucet",
  "feather",
  "female",
  "fill-drip",
  "film",
  "fire",
  "fire-extinguisher",
  "fish",
  "fist-raised",
  "flag",
  "flag-checkered",
  "flask",
  "football-ball",
  "forward",
  "frog",
  "futbol",
  "gamepad",
  "gas-pump",
  "gem",
  "ghost",
  "gift",
  "glass-cheers",
  "glass-martini-alt",
  "glass-whiskey",
  "glasses",
  "globe",
  "globe-africa",
  "globe-americas",
  "globe-asia",
  "globe-europe",
  "golf-ball",
  "gopuram",
  "graduation-cap",
  "guitar",
  "hamburger",
  "hammer",
  "hamsa",
  "hand-lizard",
  "hand-middle-finger",
  "hand-peace",
  "hand-point-down",
  "hand-point-up",
  "hand-rock",
  "hand-scissors",
  "hand-sparkles",
  "hand-spock",
  "handshake",
  "hanukiah",
  "hard-hat",
  "hashtag",
  "hat-cowboy",
  "hat-wizard",
  "headphones-alt",
  "heart",
  "heartbeat",
  "helicopter",
  "highlighter",
  "hiking",
  "hippo",
  "history",
  "hockey-puck",
  "home",
  "horse",
  "horse-head",
  "hospital",
  "hot-tub",
  "hotdog",
  "hotel",
  "hourglass",
  "hryvnia",
  "ice-cream",
  "icicles",
  "igloo",
  "image",
  "infinity",
  "jedi",
  "joint",
  "journal-whills",
  "kaaba",
  "key",
  "keyboard",
  "khanda",
  "kiwi-bird",
  "landmark",
  "language",
  "laptop",
  "leaf",
  "lemon",
  "life-ring",
  "lightbulb",
  "location-arrow",
  "lock",
  "lock-open",
  "magic",
  "magnet",
  "mail-bulk",
  "male",
  "map",
  "map-marked-alt",
  "map-marker-alt",
  "map-pin",
  "map-signs",
  "marker",
  "mars",
  "mars-double",
  "mars-stroke",
  "mars-stroke-h",
  "mars-stroke-v",
  "mask",
  "medal",
  "medkit",
  "menorah",
  "mercury",
  "meteor",
  "microchip",
  "microphone",
  "microphone-alt",
  "microphone-alt-slash",
  "microscope",
  "mitten",
  "mobile-alt",
  "monument",
  "moon",
  "mortar-pestle",
  "mosque",
  "motorcycle",
  "mug-hot",
  "music",
  "newspaper",
  "oil-can",
  "om",
  "otter",
  "paint-brush",
  "paint-roller",
  "palette",
  "pallet",
  "paper-plane",
  "paperclip",
  "parachute-box",
  "parking",
  "pastafarianism",
  "paw",
  "peace",
  "pen",
  "pepper-hot",
  "percent",
  "person-booth",
  "phone",
  "pizza-slice",
  "place-of-worship",
  "plane",
  "plug",
  "podcast",
  "poo",
  "poop",
  "pound-sign",
  "power-off",
  "pray",
  "praying-hands",
  "puzzle-piece",
  "quidditch",
  "rainbow",
  "record-vinyl",
  "recycle",
  "republican",
  "restroom",
  "retweet",
  "ribbon",
  "road",
  "robot",
  "rocket",
  "route",
  "running",
  "satellite",
  "satellite-dish",
  "school",
  "seedling",
  "shapes",
  "shield-alt",
  "ship",
  "shipping-fast",
  "shoe-prints",
  "shopping-bag",
  "shower",
  "shuttle-van",
  "sign",
  "sign-language",
  "signal",
  "skating",
  "skiing",
  "skiing-nordic",
  "skull-crossbones",
  "sleigh",
  "smog",
  "snowboarding",
  "snowflake",
  "snowman",
  "snowplow",
  "soap",
  "socks",
  "solar-panel",
  "spa",
  "space-shuttle",
  "spider",
  "splotch",
  "spray-can",
  "star",
  "star-and-crescent",
  "star-of-david",
  "star-of-life",
  "stethoscope",
  "sticky-note",
  "stopwatch",
  "store",
  "strikethrough",
  "stroopwafel",
  "subway",
  "suitcase",
  "suitcase-rolling",
  "sun",
  "swimming-pool",
  "synagogue",
  "table-tennis",
  "tablet-alt",
  "tags",
  "tape",
  "taxi",
  "temperature-high",
  "temperature-low",
  "terminal",
  "theater-masks",
  "thumbs-down",
  "thumbs-up",
  "tint",
  "tint-slash",
  "toilet-paper",
  "toolbox",
  "tools",
  "tooth",
  "torah",
  "torii-gate",
  "tractor",
  "trailer",
  "train",
  "tram",
  "transgender",
  "trash-alt",
  "tree",
  "trophy",
  "truck",
  "truck-loading",
  "truck-monster",
  "truck-moving",
  "truck-pickup",
  "tshirt",
  "tty",
  "tv",
  "umbrella",
  "umbrella-beach",
  "university",
  "user-friends",
  "utensil-spoon",
  "utensils",
  "venus",
  "venus-double",
  "venus-mars",
  "video",
  "vihara",
  "voicemail",
  "volleyball-ball",
  "volume-down",
  "volume-mute",
  "volume-off",
  "volume-up",
  "walking",
  "wallet",
  "warehouse",
  "water",
  "wave-square",
  "wheelchair",
  "wifi",
  "wine-bottle",
  "wine-glass",
  "wrench",
  "yen-sign",
  "yin-yang",
];

export default allSolidList;
