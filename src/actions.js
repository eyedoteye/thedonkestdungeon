var key = 0;
var storyBlocksDB = [
  { key: "Start",
  	width: 420,
    textElements: [
      { key: key++,
        text: "You have found yourself within,",
        style: "italic",
      },
      { key: key++,
        text: "The Dankest Dungeon",
        style: "superbold",
        newline: true,
      },
    ],
    navElements: [
      { key: key++,
        text: String.fromCharCode(parseInt(4036993683,16)),
      	keyToStoryBlock: 'MustyFloor',
      },
    ],
  },
  { key: "MustyFloor",
    width: 530,
    textElements: [
      { key: key++,
        text: "The floor is musty, the air is moist. Yup, this is definitely " +
              "a dank dungeon. Hobling up from your decrepit position, you look up " +
              "at the unfortunate hole you must have fallen through. Your composure regained, " +
              "you point upwards with the muster of a thousand soaring eagles and beseech, ",
      },
      { key: key++,
        text:  "\"That hole, is the hole, that I have fallen in through.\"",
        style: "bold",
        newline: true,
      },
    ],
    navElements: [
      { key: key++,
        text: "\u{25BC}",
        keyToStoryBlock: 'KeenlyAware',
      },
    ],
  },
  { key: "KeenlyAware",
    width: 660,
    textElements: [
      { key: key++,
        text: "Your smug feeling of keen awareness is shortly " +
              "disposed of by the sudden",
      },
      { key: key++,
        text: "thump, flunk, whoopash",
        style: "italic",
      },
      { key: key++,
        text: "of a falling shoe flinging off " +
              "your shoulder and rocketing off into the distance.",
      },
    ],
    navElements: [
      { key: key++,
        text: "\u{25BC}",
        keyToStoryBlock: 'SomethingIncredible',
      },
    ],
  },
  { key: "SomethingIncredible",
    textElements: [
      { key: key++,
        text: "Something truly incredible has occured.",
      },
    ],
    navElements: [
      { key: key++,
        text: "\u{25BC}",
        keyToStoryBlock: "BeautifulRocket"
      },
    ],
  },  
  { key: "BeautifulRocket",
    textElements: [
      { key: key++,
        text: "You have turned into a beautiful rocket ship.",
      },
    ],
    navElements: [
      { key: key++,
        text: "\u{25BC}",
      	keyToStoryBlock: "ShoeConcerns"
      },
    ],
  },
  { key: "ShoeConcerns",
    width: 620,
    textElements: [
      { key: key++,
        text: "Author's Note:",
        style: "bold"
      },
      { key: key++,
        text: "My dear reader, I am concerned about your intentions." +
              " I must ask you a question, and I urge you to please respond honestly." +
              " There are.. there are certain things at stake here." +
              " Certain.. important things.. and if I could further italicize important, trust me," +
              " I would.",
        style: "italic",
        newline: true,
      },
      { key: key++,
        text: "When you find that shoe, what will you do?",
        style: "italic",
      },
    ],
    navElements: [
      { key: key++,
        text: "Eat The Shoe",
        keyToStoryBlock: "ShoeConcerns"
      },
      { key: key++,
        text: "Do Not Eat The Shoe",
        keyToStoryBlock: "ShoeConcerns"
      },
      { key: key++,
        text: "Punch The Shoe",
        keyToStoryBlock: "ShoeConcerns"
      },
      { key: key++,
        text: "There Is No Shoe",
        keyToStoryBlock: "ShoeConcerns"
      },
    ],
  },
]

var sbkey = 0;
export const getStoryBlock = (key) => {
	let storyBlock = storyBlocksDB.find(t => t.key === key);
	if (storyBlock !== undefined) {
		return {
			...storyBlock,
			id: sbkey++,
      key: sbkey++,
      disabled: false
		};
	}
	throw new Error("Story Block with key: \""+key+"\" does not exist.");
}