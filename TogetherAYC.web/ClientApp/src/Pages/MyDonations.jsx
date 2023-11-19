import { useAuth } from "../AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import DonationRow from "../DonationRow";
import { Link } from 'react-router-dom';

const MyDonations = () => {
    const { user } = useAuth
    const [MyDonations, setMyDonations] = useState([]);

    const getMyDonations = async () => {

        const { data } = await axios.get('/api/user/mydonations');
        setMyDonations(data);
    }
    useEffect(() => {
        getMyDonations();
    }, []);


    return (
        <div>
            <div className="container" style={{ marginTop: 80 }}>
                <main role="main" className="pb-3">
                    <div style={{ marginTop: 20 }}>
                        <div className="row">
                            <div className="col-md-12 d-grid gap-2 d-md-block btn-group">
                            <Link to="/donate" className="btn btn-dark btn-block col-6 "style={{backgroundColor:'#554e2b'}}> Donate </Link> 
                            <Link to="/submitmitzvah" className="btn btn-dark btn-block col-6 "style={{backgroundColor:'#554e2b'}}> Submit a Mitzvah </Link>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: 20 }}>
                            <table className="table table-hover table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Donation</th>
                                        <th>In Merit of</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {MyDonations.length > 0 &&
                                        MyDonations.map((d) =>
                                            <DonationRow
                                                key={d.id}
                                                donation={d}
                                            />
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default MyDonations;