import React, { useState, useEffect } from 'react';

const DisplayContent = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Function to fetch data from backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/blog/editor');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data from server:', data);
        setContent(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function to fetch data when component mounts
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return (
    <div>
      <h2>Editor Content from Backend:</h2>
      {content.map((item, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
      ))}
    </div>
  );
};

export default DisplayContent;
