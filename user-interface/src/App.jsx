import { useState } from "react";
import "./App.css";

import { Contract, BrowserProvider } from 'ethers'
import { CertModuleCert } from './deployed_addresses.json'
import { abi } from './Cert.json'

function App() {
  const [output, setOutput] = useState('')
  const [queryID, setQueryID] = useState(0)

  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    course: "",
    grade: "",
    date: "",
  });

  const provider = new BrowserProvider(window.ethereum);

  async function connectMetaMask() {
    const signer = await provider.getSigner();
    alert(`Successfully Connected ${signer.address}`);
}

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleIssue = async () => {
    console.log(formData);

    const signer = await provider.getSigner()
    const instance = new Contract(CertModuleCert, abi, signer)

    const trx = await instance.issue(formData.id, formData.name, formData.course, formData.grade, formData.date)

    alert(`Issue Succesfull with hash ${trx.hash}`);
  };

  const handleRetrive = async () => {
    console.log(queryID);

    const instance = new Contract(CertModuleCert, abi, provider)

    const result = await instance.Certificates(parseInt(queryID))
    if (result) {
      console.log(result)
      setOutput(
        `Name: ${result[0]}, Course: ${result[1]}, Grade: ${result[2]}, Date: ${result[3]}`
      )
    }
  };

  return (
    <>
      <button onClick={ connectMetaMask }> Connect MetaMask </button> <br /><br />

      <input placeholder='Enter Certificate ID' type='text' name='id' onChange={handleChange} /> <br />
      <input  placeholder='Enter Candidate Name' type='text' name='name' onChange={handleChange} /> <br />
      <input  placeholder='Enter Course Name' type='text' name='course' onChange={handleChange} /> <br />
      <input  placeholder='Enter Grade' type='text' name='grade' onChange={handleChange} /> <br />
      <input  placeholder='Enter Issue Date' type='text' name='date' onChange={handleChange} /> <br />

      <button onClick={handleIssue}> Issue </button><br /><br />

      <input placeholder='Enter Certificate ID' type='text' name='queryID' onChange={(e) => setQueryID(e.target.value)} /> <br />

      <button onClick={handleRetrive}> Retrive </button>
      <p>{output}</p>
    </>
  );
}

export default App;