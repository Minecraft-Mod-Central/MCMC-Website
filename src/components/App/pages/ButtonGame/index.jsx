import React from 'react'

export const ButtonGame = () => {
  const [counter, setCounter] = React.useState(localStorage.clickcount ? Number(localStorage.clickcount) : 1)
  const [text, setText] = React.useState('Davai, uzspied')

  const t = [
    'Malacis! Tā tik turpināt!',
    'Es zinu ka tu to vari!',
    'What the fuck are you doing with your life loser',
    'Tu saproti ka tu vnk spaidi pogu, right?',
    '...'
  ]

  console.log(t)

  React.useEffect(() => {
    console.log(counter)
    console.log(text)
    localStorage.clickcount = counter

    if (counter % 50 === 0 || text === 'Davai, uzspied') {
      console.log(t[(counter / 50) % t.length])
      setText(t[(counter / 50) % t.length])
    }
  }, [counter, text])

  const handleClick = () => setCounter(counter + 1)
  return (
    <>
      <h1>Tieši tā, paspaidi podziņu</h1>
      <h2>
        {counter} {text}
      </h2>
      <button onClick={handleClick}>Poga</button>
    </>
  )
}
