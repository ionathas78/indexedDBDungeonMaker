const creaturesJSON = {
    "types": {
        "goblin": {     
            "description": "short, bipedal humanoid with long legs and gangly arms",
            "hair": [
                "red",
                "black",
                "amber",
                "golden",
                "blue",
                "purple",
                "emerald"
            ],
            "skin": [
                "pale",
                "green",
                "cyan",
                "orange",
                "yellow",
                "pink",
                "lavender"
            ],
            "names": [
                "Agin",
                "Baz",
                "Brux",
                "Cuvam",
                "Chesheen",
                "Dragnoz",
                "Drulgur",
                "Egvin",
                "Fnetz",
                "Glovo",
                "Gungner",
                "Holz",
                "Idrit",
                "Jolju",
                "Jungur",
                "Kafkin",
                "Leer",
                "Mlo",
                "Mrawiz",
                "Nwaz",
                "Ogro",
                "Ovrik",
                "Pulz",
                "Qakrat",
                "Ranzo",
                "Rugra",
                "Sklee",
                "Tlugri",
                "Ungwin",
                "Vrall",
                "Wongowit",
                "Xurt",
                "Yuvra",
                "Zailox"
            ],
            "min": 1,
            "max": 8
        },
        "faerie": {
            "description": "graceful humanoid with slender limbs and fair features",
            "hair": [
                "black",
                "silver",
                "white",
                "brown",
                "green",
                "golden"
            ],
            "skin": [
                "pale",
                "dark",
                "brown",
                "green",
                "yellow"
            ],
            "names": [
                "Aarie",
                "Aelyr",
                "Aiden",
                "Aria",
                "Aoma",
                "Aurie",
                "Bhera",
                "Chowna",
                "Dhari",
                "Eamon",
                "Eela",
                "Eiryn",
                "Enashi",
                "Eorys",
                "Euna",
                "Fera",
                "Giulie",
                "Hera",
                "Inid",
                "Ialie",
                "Ieva",
                "Iomis",
                "Iuna",
                "Ifil",
                "Jara",
                "Kiarie",
                "Lura",
                "Miari",
                "Neerie",
                "Oasha",
                "Oerie",
                "Ona",
                "Omera",
                "Oudan",
                "Phera",
                "Raista",
                "Shusa",
                "Theo",
                "Uther"
            ],
            "min": 1,
            "max": 3
        },
        "human": {
            "description": "bipedal humanoid with two arms and legs",
            "hair": [
                "blonde",
                "black",
                "tawny",
                "brown",
                "chestnut",
                "mousy",
                "red",
                "auburn",
                "orange",
                "midnight",
                "grey",
                "silver",
                "platinum",
                "golden",
                "sandy"
            ],
            "skin": [
                "pale",
                "fair",
                "tan",
                "brown",
                "dark",
                "black",
                "golden",
                "russet"
            ],
            "names": [
                "Arvin",
                "Bath",
                "Brenn",
                "Chana",
                "Corvil",
                "Davriel",
                "Esner",
                "Frollo",
                "Grys",
                "Hasner",
                "Iktis",
                "Jun",
                "Krez",
                "Lowden",
                "Mandor",
                "Meshka",
                "Mistal",
                "Nisk",
                "Olena",
                "Oslo",
                "Plo",
                "Riskan",
                "Sorazi",
                "Stazi",
                "Sumi",
                "Turas",
                "Urth",
                "Viona",
                "Wadris",
                "Xani",
                "Yadra",
                "Zilid"
            ],
            "min": 1,
            "max": 5
        },
        "skeleton": {
            "description": "shambling, decayed corpse with rancid bits of tissue clinging to gleaming bones",
            "hair": ["none"],
            "skin": ["none"],
            "names": null,
            "min": 1,
            "max": 16
        },
        "zombie": {
            "description": "animate, rotting corpse with decaying flesh sloughing off putrid muscles",
            "hair": [
                "clumped",
                "bloody",
                "patchy",
                "matted",
                "sticky",
                "dry",
                "dusty",
                "dirty",
                "filthy"
            ],
            "skin": [
                "blotchy",
                "splotchy",
                "scabrous",
                "pustulent",
                "green",
                "festering",
                "rotting",
                "grimy",
                "blood-soaked",
                "blistered"
            ],
            "names": null,
            "min": 1,
            "max": 12
        },
        "spider": {
            "description": "giant, eight-legged creature wreathed in sticky webs of silk",
            "hair": [
                "coarse",
                "fibrous",
                "black",
                "grey"
            ],
            "skin": [
                "tough",
                "thick",
                "hard"
            ],
            "names": [
                "Akra",
                "Azagan",
                "Calar",
                "Cuz",
                "Danag",
                "Dinia",
                "Elez",
                "Exra",
                "Gan",
                "Gyra",
                "Heki",
                "Hazas",
                "Igru",
                "Itura",
                "Juai",
                "Kroda",
                "Luthu",
                "Naka",
                "Oyaga",
                "Raya",
                "Susa",
                "Togana",
                "Ula",
                "Xusha",
                "Yeto",
                "Zuzu"
            ],
            "min": 1,
            "max": 4
        },
        "canine": {
            "description": "four-legged pack mammal with a long snout and sharp teeth",
            "hair": [
                "silver",
                "grey",
                "white",
                "black",
                "brown",
                "russet",
                "tan",
                "beige",
                "spotted",
                "patchy",
                "mangy"
            ],
            "skin": ["none"],
            "names": 
            [
                "wolf",
                "dog",
                "feral dog",
                "mastiff",
                "canid",
                "mutt",
                "hound",
                "jackal"
            ],
            "min": 1,
            "max": 6
        },
        "feline": {
            "description": "four-leggel mammalian predator with a long tail",
            "hair": [
                "black",
                "orange",
                "tan",
                "golden",
                "brown",
                "purple",
                "blue",
                "striped",
                "patchy",
                "mangy"
            ],
            "skin": ["none"],
            "names": [
                "cat",
                "puma",
                "cougar",
                "lion",
                "cheetah",
                "panther",
                "tiger",
                "wildcat",
                "bobcat",
                "cougar"
            ],
            "min": 1,
            "max": 2
        },
        "beetle": {
            "description": "giant insect with six legs and a hard shell",
            "hair": ["none"],
            "skin": ["none"],
            "names": [
                "fire beetle",
                "goliath beetle",
                "singing beetle",
                "spitting beetle",
                "frost beetle",
                "lightning beetle",
                "giant beetle"
            ],
            "min": 1,
            "max": 3
        },
        "bat": {
            "description": "nocturnal flying rodent that squeaks",
            "hair": [
                "brown",
                "black",
                "russet",
                "tan",
                "beige",
                "grey",
                "spotted",
                "striped",
                "mangy",
                "patchy"
            ],
            "skin": [
                "grey",
                "pink",
                "tan",
                "red",
                "brown",
                "pale",
                "white"
            ],
            "names": [
                "fruit bat",
                "grey bat",
                "cave bat",
                "tree bat",
                "silver bat",
                "vampire bat"
            ],
            "min": 1,
            "max": 50
        },
        "rat": {
            "description": "four-legged rodent with a long tail",
            "hair": [
                "brown",
                "black",
                "white",
                "grey",
                "red",
                "green",
                "blue",
                "splotchy",
                "mangy",
                "grimy",
                "patchy"
            ],
            "skin": [
                "grey",
                "pink",
                "white",
                "tan",
                "brown",
                "red",
                "pale",
                "black"
            ],
            "names": [
                "common rat",
                "plague rat",
                "grey rat",
                "hunter rat",
                "jumping rat"
            ],
            "min": 1,
            "max": 30
        },
        "giant rat": {
            "description": "mastiff-sized, four-legged rodent with a long tail",
            "hair": [
                "white",
                "black",
                "grey",
                "brown"
            ],
            "skin": [
                "pale",
                "grey",
                "white",
                "black"
            ],
            "names": null,
            "min": 1,
            "max": 12
        },
        "giant bat": {
            "description": "eagle-sized, nocturnal flying rodent that screams",
            "hair": [
                "white",
                "grey",
                "red"
            ],
            "skin": [
                "pale",
                "pink",
                "white"
            ],
            "names": null,
            "min": 1,
            "max": 12
        }







        
    }
}