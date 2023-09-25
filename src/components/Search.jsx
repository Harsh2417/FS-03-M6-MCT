import { useState } from "react";
import { Grid, Form, Input } from "semantic-ui-react";

const Search = ({ setSearchedQuery }) => {
  const [value, setValue] = useState("");

  const onFormSubmit = () => {
    setSearchedQuery(value);
    setValue("");
  };

  return (
    <Grid column={2} textAlign="center" className="search-box">
      <Grid.Column>
        <h2 className="search-heading" style={{ color: "black", fontStyle: "italic", fontSize:"25px" }}>
        Search Recipes With {""}
          <span style={{ color: "red", fontStyle: "italic", fontSize:"25px" }}>Food2Fork</span>
        </h2>

        <Form onSubmit={onFormSubmit}>
          <Input
            placeholder="Chicken,Onion,carrots"
            action={{ icon: "search", color: "blue" }}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Search;
