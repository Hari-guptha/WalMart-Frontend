import React, { useState } from 'react';
import '../assets/css/DropFile.css'
import upload from '../assets/img/file.png'
import folder from '../assets/img/folder.png'


function FileUploadComponent() {
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div
                className="dropbox"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                {uploadedFile ? (
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img style={{ width: "50px" }} src={folder} alt="img" />
                        </div>
                        <p>File uploaded: {uploadedFile.name}</p>
                    </div>
                ) : (
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img style={{ width: "50px" }} src={upload} alt="img" />
                        </div>
                        <p>Drop your file here or</p>
                        <input style={{ margin: "10px 0px 10px 20%" }} type="file" onChange={handleFileUpload} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default FileUploadComponent;
