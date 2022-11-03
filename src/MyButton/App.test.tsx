import { render } from "@testing-library/react";

import Button from "./MyButton";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button>hello</Button>);
  });
});