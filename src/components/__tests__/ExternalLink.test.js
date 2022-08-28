import React from "react";
import { render } from "@testing-library/react";
import ExternalLink from "../ExternalLink";

it("Component renders link to /somewhere", () => {
  const { getByText } = render(
    <ExternalLink href="/somewhere" text="Somewhere" />
  );
  expect(getByText("Somewhere").innerHTML).toEqual("Somewhere");

  expect(document.querySelector("a").getAttribute("href")).toBe("/somewhere");
});
