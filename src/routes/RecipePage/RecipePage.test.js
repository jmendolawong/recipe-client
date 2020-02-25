import React from 'react';
import { mount } from 'enzyme';

import Recipe from './RecipePage';

// ensure you're resetting modules before each test
beforeEach(() => {
  jest.resetModules();
});

// dummy recipe list
const recipeContext = {
  recipes: [
    {
      id: 1,
      name: "Apple Pie",
      note: "Apple pie is deliciousssss",
      url: "https://www.bbcgoodfood.com/recipes/collection/apple"
    }
  ]
}


// Takes the context data we want to test, or uses defaults
const getRecipeWithContext = (context = recipeContext) => {

  // Will then mock the RecipeContext module being used in the RecipePage component
  jest.doMock('../../RecipeContext', () => {
    return {
      RecipeContext: {
        Consumer: (props) => props.children(context)
      }
    }
  });

  // need to re-require after calling jest.doMock.
  // return the updated RecipePage module that now includes the mocked context
  return require('./RecipePage').Recipe;
};

describe('<Recipe />', () => {
  it('should return default list of languages', () => {
    const Recipe = getRecipeWithContext();
    const wrapper = mount(<Recipe match={{ params: { recipeId: "1" } }} />);
    expect(wrapper).toHaveBeenCalled();
  });
});
