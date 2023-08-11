import './App.css';
import About from './about';
import { useRef, useState, useEffect } from 'react';
import './index.css';
import { uploadFile } from './services/api';
import Footer from './Footer';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
  }
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await uploadFile(data);
        console.log(response);
        setResult(response.path);
      }
    }
    getImage();
  }, [file]);
  console.log("Started");
  return (
    <div className="App">
      <About />
      <div className='upload'>
        <h1>Upload your file</h1>
        <p>File sharing system by RTR!!</p>
        <button type='submit' onClick={() => { onUploadClick() }}>submit</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br></br>
        <a href={result} target='_blank'>{result}</a>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
