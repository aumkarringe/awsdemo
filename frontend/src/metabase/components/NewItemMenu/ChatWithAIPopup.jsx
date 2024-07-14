// ChatWithAIPopup.jsx

import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PopupContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333333;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: normal;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.cancel ? '#dc3545' : '#007bff')};
  color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.cancel ? '#c82333' : '#0056b3')};
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 5px;
`;

const ChatWithAIPopup = ({ onClose }) => {
  const [question, setQuestion] = useState('');
  const [selectedDatabase, setSelectedDatabase] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [showVisualization, setShowVisualization] = useState(false);

  const handleSendRequest = async () => {
    // Validate inputs
    if (!question || !selectedDatabase || (!showTable && !showVisualization)) {
      alert('Please fill in all fields and select at least one view option.');
      return;
    }

    try {
      // Example Axios POST request to send data to API
      const response = await axios.post('/api/chat-with-ai', {
        question,
        database: selectedDatabase,
        showTable,
        showVisualization,
      });

      // Handle success (e.g., close popup)
      onClose();
    } catch (error) {
      console.error('Error sending request:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <PopupContainer>
      <Title>Chat with AI</Title>
      <form onSubmit={handleSendRequest}>
        <FormGroup>
          <Label>Enter your question:</Label>
          <Input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Select database:</Label>
          <Select
            value={selectedDatabase}
            onChange={(e) => setSelectedDatabase(e.target.value)}
            required
          >
            <option value="">Select a database</option>
            {/* Populate dropdown options dynamically from backend */}
            <option value="database1">Database 1</option>
            <option value="database2">Database 2</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={showTable}
              onChange={(e) => setShowTable(e.target.checked)}
            />{' '}
            Table
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={showVisualization}
              onChange={(e) => setShowVisualization(e.target.checked)}
            />{' '}
            Visualization
          </CheckboxLabel>
        </FormGroup>
        <FormGroup>
          <Button type="submit">View Results</Button>
          <Button type="button" cancel onClick={onClose}>
            Cancel
          </Button>
        </FormGroup>
      </form>
    </PopupContainer>
  );
};

export default ChatWithAIPopup;
