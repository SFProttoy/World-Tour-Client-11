import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddTour = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://dreadful-cemetery-54829.herokuapp.com/offers", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("A new tour added successsfully");
          reset();
        }
      });
  };
  return (
    <div>
      <h1>Add A New Tour</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="size"
          defaultValue=""
          placeholder="name"
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="size"
          defaultValue=""
          placeholder="price"
          {...register("price", { required: true })}
        />
        <br />
        <textarea
          className="size"
          placeholder="description"
          defaultValue=""
          {...register("description", { required: true })}
        />
        <br />
        <input
          className="size"
          placeholder="image url"
          defaultValue=""
          {...register("img")}
        />
        <br />
        <input
          className="size"
          placeholder="packages"
          defaultValue=""
          {...register("packages", { required: true })}
        />
        <br />

        <input className="order-btn" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTour;
