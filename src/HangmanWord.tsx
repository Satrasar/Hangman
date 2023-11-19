type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
  }
  
  export function HangmanWord({
    guessedLetters,
    wordToGuess,
    reveal = false,
  }: HangmanWordProps) {
    return (
      <div
        style={{
          display: "flex",
          gap: ".25em",
          fontSize: "6rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontFamily: "monospace",
        }}
      >
        {wordToGuess.split("").map((letter, index) => (
          <span style={{ borderBottom: ".1em solid black" }} key={index} /* react say not to use the index as a actual key but in here index is the uniqe idenifier for our letter */>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible" //default olarak visible geliyor.
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    )
  }