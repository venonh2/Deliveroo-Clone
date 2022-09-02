import React from "react";

import { render } from "@testing-library/react-native";

import { CategoryCard } from ".";

describe("CategoryCard component", () => {
  const { getByTestId } = render(
    <CategoryCard imgURi="https://asian-image.com" title="Asian" />
  );

  /* it("should have an title", () => {
    const titleComponent = getByTestId("category-title-testId");
    expect(titleComponent.props.chilren[0]).toBeTruthy();
  }); */

  it("should have an image url", () => {
    const imageComponent = getByTestId("category-image-testId");
    expect(imageComponent.props.source.uri).toBeTruthy();
  });
});
