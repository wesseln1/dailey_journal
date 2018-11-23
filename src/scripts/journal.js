const journalEntries = [
  {
      date: "10/22/2018",
      concept: "Array methods",
      entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
      mood: "Ok",
  },

  {
      date: "10/24/2018",
      concept: "Funtions and Logic",
      entry: "Today we discussed funtions and logic. We went over how to write functions as well as the logic in a functions. Functions can also include for loops and forEach loops.",
      mood: "Happy, Happy, Happy!",
  },

  {
      date: "10/29/2018",
      concept: "Using and fetching data",
      entry: "We got to see how to use and call an API for larager amaounts of data. We also got to learn how to make a fecth to the API.",
      mood: "Wonderful"
  },
  {
      date: "11/05/2018",
      concept: "Posting data to database",
      entry: "I understood post method more then get a fetch. Pretty simple to understand.",
      mood: "Happy, Happy, Happy"
  }

]

/*
  Purpose: To create, and return, a string template that
  represents a single journal entry object as HTML
  Arguments: journalEntry (object) */
let journalEntry = journalEntries
const makeJournalEntryComponent = (journalEntry) => {
  return `
    <div id="journalEntry">
      <h2>${journalEntry.concept}</h2>
      <h3>${journalEntry.date}</h3>
      <p>${journalEntry.entry}</p>
      <p>${journalEntry.mood}</p>
    </div>`
}


// This function iterates over and inserts my entries into the DOM
const myJournalEntries = (entries) => {
  journalEntry.forEach((i) => {
    document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(i)
  })
}

// Invoke the render function
myJournalEntries(journalEntries)
