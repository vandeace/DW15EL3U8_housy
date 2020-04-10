import React, { Component } from 'react';
import { Form, DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'semantic-ui-react';

export default class Addform extends Component {
  state = {
    city: [
      {
        key: 'Pekanbaru',
        text: 'Pekanbaru',
        value: 'Pekanbaru',
      },
      {
        key: 'Padang',
        text: 'Padang',
        value: 'Padang',
      },
      {
        key: 'Jambi',
        text: 'Jambi',
        value: 'Jambi',
      },
    ],
  };

  render() {
    return (
      <div>
        <div>
          <Form>
            <h1>Add Property</h1>
            <Form.Group>
              <Form.Group controlId='NameProperty'>
                <Form.Label>Name Property</Form.Label>
                <Form.Control type='text' placeholder='' />
              </Form.Group>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <div
                  role='listbox'
                  aria-expanded='false'
                  class='ui fluid selection dropdown'
                  tabindex='0'
                >
                  <div
                    class='default text'
                    role='alert'
                    aria-live='polite'
                    aria-atomic='true'
                  >
                    Select Friend
                  </div>
                  <i aria-hidden='true' class='dropdown icon'></i>
                  <div class='menu transition'></div>
                </div>
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Address</Form.Label>
                <Form.Control as='textarea' rows='3' />
              </Form.Group>
              <Form.Group controlId='Price'>
                <Form.Label>Price</Form.Label>
                <Form.Control type='text' placeholder='' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Type Of Rent</Form.Label>
                <DropdownButton>
                  <Dropdown.Item>Year</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
              <Form.Group>
                <Form.Label>Amenities</Form.Label>
                <Form.Check type='checkbox' label='Furnished' />
                <Form.Check type='checkbox' label='Pet Allowed' />
                <Form.Check type='checkbox' label='Shared Acomodation' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Bedroom</Form.Label>
                <DropdownButton>
                  <Dropdown.Item>1</Dropdown.Item>
                  <Dropdown.Item>2</Dropdown.Item>
                  <Dropdown.Item>3</Dropdown.Item>
                  <Dropdown.Item>4</Dropdown.Item>
                  <Dropdown.Item>5</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
              <Form.Group>
                <Form.Label>Bathroom</Form.Label>
                <DropdownButton>
                  <Dropdown.Item>1</Dropdown.Item>
                  <Dropdown.Item>2</Dropdown.Item>
                  <Dropdown.Item>3</Dropdown.Item>
                  <Dropdown.Item>4</Dropdown.Item>
                  <Dropdown.Item>5</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}
