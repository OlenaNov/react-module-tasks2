import { RecipeList } from 'components/RecipeList/RecipeList';
import recipes from '../recipes.json';
import { PaymentWidget } from './PaymentWidget/PaymentWidget';


export const App = () => {
  return (
    <>
      {/* <RecipeList recipes={recipes}/> */}
      <PaymentWidget />
    </>
  );
};
