const emojipediaData = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.",
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.",
  },
  {
    id: 4,
    emoji: "😂",
    name: "Face With Tears of Joy",
    meaning:
      "I am laughing to hard that I am crying. That is so funny! The face is laughing to hard and is crying at the same time. It is overwhelmed with emotions.",
  },
];

const emojipedia = () => {
  var emojipediaTruncated = [];
  emojipediaData.map((emojipediaItem) => {
    var description =
      emojipediaItem.length < 100
        ? emojipediaItem.meaning
        : `${emojipediaItem.meaning.substring(0, 100)}...`;
    emojipediaTruncated.push({ description, ...emojipediaItem });
  });
  return emojipediaTruncated;
}

export default emojipedia;
