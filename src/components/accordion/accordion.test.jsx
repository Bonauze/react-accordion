import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import styles from './accordion.css';

import Accordion from './accordion.jsx';

const DATA = [
  {
    id: 1,
    label: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    getContent: () => {
      return (
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut debitis, dolore, eveniet facilis illum ipsam, iste quasi quisquam sint sunt totam voluptate voluptatem voluptatibus voluptatum. Asperiores, atque aut beatae delectus eius eos hic, ipsa nam numquam odio officia temporibus voluptate. Aliquam at saepe sed sequi tenetur. Accusantium dolor doloremque eaque esse ipsam quae qui quidem! Accusantium deleniti, doloremque fugiat harum impedit maxime quae quis velit? Aperiam blanditiis dolorem esse ex excepturi expedita illo incidunt ipsa minima molestias nisi nostrum quos rerum, sunt tempore totam ut. Ab aliquid at consequuntur deserunt dolorum, eos ipsa obcaecati, perspiciatis ratione tempore unde ut.</p>
      );
    },
    content: '',
  },
  {
    id: 2,
    label: 'Lorem ipsum.',
    isOpen: true,
    getContent: () => {
      return (
        <React.Fragment>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum dolorem, earum, error illo ipsum maiores nam nesciunt nobis quasi quidem saepe tempora. Animi consequatur exercitationem odio perspiciatis qui unde?</p>
        </React.Fragment>
      );
    },
  },
];

describe('Accordion', () => {
  let wrapper;

  beforeEach(() => {
    const { container } = render(
      <Accordion>
        {DATA.map(({ id, label, getContent, isOpen}) => {
          return <Accordion.Card key={id} label={label} content={getContent()} isOpen={isOpen} />
        })}
      </Accordion>
    );

    wrapper = container;
  });

  it('Accordion renders correctly', () => {
    expect(wrapper.firstChild).toMatchSnapshot();
  });

  it('Rendering only 2 items', () => {
    expect(wrapper.querySelectorAll(`.${styles.item}`).length).toBe(2);
  });

  it('Opens/closes and adds class for the icon element', () => {
    const buttons = wrapper.querySelectorAll((`.${styles.button}`));
    const firstButtonIcon = buttons[0].querySelector(`.${styles.buttonIcon}`);
    const secondButtonIcon = buttons[1].querySelector(`.${styles.buttonIcon}`);

    expect(firstButtonIcon.className.includes(styles.rotated)).toBe(false);
    expect(secondButtonIcon.className.includes(styles.rotated)).toBe(true);
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[1]);
    expect(firstButtonIcon.className.includes(styles.rotated)).toBe(true);
    expect(secondButtonIcon.className.includes(styles.rotated)).toBe(true);
  });
});
