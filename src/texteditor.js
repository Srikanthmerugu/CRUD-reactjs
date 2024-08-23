import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Optional CSS for styles

const MyEditor = () => {
  const [value, setValue] = useState('');

  const handleEditorChange = (content, delta, source, editor) => {
    setValue(editor.getHTML()); // Set HTML content as state
  };

  const handleSubmit = () => {
    // Replace this with your actual API call to send `value` to the backend
    console.log('Submitting content:', value);
    // Example fetch API call to send `value` to the backend
    fetch('http://localhost:5000/blog/editor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: value }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Optionally, clear the editor content after successful submission
        setValue('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={handleEditorChange}
      />
      <div style={{ marginTop: '20px' }}>
        <h3>Typed Content:</h3>
        {value && (
          <div>
            {value.split('<p>').map((item, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: `<p>${item}` }} />
            ))}
          </div>
        )}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default MyEditor;
