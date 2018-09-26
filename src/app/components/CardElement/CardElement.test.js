import React from "react";
import { shallow } from "enzyme";
import CardElement from ".";

describe("Card Element test", () => {
    const props = {
        data: [
            "https://images.dog.ceo/breeds/groenendael/n02105056_4591.jpg",
            "https://images.dog.ceo/breeds/stbernard/n02109525_12155.jpg",
            "https://images.dog.ceo/breeds/poodle-toy/n02113624_2258.jpg",
            "https://images.dog.ceo/breeds/husky/n02110185_11287.jpg",
            "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_4333.jpg",
            "https://images.dog.ceo/breeds/airedale/n02096051_3338.jpg",
            "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_2072.jpg",
            "https://images.dog.ceo/breeds/redbone/n02090379_4950.jpg",
            "https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_9913.jpg",
            "https://images.dog.ceo/breeds/shiba/shiba-5.jpg",
            "https://images.dog.ceo/breeds/hound-english/n02089973_1066.jpg",
            "https://images.dog.ceo/breeds/redbone/n02090379_4423.jpg"
        ]
    };

    it("Renders list of images", () => {
        const wrapper = shallow(<CardElement data={props.data} />);

        expect(wrapper.find("img")).toBeDefined();
    });

    it(`Renders list of ${props.data.length} images`, () => {
        const wrapper = shallow(<CardElement data={props.data} />);

        expect(wrapper.find("img")).toHaveLength(props.data.length);
    });
});
