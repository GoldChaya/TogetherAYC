import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SubmitMitzvah = () =>{
        const navigate = useNavigate();
    
        const [formData, setFormData] = useState({
            description: '',
            merit: ''
        });
    
        const onTextChange = e => {
            const copy = { ...formData };
            copy[e.target.name] = e.target.value;
            setFormData(copy);
        }
    
        const onFormSubmit = async e => {
            e.preventDefault();
            await axios.post('/api/user/donate', formData);
            navigate('/mydonations');
        }
    
        return (
            <div className="row" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
                <div className="col-md-6 offset-md-3 bg-light p-4 rounded shadow">
                    <h3>Thank you for your generosity!</h3>
                    <form onSubmit={onFormSubmit}>
                        <input onChange={onTextChange} value={formData.description} type="text" name="description" placeholder="Mitzvah" className="form-control" />
                        <br />
                        <input onChange={onTextChange} value={formData.merit} type="text" name="merit" placeholder="In merit of" className="form-control" />
                        <br />
                        <button className="btn btn-dark"style={{backgroundColor:'#554e2b'}}>Submit</button>
                    </form>
                </div>
            </div>
        );
    
}
export default SubmitMitzvah;