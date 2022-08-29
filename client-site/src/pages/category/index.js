import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../../component/common";
import "bootstrap/dist/css/bootstrap.min.css";

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [name, setName] = useState("");
  const [isParent, setIsParent] = useState(false);

  const addCategory = () => {
    console.log(name, isParent);
  };
  useEffect(() => {
    axios
      .get(`${SERVER_URL}/api/category`)
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>

      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
      </div>

      <div className="categoryForm">
        <form>
          <h3>Category Form</h3>
          <input
            type="text"
            className="categoryName col-sm-6"
            value={name}
            name="categoryName"
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Category Name ... "
          />
          True
          <input
            type="radio"
            name="is_parent"
            onClick={() => setIsParent(true)}
          />
          false
          <input
            type="radio"
            name="is_parent"
            onClick={() => setIsParent(false)}
          />
          <br />
          <button className="btn btn-sm btn-primary" onClick={addCategory}>
            <i className="fa fa-plus"></i>
            Add Category
          </button>
        </form>
      </div>

      <h3>Category List</h3>
      <div className="=row">
        {categoryList.map((category, index) => {
          return (
            <div className="col-md-3" key={index}>
              <div className="card">
                <div className="card-header">
                  <h4>{category.name}</h4>
                </div>

                <div className="card-body">
                  <span>Slug : {category.slug} </span>
                  <br/>
                  <span>
                     Is Parent :{" "}
                    {category.is_parent === true ? "Parent" : "Child"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Category;
