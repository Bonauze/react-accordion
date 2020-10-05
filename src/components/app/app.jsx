import React from 'react';

import './app.css';

import Accordion from '../accordion/accordion.jsx';

const DATA = [
  {
    id: 1,
    label: 'Lorem ipsum dolor sit amet.',
    getContent: () => {
      return (
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut debitis, dolore, eveniet facilis illum ipsam, iste quasi quisquam sint sunt totam voluptate voluptatem voluptatibus voluptatum. Asperiores, atque aut beatae delectus eius eos hic, ipsa nam numquam odio officia temporibus voluptate. Aliquam at saepe sed sequi tenetur. Accusantium dolor doloremque eaque esse ipsam quae qui quidem! Accusantium deleniti, doloremque fugiat harum impedit maxime quae quis velit? Aperiam blanditiis dolorem esse ex excepturi expedita illo incidunt ipsa minima molestias nisi nostrum quos rerum, sunt tempore totam ut. Ab aliquid at consequuntur deserunt dolorum, eos ipsa obcaecati, perspiciatis ratione tempore unde ut.</p>
      );
    },
  },
  {
    id: 2,
    label: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    getContent: () => {
      return (
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut debitis, dolore, eveniet facilis illum ipsam, iste quasi quisquam sint sunt totam voluptate voluptatem voluptatibus voluptatum. Asperiores, atque aut beatae delectus eius eos hic, ipsa nam numquam odio officia temporibus voluptate. Aliquam at saepe sed sequi tenetur. Accusantium dolor doloremque eaque esse ipsam quae qui quidem! Accusantium deleniti, doloremque fugiat harum impedit maxime quae quis velit? Aperiam blanditiis dolorem esse ex excepturi expedita illo incidunt ipsa minima molestias nisi nostrum quos rerum, sunt tempore totam ut. Ab aliquid at consequuntur deserunt dolorum, eos ipsa obcaecati, perspiciatis ratione tempore unde ut.</p>
      );
    },
    content: '',
  },
  {
    id: 3,
    label: 'Lorem ipsum dolor sit amet.',
    content: '',
    isOpen: true,
    getContent: () => {
      return (
        <React.Fragment>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dicta labore nihil quasi. Deleniti ea, harum iure nisi non pariatur.</p>
        </React.Fragment>
      );
    },
  },
  {
    id: 4,
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

const App = () => {
  return (
    <Accordion>
      {DATA.map(({ id, label, getContent, isOpen}) => {
        return <Accordion.Card key={id} label={label} content={getContent()} isOpen={isOpen} />
      })}
    </Accordion>
  );
};

export default App;
