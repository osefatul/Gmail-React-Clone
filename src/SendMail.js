import "./SendMail.css";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";
function SendMail() {
  const dispatch = useDispatch();

  //we are using a react hook to modify Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);

    //go to the emails collection on the DB. everytime we submit we push the data to DB
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //Once we send the mail to DB then we should close the form

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail_close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          // name= "to" using for reference to the element.
          //required: true the input value must be Required otherwise will not be submitted.
          //required:"must be submitted": if there was no value this message will be shown
          {...register("to", { required: true })}
          placeholder="To"
          type="text"
        />

        {/*This is one way of writing Error message for required field */}
        <ErrorMessage
          errors={errors}
          name="to"
          message={<p className="error_message">To is required</p>}
        />

        <input
          //this indiacted that the there must be a value before submission
          {...register("subject", { required: true })}
          placeholder="Subject"
          type="text"
        />

        {/*This is another way of writing Error message for required field */}

        {errors.subject && (
          <p className="error_message"> Subject is required </p>
        )}
        <input
          {...register("message", { required: true })}
          placeholder="Message..."
          type="text"
          className="sendMail_message"
        />

        {errors.message && (
          <p className="error_message"> Message is required </p>
        )}

        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
