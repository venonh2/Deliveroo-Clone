import { render } from "@testing-library/react-native";

import { Home } from "../../screens/Home";

describe("Home screen", () => {
  it("it should render the home screen", () => {
    render(<Home />);
  });

  it("it should render the seach input with length restriction", () => {
    const { getByTestId } = render(<Home />);
    const searchInput = getByTestId("search-home-input-id");

    expect(searchInput.props.maxLength).toBeLessThanOrEqual(42);
  });
});
