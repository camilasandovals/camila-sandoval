import { useState } from "react"

export default function CardGrid({ item }) {
  const [showIngredients, setShowIngredients] = useState(false)

  return (
    <>
      <div key={item.id}>
        <img src={item.cover} height={420} width={420} />
        <h3>{item.name}</h3>
        <p>{item.about} min</p>
        <button onClick={() => setShowIngredients(!showIngredients)}>Ingredients</button>
        {showIngredients && (
          <div>
            {item.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </div>
        )}
      </div>
    </>
  )
}