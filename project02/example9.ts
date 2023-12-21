type PoemWithPages = { name: string; pages: number};
type PoenWithRhymes = { name: string; rhyme: boolean };

type Poem = PoemWithPages | PoenWithRhymes;

const poem: Poem = 
Math.random() > 0.5
 ? { name: "The Double Image", pages: }
 : { name: "Her Kind", rhyme: true }; 

poem.name

poem.rhyme
