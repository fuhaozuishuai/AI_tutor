import React, { useState } from 'react';
import { Container, Form, Button, ListGroup, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import CourseDataService from '../services/course.service';

function TakeCourse() {
    const { courseInfo } = useAuth(); // Get courseId and studentId from context
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]); // Store chat history
    const [errorMessage, setErrorMessage] = useState(''); // Store error message

    // Handle sending a message to the AI and updating the chat history
    const handleSendMessage = (e) => {
        e.preventDefault();

        if (!message.trim()) {
            setErrorMessage('Please enter a message.');
            return;
        }

        // Send message to AI and update chat history with both user message and AI response
        CourseDataService.interactWithChatGPT(courseInfo.studentId, courseInfo.courseId, message)
            .then(response => {
                setChatHistory([...chatHistory, { message, response: response.data }]); // Append message and response
                setMessage(''); // Clear input
                setErrorMessage(''); // Clear any previous error messages
            })
            .catch(error => {
                setErrorMessage(error.response?.data || 'Failed to interact with AI, please try again.');
            });
    };

    return (
        <Container>
            <h2 className="text-center mt-4 mb-4">Interactive Course Chat</h2>

            {/* Display error message if any */}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            {/* Display chat history */}
            <ListGroup className="mb-4">
                {chatHistory.map((entry, index) => (
                    <ListGroup.Item key={index}>
                        <p><strong>You:</strong> {entry.message}</p>
                        <p><strong>AI:</strong> {entry.response}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            {/* Form to send a new message */}
            <Form onSubmit={handleSendMessage}>
                <Form.Group controlId="userMessage">
                    <Form.Label>Type your message:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ask a question..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">Send</Button>
            </Form>
        </Container>
    );
}

export default TakeCourse;
