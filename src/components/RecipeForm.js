import React, { useState } from 'react'
import recipePlaceholder from '../assets/RecipePlaceholder.png'


function RecipeForm() {

    const [recipeImage, setRecipeImage] = useState(recipePlaceholder)


    return (
        <div className='m-10 p-10 rounded-lg inter-500 shadow-basic'>
            <div>

                <h1 className='inter-600 text-3xl text-center mb-12'>Create a new Recipe!</h1>

                {/* Top Information */}

                <div className='flex'>
                    <label htmlFor='imageInput'>
                        <div className='border rounded-lg w-max mr-4'>
                            <img src={recipeImage} className='w-28 h-28' />
                        </div>
                    </label>
                    <input id='imageInput' type="file" className='hidden' />
                    <input className='focus:outline-none border rounded-lg p-1 h-max w-[100%]' placeholder='Title' />    
                </div>

                {/* More detailed Information */}
            
                <div className='mt-4'>
                    <textarea className='focus:outline-none border rounded-lg p-0.5 resize-none w-[100%] h-40' placeholder='Recipe Information'></textarea>
                </div>

                <div>
                    
                </div>

            </div>
        </div>
    )
}

export default RecipeForm