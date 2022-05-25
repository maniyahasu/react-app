import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
// import "../../styles.module.css";

const ContactDetail = (props) => {
  const [loader, setLoader] = useState(false);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    // fetchPostData();
  }, []);

  const fetchPostData = () => {
    setLoader(true);
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((resp) => resp.json())
      .then((json) => {
        setLoader(false);
        setPostData(json);
      });
  };

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom className="text-center">
        Contact Detail
      </Typography>
      {/* <button type="button" onClick={fetchPostData}>
        Fetch Data
      </button> */}
      <div className="post-data-wrapper">
        {loader ? (
          <div className="loader">Loading...</div>
        ) : (
          <div className="post-data">
            <table
              align="center"
              cellPadding="10"
              cellSpacing="10"
              style={{ border: "1px solid" }}
            >
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Thumbnail</td>
                </tr>
              </thead>
              <tbody>
                {postData.map((el) => (
                  <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>
                      <img src={el.thumbnailUrl} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ContactDetail;
