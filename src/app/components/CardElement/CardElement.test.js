import React from "react";
import { shallow } from "enzyme";
import CardElement from ".";

describe("Card Element test", () => {
    const props = {
        data: ["https://images.dog.ceo/breeds/groenendael/n02105056_4591.jpg"]
    };

    const wrapper = shallow(<CardElement data={props.data} />);

    it("Renders images", () => {
        expect(wrapper.find("img")).toBeDefined();
    });
});
