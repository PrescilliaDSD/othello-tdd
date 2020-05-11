import React from "react";
import { render } from "@testing-library/react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

const AllTheProviders = ({ children }) => {
  return <DndProvider backend={Backend}>{children}</DndProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
