import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";

function App() {
  const [formdata, setFormdata] = useState({
    title: "",
    description: "",
    url: "",
    rating: 0,
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      url: "",
      rating: 0,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      url: Yup.string().url("Invalid URL").required("URL is required"),
      rating: Yup.number().required("Rating is required").min(1, "Rating must be at least 1").max(10, "Rating must be at most 10"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Movie Name</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            id="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title && <div>{formik.errors.title}</div>}

          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="description"
            name="description"
            id="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && <div>{formik.errors.description}</div>}

          <label htmlFor="url">Image URL</label>
          <input
            type="text"
            placeholder="url"
            name="url"
            id="url"
            onChange={formik.handleChange}
            value={formik.values.url}
          />
          {formik.errors.url && <div>{formik.errors.url}</div>}

          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            placeholder="rating"
            name="rating"
            id="rating"
            onChange={formik.handleChange}
            value={formik.values.rating}
          />
          {formik.errors.rating && <div>{formik.errors.rating}</div>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;