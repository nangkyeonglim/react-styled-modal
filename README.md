# React-styled-modal

This modal is simple react-styled-modal.

- Typescript support
- Using styled-components
- Close modal when you click backdrop or key down escape('esc')

## Installation

To install, you can use npm or yarn:

```
$ npm install @fine1012/react-modal
$ yarn add @fine1012/react-modal
```

## Usage

Here is a simple example of @fine1012/react-modal.

```javascript
import React, { useState } from 'react';
import { Modal } from '@fine1012/react-modal';

const App = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <button onClick={onOpenModal}>modal Trigger</button>
      <Modal open={open} onCloseModal={onCloseModal}>
        <h1>Simple react-modal</h1>
        <p>Multiple children are possible.</p>
      </Modal>
    </>
  );
};

export default App;
```

## Props

- open(boolean) : status of modal(open/close)
- onCloseModal(() => void) : handler called onClick of modal Backdrop
- children(React.ReactNode) : content of modal
