import { Container, Header, Grid } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, searchedQuery }) => {
  return (
    <Container>
      
      <Grid columns={4} doubling>
        {recipes &&
          recipes.map((recipe) => (
            <Grid.Column
              style={{
                height: "350px",
                width: "350px",
              }}
              key={recipe.id} 
            >
              <RecipeListItem style={{ height: "450px" }} recipe={recipe} />
            </Grid.Column>
          ))}
      </Grid>
    </Container>
  );
};

export default RecipeList;
