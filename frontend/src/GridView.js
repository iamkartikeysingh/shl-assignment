import React, { useState, useEffect } from 'react';
import './GridView.css';
import axios from 'axios';
import { BsFillBriefcaseFill, BsFillLaptopFill, BsLaptop, BsFillBookmarkFill, BsDatabase, BsFillBuildingFill } from "react-icons/bs";

const GridView = () => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/');  
            setData(response.data); 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.Project.Technologies.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    <div className="grid-container">
      {filteredData.map((item) => (
        <div
          key={item.id}
          className="grid-item"
          onClick={() => handleItemClick(item)}
        >
    <BsFillBriefcaseFill />  Title: <b>{item.Project.Title}</b> <br />
    <BsFillLaptopFill />     Project_Technologies: <b>{item.Project.Technologies}</b> <br />
    <BsLaptop />      Technical_Skillset_Backend: <b>{item.Technical_Skillset.Backend}</b> <br />
    <BsFillBookmarkFill />      Technical_Skillset_Frontend: <b>{item.Technical_Skillset.Frontend}</b> <br />
    <BsDatabase />      Technical_Skillset_Database: <b>{item.Technical_Skillset.Databases}</b> <br />
    <BsFillBuildingFill />      Technical_Skillset_Infrastructure: <b>{item.Technical_Skillset.Infrastructre}</b> <br />
        </div>
      ))}

      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>
            <BsFillBriefcaseFill />  Title: <b>{selectedItem.Project.Title}</b> <br />
            <BsFillLaptopFill />    Project_Technologies: <b>{selectedItem.Project.Technologies}</b> <br />
            <BsLaptop />    Technical_Skillset_Backend: <b>{selectedItem.Technical_Skillset.Backend}</b> <br />
            <BsFillBookmarkFill />    Technical_Skillset_Frontend: <b>{selectedItem.Technical_Skillset.Frontend}</b> <br />
            <BsDatabase />    Technical_Skillset_Database: <b>{selectedItem.Technical_Skillset.Databases}</b> <br />
            <BsFillBuildingFill />    Technical_Skillset_Infrastructure: <b>{selectedItem.Technical_Skillset.Infrastructre}</b> <br /></p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default GridView;
