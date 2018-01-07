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
        text: "The Donkest Dungeon",
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
              "a donk dungeon. Hobling up from your decrepit position, you look up " +
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
        keyToStoryBlock: "Unphased",
      },
    ],
  },  
  { key: "Unphased",
    width: 530,
    textElements: [
      { key: key++,
        text: "Unphased by the occurence, you look ahead to a large chasm. The shoe is resting " +
              "on the opposite end, next to the mossy stone slab it had flung into." +
              "To your right there is a small cavern dug into the brick. From this angle " +
              "it is hard to tell how deep the passageway goes. " +
              "To your left there is an uninteresting wall.",
      },
    ],
    navElements: [
      { key: key++,
        text: "Into The Small Cavern",
      	keyToStoryBlock: "SmallCavern",
      },
      { key: key++,
        text: "Jump The Chasm",
        keyToStoryBlock: "Jump",
      },
      { key: key++,
        text: "Look At Wall",
        keyToStoryBlock: "LookAtWall",
      }
    ],
  },
  { key: "SmallCavern",
    width: 120,
    textElements: [
      { key: key++,
        text: "The Small Cavern",
        style: "bold",
        newline: true,
      },
      { key: key++,
        text: "You're in a small cavern.",
      }
    ],
    navElements: [
      { key: key++,
        text: "Climb Back Out",
        keyToStoryBlock: "Unphased",
      },
    ],
  },
  { key: "Jump",
    textElements: [
      { key: key++,
        text: "You jump.",
      }
    ],
    navElements: [
      { key: key++,
        text: "\u{25BC}",
        keyToStoryBlock: "OnSecondThought",
      },
    ],
  },
  {
    key: "OnSecondThought",
    width: 530,
    textElements: [
      { key: key++,
        text: "On second thought, that chasm looks pretty dang deep. " +
              "You decide to wait for further confidence to bestow strength upon your legs.",
      },
    ],
    navElements: [
      { key: key++,
        text: "\u{25BC}",
        keyToStoryBlock: "ItNeverComes",
      },
    ],
  },
  {
    key: "ItNeverComes",
    textElements: [
      { key: key++,
        text: "It never comes",
      },
    ],
    navElements: [
      { key: key++,
        text: "\u{25BC}",
        keyToStoryBlock: "Unphased",
      },
    ],
  },
  { key: "LookAtWall",
    textElements: [
      { key: key++,
        text: "You stare at the wall.",
        newline: true,
      },
      { key: key++,
        text: "It is uninteresting.",
      }
    ],
    navElements: [
      { key: key++,
        text: "\u{25BC}",
        keyToStoryBlock: "Unphased",
      }
    ]
  }
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
