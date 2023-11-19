const KAFA = ( 
  <div style= {{
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    border: "10px solid black",
    position: "absolute",
    top: "50px",
    right: "-30px"
  }}/>
)

const VUCUT = ( 
    <div style= {{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "0px"
    }}/>
  )

  const SAG_KOL = ( 
    <div style= {{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}/>
  )
  
  const SOL_KOL = ( 
    <div style= {{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}/>
  )

  const SAG_BACAK = ( 
    <div style= {{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}/>
  )

  const SOL_BACAK = ( 
    <div style= {{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}/>
  )

  const VUCUT_BOLUMLERI = [KAFA, VUCUT, SAG_KOL, SOL_KOL, SAG_BACAK, SOL_BACAK]
  type HangmanDrawingProps = {
    numberOfGuesses : number
  }
export function HangmanDrawing({numberOfGuesses} : HangmanDrawingProps) {
    return( <div style={{ position:"relative" }}/*en altakki yan cizgi */>
       {VUCUT_BOLUMLERI.slice(0, numberOfGuesses) /* we are gonna start in 0 index and get the elements up to numberOfGuesses  */} 
        <div style={{
                height:"50px",
                width:"10px", 
                background:"black",
                marginLeft: "120px", //usteki minik dikey cizgi
                top: "0",
                right:"0",
                position: "absolute",

             }}/>
        <div style={{
                height:"10px",
                width:"200px", 
                background:"black",
                marginLeft: "120px", //usteki yan cizgi
             }}/>
            <div style={{
                height:"400px",
                width:"10px", 
                background:"black",
                marginLeft: "120px", //250/2=125 10/2=5 125-5=120px -> ortadaki cizgi
             }}/>
            <div style={{height:"10px", width:"250px", background:"black"}}  /*en usteki duz ciginin style i*/ /> 
    </div>
    )
}
