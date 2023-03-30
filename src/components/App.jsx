import { RecipeList } from 'components/RecipeList/RecipeList';
import recipes from '../recipes.json';


export const App = () => {
  return (
    <>
      <RecipeList recipes={recipes}/>
    </>
  );
};
