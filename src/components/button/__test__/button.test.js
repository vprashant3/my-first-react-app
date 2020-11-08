import React from 'react';
import ReactDOM from 'react-dom';
import Button  from './../button';
import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button/>, div)
});

it("render button correctly", () => {
   const {getByTestId} = render(<Button label="testLabel"></Button>);
   expect(getByTestId('button')).toHaveTextContent("testLabel");
});

it("render button correctly", () => {
    const {getByTestId} = render(<Button label="saveButton"></Button>);
    expect(getByTestId('button')).toHaveTextContent("saveButton");
 });

 it("matches snapshot", () => {
    const tree = renderer.create(<Button label="snapshotButton1"></Button>);
    expect(tree).toMatchSnapshot();

 });