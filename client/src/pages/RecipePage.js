import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipePage() {
  const { documentId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/recipes?populate=*&filters[documentId][$eq]=${documentId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length > 0) {
          setRecipe(data.data[0]);
        } else {
          setRecipe(null);
        }
      })
      .catch((err) => console.error('Error fetching recipe:', err));
  }, [documentId]);

  if (!recipe) {
    return <p style={{ padding: '2rem' }}>Loading recipe...</p>;
  }

  console.log('Recipe:', recipe);
  console.log('Recipe image:', recipe.image);
  

  let imageUrl = null;
  const imageData = recipe.image;
  if (Array.isArray(imageData) && imageData.length > 0 && imageData[0]?.formats) {
    imageUrl = imageData[0].formats?.medium?.url || imageData[0].url;
  } 
  const steps = recipe.steps?.[0]?.children || [];

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: 'auto' }}>
      <h1>{recipe.Title}</h1>

      {imageUrl && (
        <img
          src={`http://localhost:1337${imageUrl}`}
          alt={recipe.Title}
          style={{ width: '100%', borderRadius: '8px', margin: '1rem 0' }}
        />
      )}

      <p style={{ fontStyle: 'italic', color: '#666' }}>
        👨‍🍳 Uploaded by: {recipe.uploader || 'Unknown'}
      </p>

      <h3>Description:</h3>
      <p>{recipe.description || 'No description provided.'}</p>

      <h3>Ingredients:</h3>
      <pre style={{ background: '#f6f6f6', padding: '1rem' }}>
        {recipe.ingredients?.[0]?.children
          ?.map((child) => child.text)
          .join('') || 'No ingredients listed.'}
      </pre>

      <h3>Steps:</h3>
      <ol>
        {steps.map((stepBlock, index) =>
          stepBlock.children?.map((item, i) => (
            <li key={`${index}-${i}`} style={{ marginBottom: '0.5rem' }}>
              {item.text}
            </li>
          ))
        )}
      </ol>
    </div>
  );
}

export default RecipePage;

